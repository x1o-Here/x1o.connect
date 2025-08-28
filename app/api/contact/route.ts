import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
    const filePath = path.join(process.cwd(), "public", "vcards", "muthula-alwis.vcf");
    const vcf = await fs.readFile(filePath, "utf-8");

    return new NextResponse(vcf, {
        headers: {
            "Content-Type": "text/vcard; charset=utf-8",
            "Content-Disposition": "inline; filename=muthula-alwis.vcf",
        },
    });
}
'use client'

import { Nfc } from "lucide-react";
import { useState } from "react";
import QRCode from "react-qr-code";
import { Button } from "./ui/button";

export default function Card() {
    const [showQR, setShowQR] = useState<boolean>(false);
    const url = "https://x1o-connect.vercel.app/muthula-alwis";

    const handleWebShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Muthula Alwis - x1o",
                    text: "Connect with me via x1o.Connect",
                    url: url,
                });
                console.log("Shared successfully");
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            navigator.clipboard.writeText(url);
        }
    }

    const handleDoubleTap = () => {
        setShowQR(!showQR);
    }

    return (
        <div className="relative w-full">
            <div 
                className="z-10 aspect-[2/3] w-full rounded-lg bg-[#0c0c0c] shadow-white/5 shadow-md p-4"
                onDoubleClick={handleDoubleTap}
            >
                <div className="w-full h-full rounded-lg flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <Nfc className="size-6 text-white/60 mt-1" />
                        <p className="text-lg text-white/60 font-bold select-none">x1o</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {showQR ? (
                            <div className="w-1/2 aspect-square p-1">
                                <QRCode
                                    value={url}
                                    className="w-full"
                                    bgColor="transparent"
                                    fgColor="#f8f8ff"
                                    level="H"
                                />
                            </div>
                        ) : (
                            <>
                                <p className="text-lg font-medium text-white/60 select-none">Muthula Alwis</p>
                                <p className="text-sm font-light text-white/50 select-none">Chief Executive Officer</p>
                            </>
                            
                        )}
                    </div>
                    <div className="flex flex-col justify-end items-end">
                        <p className="text-[10px] font-light text-white/60 select-none">powered by </p>
                        <p className="text-sm font-light text-white/60 select-none">x1o.Connect</p>
                    </div>
                </div>
            </div>

            <Button className="absolute z-20 -bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-white/10" onClick={handleWebShare}>
                <Nfc className="size-4 text-white" />
                Web Share
            </Button>
        </div>
    )
}
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function ActionBar() {
    return (
        <div className="w-full h-12 relative bg-black shadow-white shadow-2xl rounded-t-md">
            <Button
                size="icon-lg"
                className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-md bg-white text-black"
            >
                <Plus className="size-6" />
            </Button>
        </div>
    )
}
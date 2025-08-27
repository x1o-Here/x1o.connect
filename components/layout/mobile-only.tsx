'use client'

import { useIsMobile } from "@/hooks/useIsMobile";

export default function MobileOnly({ children }: { children: React.ReactNode }) {
    const isMobile = useIsMobile();

    if (!isMobile) {
        return (
            <div className="flex h-screen w-screen items-center justify-center text-center p-6">
                <div className="max-w-md">
                    <h1 className="text-2xl font-bold">Not Supported</h1>
                    <p className="mt-2 text-gray-600">
                        This app is only available on mobile and tablet devices 📱
                    </p>
                </div>
            </div>
        )
    };

    return <>{children}</>;
}
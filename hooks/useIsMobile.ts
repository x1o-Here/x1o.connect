'use client'

import { useEffect, useState } from "react";

export function useIsMobile(MaxWidth = 1024) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < MaxWidth);
        }

        checkDevice()
        window.addEventListener("resize", checkDevice)

        return () => window.removeEventListener("resize", checkDevice)
    }, [MaxWidth])

    return isMobile
}
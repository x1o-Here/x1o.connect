import { Button } from "@/components/ui/button"
import { Linkedin, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import * as profile from "@/data/muthula-alwis.json"

export default function ProfilePage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-1/3">
                <Image
                    src="/silver_surfer.jpeg"
                    alt="Profile Banner"
                    fill
                    objectFit="cover"
                />

                <div className="absolute z-20 bottom-0 left-4 translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-500 flex items-center justify-center overflow-hidden">
                    <Image
                        src="/pf.jpg"
                        alt="Profile Picture"
                        width={112}
                        height={112}
                    />
                </div>
            </div>
            <div className="w-full h-full rounded-tr-lg bg-zinc-900 border-zinc-800 -translate-y-1.5 pt-20 px-4">
                {/* Personal Details */}
                <div className="pb-6">
                    <p className="text-3xl font-bold mb-1 text-white">{profile.name}</p>
                    <p className="text-sm text-white/60">{profile.designation}</p>
                    <p className="text-sm text-white/60">{profile.company}</p>
                </div>

                <div className="pb-2 space-y-4">
                    {/* Social links */}
                    <div className="flex gap-4 mb-4">
                        {Object.entries(profile.socials).map(([key, value]) => (
                            <Button key={key} variant="ghost" size="icon" className="rounded-full" asChild>
                                <Link href={value} target="_blank">
                                    {key === "linkedin" && <Linkedin className="size-6 text-white hover:text-zinc-400 transition" />}
                                    {key === "instagram" && <Instagram className="size-6 text-white hover:text-zinc-400 transition" />}
                                    {key === "twitter" && <Twitter className="size-6 text-white hover:text-zinc-400 transition" />}
                                </Link>
                            </Button>
                        ))}
                    </div>

                    {/* vCard button */}
                    <Button variant="outline" size="lg" className="w-full rounded-lg bg-transparent" asChild>
                        <Link href={profile.vcardUrl} className="text-sm text-white">Share Contact</Link>
                    </Button>
                </div>

                <div className="mt-10">
                    <p className="text-xl font-bold text-white">Actions</p>

                    <div className="mt-4 space-y-4">
                        {/* Email */}
                        <Button variant="outline" size="lg" className="w-full rounded-lg bg-transparent" asChild>
                            <Link href={`mailto:${profile.email}`} className="text-sm text-white">Email Me</Link>
                        </Button>

                        {/* Contact */}
                        <Button variant="outline" size="lg" className="w-full rounded-lg bg-transparent" asChild>
                            <Link href={`tel:${profile.contact}`} className="text-sm text-white">Contact Me</Link>
                        </Button>

                        {/* Whatsapp */}
                        <Button variant="outline" size="lg" className="w-full rounded-lg bg-transparent" asChild>
                            <Link 
                                href={`https://wa.me/${profile.whatsapp}`} 
                                className="text-sm text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >WhatsApp Me</Link>
                        </Button>

                        {/* Cal.com */}
                        <Button variant="outline" size="lg" className="w-full rounded-lg bg-transparent" asChild>
                            <Link 
                                href={profile.cal} 
                                className="text-sm text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Cal.com</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

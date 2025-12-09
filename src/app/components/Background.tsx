// components/Background.tsx
"use client"

import { useEffect, useState } from "react"

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
}

export default function Background() {
    const [stars, setStars] = useState<Star[]>([])

    useEffect(() => {
        // Generate random stars for background
        const generatedStars = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 2,
        }))
        setStars(generatedStars)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Animated star field background */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        animation: `star-twinkle 3s ease-in-out infinite`,
                        animationDelay: `${star.delay}s`,
                        opacity: 0.6,
                    }}
                />
            ))}

            {/* Gradient orb effects - Paleta Mística */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-40 left-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-20" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20" />
            </div>
        </div>
    )
}
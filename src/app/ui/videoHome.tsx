import { useState } from "react";
import { Button } from "../ui/button";

export function Video() {

    const videos = [
        "/home/streetTalking.mp4",
        "/home/takingHands.mp4",
        "/home/folders.mp4",
        "/home/working.mp4",
        "/home/writing.mp4",
    ];
    const [currentVideo, setCurrentVideo] = useState(0);
    const [fade, setFade] = useState(true);

    const handleVideoEnd = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentVideo((prev) => (prev + 1 < videos.length ? prev + 1 : 0));
            setFade(true);
        }, 1000);
    };
    return (
        <>
            <div className="absolute inset-0 w-full h-full -z-10 opacity-30">

                <video className="absolute inset-0 top-0 left-0 w-full h-full -z-10  object-cover opacity-40 filter grayscale"
                    width="1920"
                    height="1080"
                    autoPlay
                    muted
                    playsInline
                    loop={false}
                    onEnded={handleVideoEnd}

                    style={{
                        background: "background-video",
                        pointerEvents: "none",
                        border: "none",
                        outline: "none",
                        display: "block",
                        userSelect: "none",
                        opacity: fade ? 1 : 0,
                        transition: "opacity 0.9s ease-in-out",
                    }}
                    key={currentVideo}
                >
                    <source src={videos[currentVideo]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
}
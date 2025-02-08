import { Button } from "../ui/button";

export function Video() {
    return (
        <>

            <video width="1920" height="1080" autoPlay controls preload="none" muted
                playsInline
                loop
                style={{
                    pointerEvents: "none", // Evita interacción con el video
                    border: "none",
                    outline: "none",
                    display: "block", // Evita espacios no deseados
                    userSelect: "none" // Evita selección accidental
                }}>
                <source src="/home/46283-446732342_small.mp4" type="video/mp4" />
                {/* <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        /> */}
                Your browser does not support the video tag.
            </video>
            <Button children="Enia" />
        </>
    )
}
import { useEffect, useRef } from "react";
import View360, { CubemapProjection } from "@egjs/view360";

//https://naver.github.io/egjs-view360/docs/projections/cubemap

function Background({ src }: { src: string }) {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return;

        const projection = new CubemapProjection({
            src: src,
        });

        const viewer = new View360(containerRef.current, {
            projection,
        });

        return () => {
            viewer.destroy();
        };
    }, [src]);

    return (
        <div ref={containerRef} className="background">
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />{" "}
        </div>
    );
}

export default Background;

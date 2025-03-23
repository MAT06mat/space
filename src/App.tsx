import { useState } from "react";
import "./App.css";
import Background from "./Background";
import BackgroundButton from "./BackgroundButton";
import { useCookies } from "react-cookie";

const backgrounds = [
    { name: "Défaut", src: "./panoramas/default.png" },
    { name: "Galaxy", src: "./panoramas/galaxy.png" },
    { name: "Galaxy 2", src: "./panoramas/galaxy_2.png" },
    { name: "Champ d'astéroides", src: "./panoramas/asteroides.png" },
    { name: "Champ d'astéroides 2", src: "./panoramas/asteroides_2.png" },
    { name: "Champ d'astéroides 3", src: "./panoramas/asteroides_3.png" },
    {
        name: "Gazeuse avec astéroides",
        src: "./panoramas/gazeuse_with_asteroides.png",
    },
];

function App() {
    const [cookies, setCookie] = useCookies(["background"]);
    const [background, setBackground] = useState(
        cookies.background ? cookies.background : backgrounds[0].src
    );

    function handleBackground(newBackground: string) {
        setBackground(newBackground);
        setCookie("background", newBackground);
    }

    return (
        <>
            <Background src={background} />
            <div className="top">
                <BackgroundButton
                    setBackground={handleBackground}
                    backgrounds={backgrounds}
                />
                <div className="credits">
                    <p>
                        Site web par{" "}
                        <a href="https://github.com/MAT06mat">MAT06mat</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;

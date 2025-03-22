import { useState } from "react";
import "./App.css";
import Background from "./Background";
import BackgroundButton from "./BackgroundButton";

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
    const [background, setBackground] = useState(backgrounds[0].src);
    return (
        <>
            <Background src={background} />
            <BackgroundButton
                setBackground={setBackground}
                backgrounds={backgrounds}
            />
        </>
    );
}

export default App;

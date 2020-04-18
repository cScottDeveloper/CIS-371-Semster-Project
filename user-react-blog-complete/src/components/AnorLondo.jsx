import Img from "react-image";
import React from "react";

export default function AnorLondo() {
    console.log("This function was called...")
    return (
        <Img
            src={"https://cdn.vox-cdn.com/thumbor/G4tcoLGx2cR6J6ulqiARGQa_Jm8=/0x0:3" +
            "300x5000/1200x0/filters:focal(0x0:3300x" +
            "5000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file" +
            "/11631143/anor_londo.png"}
        />
    );
}
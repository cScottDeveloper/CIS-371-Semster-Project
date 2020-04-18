import Img from "react-image";
import React from "react";

export default function EntireMap() {
    console.log("This function was called...")
    return (
        <Img
            src={"https://darksouls.wiki." +
            "fextralife.com/file/Dark-Souls/dark%20souls%20en" +
            "tire%20map%20bosses.png?v=1518927256403"}
        />
    );
}
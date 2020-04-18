import React from 'react'
import {Link} from "react-router-dom";
import '../maps.css'

function MapList() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <ul>
                    <li className="map-link"><Link to="/maps/entireMap">Entire Map</Link></li>
                    <li><Link to="/maps/undeadAsylum">Undead Asylum</Link></li>
                    <li><Link to="/maps/firelinkShrine">Firelink Shrine</Link></li>
                    <li><Link to="/maps/undeadBurg">Undead Burg</Link></li>
                    <li><Link to="/maps/undeadParish">Undead Parish</Link></li>
                    <li><Link to="/maps/depths">The Depths</Link></li>
                    <li><Link to="/maps/blighttown">Blighttown</Link></li>
                    <li><Link to="/maps/quelaggsDomain">Quelaag's Domain</Link></li>
                    <li><Link to="/maps/darkrootGarden">Darkroot Garden</Link></li>
                    <li><Link to="/maps/darkrootBasin">Darkroot Basin</Link></li>
                    <li><Link to="/maps/sensFortress">Sen's Fortress</Link></li>
                </ul>
            </div>
                <div className="col">
                    <ul>
                        <li><Link to="/maps/anorLondo">Anor Londo</Link></li>
                        <li><Link to="/maps/newLondoRuins">New Londo Ruins</Link></li>
                        <li><Link to="/maps/dukesArchives">The Duke's Archives</Link></li>
                        <li><Link to="/maps/crystalCave">Crystal Cave</Link></li>
                        <li><Link to="/maps/demonRuins">Demon Ruins</Link></li>
                        <li><Link to="/maps/lostIzalith">Lost Izalith</Link></li>
                        <li><Link to="/maps/catacombs">Catacombs</Link></li>
                        <li><Link to="/maps/tombOfGiants">Tomb of Giants</Link></li>
                        <li><Link to="/maps/abyss">The Abyss</Link></li>
                        <li><Link to="/maps/kilnOfTheFirstFlame">Kiln of the First Flame</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className="map-optional"><Link to="/maps/greatHollow">The Great Hollow</Link></li>
                        <li className="map-optional"><Link to="/maps/ashLake">Ash Lake</Link></li>
                        <li className="map-optional"><Link to="/maps/undeadAsylumReturn">Undead Asylum Return</Link></li>
                        <li className="map-optional"><Link to="/maps/paintedWorld">Painted World of Ariamis</Link></li>
                        <li className="map-optional"><Link to="/maps/valleyOfDrakes">Valley of Drakes</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
function Maps() {
    return (
        <div className="maps">
            <MapList />
        </div>
    );
}

export default Maps;

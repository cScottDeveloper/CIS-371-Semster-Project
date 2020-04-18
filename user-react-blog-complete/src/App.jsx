import React from 'react'
import { BrowserRouter, Route, Link, useRouteMatch } from 'react-router-dom'
import Weapons from './components/Weapons'
import Armor from './components/Armor'
import Location from './components/Location'


function App () {
    //finish list when it works
    let listOfLinks = {
        firelinkShrine: <a href={"https://www.youtube.com/watch?v=6u2w7kzmweU"}>Firelink Shrine</a>
        // undeadBurg: "https://www.youtube.com/watch?v=9qF1bQY1ayE",
        // undeadParish: "https://www.youtube.com/watch?v=mhKLQAtcWB4",
        // priorities: "https://www.youtube.com/watch?v=YHOSRDnXOUE",
        // darkrootGarden: "https://www.youtube.com/watch?v=csHWnuLBXsA",
        // darkRootBasin: "https://www.youtube.com/watch?v=O75f_IVdaZE",
        // lowerUndeadBurg: "https://www.youtube.com/watch?v=VMZu--1sE4U",
        // theDepths: "https://www.youtube.com/watch?v=drQimgbktYc",
        // upperBlightTown: "https://www.youtube.com/watch?v=JNfBKkYsX1s",
        // lowerBlightTown: "https://www.youtube.com/watch?v=eqrPpPxnsek",
        // choasWithQuaalagg: "https://www.youtube.com/watch?v=BlM1jkBpcqg",
        // sifGreyWolf: "https://www.youtube.com/watch?v=K1EzdtIrs7w&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=12",
        // sensFortress: "https://www.youtube.com/watch?v=5RhWuvzAt1k&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=13",
        // ironGolem: "https://www.youtube.com/watch?v=SN1EPpyI1Wo&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=14",
        // anorLondo: "https://www.youtube.com/watch?v=vy2_oVqrkzE&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=15",
        // ornstienAndSmough: "https://www.youtube.com/watch?v=kNGhC4tg4B0&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=16",
        // theCatacombs: "https://www.youtube.com/watch?v=LOuCjF7FPtY&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=17",
        // pinwheelAndStrayDragon: "https://www.youtube.com/watch?v=C8XB6WPxH3A&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=18",
        // paintedWorld: "https://www.youtube.com/watch?v=zzD5o6-V7O4&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=19",
        // pricilla: "https://www.youtube.com/watch?v=M8RRaGGIrm0&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=20",
        // valleyOfDrakes: "https://www.youtube.com/watch?v=-fYH3bfiCRA&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=21",
        // newLondoRuins: "https://www.youtube.com/watch?v=lvn9eAFyN3I&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=22",
        // ceaselessDischarge: "https://www.youtube.com/watch?v=NwKII_QXy54&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=23",
        // demonRuins: "https://www.youtube.com/watch?v=BhSQbrovFgs&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=24",
        // lostIzalith: "https://www.youtube.com/watch?v=BMPN1RqggE0&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=25",
        // bedOfChaos: "https://www.youtube.com/watch?v=cp9ej1Aiox0&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=26",
        // dukesArchives: "https://www.youtube.com/watch?v=dfJJWz66-5U&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=27",
        // crystalCaverns: "https://www.youtube.com/watch?v=n-BVhV3nwjI&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=28",
        // greatHollow: "https://www.youtube.com/watch?v=2G5vc7nSn18&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=29",
        // ashLake: "https://www.youtube.com/watch?v=0DZEzrX6mJE&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=30",
        // tombOfGiants: "https://www.youtube.com/watch?v=zu5wj9afHl8&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=31",
        // royalWoodKnightArtorias: "https://www.youtube.com/watch?v=r1Arhu0KEyw&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=32",
        // oolacileTownship: "https://www.youtube.com/watch?v=dmqr1oHEtIk&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=33",
        // blackDragonKalameet: "https://www.youtube.com/watch?v=GVwvZAHqO5g&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=34",
        // chasmOfTheAbyss: "https://www.youtube.com/watch?v=9BKWZ22DmWg&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=35",
        // gwynLordOfCinder: "https://www.youtube.com/watch?v=w6KUftT853g&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=36"
     };
    function showLinks(){
        let x = document.getElementById("link-list");
            x.innerHTML = listOfLinks.firelinkShrine;
    }

    return (
        <BrowserRouter>
            <div className="container-fluid">
                    <div className="welcome-info">
                        <h2>Welcome to the Dark Souls and Dark Souls Remastered information page where you can find information about your
                            favorite in game items, locations, walk-though tutorials for the confused!</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <button><Link to="/weapons">Weapons</Link></button>
                        </div>
                        <div className="col-sm-3">
                            <button><Link to="/armor">Armor</Link></button>
                        </div>
                        <div className="col-sm-3">
                            <button><Link to="/locations">Locations</Link></button>
                        </div>
                        <div className="col-sm-3">
                            <p>A list of walk-through links:</p>
                            <div className="dropdown">
                                <button className="dropbtn">Dropdown</button>
                                <div className="dropdown-content">
                            <a href="https://www.youtube.com/watch?v=6u2w7kzmweU">Firelink Shrine</a>
                            <a href="">Undead Burg</a>
                            <a href="">Undead Parish</a>
                            <a href="">Priorites</a>
                            <a href="">Darkroot Garden</a>
                            <a href="">Darkroot Basin</a>
                            <a href="">Lower Undead Burg</a>
                            <a href="">The Depths</a>
                            <a href="">Upper Blighttown</a>
                            <a href="">Lower Blighttown</a>
                            <a href="">Chaos with Quelaag</a>
                            <a href="">Sif the Great Grey Wolf</a>
                            <a href="">Sen's Fortress</a>
                            <a href="">Iron Golem</a>
                            <a href="">Anor Londo</a>
                            <a href="">Ornstein and Smough</a>
                            <a href="">The Catacombs</a>
                            <a href="">The Pinwheel and Stray Demon</a>
                            <a href="">Painted World of Ariamis</a>
                            <a href="">Crossbreed Priscilla</a>
                            <a href="">Dark Sun Gwyndolin + Valley of the Drakes</a>
                            <a href="">New Londo Ruins + Four Kings</a>
                            <a href="">Ceaseless Discharge</a>
                            <a href="">Demon Ruins + Firesage Demon</a>
                            <a href="">Lost Izalith</a>
                            <a href="">Bed of Chaos</a>
                            <a href="">Duke's Archives</a>
                            <a href="">Crystal Caverns + Seath the Scaleless</a>
                            <a href="">The Great Hollow</a>
                            <a href="">Ash Lake</a>
                            <a href="">Tomb of Giants + Nito</a>
                            <a href="">Royal Wood + Night Artorias</a>
                            <a href="">Oolacile Township</a>
                            <a href="">Black Dragon Kalameet</a>
                            <a href="">Chasm of the Abyss + Manus</a>
                            <a href="">Gwyn, Lord of Cinder</a>
                                </div>
                            </div>
                        </div>
                    </div>

                <Route path="/weapons" component={Weapons} />
                <Route path="/armor" component={Armor} />
                <Route path="/locations" component={Location} />
            </div>
        </BrowserRouter>
    )
}

export default App
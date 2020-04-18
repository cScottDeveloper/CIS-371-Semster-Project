import React from 'react'
import { BrowserRouter, Route, Link, useRouteMatch } from 'react-router-dom'
import Weapons from './components/Weapons'
import Armor from './components/Armor'
import Location from './components/Location'
import Maps from './components/Maps'
import UndeadAsylum from './components/UndeadAsylum'
import './index.css'
import FirelinkShrine from "./components/FirelinkShrine";
import UndeadBurg from "./components/UndeadBurg";
import UndeadParish from "./components/UndeadParish";
import Depths from "./components/Depths";
import Blighttown from "./components/Blighttown";
import QuelaggsDomain from "./components/QuelaggsDomain";
import EntireMap from "./components/EntireMap";
import DarkrootBasin from "./components/DarkrootBasin";
import SensFortress from "./components/SensFortress";
import AnorLondo from "./components/AnorLondo";
import NewLondoRuins from "./components/NewLondoRuins";
import DukesArchives from "./components/DukesArchives";
import CrystalCave from "./components/CrystalCave";
import DemonRuins from "./components/DemonRuins";
import LostIzalith from "./components/LostIzalith";
import Catacombs from "./components/Catacombs";
import TombOfGiants from "./components/TombOfGiants";
import Abyss from "./components/Abyss";
import KilnOfTheFirstFlame from "./components/KilnOfTheFirstFlame";
import DarkrootGarden from "./components/DarkrootGarden";
import GreatHollow from "./components/GreatHollow";
import AshLake from "./components/AshLake";
import UndeadAsylumReturn from "./components/UndeadAsylumReturn";
import ValleyOfDrakes from "./components/ValleyOfDrakes";
import PaintedWorld from "./components/PaintedWorld";

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">{props.text}</div>
        </div>
    );
}

const comment = {
    text: 'Recommended order: Second Location',
    author: {
        name: 'Firelink Shrine',
        avatarUrl: 'https://darksouls.wiki.fextralife.com/file/Dark-Souls/FirelinkShrineMap.jpg',
    }
};
function App () {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                    <div className="welcome-info">
                        <h2>Welcome to the Dark Souls and Dark Souls Remastered information page where you can find information about your
                            favorite in game items, locations, walk-though tutorials for the confused!</h2>
                    </div>
                    <nav className="navbar bg-light">
                        <div className="navbar-nav">
                            <Link className="nav-item" to="/weapons">Weapons</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-item" to="/armor">Armor</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-item" to="/locations">Locations</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-item" to="/maps">Maps</Link>
                        </div>
                    </nav>
                    <div className="row">
                        <div className="col-sm">
                            <div className="dropdown">
                                <button type="button" className="btn btn-primary dropdown-toggle"
                                        data-toggle="dropdown">
                                    Walk-through
                                </button>
                                <div className="dropdown-menu">
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=6u2w7kzmweU">Firelink Shrine</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=9qF1bQY1ayE">Undead Burg</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=mhKLQAtcWB4">Undead Parish</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=YHOSRDnXOUE">Priorites</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=csHWnuLBXsA">Darkroot Garden</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=O75f_IVdaZE">Darkroot Basin</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=VMZu--1sE4U">Lower Undead Burg</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=drQimgbktYc">The Depths</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=JNfBKkYsX1s">Upper Blighttown</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=eqrPpPxnsek">Lower Blighttown</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=BlM1jkBpcqg">Chaos with Quelaag</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=K1EzdtIrs7w&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=12">Sif the Great Grey Wolf</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=5RhWuvzAt1k&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=13">Sen's Fortress</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=SN1EPpyI1Wo&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=14">Iron Golem</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=vy2_oVqrkzE&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=15">Anor Londo</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=kNGhC4tg4B0&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=16">Ornstein and Smough</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=LOuCjF7FPtY&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=17">The Catacombs</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=C8XB6WPxH3A&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=18">The Pinwheel and Stray Demon</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=zzD5o6-V7O4&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=19">Painted World of Ariamis</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=M8RRaGGIrm0&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=20">Crossbreed Priscilla</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=-fYH3bfiCRA&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=21">Dark Sun Gwyndolin + Valley of the Drakes</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=lvn9eAFyN3I&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=22">New Londo Ruins + Four Kings</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=NwKII_QXy54&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=23">Ceaseless Discharge</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=BhSQbrovFgs&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=24">Demon Ruins + Firesage Demon</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=BMPN1RqggE0&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=25">Lost Izalith</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=cp9ej1Aiox0&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=26">Bed of Chaos</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=dfJJWz66-5U&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=27">Duke's Archives</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=n-BVhV3nwjI&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=28">Crystal Caverns + Seath the Scaleless</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=2G5vc7nSn18&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=29">The Great Hollow</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=0DZEzrX6mJE&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=30">Ash Lake</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=zu5wj9afHl8&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=31">Tomb of Giants + Nito</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=r1Arhu0KEyw&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=32">Royal Wood + Night Artorias</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=dmqr1oHEtIk&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=33">Oolacile Township</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=GVwvZAHqO5g&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=34">Black Dragon Kalameet</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=9BKWZ22DmWg&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=35">Chasm of the Abyss + Manus</a>
                            <a className="dropdown-item" href="https://www.youtube.com/watch?v=w6KUftT853g&list=PL7RtZMiaOk8i5W4e8j_Bz6YDdFq3o4aAh&index=36">Gwyn, Lord of Cinder</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="dropdown">
                                <button type="button" className="btn btn-primary dropdown-toggle"
                                        data-toggle="dropdown">
                                    Spells
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=pNh3K5nc2i8">All Pyromancies</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=FkeAQXVBeFE">All Miracles</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=wezjcLz61hk">All Sorceries</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="dropdown">
                                <button type="button" className="btn btn-primary dropdown-toggle"
                                        data-toggle="dropdown">
                                    Items
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=cpVu-scdBmk">Fire Keeper Souls</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=wUY9jyLj3-Y">All Ring Locations</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=SDjFiHov76U">Alphabetical Armor Locations</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=7IeGlDG8c2o">Bows</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=axyGawS2_84&t=26s">Katanas</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=7BCn65lmZt0">Great Swords</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=ZsuikpK22RQ">Ultra Great Swords</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=d70camzrIEo">Straight Swords</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=qGy-MVoBy6Y">Curved Swords</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=rjBenu5VVwE">Daggers</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=A8LJXHtLDK0">Axes</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=YW61UWwZ8ys">Great Axes</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=dOuYfp7KWNs">Catalysts</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=0COXu-BtVzo">Pyromancy Flames</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="row">
                        <div className="col-sm">
                            <div className="dropdown">
                                <button type="button" className="btn btn-primary dropdown-toggle"
                                        data-toggle="dropdown">
                                    Builds
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=H7cP9ontlfc&list=PLjtbGCGtzW4VtmyhJiNsN4pBb524l2RdZ&index=1">Quality</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=xWPv16FA0ok&list=PLjtbGCGtzW4VtmyhJiNsN4pBb524l2RdZ&index=2">Dexterity</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=9V1OY9d6La8&list=PLjtbGCGtzW4VtmyhJiNsN4pBb524l2RdZ&index=3">Strength</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=bOj4efod0zk&list=PLjtbGCGtzW4VtmyhJiNsN4pBb524l2RdZ&index=4">Sorcery</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=iC1ObS3-m5s&list=PLjtbGCGtzW4VtmyhJiNsN4pBb524l2RdZ&index=5">Faith</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=f08tSzj5yKY&list=PLjtbGCGtzW4VtmyhJiNsN4pBb524l2RdZ&index=19">Bleed</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=d1hmkoYc2Xo&list=PLjtbGCGtzW4VtmyhJiNsN4pBb524l2RdZ&index=21">Toxic</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="dropdown">
                                <button type="button" className="btn btn-primary dropdown-toggle"
                                        data-toggle="dropdown">
                                    Hints
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=XjMfBim_cdQ">Parrying</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=RRIVKnlysBc">Start OP</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=hhaQVaqeOSI">Siegmeyer Full Quest Line</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=yScJo3eb77c">Boss Difficulties</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="dropdown">
                                <button type="button" className="btn btn-primary dropdown-toggle"
                                        data-toggle="dropdown">
                                    Extras
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=usaJqeL9o4M">DS1/DS2 Story</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=OjNloSH8EgM&t=1s">DS3 Story</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=6M9ONL6BcbU">DS1 Parody</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=2kr7KDCsIws">DS2 Parody</a>
                                    <a className="dropdown-item" href="https://www.youtube.com/watch?v=v4O9rMQ-TlU">DS3 Parody</a>
                                </div>
                            </div>
                        </div>
                    </div>

                <Route path="/weapons" component={Weapons} />
                <Route path="/armor" component={Armor} />
                <Route path="/locations" component={Location} />
                <Route path="/maps" component={Maps} />
                <Route path="/maps/undeadAsylum" component={UndeadAsylum} />
                <Route path="/maps/firelinkShrine" component={FirelinkShrine} />
                <Route path="/maps/undeadBurg" component={UndeadBurg} />
                <Route path="/maps/undeadParish" component={UndeadParish} />
                <Route path="/maps/depths" component={Depths} />
                <Route path="/maps/blighttown" component={Blighttown} />
                <Route path="/maps/quelaggsDomain" component={QuelaggsDomain} />
                <Route path="/maps/darkrootBasin" component={DarkrootBasin} />
                <Route path="/maps/darkrootGarden" component={DarkrootGarden} />
                <Route path="/maps/sensFortress" component={SensFortress} />
                <Route path="/maps/anorLondo" component={AnorLondo} />
                <Route path="/maps/entireMap" component={EntireMap} />
                <Route path="/maps/newLondoRuins" component={NewLondoRuins} />
                <Route path="/maps/dukesArchives" component={DukesArchives} />
                <Route path="/maps/crystalCave" component={CrystalCave} />
                <Route path="/maps/demonRuins" component={DemonRuins} />
                <Route path="/maps/lostIzalith" component={LostIzalith} />
                <Route path="/maps/catacombs" component={Catacombs} />
                <Route path="/maps/tombOfGiants" component={TombOfGiants} />
                <Route path="/maps/abyss" component={Abyss} />
                <Route path="/maps/kilnOfTheFirstFlame" component={KilnOfTheFirstFlame} />
                <Route path="/maps/greatHollow" component={GreatHollow} />
                <Route path="/maps/ashLake" component={AshLake} />
                <Route path="/maps/undeadAsylumReturn" component={UndeadAsylumReturn} />
                <Route path="/maps/paintedWorld" component={PaintedWorld} />
                <Route path="/maps/valleyOfDrakes" component={ValleyOfDrakes} />
            </div>
        </BrowserRouter>
    )
}

export default App
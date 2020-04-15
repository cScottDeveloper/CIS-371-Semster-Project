import React from 'react'
import { BrowserRouter, Route, Link, useRouteMatch } from 'react-router-dom'
import Weapons from './components/Weapons'
import Armor from './components/Armor'
import Location from './components/Location'
import ReactDOM from "react-dom";

function WeaponsPage () {
    ReactDOM.render(
        <React.StrictMode>
            <Weapons/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

function ArmorPage () {
    ReactDOM.render(
        <React.StrictMode>
            <Armor/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

function LocationsPage () {
    ReactDOM.render(
        <React.StrictMode>
            <Location/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

function App () {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                    <div className="welcome-info">
                        <h2>Welcome to the dark souls 3 information page where you can find information about your
                            favorite
                            in game items and locations!</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <button><Link to="/weapons">Weapons</Link></button>
                        </div>
                        <div className="col-md-4">
                            <button><Link to="/armor">Armor</Link></button>
                        </div>
                        <div className="col-md-4">
                            <button><Link to="/locations">Locations</Link></button>
                        </div>
                    </div>

                <Route path="/weapons" component={WeaponsPage} />
                <Route path="/armor" component={ArmorPage} />
                <Route path="/locations" component={LocationsPage} />
            </div>
        </BrowserRouter>
    )
}

export default App
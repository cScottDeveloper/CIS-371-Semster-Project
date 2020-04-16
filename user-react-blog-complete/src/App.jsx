import React from 'react'
import { BrowserRouter, Route, Link, useRouteMatch } from 'react-router-dom'
import Weapons from './components/Weapons'
import Armor from './components/Armor'
import Location from './components/Location'
import ReactDOM from "react-dom";


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
                        <div className="col-sm-4">
                            <button><Link to="/weapons">Weapons</Link></button>
                        </div>
                        <div className="col-sm-4">
                            <button><Link to="/armor">Armor</Link></button>
                        </div>
                        <div className="col-sm-4">
                            <button><Link to="/locations">Locations</Link></button>
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
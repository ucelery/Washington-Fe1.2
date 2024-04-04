import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
    return (
        <div>
            <nav className="nav">
                <div className="left">
                    <ul>
                        <li>
                            <Link to="/member" className="link">David</Link>
                        </li>
                        <li>
                            <Link to="/member1" className="link">Plaza</Link>
                        </li>
                        <li>
                            <Link to="/member2" className="link">Lopena</Link>
                        </li>
                        <li>
                            <Link to="/member3" className="link">Azarcon</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
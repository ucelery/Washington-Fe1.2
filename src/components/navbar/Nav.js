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
                            <Link to="/member" className="link">Aton Alwin A. David</Link>
                        </li>
                        <li>
                            <Link to="/member1" className="link">Chauncey Oswold Thomas B. Plaza</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
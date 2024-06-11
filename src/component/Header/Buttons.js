import React, {Component} from "react";
import './Header.css';
import {Link} from "react-router-dom";

class Buttons extends Component{

    render() {
        const {cN, hR, iP} = this.props;
        return (
            <li className="nav-item">
                <Link to={"/"+hR} className={`${cN} nav-link`}>{iP}</Link>
            </li>
        )
    }
}

export default Buttons;
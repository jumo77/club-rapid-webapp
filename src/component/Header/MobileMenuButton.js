import React, {Component} from "react";
import './Header.css';

class MobileMenuButton extends Component{

    render() {
        return (
            <li className="nav-item">
                <div className="mobile-menu">
                    <span className="line line-top"></span>
                    <span className="line line-bottom"></span>
                </div>
            </li>
        )
    }
}

export default MobileMenuButton;
import React, {Component}from "react"
import './Header.css';
import Buttons from "./Buttons";
import MobileMenuButton from "./MobileMenuButton";


class Navbar extends Component {

    constructor() {
        super();
        this.state={
            pages: []
        }
    }


    componentDidMount(){
            const selectElement = (element) =>document.querySelector(element);
            selectElement('.mobile-menu').addEventListener('click' , ()=>{
            selectElement('header').classList.toggle('active')
            });
    }
       render() { 
            return (
        <header>
        <div className="container2">
            <nav>
                <ul className="nav-list nav-list-mobile">
                    <MobileMenuButton/>
                    <Buttons hR="" cN="nav-link-home"/>
                    <Buttons hR="profile" cN="nav-link-profile"/>
                </ul>
                {/* <!-- /.nav-list nav-list-mobile -->  */}
                <ul className="nav-list nav-list-larger">
                    <li className="nav-item search-hiden">
                        <input className="nav-link nav-link-searchbar" type="text" 
                            placeholder="&#xF002; 검색"
                            style={{fontFamily:"Arial, FontAwesome"}} />
                    </li>
                    <Buttons hR="" cN="nav-link-home"/>
                    <Buttons hR="frontend" iP="Front-End"/>
                    <Buttons hR="mobile" iP="Mobile"/>
                    <Buttons hR="backend" iP="Back-End"/>
                    <Buttons hR="profile" cN="nav-link-profile"/>
                </ul> 
                    
            </nav>

        </div>
        </header>
    )
    }
}
 
export default Navbar

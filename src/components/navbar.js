import React, { Component } from "react";
import Logo from "./logo";

class Navbar extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        const  menu=document.querySelector(".hiddenNav")
        e.target.parentElement.classList.toggle("is-active")
        menu.classList.toggle("hamburgerLinks")
    }
    
    render() {

        return (
            <>
                <div className="container">
                    <Logo />
                    <div className="menu">
                        {/* <a href="#">Work</a> */}
                        <a href="https://drive.google.com/file/d/1f9Bk7Bb0uHoH1H2kQtwK_k_suPQOpKT5/view?usp=sharing" target="_blank" >Resume</a>
                        {/* <a href="#">About</a> */}


                    </div>

                    <div className="hamburger" onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="hiddenNav">
                    {/* <a  href="#">Work</a> */}
                    <a href="https://drive.google.com/file/d/1f9Bk7Bb0uHoH1H2kQtwK_k_suPQOpKT5/view?usp=sharing" target="_blank">Resume</a>
                    {/* <a href="#">About</a> */}
                </div>
            </>
        )
    }
}

export default Navbar;

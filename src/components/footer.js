import React, { Component } from "react"

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footerDiv">

                    <a href="mailto:iamsatyam760@gmail.com">
                        <i class="fa-solid fa-brands fa-envelope"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/satyam-gupta-87263619b" target="_blank" >
                        <i class="fa-brands fa-linkedin"></i>
                    </a>


                    <a href="https://github.com/SatyamJS" target="_blank">
                        <i class="fa-brands fa-github"></i>
                    </a>

                    <a href="https://www.instagram.com/13__satyam" target="_blank"><i class="fa-brands fa-instagram"></i>
                    </a>


                    <a href="https://www.facebook.com/sat.gu.9" target="_blank"><i class="fa-brands fa-facebook-f"></i>
                    </a>

                    <p> &copy; 2021-2022 <strong>Satyam Gupta</strong></p>
                </div>
            </>
        )
    }
}

export default Footer;
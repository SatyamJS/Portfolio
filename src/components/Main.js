import React, { Component } from "react"

class MainComponent extends Component {
    
    render() {
        return (
            <>
                <div data-aos="fade-up" className="main">
                    <div className="mainCard">
                        <div className="mainCardOuter">
                            <div className="mainCardInner">
                                <h1>Hi, I am a WebDeveloper !</h1>
                                <br></br>
                                <br></br>
                                <p>I am a self taught developer with expertise in both <strong>Frontend</strong> and <strong>Backend</strong> development</p>
                               <a href="https://www.linkedin.com/in/satyam-gupta-87263619b" target="_blank"><button className="btn">Hire Me !</button></a> 
                            </div>
                        </div>
                    </div>
                    <div className="mainImgDiv">
                        <img src="./satyam.jpg" alt="Satyam Gupta" class="mainImage" />
                    </div>
                </div>

                   <h3>My skillset consists of following skills and still learning more and more daily!</h3>
               <div className="skillsDiv">
                 <div data-aos="zoom-in" className="skill ">
                        <img src="./html-5.png" alt="" />
                    </div>
                    <div data-aos="zoom-in" className="skill ">
                        <img src="./css.png" alt="" />
                    </div>
                    <div data-aos="zoom-in"  className="skill ">
                        < img src="./js.png" alt="" />
                    </div>
                    <div data-aos="zoom-in"  className="skill  ">
                        <img src="./react.png" alt="" />
                    </div>
                    <div data-aos="zoom-in"  className="skill ">
                        <img src="./python.png" alt="" />
                    </div>
                    <div  data-aos="zoom-in" className="skill ">
                        <img src="./django.png" alt="" />
                    </div>
                    <div data-aos="fade-up"  className="skill ">
                        <img src="./github.png" alt="" />
                    </div>
                </div>
            </>
        )
    }
}

export default MainComponent;
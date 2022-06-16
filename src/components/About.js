import React,{Component} from "react"

class AboutComponent extends Component{
    render(){
        return(
            <>
            <div className="aboutDiv">
            <div data-aos="zoom-in" className="aboutContent">
            <br />
            <h1>Hi, I am Satyam Gupta.</h1>
            <br />
            <br/>
            <strong><p>I am a fourth-year student at the National Institute of Technology, Jalandhar. I have been working on frontend and backend development for 2 years. I also have a keen interest in the fields of animation, web design, editing, analytical thinking, and creative implementation of productive ideas!   </p>
            <br />
            <p>I also have hands-on experience solving real-world problems, customer satisfaction, and matching deadlines. </p></strong>
            <br />
            <br />
            <br />
            <br />
            <h2>Reach out for quality work</h2>

            </div >
            <img src="./illustration.gif" alt="" className="aboutImage" data-aos="zoom-in"/>
            
            </div>
            </>
        )
    }
}

export default AboutComponent;
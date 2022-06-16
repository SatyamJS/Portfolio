import React, { Component } from "react"

class WorkComponent extends Component {
    render() {
        return (
            <>
                <div  className="workDiv">
                    <p data-aos="zoom-in"><a href="https://sgdictionary.netlify.app" target="_blank">Online Dictionary</a><img className="websiteFrame"src="./sgdictionary.png" />
                    </p>



                    <p data-aos="zoom-in"><a href="https://satyamg.netlify.app" target="_blank">Online news site</a>
                    <img className="websiteFrame"src="./sgnews.png" /></p>


                </div>
            </>
        )
    }
}

export default WorkComponent;

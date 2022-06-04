import React, { Component } from "react"

class WorkComponent extends Component {
    render() {
        return (
            <>
                <div  className="workDiv">
                    <p data-aos="zoom-in"><a href="https://sgdictionary.netlify.app" target="_blank">Online Dictionary</a><iframe scrolling="no" className="websiteFrame" src="https://sgdictionary.netlify.app" title="SgNews Website"></iframe>
                    </p>



                    <p data-aos="zoom-in"><a href="https://satyamg.netlify.app" target="_blank">Online news site</a><iframe scrolling="no" className="websiteFrame" src="https://satyamg.w3spaces.com" title="SgNews Website"></iframe></p>


                </div>
            </>
        )
    }
}

export default WorkComponent;

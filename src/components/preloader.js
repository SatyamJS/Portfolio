import React,{Component} from "react"

class Preloader extends Component{
    render(){
        return(
            <>
            <div className="loadingDiv">
            <div className="loading">
            <h1 className="loadingh1">Loading</h1>
            <h1 className="loadingh2">Loading</h1>
            </div>
            </div>
            </>
        )
    }
}

export default Preloader;
import React ,{Component} from "react"
import Navbar from "./components/navbar";
import MainComponent from "./components/Main";
import Footer from "./components/footer";
import Animation from "./components/animation"
import AboutComponent from "./components/About";
import WorkComponent from "./components/work";
import Preloader from "./components/preloader"
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      isLoading:true,
    }
  }
  componentDidMount(){
    setTimeout((e)=>{
      this.setState({isLoading:false})

    },5000)
  }
  render(){
    
  return (
    <>
  {
  this.state.isLoading ?
    <Preloader/> :
    <>
   <Animation />
   <Navbar />
   <MainComponent />
   <WorkComponent />
   <AboutComponent />
   <Footer />
   </>
   }
   </>
 
  )
}
}

export default App;

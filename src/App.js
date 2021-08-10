import React, { Component } from "react";
import "./App.css";
import Navigation from "./component/Navigation";
import Logo from "./component/Logo/Logo";
import ImageLinkForm from "./component/ImageLinkForm";
import Rank from "./component/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRecognition from "./component/FaceRecognition";
import LoginPage from './component/LoginPage';
import Register from './component/Register';

const app = new Clarifai.App({
  apiKey: "8249b4ec1b13451daa951d6a197f6937",
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route:'signin',
      isSignedIn: false,
    };
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };

  isSignedIn = () =>{
    console.log('isSignedIn');
  }
  onRouteChange = (route) => {
    if( route === 'signout'){
      this.setState({isSignedIn : false})
    }else if (route === 'home'){
      this.setState({isSignedIn: true })
    }
    this.setState({route:route})
    console.log(route); 
  }

  render() {
    const { imageUrl,box,isSignedIn} = this.state;
    return (
     
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        
     {this.state.route === 'home' 
     ?  <div> 
     <Logo />
     <Rank />
     <ImageLinkForm
       onInputChange={this.onInputChange}
       onButtonSubmit={this.onButtonSubmit}
     />
     <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
     </div>
    :  this.state.route === 'signin' 
      ? <LoginPage onRouteChange={this.onRouteChange}/>
    : (this.state.route === 'signout'

      ?<LoginPage onRouteChange={this.onRouteChange}/>
      :<Register onRouteChange={this.onRouteChange}/>
    )
    }
      </div>
    );
  }
}

export default App;

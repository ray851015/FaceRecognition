import './App.css';
import Navigation from './component/Navigation';
import Logo from './component/Logo/Logo';
import ImageLinkForm from './component/ImageLinkForm';
import Rank from './component/Rank';
import Particles from 'react-particles-js';



const particlesOptions ={
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

function App() {
  return (
    <div className="App">
       <Particles 
                params={particlesOptions} />
    <Navigation/>
    <Logo/>
    <Rank/>
    <ImageLinkForm/>
    {/*
   
    <FaceRecognition/> */}
    </div>
  );
}

export default App;

import {
  buttplugg,
  whipp,
  glasdildo,
  vibrator,
  vibratorClit,
  smallVibrator
} from "./assets/images"
import Toys from "./Components/Toys"
import './Components/Toys.css'

function App() {
  return (
    <div className="container">
       
       <h1>Adult Toys for your pleasure</h1>
      <div className="card-container">
        <Toys 
          img={buttplugg} 
          title="Butt-Plugg" 
          info="200kr"
          text="Perfect for beginners, comfortable silicone design." 
        />
        <Toys 
          img={whipp} 
          title="Whipp" 
           text="Soft leather whip for gentle to firm play."
          info="150kr" 
        />
        <Toys 
          img={glasdildo} 
          title="Glas Dildo" 
          info="300kr"
          text="Elegant glass design with temperature possibilities." 
        />
        <Toys 
          img={vibrator} 
          title="Dubbel Vibrator" 
          info="400kr" 
          text="Dual stimulation with multiple vibration patterns."
        />
        <Toys 
          img={vibratorClit} 
          title="Clitoris Vibrator" 
          info="250kr" 
          text="Targeted pleasure with quiet, powerful motor." 
        />
        <Toys 
          img={smallVibrator} 
          title="Small Vibrator" 
          info="175kr" 
          text="Compact and discreet, perfect for travel." 
        />
      </div>
    </div> 
  );
}

export default App;
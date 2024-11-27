import Toys from "../Components/Toys";
import {
    buttplugg,
    whipp,
    glasdildo,
    vibrator,
    vibratorClit,
    smallVibrator
} from "../assets/images"

function Home() {
    return (
        <div className="about-container">
            <h2>Toys to satisfy your desires</h2>
            <div className="card-container">
                <Toys 
                    img={buttplugg} 
                    title="Butt-Plugg" 
                    price="200"
                    text="Perfect for beginners, comfortable silicone design." 
                    info="Made with body-safe materials"
                />
                <Toys 
                    img={whipp} 
                    title="Whipp" 
                    text="Soft leather whip for gentle to firm play."
                    price="150"
                    info="Premium leather construction" 
                />
                <Toys 
                    img={glasdildo} 
                    title="Glass Dildo" 
                    text="Temperature-responsive glass for unique sensations."
                    price="300"
                    info="Handcrafted borosilicate glass" 
                />
                <Toys 
                    img={vibrator} 
                    title="Vibrator" 
                    text="Multiple vibration patterns for maximum pleasure."
                    price="400"
                    info="Rechargeable, waterproof design" 
                />
                <Toys 
                    img={vibratorClit} 
                    title="Clitoral Vibrator" 
                    text="Targeted stimulation with adjustable intensity."
                    price="250"
                    info="Whisper-quiet operation" 
                />
                <Toys 
                    img={smallVibrator} 
                    title="Mini Vibrator" 
                    text="Compact and discreet, perfect for travel."
                    price="180"
                    info="Travel lock feature included" 
                />
            </div>
        </div>
    );
}
  
export default Home
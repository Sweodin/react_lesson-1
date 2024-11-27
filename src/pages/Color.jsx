import { useState } from 'react'

function Color() {
    const [color, setColor] = useState("#FFFFFF");

     /*----- When color picker changes -----*/
    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
    };

     /*----- When text input changes -----*/

    const handleTextChange = (e) => {
         
        setColor(e.target.value);
    };

    return (
        <div className="color-picker-page" style={{ backgroundColor: color }}>
            <h1>Color Picker</h1>
            <div className="color-picker-container">
                <div className="color-inputs">
                    <div className="input-group">
                        <label htmlFor="colorPicker">Choose Color:</label>
                        <input 
                            type="color"
                            id="colorPicker"
                            value={color}
                            onChange={handleColorChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="colorInput">Type a Color:</label>
                        <input 
                            type="text"
                            id="colorInput"
                            value={color}
                            onChange={handleTextChange}
                            placeholder="Try: red, blue, #FF0000"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Color;

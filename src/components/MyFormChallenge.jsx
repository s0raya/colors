import BoxColor from "./BoxColor";
import { useState, useRef, useEffect } from "react";

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [colorInput, setColorInput] = useState('');
  const inputColor = useRef(null);

  useEffect(() => {
    inputColor.current.focus();
  }, [])

  return (
    <>
      <input 
        id="color" 
        type="text" 
        className="input" 
        placeholder="Choose a color"
        value={colorInput}
        ref={inputColor}
        onChange={() => setColorInput(inputColor.current.value)}
      />
      <div className="container">
        {colors.map((boxColor, index) => (
          <div style={{color: boxColor}} key={index}>
            <BoxColor 
              color={boxColor === colorInput ? colorInput : 'transparent'} 
              value={boxColor === colorInput 
                ?  `Yes, I'm a ${colorInput} color`
                : `I'm not a ${colorInput} color`
              }
              colorText={boxColor === colorInput ? 'black' : boxColor}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default MyForm;
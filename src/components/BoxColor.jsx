/************************************************ CLASE *****************************************/
import { useRef, useState, useEffect } from "react";

function BoxColor({color, value}) {
  const [classList, setClassList] = useState('');
  const boxRef = useRef(null);

  const boxCss = {
    backgroundColor: classList.value === `box ${value}` ? color : null,
    border: `1px solid ${color}`,
    color: color
  }

  useEffect(() => {
    setClassList(boxRef.current.classList)
    console.log(classList)
  }, [])

  return (
    <>
    <div
      ref={boxRef} 
      className={`box ${color}`}
      style={boxCss}
    >
    {color === value ? <h2 style={{color: 'black'}}>Yes, I'm {value} color</h2> : <h2>I'm not {value} color</h2> }
    </div>
    </>
  )
}

export default BoxColor;



/***************************** HECHO POR MI ****************************/

/*function BoxColor ({color, value, colorText}) {
  return (
    <>
      <div className={`box ${color}`} style={{backgroundColor: color}}>
        <p style={{color: colorText, fontWeight: 'bold', fontSize: '20px'}}>{value}</p>
      </div>

    </> 
  )
}
export default BoxColor;  
*/
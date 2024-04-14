function BoxColor ({color, value, colorText}) {
  return (
    <>
      <div className={`box ${color}`} style={{backgroundColor: color}}>
        <p style={{color: colorText, fontWeight: 'bold', fontSize: '20px'}}>{value}</p>
      </div>

    </> 
  )
}
export default BoxColor;  

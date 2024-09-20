function Button2()
{
  let button=["6","7","8","9","0"];
  return(<div className="ButtonContainer">
    {button.slice(0,5).map((button,index)=>(
      <button key={index} className="Button2">{button}</button>
      ))}
  </div>);
}

export default Button2;
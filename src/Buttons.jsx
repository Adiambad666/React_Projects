function Buttons()
{ let button=["+","-","*","/","="];

  let button1=["1","2","3","4","5"];
  let cnt=1;
  return(<div className="ButtonContainer">
  {button.slice(0,5).map((button,index)=>(
    <button key={index} className="Button1">{button}</button>
    ))}
    
  </div>);
}

export default Buttons;
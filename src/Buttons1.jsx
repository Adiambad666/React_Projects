function Buttons1()
{ let button=["1","2","3","4","5"];
  return(<div className="ButtonContainer">
    {button.slice(0,5).map((button,index)=>(
      <button key={index} className="Button2">{button}</button>
      ))}
  </div>);
}

export default Buttons1;
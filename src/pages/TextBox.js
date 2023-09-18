import React ,{useState} from 'react'

function TextBox(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Succes","Converted to UpperCase case");
   
  }
  const handlecopy=()=>{
    let text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Succes","Text Copied");
  }

  const handleloClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Succes","Converted to LowerCase case");
  }
  const handleclearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Succes","Text Cleared");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const toggleStyle=()=>{
    if(mystyle.color =='white')
    {
       setmystyle({
           color:'black',
           backgroundColor:'white'
       })
       setbtntext("Enable Dark mode");
       props.showAlert("Succes","Enabled Light mode");

    }
    else{
        setmystyle({
            color:'white',
            backgroundColor:'black'
        })
        setbtntext("Enable Light mode");
        props.showAlert("Succes","Enabled Dark mode");
    }
    
  }
  const [mystyle,setmystyle]=useState({color:'white',backgroundColor: 'black'});
  const [btntext,setbtntext]=useState("Enable dark mode");
  const [text,setText]=useState("Enter text here");
  return (
    <>
    <div className='container p-3 my-3' style={mystyle} >
      <h1>{props.heading}</h1>
      <div className='p-0' style={mystyle}>
        <textarea className='form-control' style={mystyle} value={text} onChange={handleOnChange} id='myBox' rows='8'></textarea>
        <button className='btn btn-primary '  onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary m-2'  onClick={handleloClick}>Convert to LowerCase</button>
        <button className='btn btn-primary m-2'  onClick={handleclearClick}>Clear</button>
        <button className='btn btn-primary m-2'  onClick={toggleStyle}>{btntext}</button>
        <button className='btn btn-primary m-2'  onClick={handlecopy}>Copy</button>
        
      </div>
    </div>
    <hr/>
    <div className='container p-3 my-3' style={mystyle}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

export default TextBox
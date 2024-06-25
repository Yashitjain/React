import React from 'react'
import {useState} from 'react'

export default function Form(props) {

  const [text,setText] = useState("Write your text");
  const [fontSize,setFontSize] = useState(1);

  function handleTextUpperCase(e){
    const newText = text.toUpperCase();
    props.showAlert("set to UpperCase","success");
    return setText(newText);
  }
  function handleTextLowerCase(){
    setText(text.toLowerCase());
    props.showAlert("set to LowerCase","success");

  }
  function handleTextClear(){
    props.showAlert("Clear ","warning");
    setText("");
  }
  function handleTextCamelCase(){
    const words = text.split(" ");
    let newText = "";
    words.forEach((word) =>  {
      if (word!=="") newText =  newText.concat(word[0].toUpperCase()+ word.slice(1)+" ");
    });
    props.showAlert("set to CamelCase","success");

    setText(newText);
  }
  function handleCopyToClipboard(){
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied","success");

  }
  function handleText(e){
    return setText(e.target.value);
  }
  function handleFontSizeIncrease(){
    setFontSize(fontSize+1);
    props.showAlert(`Font Size Increased To ${fontSize}`,"success");

  }
  function handleFontSizeDecrease(){
    if(fontSize>=1)
    setFontSize(fontSize-1);
    props.showAlert(`Font Size Decreased To ${fontSize}`,"success");

  }
  function handleTextSapces(){
    const newString = text.replace(/\s+/g,' '); // "thiscontainsspaces"
    setText(newString);
    props.showAlert("Extra Spaces Removed","success                                                                                             ");
  }
  return (
    <>
      <div style={{margin:"auto",width:"fit-content"}}>
        <h1 style={{margin:"2rem"}}>{props.heading}</h1>
          <div className="form-floating">
            <textarea className="form-control" value={text} onChange={handleText} placeholder="Leave a comment here" id="floatingTextarea" 
            style={{height:"30vh",width:"80vw",margin:"auto",
            fontSize:`${fontSize}rem`,resize:"none",backgroundClip:"text",
            color: props.theme==="black",}}></textarea>
          </div>
              <button  className="btn btn-primary mt-4 mx-3" onClick={handleTextUpperCase}>To Uppercase</button>
              <button  className="btn btn-primary mt-4 mx-3" onClick={handleTextLowerCase}>To Lowercase</button>
              <button  className="btn btn-primary mt-4 mx-3" onClick={handleTextClear}>Clear</button>
              <button  className="btn btn-primary mt-4 mx-3" onClick={handleTextCamelCase}>CamelCase</button>
              <button  className="btn btn-primary mt-4 mx-3" onClick={handleCopyToClipboard}>copy to clipboard</button>
              <div style={{display:"inline-block"}}>
                <button  className="btn btn-primary mt-4 mx-3" onClick={handleFontSizeIncrease}>+</button> 
                  <span className='mx-3 my-3'>Font size:{fontSize}</span> 
                <button  className="btn btn-primary mt-4 mx-3" onClick={handleFontSizeDecrease}>-</button>
              </div>
              <button  className="btn btn-primary mt-4 mx-3" onClick={handleTextSapces}>Remove Extra Spaces</button>




      </div>
      <div className='summary' style={{width:"fit-content",margin:"auto"}}>
        <h1>Text Summary </h1>
        <h5 style={{wordSpacing:"5px"}}>{(text.split(" ")).length} words,{text.length} Characters</h5>
      </div>
      <h3 style={{margin:"1rem 2rem 1rem 2rem "}}>Preview</h3>
        <p style={{margin:"1rem 4rem 1rem 4rem ",border:"1px solid black"}}>{text}</p>

    </>
  )
}

//need to put onchange in textarea else it will give warning and will not change the value in textarea

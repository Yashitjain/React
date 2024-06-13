import React from 'react'
import {useState} from 'react'

export default function Form(props) {
  function handleTextUpperCase(e){
    const newText = text.toUpperCase();
    return setText(newText);
  }
  function handleText(e){
    return setText(e.target.value);
  }
  const [text,setText] = useState("Write your text");
  return (
    <div>
        <div className="form-floating">
          <textarea className="form-control" value={text} onChange={handleText} placeholder="Leave a comment here" id="floatingTextarea" style={{height:"30vh",width:"60vw",margin:"auto",color:"black"}}></textarea>
        </div>
            <button  className="btn btn-primary" onClick={handleTextUpperCase}>to uppercase</button>
    </div>
  )
}

//need to put onchange in textarea else it will give warning and will not change the value in textarea

import React from 'react'
// import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={props.theme} style={{backgroundColor:props.theme==="green"?"#10898d":""}}>
        <div className="container-fluid"  style={{backgroundColor:props.theme==="green"?"#10898d":""}}>
          <a className="navbar-brand" href="/" ><b>{props.title}</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="#"> <b>Home</b></a>
              </li>
            </ul>

{/* change light dark theme  */}

            <div className="htmlfom-check form-switch" style={{width:"fit-content",marginRight:"2rem"}}>
              <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault" ></label>
                <input className="form-check-input mx-3" onClick={()=>props.toggleTheme("dark")} type="radio" name="exampleRadios" id="flexSwitchCheckDefault" />Dark Theme
                <input className="form-check-input mx-3" onClick={()=>props.toggleTheme("light")} type="radio" name="exampleRadios" id="flexSwitchCheckDefault" />Light Theme
                <input className="form-check-input mx-3" onClick={()=>props.toggleTheme("green")} type="radio" name="exampleRadios" id="flexSwitchCheckDefault" />Green Theme
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.protoTypes = {
    title:String.isrequired,
    about:String
}

Navbar.defaultProps={
    title:"Text Editor",
    about:"About Text Editor"
  }
   


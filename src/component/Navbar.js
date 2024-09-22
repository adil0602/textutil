import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="#">{props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    
                  </li>
                  {/* <li className="nav-item mx-3">
                    <Link className="nav-link" to="/about">{props.about}</Link>
                  </li> */}
                </ul>
                {/* <div className="d-flex">
                  <div className="bg-#042743 rounded mx-2" onClick={()=>{props.toglemode('#042743')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                  <div className="bg-danger rounded mx-2" onClick={()=>{props.toglemode('danger')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                  <div className="bg-success rounded mx-2" onClick={()=>{props.toglemode('success')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                  <div className="bg-warning rounded mx-2" onClick={()=>{props.toglemode('warning')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                </div> */}
                 <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>{/*props mode dark haito light or light haito dark */}
            <input className="form-check-input" type="checkbox" onClick={()=>{props.toglemode(null)}} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ToggleMode</label>
          </div>
              </div>
            </div>
          </nav>
  )
}
Navbar.prototype={
    // when set string then we use string otherwise we use number then cosole say error
    title:PropTypes.string.isRequired,
    about:PropTypes.string
}
Navbar.defaultProps={
    // when not set title then see this in page
    title:'Set title',
    about:'About us'
}


import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import  './css/Navbar.css';
class Navbar extends Component{
    render(){
        return(
            <nav className="navbar bg-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <p className="nav-link">     
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTZOtUauVgzRYT4PKhdZ3CNhI3uQAB7y8Svz-2-7D5YmSDiDCdupyXbYCe0s0L-43lg&usqp=CAU" id="insta-pic"/>
                  </p>
                </li>
                <li className="nav-item">
               
                  
                  <Link to="/signup" className='nav-link'> <i className="fa-solid fa-house me-3"></i> SignUp</Link>
                 
                </li>
                <li className="nav-item">
                <Link to="/signup" className='nav-link'> <i className="fa-solid fa-message me-3"></i>Messages </Link>
                  
                </li>
                <li className="nav-item">
                <Link to="/signup" className='nav-link'> <i className="fa-solid fa-comment me-3"></i>Notifications</Link>
                  
                </li>
                <li className="nav-item">
                <Link to="/signup" className='nav-link'><i className="fa-sharp fa-solid fa-plus me-3"></i>Create </Link>
                  
                </li>
                <li className="nav-item">
                <Link to="/signup" className='nav-link'><i className="fa-solid fa-user me-3"></i>Profile </Link>
                  
                </li>
              </ul>
            </div>
          </nav> 
            
        )
    }

}

export default Navbar;
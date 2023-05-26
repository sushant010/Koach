import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>



  <nav class="navbar navbar-expand-lg navbar-light">
  
  <div class="container">
   
    <Link to="/">
      <img
        src="https://photos.wellfound.com/startups/i/9254137-a3c818fd13f3178dd2ca40d34a9b72c7-medium_jpg.jpg?buster=1684824309"
        height="42"
        width="42"
        alt="Koachoff"
        loading="lazy"
        style={{marginTop: "-1px"}}
      /> 
    </Link>
   


     

      <div class="d-flex align-items-center">     
       <Link to="/Userdata"><button type="button" class="btn btn-primary btn-lg me-3">
           User Data
        </button></Link>
       
      </div>
    
    
  </div>
 
</nav>


    </div>
  )
}

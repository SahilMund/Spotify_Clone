import React ,{ useEffect } from 'react'
import '../../style/LogIn.css';
import { loginUrl } from '../spotify';


const LogIn = () => {

   
    return (
        <div className="login">        
            {/* spotify logo */}
            <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
            {/* login with spotify button */}
            <a href={loginUrl}>LOGIN TO SPOTIFY</a>
        </div>
    )
}

export default LogIn

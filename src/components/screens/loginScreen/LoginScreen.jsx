import React from 'react'

import './LoginScreen.scss'

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="youtube logo" />
        <button>Login With Google</button>
        <p>This Clone Project is Made Using YouTube Data API.</p>
      </div>
    </div>
  );
}

export default LoginScreen
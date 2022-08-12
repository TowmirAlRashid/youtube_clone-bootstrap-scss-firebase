import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../redux/actions/authAction'
import { useNavigate } from 'react-router-dom'

import './LoginScreen.scss'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const accessToken = useSelector(state => state.auth.accessToken)

  const navigate = useNavigate()

  useEffect(() => {
    if (accessToken) {
      navigate('/')
    }
  }, [accessToken, navigate])

  const handleLogin = () => {
    dispatch(login())
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="youtube logo" />
        <button onClick={handleLogin}>Login With Google</button>
        <p>This Clone Project is Made Using YouTube Data API.</p>
      </div>
    </div>
  );
}

export default LoginScreen
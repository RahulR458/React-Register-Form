// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      <div className='main-container'>
        <div className='form-container'>
          <div className='form-title-container'>
            <h5>START FOR FREE</h5>
            <p>Create <br />your account</p>
          </div>
          <form action="">
            <div className='name-container'>
              <div className='first-name-container'>
                <label htmlFor='first-name'>First Name:</label><br />
                <input type='text' id='first-name' name='first-name' />
              </div>
              <div className='last-name-container'>
                <label htmlFor='last-name'>Last Name:</label><br />
                <input type='text' id='last-name' name='last-name' />
              </div>
            </div>
            <div className='email-container'>
              <label htmlFor='email'>Email:</label><br />
              <input type='text' id='email' name='email' />
            </div>
            <div className='gender-container'>
              <label htmlFor="gender">Gender:</label><br />
              <label htmlFor="male">Male</label>
              <input type="radio" id="male" name="male" value="male" />
              <label htmlFor="female">Female</label>
              <input type="radio" id="female" name="gender" value="Female" /><br />
            </div>
            <div  className='languague-container'>
              <label htmlFor="gender">Languague:</label><br />
              <select id="gender" name="gender">
                <option value="">Select</option>
                <option value="">Malayalam</option>
                <option value="">English</option>
                <option value="">Hindi</option>
              </select>
            </div>
            <button type='submit'>Create account</button>
          </form>
        </div>
        {/* <div className='video-container'> */}
          <video className='video-container' src="/public/video.mp4" type="video/mp4" ></video>
        {/* </div> */}
      </div>
    </>
  )
}

export default App

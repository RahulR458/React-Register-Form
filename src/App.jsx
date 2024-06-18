// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

function App() {

  const [field, setField] = useState({
    firstName:'',
    lastName:'',
    email:'',
    gender:'',
    country:''
  })

  const [errorField, setErrorField] = useState({
    firstName: false,
    lastName: false,
    email: false,
    gender: false,
    country: false
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (handleChangeOnSubmit()) {
      console.log("valid");
      return
    }
    console.log("invalid");
    console.log(field);
  }

  const handleChange = (e)=>{
      setField((prevField) => ({...prevField, [e.target.name]: e.target.value}))
      isFormValidOnBlur(event)
  }

  //  form validation Solution 1___________

  // const isFormValid = () => {
  //   if( field.firstName == '' || field.lastName == ''){
  //     setErrorField((prev) => ({...prev, firstName : true, lastName : true}) )
  //     return false
  //   }else{
  //     setErrorField((prev) => ({...prev, firstName : false, lastName : false}) )
  //     return true
  //   }
  // }

  // Solution 2_____________________

  const handleChangeOnSubmit = () =>{
    const error = {
      firstName: false,
      lastName: false,
      email: false,
      gender: false,
      country: false
    }

    if (field.firstName == "") {
      error.firstName = true;
    }
    if (field.lastName == "") {
      error.lastName = true;
    }
    if (field.email == "") {
      error.email = true;
    }
    if (field.gender == "") {
      error.gender = true;
    }
    if (field.country == "") {
      error.country = true;
    }
    
    setErrorField(error);

    if(Object.values(error).some((error)=>error === true)){
      return false
    }
    return true
  }

  const isFormValidOnBlur = (event) => {
      const {name, value} = event.target;
      let error = false

      if (name === "firstName" && value === "") {
        error = true
      }
      else if (name === "lastName" && value === "") {
        error = true
      }
      else if (name === "email" && (value === "" || !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value))) {
        error = true
      }
      else if (name === "gender" && value === "") {
        error = true
      }
      else if (name === "country" && value === "") {
        error = true
      }

      setErrorField((prevField)=>({...prevField,[name]: error}))
  }
 

  return (
    <>
      <div className='main-container'>
        <div className='form-container'>
          <div className='form-title-container'>
            <h5>START FOR FREE</h5>
            <p>Create <br />your account</p>
          </div>
          <form action="" autoComplete='off' onSubmit={handleSubmit}>
            <div className='name-container'>
              <div className='first-name-container'>
                <label htmlFor='first-name'>First Name: <span className='important'>*</span></label><br />
                <input type='text' id='first-name' name='firstName' onChange={handleChange} onBlur={isFormValidOnBlur} />
              </div>
              <div className='last-name-container'>
                <label htmlFor='last-name'>Last Name: <span className='important'>*</span></label><br />
                <input type='text' id='last-name' name='lastName' onChange={handleChange} onBlur={isFormValidOnBlur}/>
              </div>
            </div>
            {errorField.firstName && errorField.lastName && <p className='danger'>First & Last Name is required</p>}
            <div className='email-container'>
              <label htmlFor='email'>Email: <span className='important'>*</span></label><br />
              <input type='text' id='email' name='email' onChange={handleChange} onBlur={isFormValidOnBlur}/>
            </div>
            {errorField.email && <p className='danger'>Email is required</p>}
            <div className='gender-container'>
              <label htmlFor="gender">Gender:</label><br />
              <div  className='radio-buttons'>
              <label htmlFor="male">Male</label>
              <input type="radio" className='male' id="male" name="gender" value="male" onChange={handleChange} onBlur={isFormValidOnBlur} />
              <label htmlFor="female">Female</label>
              <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} onBlur={isFormValidOnBlur}/><br />
              </div>
            </div>
            {errorField.gender && <p className='danger'>Gender is required</p>}
            <div  className='languague-container'>
              <label htmlFor="country">Country:</label><br />
              <select id="country" name="country" onChange={handleChange} onBlur={isFormValidOnBlur}>
                <option value="">Select</option>
                <option value="india">India</option>
              </select>
            </div>
            {errorField.country && <p className='danger'>Country is required</p>}
            <button type='submit' >Create account</button>
          </form>
        </div>
        {/* <div className='video-container'> */}
          <video loop autoPlay className='video-container' src="/public/video.mp4" type="video/mp4" ></video>
        {/* </div> */}
      </div>
    </>
  )
}

export default App

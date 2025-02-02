import { useState } from 'react'
import './App.css'

function App() {

  const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
  })

  const [errors,setErrors] = useState({});

  const handleInput = (e)=>
  {
    const{name,value} = e.target;

    setFormData(
     {
      ...formData,
      [name]: value
     }
    )
    
  }

  const submitButtonHandler = (e)=>
  {
    e.preventDefault();
    validation();
    console.log(errors);
    console.log(formData);
  }

  const validation = ()=>{
    const newError = {};

      if(!formData.firstName.trim())
      {
        newError.firstName = "Please Enter FirstName";
      }

      if (!formData.lastName.trim()) {
        newError.lastName = 'Last Name is required';
      }
  
      if (!formData.email.trim()) {
        newError.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newError.email = 'Email is invalid';
      }
  
      if (!formData.password.trim()) {
        newError.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newError.password = 'Password must be at least 6 characters';
      }
  
      if (!formData.confirmPassword.trim()) {
        newError.confirmPassword = 'Confirm Password is required';
      } else if (formData.confirmPassword !== formData.password) {
        newError.confirmPassword = 'Passwords do not match';
      }

      setErrors(newError);
    }
  
  return (
    <>
    <div className='min-h-screen min-w-screen'>
      <div className='justify-center items-center m-20 gap-5'>
      <h1>Validation Forms</h1>
      <form className='grid mt-4 gap-4'>
        <input
        className='border rounded gap-4 p-3'
        placeholder='Enter Your FirstName'
        value={formData.firstName}
        onChange={handleInput}
        name='firstName'
        />
        {
          errors.firstName && (
            <p className='text-red-900 text-sm'>{errors.firstName}</p>
          )
        }
        <input
        className='border rounded gap-4 p-3'
        placeholder='Enter Your LastName'
        value={formData.lastName}
        onChange={handleInput}
        name='lastName'
        />
        {
          errors.lastName && (
            <p className='text-red-900 text-sm'>{errors.lastName}</p>
          )
        }
        <input
        className='border rounded gap-4 p-3'
        placeholder='Enter Your Email'
        value={formData.email}
        onChange={handleInput}
        name='email'
        />
        {
          errors.email && (
            <p className='text-red-900 text-sm'>{errors.email}</p>
          )
        }
        <input
        className='border rounded gap-4 p-3'
        placeholder='Enter Your Password'
        type='password'
        value={formData.password}
        onChange={handleInput}
        name='password'
        />
        {
          errors.password && (
            <p className='text-red-900 text-sm'>{errors.password}</p>
          )
        }
        <input
        className='border rounded gap-4 p-3'
        placeholder='Enter Your Confirm Password'
        type='password'
        value={formData.confirmPassword}
        onChange={handleInput}
        name='confirmPassword'
        />
        {
          errors.confirmPassword && (
            <p className='text-red-900 text-sm'>{errors.confirmPassword}</p>
          )
        }
        <button onClick={submitButtonHandler}>Submit</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default App

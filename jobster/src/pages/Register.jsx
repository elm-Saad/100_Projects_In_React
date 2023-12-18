import { useState, useEffect } from 'react'
import { FormRow, Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember:true
}
const Register = () =>{
    const [values,setValues] = useState(initialState)

    const handleChange = (e) =>{
        setValues(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }


    return <Wrapper className='full-page'>
    <form className='form' onSubmit={handleSubmit}>
      <Logo />
      <h3>Login</h3>

      {/* fields */}
      <FormRow type={'text'} name={'name'} value={values.name} handleChange={handleChange} />
      <FormRow type={'text'} name={'name'} value={values.name} handleChange={handleChange} />
      <FormRow type={'text'} name={'name'} value={values.name} handleChange={handleChange} />

      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  </Wrapper>
}
export default Register
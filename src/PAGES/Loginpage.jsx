import {useState} from 'react'
import logo from '../assets/ziklogo.PNG'
import { Link, useNavigate } from 'react-router-dom'
import './Loginpage.css'
import axios from 'axios'
import { CircularProgress } from '@mui/material'

const Loginpage = () => {

     const navigate = useNavigate()
//   const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState ('')
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState()
  const handlelogin = async () =>{
    setLoading(true)
    setError('')
    try {
        const res = await
        axios.post('https://students-learning-api.onrender.com/api/auth/login', {email,password})
        console.log(res)
        navigate('/Home')
    } catch (error) {
        console.error(error)
        setError(error?.response?.data?.error)
    }finally{
        setLoading(false)
    }
  []}
  return (
    <>
    
        <div className="baground">
           
            <div className="body">
                <div className="logo">
                    <img src={logo} alt="" width="70px" />
                </div >
                <div className="main">
                    <h1>{error ? error :" LOGIN"}</h1>
                   <form onSubmit={(e) => e.preventDefault()} >
                    <input type="text" placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <br /><br />


                    <input type="password"  placeholder='Password'
                     value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <br /><br />
                    <button onClick={handlelogin}>{loading ? <CircularProgress size={20} color='white'/> : "LOGIN"  }</button>
                   </form>
                   <p>I dont have an account? <Link to='/Registerpage'>sign up</Link></p>
                </div>

            </div>
        </div>
    </>
  )
}

export default Loginpage
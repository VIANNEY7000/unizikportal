import {useState} from 'react'
import './Registerpage.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/ziklogo.PNG'
import axios from 'axios'
import { CircularProgress } from '@mui/material'


const Registerpage = () => {

   const navigate = useNavigate()
  const [email, setEmail] = useState ('')
  const [password, setPassword ] = useState ('')
  const [address, setAddress ] = useState ('')
  const [lastName, setLastName ] = useState ('')
  const [firstName, setFirstName ] = useState ('')
  const [phoneNumber, setPhoneNumber ] = useState ('')
  const [loading, setLoading] = useState (false)
  const [error, setError] = useState()
  const handleRegister= async () => {
      setLoading(true)
      setError('')
      try {
        const data = await
        axios.post("https://students-learning-api.onrender.com/api/auth", {firstName, lastName, password, email, phoneNumber, address})
        console.log(data)
       navigate('/')

      } catch (error) {
        console.error(error)
        setError(error.response.data.error)
      }finally{
        setLoading(false)
      }
    
  }
  return (
    <div>
        <div className="baground">
            <div className="body2">
               <div className="logo2">
                <img src={logo} alt="" width="70px" />
               </div>
               <div className="main2">
                <h1>{error ? error : "REGISTER"}</h1>
                <form onSubmit={(e) => {e.preventDefault(); handleRegister();}}>
                  <input type="text" placeholder='First Name'
                   value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}/>
                  <br /><br />

                  <input type="text" placeholder='Last Name'
                   value={lastName}
                   onChange={(e) => setLastName(e.target.value)}/>
                  <br /><br />

                  <input type="text" placeholder='Email'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
                  <br /><br />

                  <input type="text" placeholder='Password'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
                  <br /><br />

                  <input type="number" placeholder='Phone Number'
                   value={phoneNumber}
                   onChange={(e) => setPhoneNumber(e.target.value)}/>
                  <br /><br />

                  <input type="text" placeholder='Address'
                   value={address}
                   onChange={(e) => setAddress(e.target.value)}/>
                  <br /><br />
                   <button>{loading ? <CircularProgress size={20} /> : "REGISTER"}</button>
                </form>
               </div>
               <p><Link to='/' >Back to LOGIN</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Registerpage
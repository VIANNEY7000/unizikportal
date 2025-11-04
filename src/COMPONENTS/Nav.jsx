import React from 'react'
import {Button} from '@mui/material'
import profile from '../assets/profile.JPENG.jpg'
import './Nav.css'
import logo from '../assets/ziklogo.PNG'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Nav = () => {

    
const navigate = useNavigate()
const handlelogout =() => {
    alert('logedout successfully')
    navigate('/')
}
  return (

    <div className='all'>
        <div className="flex">
            <div className="profile">
                <div className="logo">
                    <img src={profile} alt="" width={50} />
                </div>
                <div className="name">
                    User
                </div>
            </div>
            <div className="logout">
                <Button onClick={handlelogout}>Logout</Button>
            </div>
        </div>
    </div>
  )
}

export default Nav
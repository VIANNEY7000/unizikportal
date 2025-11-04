import React from 'react'
import'./Home.css'
import logo from '../assets/ziklogo.PNG'
import profile from '../assets/profile.JPENG.jpg'
import {FaChalkboardTeacher, FaUserFriends, FaCog, FaHome, FaChartBar} from "react-icons/fa"
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
import Nav from '../COMPONENTS/Nav'

const Home = () => {
  return (
      
   <>
   <Nav/>
    <div className='container'>
      <div className="cards">
          <div className="box">
              <FaHome size={30} color='navy'/><br />
              <a href="">DASHBORD</a>
          </div>
          <div className="box">
                <FaUserFriends size={30}  color='navy'/>
                <a href=""><Link to='/Users'>STUDENTS</Link></a>
          </div>
          <div className="box">
                <FaChartBar size={30}  color='navy'/>
                <a href=""><Link to='/Result'>RESULTS</Link></a>
          </div>
          <div className="box">
                <FaCog size={30}  color='navy'/>
                <a href=""><Link to='/Settings'>SETTINGS</Link></a>
            </div>
          </div>
   </div>
   </>
  )
}

export default Home
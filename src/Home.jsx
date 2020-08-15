import React from 'react';
import { NavLink } from 'react-router-dom';
import img from './images/img.jpg'
import Common from './Common';
const Home =() =>{
    return(
        <>
         <Common name='Grow your business with ' imgsrc={img} visit='/service' btname="Get started"/>
       
        </>
    )
}
export default Home;
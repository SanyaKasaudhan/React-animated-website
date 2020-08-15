import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../src/images/img1.jpeg'
import Common from './Common';
const About =() =>{
    return(
        <>
        <Common name='Welcome to About page ' imgsrc={img1} visit='/contact' btname="Contact now"/>
        </>
    )
}
export default About;
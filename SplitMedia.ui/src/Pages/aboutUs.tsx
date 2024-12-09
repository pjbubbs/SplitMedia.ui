import PageHeader from '../components/pageHeader'
import { useState } from 'react';
import "./aboutUs.css"
import PageFooter from '../components/pageFooter';

export default function AboutUs() {
  
  const [q1Visible, setQ1Visible] = useState("none");
  const [q2Visible, setQ2Visible] = useState("none");
  const [q3Visible, setQ3Visible] = useState("none");
  const [q4Visible, setQ4Visible] = useState("none");
  
  const handleQ1Clicked = () => {
    if(q1Visible=="none") {
      setQ1Visible("block");
    } else {
      setQ1Visible("none");
    }
  }

 
  const handleQ2Clicked = () => {
    if(q2Visible=="none") {
      setQ2Visible("block");
    } else {
      setQ2Visible("none");
    }
  }
 
  const handleQ3Clicked = () => {
    if(q3Visible=="none") {
      setQ3Visible("block");
    } else {
      setQ3Visible("none");
    }
  }
 
  const handleQ4Clicked = () => {
    if(q4Visible=="none") {
      setQ4Visible("block");
    } else {
      setQ4Visible("none");
    }
  }

  return (
      <>
        <PageHeader/>
       <h1>About Us</h1>
       <h3>Sub Header</h3>
       <p>about us blurb</p>
       <h2>FAQs</h2>
       <hr></hr>
       <div className='QuestionHeader' onClick={handleQ1Clicked}>Q1. Lorem ipsum dolor sit amet?</div>
       <div id="q1" style={{display: q1Visible}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat mauris fringilla at. Morbi luctus molestie neque in porta.
       </div>
       <hr></hr>
       <div className='QuestionHeader' onClick={handleQ2Clicked}>Q2. Lorem ipsum dolor sit amet?</div>
       <div id="q2" style={{display: q2Visible}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat mauris fringilla at. Morbi luctus molestie neque in porta.
       </div>
       <hr></hr>
       <div className='QuestionHeader' onClick={handleQ3Clicked}>Q3. Lorem ipsum dolor sit amet?</div>
       <div id="q3" style={{display: q3Visible}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat mauris fringilla at. Morbi luctus molestie neque in porta.
       </div>
       <hr></hr>
       <div className='QuestionHeader' onClick={handleQ4Clicked}>Q4. Lorem ipsum dolor sit amet?</div>
       <div id="q4" style={{display: q4Visible}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat mauris fringilla at. Morbi luctus molestie neque in porta.
       </div>
       <hr></hr>
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat mauris fringilla at. Morbi luctus molestie neque in porta. Integer eu mauris cursus, pretium ex non, eleifend nulla. Donec porttitor, leo sit amet finibus iaculis, quam nibh commodo ante, sed pulvinar quam nunc ac diam.
       </p>
       <p>
       Phase 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est quis velit suscipit varius ac eget ante. Vestibulum suscipit urna felis, nec mollis est pharetra at. Nam porta sodales sapien, in placerat mauris fringilla at. Morbi luctus molestie neque in porta. Integer eu mauris cursus, pretium ex non, eleifend nulla. Donec porttitor, leo sit amet finibus iaculis, quam nibh commodo ante, sed pulvinar quam nunc ac diam.
       </p>
       <PageFooter></PageFooter>
      </>      
    );
  }
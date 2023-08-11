import React, { useState} from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconLinkedin } from './assets/icons/linkedin.svg';
import { Modal } from './components/Model';

import "./App.css";
import logo from '../src/assets/icons/logo.png'

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig)

function App(){
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(showModal => !showModal);
  };
    return (
      <div>
      <a href="."><img src={logo} style={{paddingLeft:40,height:100,width:200}} alt="TakeMyKare" /></a>
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Apke Pass Apke Sath</a>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100094754125429" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://www.linkedin.com/company/takemykare/" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconLinkedin className="icon" />
            </a>
            </div>
        </div>
              
        <div className="content"  onClick={openModal} >
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          {/* <a href="mailto:takemykare@gmail.com"> </a> */}
            <div className="cta">Book service</div>
          </div>
        {/* <div className="content"  onClick={openModal} >
        <div className="title-holder">
            <h1>Why Partner Us ?.</h1>
            <p>Website coming soon.</p> 
            <p>Website coming soon.</p> 
            <p>Website coming soon.</p> 
            <p>Website coming soon.</p> 
            
          </div>
           <div className="cta">Become our partner</div>
          </div> */}
          
          
         
          
        
        <Modal showModal={showModal} setShowModal={setShowModal} />
        
     </div> 
      </div>
    );
  }


export default App
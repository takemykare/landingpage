import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconLinkedin } from './assets/icons/linkedin.svg';
import "./App.css";
import logo from '../src/assets/icons/logo.png'

class App extends React.Component {
  render = () => {
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
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:takemykare@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        {/* <div className="footer">
          <span>made by <a className="underlined" href="https://github.com/arkn98" target="_blank" rel="noopener noreferrer">arkn98</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/arkn98/coming-soon" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div> */}
      </div></div>
    );
  }
}

export default App;
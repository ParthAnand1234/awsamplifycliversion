import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Profile from './Profile.js';
import {withAuthenticator} from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';

function App() {
  
 
  
  
  
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <p>Mr.classy</p>
        <p> ⭐️ best product</p>
        <p> ⭐️high qualitys`` </p>
        <a
          className="App-link"
          href="https://instagram.com/mr.classy_menswears?igshid=uh8octvwycqy"
          target="_blank"
          rel="noopener noreferrer"
        >
         CLICK HERE FOR ONLINE SHOPPING 123456
        </a>
         <p>  *contact for any query 👇🏻</p>
        <p>  @8439332229</p>
     
        <Home/>
        <Profile/>
      </header>
    </div>
  );
}

export default withAuthenticator(App, {includeGreeting: true});

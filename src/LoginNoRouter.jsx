import React from 'react'
import netlifyIdentity from 'netlify-identity-widget';
import styled from 'styled-components';
import logoType from './images/logotype1.png';
import './Login.css';

window.netfliyIdentity = netlifyIdentity;
netlifyIdentity.init();
// const user = netlifyIdentity.currentUser();

const Button = styled.button`
  background-color: #fff;
  color: #333;
  width: 100%;
  padding: 15px 45px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
  margin-left: 5px;
`
const loginButtonPress = () => {
  // alert("button click");
  netlifyIdentity.open('login');
}

const signUpButtonPress = () => {
  // alert("button click");
  netlifyIdentity.open('signup');
}

//THIS IS WHERE THE PAGE COMPONENT STARTS
const LoginPageNoRouter = () => {
  // const navigate = useNavigate();
  
  const handleLogin = (params) => {
    console.log('handle login - ', params);  
    // navigate("/", { replace : true});
  }

  netlifyIdentity.on('login', user => handleLogin(user))
  
  return (
    <div>
      <div className='LoginPanel'>
        <img src={logoType} className="logoType" />
        <hr className='horizontalLine' />
        <div className="ButtonContainer">
          <Button onClick={loginButtonPress}>
            Log In
          </Button>
          <Button onClick={signUpButtonPress}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>  
  );
};

export default LoginPageNoRouter

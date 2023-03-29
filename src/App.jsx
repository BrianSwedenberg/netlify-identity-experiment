import React from 'react';
import Protected from './Protected';
import Public from './Public';
import LoginPageNoRouter from './LoginNoRouter';
import netlifyIdentity from 'netlify-identity-widget';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import { Outlet, Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router';


function AuthExample() {
  return (
    <body className='main-body'>
      <LoginPageNoRouter />
    </body>
  );
  
}
export default AuthExample;

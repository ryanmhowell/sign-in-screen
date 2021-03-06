import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react';
import './SignIn.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.signInWithGoogle = this.signInWithGoogle.bind(this);
        this.signInNormally = this.signInNormally.bind(this);
    }
    
    
    signInWithGoogle(e) {
        e.preventDefault();
        alert("google sign in has been clicked");
    }
    
    signInNormally(e) {
        e.preventDefault();
        alert("normal sign in has been clicked");
    }
    
    
    render() {
        return (
         <div className="viewport">
            <div id="login">
              <form>
              <p className="heading">Sign in to your account</p>
              <button id="google-sign-in-button" type="submit" onClick={this.signInWithGoogle}><i id="google-icon" className="fab fa-google" aria-hidden="true"></i>Sign in with Google</button>
              <div id="divider">  
                <div className="line"></div><span id="or">OR</span><div className="line"></div>
              </div>
              <input id="email" type="text" name="email" placeholder="EMAIL" />
              <input id="password" type="password" name="password" placeholder="PASSWORD" />
              <label><input id="keep-logged-in" type="checkbox" /><span id="checkbox-label">Keep me logged in</span></label>
              <button id="sign-in-button" type="submit" onClick={this.signInNormally}>Sign in</button>
              </form>
              <a id="forgot-password-link" href="#">Forgot your password?</a>
              <p id="signup-p">No account yet?<a id="signup-link" href="#">Sign up</a></p>
            </div>
         </div>
        );
    }
}



export default SignIn;
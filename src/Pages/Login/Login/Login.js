import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      // for reset password
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(user){
        navigate(from, { replace: true });
      }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        // console.log(email, password);
        signInWithEmailAndPassword(email, password);

        

        }
        const navigateRegister = event => {
            navigate('/register');
    }

    const resetPassword = async ()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert ('sent email');
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-info'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            
            <Button variant="info w-50 mb-2 mx-auto d-block" type="submit">
                Login
            </Button>
            </Form>
            <p>New to Dentist-Bro? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget password...? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
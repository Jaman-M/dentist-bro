import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        
         errorElement= <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
    }

    if(loading ){
        return <Loading></Loading>
    }

    if(user){
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '2px'}} className='bg-primary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{height: '2px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                 className='btn btn-info d-block mx-auto w-50'>
                    <img style={{width: '40px'}} src={google} alt="" />
                    Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;
import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-info'>Question and Answer</h2>
            <h4>Q-1:  Difference between authorization and authentication</h4> 
            <p><strong>Ans:</strong>Authentication is the identity of users. And Authorization determines what resources a user can access. <br />
            Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.--Authorization works through settings that are implemented and maintained by the organization. <br />
            Authentucation is the first steps of a good idnentity and access management system. but Authorization takes place after authentication. <br />
            Authentucation needs usually user’s login details. Authorization needs user’s privilege or security levels.

            </p>

            <h4>Q-2: Why are you using firebase? What other options do you have to implement authentication?</h4> 
            <p><strong>Ans:</strong>I use firebase it's is easy to start a project with firebase or add a firebase to my project. it is painless authentication with google,facebook, twitter. github,email or phone.quick setup authentication Https by default - secure http traffic without setting up certificates.Any static html/javascript content can be hosted.
            there are some other option for auhtentication back4app is one of them.</p>
            <h4>Q-3: What other services does firebase provide other than authentication</h4> 
            <p><strong>Ans:</strong> firebase other services are-
            <li>Cloud Messaging</li>
            <li>Cloud Firestore</li>
            <li>Cloud Functions</li>
            <li>Hosting</li>
            <li>Google Analytics</li>
            <li>Predictions</li>
            <li>Storage</li>
            </p>
        </div>
    );
};

export default Blogs;
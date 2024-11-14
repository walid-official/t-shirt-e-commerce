import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase-init';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth';
export const authContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log("currently Logged user",currentUser);
            setUser(currentUser)
        })
            return () => {
                unSubscribe();
            }
    },[])

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .then((result) => {
                console.log('User signed in:', result.user);
            })
            .catch((error) => {
                // Handle Errors here
                console.error('Error during sign-in:', error);
            });
    }

    const signInWithFacebook = () => {
        const facebookProvider = new FacebookAuthProvider()
        return signInWithPopup(auth, facebookProvider)
        .then((result) => {
            console.log('User signed in:', result.user);
        })
        .catch((error) => {
            // Handle Errors here
            console.error('Error during sign-in:', error);
        });
    }

    const signInWithGithub = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
        .then((result) => {
            console.log('User signed in:', result.user);
        })
        .catch((error) => {
            // Handle Errors here
            console.error('Error during sign-in:', error);
        });
    }

    const signInWithTwitter = () => {
        const twitterProvider = new TwitterAuthProvider();
        return signInWithPopup(auth, twitterProvider)
        .then((result) => {
            console.log('User signed in:', result.user);
        })
        .catch((error) => {
            // Handle Errors here
            console.error('Error during sign-in:', error);
        });
    }



    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub,
        signInWithTwitter
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;
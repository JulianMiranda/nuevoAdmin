import React, {useEffect, useState} from 'react';
import {Login, useLogin} from 'react-admin';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import {FirebaseConfig} from '../firebase/config';

firebase.initializeApp(FirebaseConfig);

const uiConfig = {
	signInFlow: 'popup',
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID
	],
	callbacks: {
		signInSuccessWithAuthResult: () => false
	}
};

const SignInScreen = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const login = useLogin();

	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged((user) => setIsSignedIn(!!user));
		return () => unregisterAuthObserver();
	}, []);

	if (isSignedIn) login();

	return (
		!isSignedIn && (
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
		)
	);
};

export const CustomLoginPage = (props) => (
	<Login {...props}>
		<SignInScreen />
	</Login>
);

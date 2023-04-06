import React from 'react';
import { Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { dispatchUserData } from './Store'

GoogleSignin.configure({
    webClientId: '327683009621-6fl76rchu6659r4e1ue7p44aojmbs1ln.apps.googleusercontent.com'
});

function GoogleSignIn() : JSX.Element {
    return (
        <Button 
        title="Google Sign-In"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with google'))}
        />
    );
}

async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true});
    const { idToken, user:{ id } } = await GoogleSignin.signIn();
    dispatchUserData('ADD_USER', id);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
}

export default GoogleSignIn;
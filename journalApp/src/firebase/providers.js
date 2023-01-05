import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
  try {
    const result = await signInWithPopup( FirebaseAuth, googleProvider );
    // const credentials = GoogleAuthProvider.credentialFromResult( result );

    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      //user info
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error) {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    return {
      ok: false,
      errorCode,
      errorMessage,
      email,
      credential,
    }
  }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
  try {
   
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = resp.user;
    
    //actualizar displayName en firebase
    await updateProfile(FirebaseAuth.currentUser, {displayName});
    
    console.log(resp)
    return {
      ok: true,
      uid, photoURL, email, displayName,
    }

  } catch( error ){
    return {ok: false, errorMessage: error.message}
  }
}

export const loginWithEmailPassword = async({ email, password }) => {

  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

    // console.log(resp);
    const { uid, displayName, mail = email, photoURL } = resp.user;
    return {
      ok: true,
      uid,
      displayName,
      mail,
      photoURL,      
    }
  } catch( error ) {
    // console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
}
import { async } from '@firebase/util';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote, savingNewNote } from './journalSlice';

export const startNewNote = () => {
  return async( dispatch, getState ) => {

    dispatch( savingNewNote() );

    // console.log(getState());
    //tomar uid
    const { uid } = getState().auth;
    
    //crear nota
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    //referencia a lugar donde quiero guardar elemento en la base de firebase
    const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
    const setDocResp = await setDoc( newDoc, newNote );

    newNote.id = newDoc.id;
    //! dispatch
    dispatch( addNewEmptyNote( newNote ) );

    dispatch( setActiveNote( newNote ) );
  }
}

export const startLoadingNotes = () => {
  return async( dispatch, getState ) => {

    const { uid } = getState().auth;

    console.log(uid);

  }
}
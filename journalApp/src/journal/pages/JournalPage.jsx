
import { useDispatch, useSelector, useStore } from 'react-redux'
import { startNewNote } from '../../store/journal'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView, NoteView } from '../../views'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {

  const { isSaving, active } = useSelector( state => state.journal );

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    
    //tarea asincrona
    dispatch( startNewNote() );
    
  }

  return (
    <JournalLayout>
      
      {
        (!!active)
        ? <NoteView note={ active }/>
        : <NothingSelectedView />
      }
      
      <IconButton
        onClick={ onClickNewNote }
        disabled={ isSaving }
        size='large'
        sx={{ 
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>

    </JournalLayout>
  )
}

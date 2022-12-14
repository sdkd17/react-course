import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../journal/components"

export const NoteView = () => {
  return (
    <Grid 
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction={'row'}
      justifyContent={ 'space-between' }
      alignItems={ 'center' }
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={ 39 } fontWeight='light'> 13 de Diciembre, 2022 </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, marginRight: 1 }}></SaveOutlined>
          Guardar
        </Button>
      </Grid>

      <Grid container >
        <TextField 
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: 'none', mb: 1 }}
        />

        <TextField 
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio en el dia de hoy?"
          minRows={5}
          />
      </Grid>

      {/* Image Gallery */}
      <ImageGallery />


    </Grid>
  )
}

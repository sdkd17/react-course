import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'gersiok',
    email: 'mail.mail.com',
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const {name, value} = target;

    setFormState({
      ...formState,
      [name]: value //Propiedades computadas
    })
  }

  return (
    <>
      <h1>Formulario Simple</h1>

      <hr />

      <input 
        type="text"
        name="username"
        id=""
        className="form-control" 
        placeholder="Username"
        onChange={ onInputChange }
      />

      <input 
        type="email"
        name="email"
        id=""
        placeholder="mail@mail.com"
        className="form-control mt-2"
      />

      {
        (username === 'gersio') && <Message />
      }
    </>
  )
}

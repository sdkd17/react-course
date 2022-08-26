import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClickButton = () => {
    inputRef.current.select(); //marca el contenido del input como seleccionado
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        className="form-control"
        type="text"
        placeholder="Write Something"
      />

      <button 
        className="btn btn-primary mt-2"
        onClick={ onClickButton }
      >
        select
      </button>
    </>
  )
}

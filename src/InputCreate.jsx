import {useState, useEffect} from 'react'
function InputCreate () {
    const [inputValue, setInputValue] = useState("")
    const [clickedButton, setClickedButton] = useState(true)
    const urlApi = 'http://localhost:3000/create'
    useEffect(() => {
        const postNewTask = async () => {
            const payload = {title: inputValue}
            fetch(urlApi, {
                method: 'POST', // Método HTTP
                headers: {
                    'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                },
                body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
            })
            setInputValue("")
        }
        if (inputValue.trim() !== "") {
            postNewTask()
        }
    },[clickedButton])

//habria que usar form y onSubmit
    return (
        <>
        <input 
        type="text" 
        placeholder="Introduce nueva tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required/>
        <button type="button" onClick={() => setClickedButton(!clickedButton)}>Agregar Tarea</button>
        </>
    )
}

export default InputCreate

import { useState } from 'react'

function InputCreate () {
  const [title, setTitle] = useState('')
  const [res, setRes] = useState('')


  const haddleSubmit = async (event) => {
    event.preventDefault()

    const urlApiCreate = import.meta.env.VITE_APP_API_URL+'create'
    const payload = { title }

    try {
      const post = await fetch(urlApiCreate, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(payload),
      })

      if(post.ok) {
        const data = await post.json()
        setRes(data.title)
        setTitle('')
      }

    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
    <form onSubmit={haddleSubmit}>
      <input 
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Añade tarea'
        required
      />
      <button type='submit'>Añadir</button>
    </form>
    <div>{`Se ha enviado: ${res}`}</div>
    </>
  )
}

export default InputCreate
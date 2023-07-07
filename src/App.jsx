import { useState } from 'react'

function App() {
  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    edad: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
    console.log(value)
  }

  const handleForm = (event) => {
    event.preventDefault()
    console.log(values)
  }

  const cleanForm = () => {
    setValues({
      nombre: '',
      apellido: '',
      edad: '',
    })
  }

  const handleOnMouseOver = (event) => {
    event.preventDefault()
    setValues({
      nombre: 'El mouse',
      apellido: 'Se paso',
      edad: 'encima',
    })
  }
  const handleOnMouseOut = (event) => {
    event.preventDefault()
    console.log(event.keyCode)
    setValues({
      nombre: 'El mouse',
      apellido: 'Se saco',
      edad: 'del boton',
    })
  }
  const handleKeyPress = (event) => {
    event.preventDefault()
    console.log(event.keyCode)
    if (event.keyCode === 13) {
      setValues({
        nombre: 'Se',
        apellido: 'presiono',
        edad: 'Enter',
      })
    }
  }

  return (
    <div className='m-12'>
      <form
        onReset={cleanForm}
        onKeyUp={handleKeyPress}>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            First name
          </label>
          <input
            type='text'
            id='first_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='John'
            name='nombre'
            value={values.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            First name
          </label>
          <input
            type='text'
            id='first_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Doe'
            name='apellido'
            value={values.apellido}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            First name
          </label>
          <input
            type='text'
            id='first_name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='30'
            name='edad'
            value={values.edad}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          onClick={handleForm}
          type='submit'>
          OnClick
        </button>
        <button
          onMouseOver={handleOnMouseOver}
          type='submit'>
          onMouseOver
        </button>
        <button
          onMouseOut={handleOnMouseOut}
          type='submit'>
          onMouseOut
        </button>
        <button
          onKeyUp={handleKeyPress}
          type='submit'>
          onKeyUp
        </button>
        <button type='reset'>reset</button>
      </form>
      <div
        className={
          values.nombre != ''
            ? 'mt-10 flex flex-col justify-center items-center'
            : 'hidden'
        }>
        <p className='text-xl'>
          <span className='text-xl font-bold'>Nombre: </span>
          {values.nombre}
        </p>
        <p className='text-xl'>
          <span className='text-xl font-bold'>Apellido: </span>
          {values.apellido}
        </p>
        <p className='text-xl'>
          <span className='text-xl font-bold'>Edad: </span>
          {values.edad}
        </p>
      </div>
    </div>
  )
}

export default App

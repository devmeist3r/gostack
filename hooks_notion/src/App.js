import React, { useState, useEffect, useMemo, useCallback } from 'react'

function App() {
  const [techs, setTech] = useState([])
  const [newTech, setNewTech] = useState('')

  // componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('techs')

    if (storageTech) {
      setTech(JSON.parse(storageTech))
    }
  }, [])

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs))
  }, [techs])

  const handleAdd = useCallback(() => {
    setTech([...techs, newTech])
    setNewTech('')
  }, [newTech, techs])

  const techSize = useMemo(() => techs.length, [techs])

  return (
    <>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </>
  )
}

export default App

/**
 * useState
 *  -> função que podemos criar estados sem escrever o component em formato de classe
 *  # Antes tinhamos um grande objeto q tinha todos os estados, porem dessa forma cada state tem o seu proprio useState()
 *  # Ele recebe um array, onde o primeiro item é o estado (valor dele de inicialização) e o segundo é uma função que server para atualizar o estado
 * */

/**
 * useEffect
 * -> função que sobrepoem os metodos de ciclo de vida
 *  # Primeiro parametro é a função que vai ser executada, segundo é um array de dependencias que fica monitorando as variaveis
 * */

/**
 * useMemo
 * -> função usada para não chamar ele toda vez q o render é executado
 * # Primeiro parametro é a função que vai ser executada
 */

/**
 * useCallback
 * -> função para executar uma outra função
 * # Recomendando para funçoes que manipulam
 * */

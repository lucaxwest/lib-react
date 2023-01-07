import './App.css'
import { Form, Table, InputGroup, Button } from 'react-bootstrap'
import { useState } from 'react'
import { isDocument } from '@testing-library/user-event/dist/utils'

function App() {
  const [livros, setLivros] = useState([])
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [data, setData] = useState('')
  const [id, setID] = useState('')

  function cadastrar() {
    let livro = {
      titulo,
      autor,
      data,
      id: randomID(),
    }

    setLivros([livro, ...livros])
    alert('Livro cadastrado com sucesso')
    limparForm()
  }

  function excluir(titulo) {
    livros.forEach((livro, index) => {
      if (livro.titulo === titulo) {
        livros.splice(index, 1)
        setLivros([...livros])
        alert('Livro removido da biblioteca.')
      }
    })
  }

  function totalSoma() {
    let counter = 0
    
    livros.forEach((livro, i) => {
        counter++
    })
    return counter
  }

  function limparForm() {
    setTitulo('')
    setAutor('')
    setData('')
  }

  function randomID() {
    let array = 0

    for (let i = 0; i < array.length; i++) {
      array++
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="titulo">Adicione mais um livro à biblioteca</h1>
        <div class="input-container01">
          <InputGroup>
            <Form.Control
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value)
              }}
              className="input01 overflow-auto"
              placeholder="Título do livro"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup>
            <Form.Control
              value={autor}
              onChange={(e) => {
                setAutor(e.target.value)
              }}
              className="input01"
              placeholder="Nome do autor"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup>
            <Form.Control
              value={data}
              onChange={(e) => {
                setData(e.target.value)
              }}
              type="date"
              placeholder="D"
              dateFormat=""
            />
          </InputGroup>
        </div>

        <Button className="mb-5 btn" onClick={cadastrar}>
          Cadastrar livro
        </Button>


        <Table striped bordered hover>
          <tr class="tr01">
            <th>Título</th>
            <th>Autor</th>
            <th>Data</th>
            <th>ID</th>
            <th>Editar</th>
          </tr>
          <tbody>
          <div class="table-overflow">
            {livros.map((livro) => {
              return (
                <tr>
                  <td class="td-title">{livro.titulo}</td>
                  <td>{livro.autor}</td>
                  <td>{livro.data}</td>
                  <td>{livro.id}</td>
                  <td class="td-btn">
                    <Button
                      className="btn-delete"
                      onClick={() => {
                        excluir(livro.titulo)
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                )
              })}
              </div>
            </tbody>
          </Table>

      </div>
        <h6>Total de livros na biblioteca: {totalSoma(livros)}</h6>         
    </>
  )
}

export default App

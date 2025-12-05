import './App.css'
import Card from './components/Card'

function App() {
  const cursos = ["React", "HTML", "JavaScript"]

  return (
    <section>
      <h1>Hola Mundo desde React!</h1>
      <Card title={"curso react"} description={"en este curso aprenderas un nuevo framework"} />
      <Card title={"curso de bootstrap"} description={"en este curso aprenderas como desarrollar mejor fronted"} />
      <ul>
        {cursos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default App

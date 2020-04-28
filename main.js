const root = document.getElementById('root')
const e = React.createElement

const Titulo = () => {
    return e('h2', null, 'Hamburguesa')
}

const Descripcion = () => {
    return e('p', null, 'Hamburguesa con queso, tomate, lechuga')
}

const Imagen = () =>{
    return e('img')
}

const Icono = () =>{
    return e('i')
}

const Precio =()=>{
    return e('p', null, '$327')
}

const PrecioProducto = () => {
    return e('div', null, [e(Icono), e(Precio)])
}

const Card = () =>{
    return e('article', null, [e(Titulo), e(Descripcion), e(Imagen), e(PrecioProducto)])
}

const App = () => {
    return e('main', null, [e(Card), e(Card), e(Card), e(Card) ])
}
console.log(e(PrecioProducto))

ReactDOM.render(e(App), root)

// React.createElement(tipo, props, children)
// const hoy = new Date()

// const Titulo = () => {
//   return e('h1', null, 'Hola React!')
// }

// const Subtitulo = () => {
//   return e('h2', null, 'Probando cosas nuevas!')
// }

// const fecha = e('small', null, hoy.toString())
// const contenido = e('p', null, 'Soy un comentario')

// // Componente primitivos
// // h1-h6, div, section, p...

// // Componente funcional
// // En PascalCase
// // Devolver un elemento de React con React.createElement
// const Comentario = () => {
//   return e('article', null, [contenido, fecha])
// }

// const Comentarios = () => {
//   return e('section', null, [e(Comentario), e(Comentario)])
// }

// const App = () => {
//   return e('main', null, [e(Titulo), e(Subtitulo), e(Comentarios)])
// }


/**
<main>
  <h1>Hola React</h1>
  <h2>Probando cosas nuevas!</h2>
  <section>
    <p>Soy un comentario</p>
    <p>Soy un comentario</p>
  </section>
</main>
 */
// const app = e('main', null, [
//   e('h1', null, 'Hola React!'),
//   e('h2', null, 'Probando cosas nuevas!'),
//   e('section', null, [
//     e('p', null, 'Soy un comentario'),
//     e('p', null, 'Soy un comentario'),
//   ]),
// ])
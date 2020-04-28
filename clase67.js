//REACT

//React es una libreria. Hay una distincion entre libreria y framework. La diferencia es que las librerias son un conjunto de funciones ya elaboradas por alguien que sirven para resolver un problema. Un framework es tambien da un conjunto de funciones, metodos, objetos para lograr un objetivo. La diferencia es que el framework pone mas restricciones, mas reglas y limites de uso. Es un marco de trabajo del que no podemos salirnos. La ventaja de un framework es que da todo mas servido, ya tiene un monton de funcionalidades ya hechas y hace que se agilice el desarrollo. 
//La libreria ofrece un conjunto de soluciones menor. 
//Angular es un framework

//React
//El objetivo principal es darnos una forma de desarrollar interfaces (lo visual). Tiene una filosofia de como crear interfaces en base a componentes. La idea de los metodos que nos brinda react es abstraer la manipulacion del DOM. La ventaja es que es una libreria declarativa para crear interfaces. 


//Sintaxis

//La diferencia entre react y react DOM es que react no solo se puede utilizar en el DOM. El React DOM permite convertir nodos al DOM. Las cosas que hagamos con la libreria react la libreria react dom las va a actualizar en el DOM final. El arbol que manipula react se denomina DOM Virtual. El DOM Virtual no se corresponde exactamente con el DOM del navegador. 
//React Native es para aplicaciones de celular. 

//React tiene dos metodos. 
//La forma de crear elementos de react es 
React.createElement('p')// tiene dos parametros, el primero es el tipo de elemento que querermos crear
const p = React.createElement('p')
console.log(p)
//Devuelve un objeto. la diferencia con createElemente del document es que este ultimo devuelve un nodo del DOM.
//Para agregarlo al DOM
const titulo = React.createElement('h1')
const root = document.getElementById('root')
ReactDOM.render(titulo, root)//toma dos parametros, el elemento react que queremos renderizar, y en que elemento del dom lo queremos insertar. Es la unica interaccion que vamos a tener con el DOM. De esta forma react renderiza en elemento titulo en el div root.

//Create Element tiene tres parametros. 
//El primero es el tipo de elemento
//Segundo los props
//Tercero los children o hijos. Es un array
const titulo = React.createElement('h1', null, "Hola React!")

//Children puede ser un solo elemento de texto o puede ser un array de elementos. Es el contenido

const subtitulo = React.createElement('h2', null, "Probando cosas nuevas!")
//Para insertar el elemento subtitulo en el dom. React render solo acepta un unico elemento, el elemento raiz. El elemento que va en render solo puede ser el ppal. Ese elemento ppal se suele llamar app

const app = React.createElement('div', null, [titulo, subtitulo]) //insertamos los elementos creados en un array. Es la forma de ir anidando elementos dentro de otros elementos. Al ser un array el orden es importante

ReactDOM.render(app, root)

//para acortar
const e = React.createELement
const titulo = e('h1', null, "Hola React!")
const subtitulo = e('h2', null, "Probando cosas nuevas!")
//para anidar elementos dentro de elementos
const comentario = e('p', null, 'Soy un comentario')
const comentarios = e('section', null, [comentario, comentario])
const app = e('main', null, [titulo, subtitulo, comentarios])

ReactDOM.render(app, root)

//Parte de la filosofia de react es que permite reutilizar un conjunto de elementos. 
const hoy = new Date()
const fecha = e('small', null, hoy.toString())
const contenido = e('p', null, 'Soy un comentario')
const comentarios = e('section', null, [comentario, fecha, comentario, fecha])

//La idea de react es ir construyendo distintos componentes. Los componentes son los bloques minimos de una interfaz que podemos ir teniendo y con estos ir armando bloques mas complejos. 
//Un componente es un conjunto de elementos que puede ser reutilizable. Es independiente, no depende de la posicion donde esta agregado. Podemos reutilizarlo en cualquier lado
//Para crear un componente. Es una funcion que devuelve un elemento
//El conjunto de elemento que queremos reutilizar se escribe con la primera letra en mayuscula. Para poder distinguirlo del elemento de html
const Comentario = () => {
    return React.createELement('article', null, [contenido, fecha])
}

const comentarios = e('section', null, [e(Comentario), e(Comentario)])

const app = e('main', null, [titulo, subtitulo, comentarios])

ReactDOM.render(app, root)

//Existen dos tipos de componentes.
//Primitivos = los elementos que tendriamos dentro del html (h1, div, section). 
//Funcionales. Comienzan en PascalCase. Devuelven un elemento de react con React.createElement

//A la hora de trabajar con react hay una extension para trabajar con los componentes de React en la consola. 
const Titulo = ()=>{
   return e('h1', null, "Hola React!")
}
const Subtitulo = ()=>{
    return e('h2', null, "Probando cosas nuevas!")
}

const Comentarios = ()=>{
  return  e('section', null, [e(Comentario), e(Comentario)])
}

const app =()=>{
    return e('main', null, [e(Titulo), e(Subtitulo), e(Comentarios)])
}

//La idea de react es abstraer los elementos primitivos de html. La idea es pensar en componentes

//Un componente puede ser un elemento primitivo. Pero incluso de esa forma nunca se va a trabajar como h1 sino que lo vamos a trabajar como titulo o subtitulo

//React crea interfaces a traves de componentes. Son los bloques minimos con los que podemos interactuar. Los componentes son muy flexibles porque se pueden combinar y reutilizar.
//Para un componente tambien rige el ppio de responsabilidad unica. Tiene que encargarse de una sola cosa. Los componentes siempre son funciones que devuelven el resultado de otra funcion
//Los componentes son funciones que necesitan ciertos parametros para mostrarse (props)

//Los props son especie de parametros que le podemos pasar a un componente.
//El segundo parametro de React.createElement es un objeto. Dentro de cada componente podemos accedera a esta informacion. 
//Cuando creamos un componente funcional el unico parametro que toma es props
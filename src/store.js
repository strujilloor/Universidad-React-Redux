import { createStore } from 'redux' // Método de Redux que nos permite crear nuestro Store :

// Nombres de constantes de acciones
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

/* 
* REDUCER:
* Es una función pura que nos regrasa el estado actual
*/
const initialState = 0 // estado inicial :

function counter (previousState = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return previousState + 1

    case DECREMENT:
      return previousState - 1

    default:
      return previousState
  }
}

/* 
* STORE
* Almacenamiento de nuestro estado
*/
const store = createStore(counter) // recibe como parámetro el Reducer :

/*
* CREADORES DE ACCIONES
* funciones que crean acciones
*/
const increment = () => {
  return { // recuerda que las acciones son obj
    type: INCREMENT // indica el tipo de acción a realizar
  }
}
const decrement = () => {
  return {
    type: DECREMENT
  }
}

/*
* Disponemos de varios MÉTODOS para consumir y actualizar el estado:
*
* store.getState() -> regresa el estado actual.
* store.dispatch( accion ) -> disparar acciones, la acción es un obj.
* store.subscribe(fun) -> suscribirnos a los cambios que puedan ocurrir 
*                         dentro del store. recibe una función, y cuando 
*                         se actualiza se ejecuta esta función.
*/

// EJEMPLO:

// nos subscribimos a los cambios en el store :
store.subscribe(() => {
  console.log( store.getState() ) // mostramos por consola el estado actual :
})

// disparar Acciones :
store.dispatch( increment() )

setTimeout(() => {
  store.dispatch( decrement() ) // disparar esta acción después de 2 seg :
}, 2000)


export default store
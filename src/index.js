//Importar modulo
import './styles.css';
import {Todo,TodoList} from './classes';
import {crearTodoHtml} from './js/modulo';


export const todoList = new TodoList();

//Consultar un arreglo
todoList.todos.forEach( (todo) => {crearTodoHtml(todo)} );


console.log('todos:', todoList.todos);



/* const tarea = new Todo('Aprender Javascript!');
todoList.nuevoTodo(tarea);
console.log(todoList);
crearTodoHtml(tarea);
 */


/* //LOCALSTORAGE
(devuelve un string) [objet object] ARREGLO[]
La unica diferencia es que la informacion almacenada en localStorage no posee tiempo de expiracion

localStorage.length  //CUANTOS ELEMENTOS HAY
localStorage.removeItem  //remover un item
localStorage.setItem  //colocar un itiem 
localStorage.clear  //borrar todo el localstorage
localStorage.key // para confirmar si existe alguna llave (que viene a ser el nombre)
*/
/* 
localStorage.setItem('mikey', 'ABC');

setTimeout(()=>{
  localStorage.removeItem('mikey')
},1500) */
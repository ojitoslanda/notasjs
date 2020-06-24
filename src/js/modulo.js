import { Todo } from "../classes";
import { todoList } from '../index';
//Referencia en el html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters')
const aSelectedFiltro  = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) =>{
  const htmlTodo = `
                    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
                      <div class="view">
                        <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
                        <label>${todo.tarea}</label>
                        <button class="destroy"></button>
                      </div>
                      <input class="edit" value="Create a TodoMVC template">
                    </li> 
                  `
  const div = document.createElement('div');
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild); // WOWWOWOWOW
  return div.firstElementChild;
}

//Eventos (Keyup -> cuando la persona suelte la tecla)
txtInput.addEventListener('keyup' , (event)=>{
    //13 porque es referente al keyCode del 'Enter'
    //console.log(event);
    if( (event.keyCode === 13) && (txtInput.value.length > 0) ){
      const nuevoTodoxd = new Todo(txtInput.value)
      todoList.nuevoTodo (nuevoTodoxd)
      crearTodoHtml(nuevoTodoxd);
      txtInput.value = ''
    } 
})

divTodoList.addEventListener('click', (event) => {

  //event.target identificar que elemento tengo
  //console.log(event.target.localName);
  const nombreElemento = event.target.localName;  
  const todoElemento = event.target.parentElement.parentElement;
  const todoID = todoElemento.getAttribute('data-id');

  //Si el nombre del elemento incluye algo como input 
  if ( nombreElemento.includes('input')){  //entonces hizo click en el checked
        todoList.marcarCompletado(todoID);

        //HaceReferencia a todas las clases (classList)
        //Si yo quiero estar agregando o cambiando una clase es (.toggle)
        todoElemento.classList.toggle('completed')
  }else if(nombreElemento.includes('button')) { //hay que borrar el todo 
        
        todoList.eliminarTodo(todoID);  
        //Unas de las formas de eliminar un elemento html
        divTodoList.removeChild(todoElemento)
  }

});



btnBorrar.addEventListener('click', () => {
  todoList.eliminarCompletados();

  //For inverso -1 para que no afecte el primero
  for(let i = divTodoList.children.length - 1; i>=0; i--){
       const elemento = divTodoList.children[i];
       console.log( elemento );

       //Preguntar si tiene esa clase ese elemento
       if(elemento.classList.contains('completed')){
         //Elimino ese elemento
         divTodoList.removeChild(elemento);
       }
  }


})


ulFiltros.addEventListener('click' , (event)  =>{
  //console.log(event.target.text);
  const filtro = event.target.text;
        
    if(!filtro){ return; }
      aSelectedFiltro.forEach(element =>element.classList.remove('selected') );
      event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
      elemento.classList.remove('hidden');
      const completado = elemento.classList.contains('completed');

      switch(filtro){
                    case 'Pendientes':
                          if(completado){
                            elemento.classList.add('hidden');
                          }
                      break;
                    case 'Completados':
                          if(!completado){
                            elemento.classList.add('hidden');
                          }
                      break;
                  }
    }
});
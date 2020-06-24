import { Todo } from "./todo.class";

export class TodoList{
        constructor(){
          this.cargarLocalStorage();
        }

        nuevoTodo(todo){
          this.todos.push(todo);
          this.guardarLocalStorage();
        }

        eliminarTodo(id){
            //Array.prototype.filter();
            this.todos = this.todos.filter( todo =>  todo.id != id );
            this.guardarLocalStorage();
        }
        
        marcarCompletado(id){
            //Consulto el arreglo
            for(const todo of this.todos){
                //console.log(id, todo.id);
                if(todo.id == id){
                  todo.completado = !todo.completado;
                  this.guardarLocalStorage();
                  break;
                }
            }

        }

        eliminarCompletados(){

          //necesito todo lo que no esten completados !
          this.todos = this.todos.filter( todo =>  !todo.completado )
          this.guardarLocalStorage();
        }


        guardarLocalStorage(){
          //Transformar  ARREGLO DE TODO (STRING) a un json  
            localStorage.setItem('todo', JSON.stringify(this.todos));
        }

        cargarLocalStorage(){
          //Si existe ese objeto (json)
          //  if(localStorage.getItem('todo')){
          //     //this.todos = localStorage.getItem('todo');
          //     //console.log(typeof this.todos);  //string
          //     this.todos = JSON.parse(localStorage.getItem('todo')); //Array (Arreglo)
          //     console.log('Cargar Local:', this.todos);

          //  }else{
          //    this.todos = []
          //  }

          this.todos = (localStorage.getItem('todo'))
                      ? JSON.parse(localStorage.getItem('todo'))
                      : []

  //metodo map de arreglo,retorna un nuevo arreglo mutados xd           
          this.todos = this.todos.map(obj => Todo.fromJson( obj) )
        }

}
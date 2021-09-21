import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';



  addTodoTitle:string = ""

  todos: {title: string, id: number,completed:boolean }[] = [

  {
  id: 5,
  title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
  completed: false
  },
  {
  id: 6,
  title: "qui ullam ratione quibusdam voluptatem quia omnis",
  completed: false
  },
  {
  id: 7,
  title: "illo expedita consequatur quia in",
  completed: false
  },
  {
  id: 8,
  title: "quo adipisci enim quam ut ab",
  completed: true
  },
  {
  id: 9,
  title: "molestiae perspiciatis ipsa",
  completed: false
  },
  {
  id: 10,
  title: "illo est ratione doloremque quia maiores aut",
  completed: true
  },
  {
  id: 11,
  title: "vero rerum temporibus dolor",
  completed: true
  },
  {
  id: 12,
  title: "ipsa repellendus fugit nisi",
  completed: true
  },
  {
  id: 13,
  title: "et doloremque nulla",
  completed: false
  },
  {
  id: 14,
  title: "repellendus sunt dolores architecto voluptatum",
  completed: true
  },
  {
  id: 15,
  title: "ab voluptatum amet voluptas",
  completed: true
  },
  {
  id: 16,
  title: "accusamus eos facilis sint et aut voluptatem",
  completed: true
  },
  {
  id: 17,
  title: "quo laboriosam deleniti aut qui",
  completed: true
  }
  ]
  
  addToList(){
    const todo ={
      title:this.addTodoTitle,
      id:new Date().getTime(),
      completed:false
    }
    this.todos.push(todo)
    this.addTodoTitle=''
  }
  deleteTodo(id:number){
    const todoIndex = this.todos.findIndex(todo=> todo.id = id)
    if(todoIndex>-1){
      this.todos.splice(todoIndex,1)
    }
  }

}





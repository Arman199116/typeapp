import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";



let App : React.FC = () => {

    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);

    let handleAdd = (e : React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, {id : Date.now(), todo : todo, isDone : false}]);
            setTodo('');
        }
    }

    return (
        <div className="App">
            <span className="heading">Taskify</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default App;

import React, {useState} from "react";
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
    todo : Todo;
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SinglTodo : React.FC<Props> = ({todo, todos, setTodos}) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [todoEdit, setTodoEdit] = useState<string>(todo.todo);

    const handleDone = (id : number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone : !todo.isDone} : todo));
    }
    const handleDelete = (id : number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const handleEdit = (e : React.FormEvent, id : number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => todo.id === id ? {...todo, todo : todoEdit} : todo));
        setEdit(false);
    }

    return (
        <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? (
                    <input value={todoEdit} onChange={(e) => setTodoEdit(e.target.value)} className='todos__single--text'/>
                ) : todo.isDone ? (
                    <s className="todos__single--text">{todo.todo}</s>
                ) : (
                    <span className="todos__single--text">{todo.todo}</span>
                )}

            <div className="icon" onClick={(e) => {
                if (!edit && !todo.isDone) {
                    setEdit(!edit);
                }
            }}>
                <AiFillEdit />
            </div>
            <div className="icon" onClick={(e) => handleDelete(todo.id)}>
                <AiFillDelete />
            </div>
            <div className="icon" onClick={(e) => handleDone(todo.id)}>
                <MdDone />
            </div>
        </form>
    );
};

export default SinglTodo;

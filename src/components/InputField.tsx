import React, {useRef} from "react";
import './style.css';

interface Props {
    todo : string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e : React.FormEvent) => void;
}

let InputField : React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    let inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className="input" onSubmit={e => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input ref={inputRef} type={'text' } className='input__box' value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type="submit" className="input_submit">GO</button>
        </form>
    );
}

export default InputField;

import React, { useState } from 'react';
import CustomBtn from '../custom-btn/customBtn';

export type Todo = {id: string, name: string, done: boolean};

function ListTodos() {

    const [todos, setTodos] = useState<Todo[]>([]);

    const onClick = () => {
        onCreateTodo("");
    };
    const onCreateTodo = (name: string) => {
        const newTodo: Todo = {name: name, id: `${name}-${todos.length+1}`, done: false};
        setTodos([...todos, newTodo]);
    }
    
    return <CustomBtn colorBtn="#FA705A" textBtn="Añadir" onClick={onClick}></CustomBtn>;
}

export default ListTodos;

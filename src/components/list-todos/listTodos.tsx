import React, { useState } from 'react';
import CustomBtn from '../custom-btn/customBtn';
import CustomInput from '../custom-input/customInput';

export type Todo = {id: string, name: string, done: boolean};

function ListTodos() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputText, setInputText] = useState<string>('');

    const onClick = () => {
        onCreateTodo(inputText);
    };
    const onCreateTodo = (name: string) => {
        const newTodo: Todo = {name: name, id: `${name}-${todos.length+1}`, done: false};
        setTodos([...todos, newTodo]);
    }
    
    return  <div>
                <CustomBtn disabled={inputText.length === 0} colorBtn="#FA705A" textBtn="Añadir" onClick={onClick}></CustomBtn>
                <CustomInput inputText={inputText} setInputText={setInputText}></CustomInput>
            </div>;
}

export default ListTodos;

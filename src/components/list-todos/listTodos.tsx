import React, { useState } from 'react';
import './listTodos.scss'
import CustomBtn from '../custom-btn/customBtn';
import CustomInput from '../custom-input/customInput';

export type Todo = {id: string, description: string, done: boolean};

function ListTodos() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputText, setInputText] = useState<string>('');

    const addTodo = () => {
        onCreateTodo(inputText);
    };
    const deleteCompletedTodo = () => {
        // onCreateTodo(inputText);
    };
    const onCreateTodo = (description: string) => {
        const newTodo: Todo = {description: description, id: `${description}-${todos.length+1}`, done: false};
        setTodos([...todos, newTodo]);
        setInputText("");
    }
    
    return  <div className="list-todos">
                <div className="list-todos__header">
                    <div className="list-todos__header--background">
                        <CustomInput inputText={inputText} setInputText={setInputText} onPressEnter={addTodo}></CustomInput>
                        <CustomBtn disabled={inputText.length === 0} colorBtn="#F55442" textBtn="Añadir" onClick={addTodo}></CustomBtn>
                    </div>
                </div>
                <div className="list-todos__content">
                    {todos.map((todo) => (
                        <div className="list-todos__content--item" key={todo.id}>
                            {todo.description}
                        </div>
                    ))}

                    <div className="list-todos__content--action">
                        <CustomBtn colorBtn="#1DA3A8" textBtn="Eliminar completados" onClick={deleteCompletedTodo}></CustomBtn>
                    </div>
                </div>
            </div>;
}

export default ListTodos;

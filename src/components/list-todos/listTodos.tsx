import React, { useState } from 'react';
import './listTodos.scss'
import CustomBtn from '../custom-btn/customBtn';
import CustomInput from '../custom-input/customInput';
import CustomCheckbox from '../custom-checkbox/customCheckbox';

export type Todo = {id: string, description: string, completed: boolean};

function ListTodos() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputText, setInputText] = useState<string>('');

    const addTodo = () => {
        onCreateTodo(inputText);
    };
    const deleteCompletedTodo = () => {
        const todosNotDeleted: Todo[] = todos.filter((todo) => !todo.completed);

        setTodos(todosNotDeleted);
    };
    const onCreateTodo = (description: string) => {
        const newTodo: Todo = {description: description, id: `${description}-${todos.length+1}`, completed: false};
        setTodos([...todos, newTodo]);
        setInputText("");
    }

    const onCheck = (todoId: string) => {
        const updateTodos: Todo[] = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        });

        setTodos(updateTodos);
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
                            <CustomCheckbox todo={todo} onCheck={onCheck}></CustomCheckbox>
                        </div>
                    ))}

                    <div className="list-todos__content--action">
                        <CustomBtn colorBtn="#1DA3A8" textBtn="Eliminar completados" onClick={deleteCompletedTodo}></CustomBtn>
                    </div>
                </div>
            </div>;
}

export default ListTodos;

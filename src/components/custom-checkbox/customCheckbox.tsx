import React from 'react';
import { Todo } from '../list-todos/listTodos';
import './customCheckbox.scss'
type Props = { todo: Todo; onCheck: (todoId: string) => void; }

const CustomCheckbox: React.FC<Props> = ({todo, onCheck}) => {

    const onChange = () => {
        onCheck(todo.id);
    }

    return  <div className="custom-checkbox">
                <input className="custom-checkbox__check" id={todo.id} type="checkbox" onChange={onChange} value="todo.completed"/>
                <label className={['custom-checkbox__text', !todo.completed ? 'custom-checkbox__text--not-checked' : ''].join(' ')}>
                    {todo.description}
                </label>
            </div>
}

export default CustomCheckbox;
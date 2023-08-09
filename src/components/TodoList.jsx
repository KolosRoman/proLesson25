import React from "react";

import {TodoArray} from "./TodoArray.js";
import {FormInput} from "./FormInput.jsx";

export class TodoList extends React.Component {
    constructor() {
        super()

        this.state = {
            array: TodoArray
        }
    }

    onTodoClick = (e) => {
        e.target.classList.toggle('todo-done')
    }

    addNewTodo = ({newelement}) => {
        TodoArray.push(newelement);
        this.setState({
            array: TodoArray
        })

    }


    render() {
        return (
            <div>
                <div className="todo-header-block">
                    <h1 className="todo-header-title">Завдання</h1>
                    <div className="todo-header-do-block">
                        <div className="todo-header-not-done">
                            <div className="todo-header-not-done-color"></div>
                            <p>- не зроблено</p>
                        </div>
                        <div className="todo-header-done">
                            <div className="todo-header-done-color"></div>
                            <p>- зроблено</p>
                        </div>
                    </div>
                </div>
                <ul  id="todo-block" className="todo-block">
                    {
                        this.state.array.map((el, index) => {
                            return (
                                <li key={index} onClick={(e) => this.onTodoClick(e)} className="todo-list">{el}</li>
                            )
                        })
                    }
                </ul>
                <FormInput newTodo={this.addNewTodo}/>
            </div>
        )
    }
}
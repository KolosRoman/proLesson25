import React from "react";

import {TodoArray} from "./TodoArray.jsx";

export class TodoList extends React.Component {
    constructor() {
        super()

        this.state = {
            array: TodoArray
        }
    }

    onTodoClick(el) {
    
        let array = document.getElementsByClassName('todo-list')
        for (let i = 0; i < array.length; i++) {
            if (array[i].innerHTML === el) {
                array[i].classList.toggle('todo-done')
            }
        }
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
                <ul onClick={(e) => this.onTodoClick(e.target.textContent)} id="todo-block" className="todo-block">
                    {
                        this.state.array.map(el => {
                            return (
                                <li className="todo-list">{el}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
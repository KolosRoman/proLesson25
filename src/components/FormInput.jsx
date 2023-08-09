import React from "react";

export class FormInput extends React.Component {
    constructor() {
        super()
        
        this.state = {
            addTodo: ''
        }
    }

    
    onAddTodo = (e) => {
        e.preventDefault();
        if(this.state.addTodo !== '') {
            this.props.newTodo({
                newelement: this.state.addTodo
            })
            this.setState({
                addTodo: ''
            })
        }
    }

    onTodoChange = (e) => {
        this.setState({
            addTodo: e.target.value
        })
    }


    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.onAddTodo} className='form-block'>
                    <h2 className="form-block-title">Додати завдання</h2>
                    <textarea name="" value={this.state.addTodo}  onChange={this.onTodoChange} className='form-item'></textarea>
                    <button className='form-button'>Додати</button>
            </form>
            </div>
        )
    }
}
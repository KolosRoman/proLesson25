import React from 'react';

import {TodoList} from './TodoList.jsx';

export class App extends React.Component {
    constructor() {
        super()

        this.state = {
            showDemolist: true,
        }
    }


    render() {
        return (
            <main>
                <TodoList />
            </main>
        )
    }
}
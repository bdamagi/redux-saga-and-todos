import React from 'react' 

import { Header } from '../../components'

import { connect } from 'react-redux'

import { getTodos } from '../../store/actions'
import { render } from '@testing-library/react'

//Need redux stuff 


class Todos extends React.Component {
    fetchTodos = () => {
        this.props.getTodos()
    }


    render() {
        const { todos, loading } = this.props

        return (
            <div>
                <Header />
                <h3>Todos:</h3>
                <button onClick ={this.fetchTodos}>
                    Fetch Data
                </button>

            {loading && 
                <span style={{ marginLeft: 16 }}>
                    Fetching Data...
                </span>
            }

            <ul>
                {todos.map((todo, i) => (
                    <li key={`todo-${i}`}>{todo.title}</li>
                ))}
            </ul>
            </div>
        )
    }
}


    const mapStateToProps = state => ({
        todos: state.todoApp.todos,
        loading: state.todoApp.loading
    })

    const mapDispatchToProps = dispatch => ({
        getTodos: () => dispatch(getTodos())
    })

    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Todos)


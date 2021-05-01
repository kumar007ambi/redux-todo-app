import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/index';

const List = (props) => {
    return (
        <>
            <ul>
                {props.todos.map((todo, index) => (
                    <li key={index} style={{ listStyleType: 'none' }}>{todo.message}<button onClick={() => props.dispatch(deleteTodo(todo.id))} style={{ margin: 10 }}>Delete</button></li>
                ))}
            </ul>
        </>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data
})



export default connect(mapStateToProps)(List);

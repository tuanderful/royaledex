import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form onSubmit={function _handleSubmit(e) {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value));
                input.value = '';
            }}
            >
                <input ref={function _whatIsARef(node) {
                    input = node;
                }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

AddTodo = connect()(AddTodo);

export default AddTodo;

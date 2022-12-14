import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.section`
  padding: 0 20px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        );
      })}
    </TodoListBlock>
  );
};

export default TodoList;

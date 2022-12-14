import React from 'react';
import styled from 'styled-components';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';

const TodoListMainBlock = styled.main`
  height: 555px;
  padding: 20px 32px;
`;

const TodoListMain = () => {
  return (
    <TodoListMainBlock>
      <TodoCreate></TodoCreate>
      <TodoList></TodoList>
    </TodoListMainBlock>
  );
};

export default TodoListMain;

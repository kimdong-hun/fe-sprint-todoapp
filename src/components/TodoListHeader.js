import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoListHeaderBlock = styled.header`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 36px;
    color: #343a40;
  }

  span {
    display: block;
    margin-bottom: 40px;
    font-size: 21px;
    color: #868e96;
  }

  strong {
    font-size: 18px;
    color: #20c997;
  }
`;

const TodoListHeader = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const date = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const day = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoListHeaderBlock>
      <h1>{date}</h1>
      <span>{day}</span>
      <strong>할 일 {undoneTasks.length}개 남음</strong>
    </TodoListHeaderBlock>
  );
};

export default TodoListHeader;

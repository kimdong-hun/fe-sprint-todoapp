import React from 'react';
import styled from 'styled-components';

const TodoListContainerBlock = styled.div`
  width: 512px;
  height: 768px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

const TodoListContainer = ({ children }) => {
  return <TodoListContainerBlock>{children}</TodoListContainerBlock>;
};

export default TodoListContainer;

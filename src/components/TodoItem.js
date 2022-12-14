import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const TodoItemDelete = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  display: none;
  top: 14px;
  right: 8px;
  color: #dee2e6;
  font-size: 26px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0;

  &:hover {
    ${TodoItemDelete} {
      display: flex;
    }
  }
`;

const TodoItemCheck = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  width: 32px;
  height: 32px;
  border: 1px solid #ced4da;
  border-radius: 50%;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const TodoItemForm = styled.form`
  flex-grow: 1;
`;

const TodoItemInput = styled.input`
  width: 80%;
  font-size: 21px;
  outline: none;
  border: 1px solid #dee2e6;
  border-radius: 4px;
`;

const TodoItemText = styled.p`
  flex-grow: 1;
  font-size: 21px;
  color: #495057;

  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const TodoItem = ({ id, done, text }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(text);

  const dispatch = useTodoDispatch();

  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    dispatch({
      type: 'UPDATE',
      id,
      text: value
    });
    setEdit(false);
  };

  return (
    <TodoItemBlock done={done}>
      <TodoItemCheck done={done} onClick={onToggle}>
        {done && <MdDone />}
      </TodoItemCheck>
      {edit ? (
        <TodoItemForm onSubmit={onSubmit}>
          <TodoItemInput autoFocus value={value} onChange={onChange} />
        </TodoItemForm>
      ) : (
        <TodoItemText done={done} onClick={() => setEdit(true)}>
          {text}
        </TodoItemText>
      )}
      <TodoItemDelete onClick={onRemove}>
        <MdDelete className="delete-button" />
      </TodoItemDelete>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

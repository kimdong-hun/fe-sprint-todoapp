import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const InsertForm = styled.form`
  padding: 0 20px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  font-size: 18px;
  outline: none;
`;

const TodoCreate = () => {
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });

    setValue('');
    nextId.current++;
  };

  return (
    <InsertForm onSubmit={onSubmit}>
      <Input
        placeholder="할 일을 입력 후, Enter 를 누르세요"
        onChange={onChange}
        value={value}
      />
    </InsertForm>
  );
};

export default React.memo(TodoCreate);

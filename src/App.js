import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from './TodoContext';
import TodoListContainer from './components/TodoListContainer';
import TodoListHeader from './components/TodoListHeader';
import TodoListMain from './components/TodoListMain';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoListContainer>
        <TodoListHeader></TodoListHeader>
        <TodoListMain></TodoListMain>
      </TodoListContainer>
    </TodoProvider>
  );
}

export default App;

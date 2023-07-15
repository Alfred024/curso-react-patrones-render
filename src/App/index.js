import React from 'react';

//Header components
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';

//List components
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

//Modal components
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

//Custom hooks
import { useTodos } from '../utils/useTodos';


function App() {
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,    
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter/>
        <TodoSearch/>
      </TodoHeader>

      <TodoList

      >
        {/* TODO ITEMS WOULD BE RENDER HERE */}
      </TodoList>

      <CreateTodoButton/>

      <Modal>
        <TodoForm/>
      </Modal>
    </>
  );
}

export default App;

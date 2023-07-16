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

//Component receiving HOC 
import { ChangeStorageNotification } from '../ChangeAlert';

//Custom hooks
import { useTodos } from '../utils/useTodos';


function App() {
  const {
    error,
    loading,
    storageChanged,
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
        error = {error}
        loading = {loading}
        numTodos = {searchedTodos.length}
        errorRender = {() =>{<TodosError/>}}
        loadingRender = {() =>{<TodosLoading/>}}
        emptyListRender = {() =>{<EmptyTodos/>}}
      >
        {searchedTodos.map(itemTodo =>{
          <TodoItem
            key = {itemTodo.text}
            text = {itemTodo.text}
            completed = {itemTodo.completed}
          />
        })}
      </TodoList>

      <CreateTodoButton/>

      <Modal>
        <TodoForm/>
      </Modal>

      <ChangeStorageNotification
        storageChanged = {storageChanged}
      />
    </>
  );
}

export default App;

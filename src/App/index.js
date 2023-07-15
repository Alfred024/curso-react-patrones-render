import React from 'react';

import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';

import { TodoProvider } from '../TodoContext';
import { TodoContext } from '../TodoContext';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';


function App() {
  return (
    <>
      <TodoHeader>
        <TodoCounter/>
        <TodoSearch/>
      </TodoHeader>

      <TodoList>
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

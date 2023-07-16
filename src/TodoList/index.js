import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <>
      {props.error && props.errorRender()}
      {props.loading && props.loadingRender()}
      {(props.numTodos === 0 ) && props.emptyListRender()}

      <section>
        <ul>
          {props.children}
        </ul>
      </section>
    </>
  );
}

export { TodoList };

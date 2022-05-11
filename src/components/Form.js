import { observer } from "mobx-react";
import React from "react";
import { todosState } from "../todoState";

const Form = observer(() => {
  return (
    <form onSubmit={todosState.handleSubmit} className="form">
      <input
        type="text"
        className="input"
        autoComplete="off"
        value={todosState.newTodoName}
        onChange={todosState.handleNewTodoNameChange}
        autoFocus
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
});

export default Form;

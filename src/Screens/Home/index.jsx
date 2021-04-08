import React, { useState } from "react";
import { Tables } from "./../../Components/Table";
import { NewItem } from "./../../Components/NewItem";
import "./index.css";

export const Home = () => {
  const [state, setState] = useState([]);

  const newRegister = (data) => {
    const newState = [...state];
    const id = state.length !== 0 ? state[state.length - 1].id + 1 : 0;
    Object.defineProperty(data, "id", { value: id, writable: true });
    newState.push(data);
    setState(newState);
  };

  const deleteRegister = (target) => {
    const newState = [...state];
    target = newState.findIndex((t) => t.id === target);
    newState.splice(target, 1);
    setState(newState);
  };

  const updateRegister = (data) => {
    const newState = [...state];
    const target = newState.findIndex((t) => t.id === data.id);
    newState.splice(target, 1, data);
    setState(newState);
  };

  return (
    <div className="wrap-content-home">
      <Tables
        data={state}
        deleteitem={deleteRegister}
        updateitem={updateRegister}
      />
      <div className="wrap-new-item">
        <NewItem newregister={newRegister} />
      </div>
    </div>
  );
};

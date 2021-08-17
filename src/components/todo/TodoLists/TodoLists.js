import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoListItems, editItemInfo } from "./atom";

export default function TodoLists() {
  const [todoLists, setTodoLists] = useRecoilState(todoListItems);
  const setEditTodoList = useSetRecoilState(editItemInfo);
  console.log("Todo List Rendered");
  const removeItem = (itemId) => {
    const newList = todoLists.filter((list) => list.id !== itemId);
    setTodoLists([...newList]);
  };

  const editItem = (editId) => {
    // eslint-disable-next-line array-callback-return
    todoLists.find((list) => {
      if (list.id === editId)
        setEditTodoList({
          bodySelected: list.body,
          labelState: !true,
          id: editId,
        });
    });
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todoLists));
  }, [todoLists]);

  return (
    <div>
      <ul>
        {todoLists.map(({ id, body }) => {
          return (
            <li key={id}>
              <span>{body}</span>
              <div>
                <button className="btn-remove" onClick={() => removeItem(id)}>
                  <abbr title="remove">remove</abbr>
                </button>
                <button className="btn-edit" onClick={() => editItem(id)}>
                  <abbr title="edit">edit</abbr>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

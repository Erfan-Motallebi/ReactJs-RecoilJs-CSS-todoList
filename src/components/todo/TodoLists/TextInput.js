import React, { Fragment, useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoListItems, editItemInfo } from "./atom";

export default React.memo(function TextInput() {
  const [inputValue, setInputValue] = useState("");
  const todoListSetter = useSetRecoilState(todoListItems);
  const [editList, setEditList] = useRecoilState(editItemInfo);
  console.log("text inputValue Rendered");
  const onChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      if (editList.labelState) {
        todoListSetter((oldTodoList) => {
          return [
            ...oldTodoList,
            {
              id: new Date().getTime().toString(),
              body: inputValue,
            },
          ];
        });
        setInputValue("");
      } else if (!editList.labelState) {
        todoListSetter((oldTodoList) => {
          // eslint-disable-next-line array-callback-return
          const newTodoList = oldTodoList.map((oldList) => {
            const oldListupdating = { ...oldList };
            if (oldListupdating.id === editList.id) {
              oldListupdating.body = inputValue;
              return oldListupdating;
            }
            return oldList;
          });
          return [...newTodoList];
        });
        setInputValue("");
        setEditList({
          ...editList,
          labelState: true,
        });
      }
    } else {
      alert("Empty Input");
    }
  };

  useEffect(() => {
    setInputValue(editList.bodySelected);
  }, [editList.bodySelected]);

  return (
    <Fragment>
      <form className="form-control" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="list"
          id="list"
          value={inputValue}
          placeholder="Your todo list"
          onChange={onChange}
          className="from-control__input"
        />
        <button type="submit" className="btn-add">
          {editList.labelState ? "Add" : "Edit"}
        </button>
      </form>
    </Fragment>
  );
});

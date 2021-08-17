import { atom } from "recoil";

export const todoListItems = atom({
  key: "inputStateAccpeted",
  default: [],
});

export const editItemInfo = atom({
  key: "editItemList",
  default: {
    bodySelected: "",
    labelState: true,
    id: "",
  },
});

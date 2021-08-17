import { RecoilRoot } from "recoil";
import "./App.css";
import Todo from "./components/todo/TodoLists/Todo";
// import User from "./components/user/User";

function App() {
  return (
    <RecoilRoot>
      {/* <User /> */}
      <Todo />
    </RecoilRoot>
  );
}

export default App;

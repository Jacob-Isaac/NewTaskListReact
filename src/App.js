import "./App.css";
import "./index.css";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import BodyContainer from "./BodyContainer";
import MainContainer from "./MainContainer";

const taskList = [
  { id: 1, content: "zjeść ciastko", done: false },
  { id: 2, content: "zjeść bułkę", done: true },
];
const hideTasks = false;

function App() {
  return (
    <BodyContainer>
      <Header />
      <MainContainer>
        <Buttons />
        <Form />
        <Tasks taskList={taskList} hideTasks={hideTasks} />
        <Footer text="©Copyright 2022 by Jakub Nowakowski - wszystkie prawa zastrzeżone" />
      </MainContainer>
    </BodyContainer>
  );
}

export default App;

import React from "react";
import TaskListPage from "./features/taskList/TaskListPage";
import SingleTaskPage from "./features/taskList/SingleTaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import Header from "./common/Header";
import MainContainer from "./common/MainContainer";

const App = () => (
  <HashRouter>

    <MainContainer>
      <Header />
    </MainContainer>

    <Switch>
      <Route path="/zadania/:id">

        <MainContainer title={<h3>Szczegóły zadania</h3>}>
          <SingleTaskPage />
        </MainContainer>

      </Route>
      <Route path="/zadania">
        <TaskListPage />
      </Route>
      <Route path="/author">

        <MainContainer title={<h3>O autorze</h3>}>
          <AuthorPage />
        </MainContainer>

      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;

import React from "react";
import TaskListPage from "./features/taskList/TaskListPage";
import SingleTaskPage from "./features/taskList/SingleTaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import MainContainer from "./common/MainContainer";
import AuthorNavigation from "./features/author/Navigation";

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/zadania/:id">
        <AuthorNavigation />
        <MainContainer title={<>Szczegóły zadania</>}>
          <SingleTaskPage />
        </MainContainer>
      </Route>
      <Route path="/zadania">
        <TaskListPage />
      </Route>
      <Route path="/author">
        <AuthorNavigation />
        <MainContainer title={<>O autorze</>}>
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

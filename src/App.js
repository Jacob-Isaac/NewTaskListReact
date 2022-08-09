import React from "react";
import TaskListPage from "./features/taskList/TaskListPage";
import SingleTaskPage from "./features/taskList/SingleTaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
// import Header from "./common/Header";
import HeaderMobile from "./common/HeaderMobile";
import MainContainer from "./common/MainContainer";

const App = () => (
  <HashRouter>

<HeaderMobile />
  
    <Switch>
      <Route path="/zadania/:id">

        <MainContainer title={<>Szczegóły zadania</>}>
          <SingleTaskPage />
        </MainContainer>

      </Route>
      <Route path="/zadania">
        <TaskListPage />
      </Route>
      <Route path="/author">

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

import React from "react";
import TaskListPage from "./features/taskList/TaskListPage";
import TaskPage from "./features/taskList/TaskPage";
import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/zadania">Zadania</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/author">Autor</NavLink>
        </li>
      </ul>
      <Switch>
      <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TaskListPage />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route path="/">
       <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;

//11:48 / 14.05
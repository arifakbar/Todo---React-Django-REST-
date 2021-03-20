import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTasks } from "../actions/index";
import CompletedTasks from "./CompletedTasks";
import IncompletedTasks from "./IncompletedTasks";
import CreateTask from "./CreateTask";
import Header from "./header";
import history from "../history";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  };
  render() {
    return (
      <div className="ui container" style={{ padding: "15px" }}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact>
              <IncompletedTasks tasks={this.props.tasks} />
            </Route>
            <Route path="/complete" exact>
              <CompletedTasks tasks={this.props.tasks} />
            </Route>
            <Route path="/new-task" exact>
              <CreateTask />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { tasks: Object.values(state.tasks) };
};
export default connect(mapStateToProps, { fetchTasks })(App);

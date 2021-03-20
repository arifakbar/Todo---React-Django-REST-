import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createTask } from "../actions/index";

class CreateTask extends React.Component {
  onFormSubmit = (formValues) => {
    this.props.createTask(formValues);
  };
  renderErrors = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta }) => {
    const Error = meta.touched && meta.error ? "error" : "";
    return (
      <div className={`field ${Error}`}>
        <label className="label">{label}</label>
        <input {...input} />
        {this.renderErrors(meta)}
      </div>
    );
  };
  render() {
    return (
      <div style={{ paddingTop: "10px" }}>
        <h1
          className="header"
          style={{ textAlign: "center", textDecoration: "underline" }}
        >
          Add New Task
        </h1>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        >
          <Field name="title" component={this.renderInput} label="Enter title" />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter description"
          />
          <button className="ui button blue" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = (formvalues) => {
  const errors = {};
  if (!formvalues.title) {
    errors.title = "Enter a title";
  }
  if (!formvalues.description) {
    errors.description = "Enter some description";
  }
  return errors;
};

export default connect(null, { createTask: createTask })(
  reduxForm({ form: "CreateTask", validate: validate })(CreateTask)
);

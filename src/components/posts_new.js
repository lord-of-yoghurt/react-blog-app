import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    
    return (
      <div className={className}>
        <input
          // grabbing all methods of the field object
          // and setting them as props of the input, instead of
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          // etc.
          className="form-control"
          type="text"
          placeholder={field.label}
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Post Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// 'values' is an object that contains everything a user
// has entered into the form
// console.log(values) -> { title: 'some title', categories: 'recipes', content: 'blablabla' }
function validate(values) {
  // the errors object always has to be created
  const errors = {};

  // validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Title cannot be blank!";
  }
  if (!values.categories) {
    errors.categories = "Please enter at least one category!";
  }
  if (!values.content) {
    errors.content = "Content cannot be blank!";
  }

  return errors; // if it has ANY properties, redux-form assumes data is invalid
}

export default reduxForm({
  validate: validate,
  // name of the form - has to be unique
  form: 'PostsNewForm'
})(PostsNew);

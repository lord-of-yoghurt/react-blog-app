import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
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
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="Post Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Tags"
          name="tags"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

export default reduxForm({
  // name of the form - has to be unique
  form: 'PostsNewForm'
})(PostsNew);

import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoveLetterForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <h2>Love Letter Form for {props.ferry}</h2>
      <form onSubmit={handleSubmit}>
        <Field name="poem" component="input" type="text" />
        <button type="submit">Send Love</button>
      </form>
    </div>
  )
};

export default reduxForm({ form: 'love' })(LoveLetterForm)

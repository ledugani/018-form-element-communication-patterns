import React from 'react';

const FormField = (props) => <div>
  <label htmlFor={props.name}>{ props.label }</label>
  <input
    type={props.type}
    name={props.name}
    value={props.value}
    // arrow function ansures it only fires when the field is updated
    onChange={(e) => props.handleChange(e, props.attr)}
  />
</div>

export default FormField
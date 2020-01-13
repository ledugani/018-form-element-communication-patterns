import React from 'react';

const FormField = (props) => <div>
  <label htmlFor={props.name}>Full Name</label>
  <input
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={(e) => this.props.handleChange(e, props.key)}
  />
</div>

export default FormField
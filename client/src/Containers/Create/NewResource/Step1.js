import React from 'react';
import { TextInput } from '../../../Components/';
import classes from '../create.css';
const Step1 = React.memo((props) => {
  return (
    <div className={classes.FormSection}>
    <TextInput
      light
      name={`name`}
      label={`${props.displayResource} Name`}
      change={props.changeHandler}
      width='100%'
    />
    <TextInput
      light
      name='description'
      label='Description'
      change={props.changeHandler}
      width='100%'
      data-testid={`${props.resource}-description`}
    />
  </div>
  )
})

export default Step1;
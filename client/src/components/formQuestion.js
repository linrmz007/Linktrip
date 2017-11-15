import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const labelStyle = {
  fontWeight: 'lighter',
  color:'black',
}


const FormQuestion = (props) => {

    return(
      <div>
        <p>{props.question.question}</p>
        <RadioButtonGroup name="shipSpeed"
          className='multiple-ops'
          onChange={(e) => props.onChange(props.question, e)}
          >
          {
            props.question.options.map(item =>
            <RadioButton
              value={item}
              label={item}
              labelStyle={labelStyle}
              style={styles.radioButton}
              key={`key-${item}`}
            />
            )
          }
        </RadioButtonGroup>
      </div>
    );
  }



export default FormQuestion;

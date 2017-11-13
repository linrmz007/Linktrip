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
}


const FormQuestion = (props) => {


console.log('fq', props.question.options);
    return(
      <div>
        <p>{props.question.question}</p>
        <RadioButtonGroup name="shipSpeed"
          className='multiple-ops'
          onChange={props.onChange}
          >
          {
            props.question.options.map(item =>
            <RadioButton
              ref={(value)=> this.answer = value}
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

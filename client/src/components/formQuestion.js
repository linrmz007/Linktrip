import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked'

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
  color:'white',
}

const iconStyle = {
  color:'white',
}


const FormQuestion = (props) => {

    return(
      <div>
        <p className='form_questions'>{props.question.question}</p>
        <RadioButtonGroup name="shipSpeed"
          className='multiple-ops'
          onChange={(e) => props.onChange(props.question, e)}
          >
          {
            props.question.options.map(item =>
            <RadioButton
              value={item}
              label={item}
              iconStyle={iconStyle}
              uncheckedIcon={<RadioButtonUnchecked style={{ fill: 'white' }} />}
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

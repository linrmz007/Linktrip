import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FormQuestion from '../components/formQuestion';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const style = {
  height: 200,
  width: 900,
  marginTop: 30,
  textAlign: 'center',
  display: 'inline-block',
};


const question = [
  {
    question:'1: You’ve secured yourself a well-deserved day off. How do you spend your time?',
    options:[
      'No point making strict plans, I’ll just see where the wind takes me.',
      'Beach, swimming pool, sunbed. In no particular order.',
      'I head for the hills. There’s nothing like a bit of fresh mountain air…',
      'Books, tea, and films, followed by a long, warm bath.'],
    answer:'',
  },
  {
    question:'2: What tickles your taste buds?',
    options:[
      'I like to keep it light and fresh with Mediterranean-inspired meals.',
      'Nothing beats seafood served on a beautiful beachfront…',
      'Fondue, raclette, steak and red wine are my flavours of choice.',
      'Home-made spaghetti carbonara, local cheese and rosé.'],
    answer:'',
  },
  {
    question:'3: Your most treasured travel memories involve...',
    options:[
      'Being whisked away for a spur-of-the-moment weekend in Rome.',
      'Watching a sunset from the beach on a secluded Thai island.',
      'An early morning mountain expedition across pristine pistes.',
      'Seeing the sun set on unknown lands during a late train ride.'],
    answer:'',
  },
  {
    question:'4: Are you a messy person?',
    options:[
      'My place looks like it was hit by a volcano.',
      'Some would say Im a neat freak.',
      '50/50, I have a method to my madness.',
      'I prefer things to be tidy.'],
    answer:'',
  },
  {
    question:'5: As far as religion goes your ideal travel buddy would..',
    options:[
      'Follow the same religion as me.',
      'Science wins , pro-atheist.',
      'Religious but doesnt try to recruit me.',
      'Does not give a f$@k about religion.'],
    answer:'',
  },
  {
    question:'6: Are you more of a wing-it kind of person or preferred structured plans?',
    options:[
      'Wing-it is my middle name.',
      'Planning means no time will be wasted!',
      'A little planning, alotta improvising.',
      'Have a flexible schedule.'],
    answer:'',
  },
  {
    question:'7: Would you rather be part of a nature show or watch it?',
    options:[
      'Watching is cool, I rather not be eaten by tigers.',
      'The point of nature is being "one" with it, right?',
      'Sure, I would particpate at a distance.',
      'I am not about to get eaten by misquiotes.'],
    answer:'',
  },
  {
    question:'8: How often are you open about your feelings?',
    options:[
      'I keep it 100 - 100% of the time.',
      'I often keep things to myself.',
      'Im open around people I feel comfortable with.',
      'It takes me time to open up. But when I do, its like a waterfall.'],
    answer:'',
  },
  {
    question:'9: Does smoking or drinking bother you?',
    options:[
      'It smells gross, no thank you.',
      'I am guilty of enjoying both.',
      'Drinking is cool but vomiting is not.',
      'I rarely get hungover. Drinking too much is not my jam.'],
    answer:'',
  },
  {
    question:'10: Are you a morning lark or a night owl?',
    options:[
      'Im an early riser.',
      'Not a morning person at all.',
      'If its for an adventure, I dont mind getting up early.',
      'I prefer afternoons on holiday.'],
    answer:'',
  }
]

const answerSelected = {};

//mapped over the array of question objects,
//have my submit button close to working( tweaking it still)
// prettifying the heck out of it.
// following your advice

class Persona extends Component {

  submitForm = (answer) => {
    this.setState({answer: question.answer});
  }

  optSelector = (e) => {
    question.answer = e.target.value;
  }

  handleSubmit = (answers) => {
    console.log('answers', answers);
  }


  render() {
    return (
      <div>
        <NavBar/>
          <Paper className="persona-header"
            style={style}
            zDepth={1} >
           <h2>What kind of travel buddy are you?</h2>
             <p className='persona-header-p'>
              Want to find an ideal travel buddy but dont know where to start?
             </p>
             <p>
              Fret not.
              Our handy traveler personality quiz will set you on
              the right path...
             </p>
         </Paper>

         <div className="persona-q">
          {
           question.map((q, index) =>
             <FormQuestion
               key={`key-${index}`}
               question={q}
               onChange={(e) => {
               question.answer = e.target.value;
               answerSelected[index+1] = question.answer;
              }}
             />
            )
          }
         </div>
          <div>
          <Link to={{pathname: '/result'}}>
            <input className="button-primary"
            type="submit"
            onClick={() => this.handleSubmit(answerSelected)}
            value={'submit'}/>
          </Link>
          </div>
        </div>
      );
    }
  }


export default Persona;

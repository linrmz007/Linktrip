import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FormQuestion from '../components/formQuestion';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const style = {
  height: 200,
  width: 900,
  marginTop: 60,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor:'#232323',
};


const questions = [
  {
    question:'You’ve secured yourself a well-deserved day off. How do you spend your time?',
    options:[
      'No point making strict plans, I’ll just see where the wind takes me.',
      'Beach, swimming pool, sunbed. In no particular order.',
      'I head for the hills. There’s nothing like a bit of fresh mountain air…',
      'Books, tea, and films, followed by a long, warm bath.'],
    answer:'',
  },
  {
    question:'What tickles your taste buds?',
    options:[
      'I like to keep it light and fresh with Mediterranean-inspired meals.',
      'Nothing beats seafood served on a beautiful beachfront…',
      'Fondue, raclette, steak and red wine are my flavours of choice.',
      'Home-made spaghetti carbonara, local cheese and rosé.'],
    answer:'',
  },
  {
    question:'Your most treasured travel memories involve...',
    options:[
      'Being whisked away for a spur-of-the-moment weekend in Rome.',
      'Watching a sunset from the beach on a secluded Thai island.',
      'An early morning mountain expedition across pristine pistes.',
      'Seeing the sun set on unknown lands during a late train ride.'],
    answer:'',
  },
  {
    question:'Are you a messy person?',
    options:[
      'My place looks like it was hit by a volcano.',
      'Some would say Im a neat freak.',
      '50/50, I have a method to my madness.',
      'I prefer things to be tidy.'],
    answer:'',
  },
  {
    question:'As far as religion goes your ideal travel buddy would..',
    options:[
      'Follow the same religion as me.',
      'Science wins , pro-atheist.',
      'Religious but doesnt try to recruit me.',
      'Does not give a f$@k about religion.'],
    answer:'',
  },
  {
    question:'Are you more of a wing-it kind of person or preferred structured plans?',
    options:[
      'Wing-it is my middle name.',
      'Planning means no time will be wasted!',
      'A little planning, alotta improvising.',
      'Have a flexible schedule.'],
    answer:'',
  },
  {
    question:'Would you rather be part of a nature show or watch it?',
    options:[
      'Watching is cool, I rather not be eaten by tigers.',
      'The point of nature is being "one" with it, right?',
      'Sure, I would particpate at a distance.',
      'I am not about to get eaten by misquiotes.'],
    answer:'',
  },
  {
    question:'How often are you open about your feelings?',
    options:[
      'I keep it 100 - 100% of the time.',
      'I often keep things to myself.',
      'Im open around people I feel comfortable with.',
      'It takes me time to open up. But when I do, its like a waterfall.'],
    answer:'',
  },
  {
    question:'Does smoking or drinking bother you?',
    options:[
      'It smells gross, no thank you.',
      'I am guilty of enjoying both.',
      'Drinking is cool but vomiting is not.',
      'I rarely get hungover. Drinking too much is not my jam.'],
    answer:'',
  },
  {
    question:'Are you a morning lark or a night owl?',
    options:[
      'Im an early riser.',
      'Not a morning person at all.',
      'If its for an adventure, I dont mind getting up early.',
      'I prefer afternoons on holiday.'],
    answer:'',
  }
]


class Persona extends Component {

  // submitForm = (answer) => {
  //   this.setState({answer: questions.answer});
  // }

  handleSubmit = () => {
    console.log('question', questions);
    const answers = questions.map(question => {
      return {
        question: question.question,
        answer: question.answer
      }
    });
    console.log('answers', answers);
    // update your anwer with user id using key owner
    // do a fetch POST request to /answers
  }


  render() {
    return (
      <div className='quizPage'>
        <NavBar/>
        <div className='persona'>
          <Paper className="persona-header"
            style={style}
            zDepth={1} >
           <h2>What kind of travel buddy are you?</h2>
             <p className='persona-header-p'>
              Need to find an ideal travel buddy but dont know where to start?
             </p>
             <p>
              Fret not.
              Our handy traveler personality quiz will set you on
              the right path.
             </p>
         </Paper>

         <div className="persona-q">
          {
            questions.map((q, index) =>
              <FormQuestion
               number={index}
               key={`key-${index}`}
               question={q}
               onChange={(q, e) => q.answer = e.target.value}
              />
            )
          }
         </div>
          <div className='submit-test-btn'>
          <Link to={{pathname: '/result'}}>
            <input className="button-primary"
            type="submit"
            onClick={this.handleSubmit}
            value={'submit'}/>
          </Link>
          </div>
        </div>
        </div>
      );
    }
  }


export default Persona;

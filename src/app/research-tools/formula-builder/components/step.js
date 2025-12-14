import { Question } from './question';
import { Answers } from './answers';

/**
 * @param {string} parent - String name of the option that results in this question being displayed
 * @param {string[]} choices - String array of choices the user has made so far
 * @param {number} number - Number indicating the position of this step in the sequence of steps
 * @param {string | html} question - String or HTML of of the question to display 
 * @param {string[]} options - String array of answer options
 * @param {MouseEventHandler<HTMLButtonElement>} onClick - button click event handler to execute
 */
export function Step({ parent, choices, number, question, options, onClick, onEnd}) {
  const isParentSelected = !parent || choices.includes(parent);
  const displayThisStep = choices.length >= number - 1;

  if (displayThisStep && (!options || !options.length <= 0)) {
    onEnd();
  }

  return (
    <>
      {
        (isParentSelected && displayThisStep) && 
        <>
          <br/>
          <Question question={question} />
          { 
            options && 
            <Answers stepNumber={number} options={options} onClick={onClick} />
          }
        </>
      }
    </>
  )
}
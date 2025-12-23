import { Question } from './question';
import { Answers } from './answers';

/**
 * @param {string} id - Id of the option that results in this question being displayed
 * @param {string[]} choices - String array of choices the user has made so far
 * @param {string | html} question - String or HTML of of the question to display 
 * @param {string[]} options - String array of answer options
 * @param {MouseEventHandler<HTMLButtonElement>} onClick - button click event handler to execute
 */
export function Step({ stepData, choices, onClick }) {
  const { id, question, options } = stepData;
  const displayStep = !id || choices.includes(id);

  return (
    <>
      {
        (displayStep) && 
        <>
          <br/>
          <Question question={question} />
          { 
            options && 
            <Answers options={options} onClick={onClick} />
          }
        </>
      }
    </>
  )
}
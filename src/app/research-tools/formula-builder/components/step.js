import { Question } from './question';
import { Answers } from './answers';

export function Step({ stepData, choices, onClick }) {
  const { id, question, options } = stepData;
  const displayStep = id === 'root' || choices.includes(id);
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
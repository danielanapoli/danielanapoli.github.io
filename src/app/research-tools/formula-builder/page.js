'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import { Step } from './components/step';
import { steps } from './content/steps';
import { Recommendations } from './components/recommendations';


function ResearchTools() {
  const [choices, setChoices] = useState([]);
  const [formula, setFormula] = useState(null);

  let allSteps = setStepNumbers(1, steps);
  
  const handleAnswerClick = (selectedAnswer) => { 
    setChoices(prev => {
      let selectedStep = allSteps.find(s => s.id === selectedAnswer);
      let stepPosition = selectedStep.number - 1;

      // If we clicked an answer that we already chose do nothing
      if (choices.includes(selectedAnswer)) {
        return prev;
      }

      // If selectedAnswer has no options we've reached the end
      setFormula(selectedStep.formula);
      
      // The slice resets the step back to the earlier step if we changed an old answer
      let newChoices = [...prev.slice(0, stepPosition - 1), selectedAnswer];
      console.debug(newChoices);
      return newChoices;
    })
  }

  return (
    <div className='Tools'> 
      <section id='content'>
          <Container fluid='md'>
            <Row>
              <Col>
              <h1>Stats Formula Wizard</h1>
              </Col>
            </Row>
            <Row>
              <Col>
              Even when you're a stats nerd, it's hard to remember which test best suits specific UX research data. 
              Tell us what you’re working with, and the Stats Formula Wizard will give you some tips.
              </Col>
            </Row>
            <Recommendations formula={formula} />
            {
              steps.map((step, index) => (
                <Step 
                  key={index}
                  stepData={step}
                  choices={choices}
                  onClick={handleAnswerClick}
                />
              ))
            }
            <br/>
          </Container>
      </section>
    </div>
  );
}

function setStepNumbers(stepNumber, step) {
  if (step.options && step.options.length > 0) {
    step.options.foreach(o => {
      o.number = stepNumber;
      setStepNumbers(stepNumer++, o.options);
    })
  }
  return step;
}

export default ResearchTools;
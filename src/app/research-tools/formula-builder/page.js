'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import { useState } from 'react';
import { Step } from './components/step';
import { steps } from './content/steps';
import { CardBody, CardTitle } from 'react-bootstrap';
import { formulas } from './content/formulas';
import { Recommendations } from './components/recommendations';

function ResearchTools() {
  const [choices, setChoices] = useState([]);
  const [formula, setFormula] = useState(null);
  
  const handleAnswerClick = (stepNumber, selectedAnswer) => { 
    setChoices(prev => {
      // If we clicked an answer that we already chose do nothing
      if (selectedAnswer === prev[stepNumber - 1]) {
        return prev;
      }
      
      // The slice resets the step back to the earlier step if we changed an old answer
      return [...prev.slice(0, stepNumber - 1), selectedAnswer];
    })
  }

  const handleEnd = () => {
    let answerKey = choices.join("-");
    setFormula(formulas[answerKey]);
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
                  parent={step.parent}
                  choices={choices}
                  number={step.number}
                  question={step.question}
                  options={step.options}
                  onClick={handleAnswerClick}
                  onEnd={handleEnd}
                />
              ))
            }
            <br/>
          </Container>
      </section>
    </div>
  );
}

export default ResearchTools;
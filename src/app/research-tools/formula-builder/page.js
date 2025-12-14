'use client';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Step } from './components/step';
import { steps } from './content/steps';

function ResearchTools() {
  const [choices, setChoices] = useState([]);
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

  return (
    <div className='Tools'> 
      <section id='content'>
          <Container fluid='md'>
            <Row>
              <Col>
              <h1>Formula Builder</h1>
              </Col>
            </Row>
            <Row>
              <Col>
              Even when you're a statistical wizard, it's hard to remember which test best suits specific UX research data. Just tell the formula builder what you’re working with, and it points you toward the right method to use.
              </Col>
            </Row>
            <br/>
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
                />
              ))
            }
          </Container>
      </section>
    </div>
  );
}

export default ResearchTools;
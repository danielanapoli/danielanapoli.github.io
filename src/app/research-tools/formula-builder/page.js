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
              <h1>Stats Formula Wizard</h1>
              </Col>
            </Row>
            <Row>
              <Col>
              Even when you're a stats nerd, it's hard to remember which test best suits specific UX research data. 
              Tell us what you’re working with, and the Stats Formula Wizard will give you some tips.
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Card className='mt-5' bg='light' style={{ width: '75%'}}>
                <Card.Body>
                  <Card.Title><h3>Suggestions</h3></Card.Title>
                  <Card.Text className='text-center'>Answer the questions and we'll suggest a formula.</Card.Text>
                  <div className='d-flex justify-content-center alight-items-center'>
                      <Spinner animation='border' role='status' size='sm'>
                      <span className='visually-hidden'>Loading...</span>
                      </Spinner>
                  </div>
                </Card.Body>
              </Card>
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
            <br/>
          </Container>
      </section>
    </div>
  );
}

export default ResearchTools;
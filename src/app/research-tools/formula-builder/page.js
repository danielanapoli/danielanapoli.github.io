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

  var allSteps = enrichStepsData(steps);

  const handleAnswerClick = (selectedAnswer) => { 
    setChoices(prev => {
      let selectedStep = allSteps[selectedAnswer];
      let stepPosition = selectedStep.number - 1;

      // If we clicked an answer that we already chose do nothing
      if (choices.includes(selectedAnswer)) {
        return prev;
      }

      // If selectedAnswer has no options we've reached the end
      setFormula(selectedStep.formula);
      
      // The slice resets the step back to the earlier step if we changed an old answer
      let newChoices = [...prev.slice(0, stepPosition - 1), selectedAnswer];
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
              Object.entries(allSteps).map(([key, value]) => (
                <Step 
                  key={key}
                  stepData={value}
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

// Adds the id and step number to the body of each dictionary entry
function enrichStepsData(stepsData) {
  const stepsKeys = Object.keys(stepsData);

  var enrichedSteps = steps;
  for (const key of stepsKeys) {
    enrichedSteps[key] = {
      ...enrichedSteps[key],
      id: key, 
      number: distanceFromRoot(stepsData, key) + 1
    }
  }

  return enrichedSteps;
}

// Calculates how far the node is from the root node
function distanceFromRoot(stepsDict, nodeId, distance = 0) {
  if (nodeId === "root") {
    return distance;
  }

  for (let node in stepsDict) {
    if (stepsDict[node].options.includes(nodeId)) {
      return distanceFromRoot(stepsDict, node, distance + 1);
    }
  }

  return -1;
}

export default ResearchTools;
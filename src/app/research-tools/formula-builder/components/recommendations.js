import { Card, Row } from "react-bootstrap";
import { FormulaBlock } from "./FormulaBlock";

export function Recommendations({ formula }) {
  return (
    <>
      <Row className="justify-content-md-center">
        <Card className='mt-5' bg='light' style={{ width: '75%'}}>
          <Card.Body>
            <Card.Title><h3>Recommendations</h3></Card.Title>
              <FormulaBlock formula={formula} />
          </Card.Body>
        </Card>
      </Row>
      <br/>
    </>
  )
}
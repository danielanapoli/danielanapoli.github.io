import { Card, Row, Spinner } from "react-bootstrap";


export function Recommendations({ formula }) {
    

  return (
    <>
      <Row className="justify-content-md-center">
        <Card className='mt-5' bg='light' style={{ width: '75%'}}>
          <Card.Body>
            <Card.Title><h3>Recommendations</h3></Card.Title>
            <Card.Text className='text-center'>Answer the questions and we'll suggest a formula.</Card.Text>
            <div className='d-flex justify-content-center alight-items-center'>
                <Spinner animation='border' role='status' size='sm'>
                  { 
                    formula ? formula : <span className="visually-hidden">Loading...</span>
                  }
                </Spinner>
            </div>
          </Card.Body>
        </Card>
      </Row>
      <br/>
    </>
  )
}
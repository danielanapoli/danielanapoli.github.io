import { Card, Spinner } from "react-bootstrap"

export function FormulaBlock({ formula }) {
  if (formula) {
    return (
      <div className='d-flex justify-content-center alight-items-center'>
        <strong>{formula.name}</strong>
      </div>
    )
  }
  else {
    return ( 
    <>
      <Card.Text className='text-center'>Answer the questions and we'll suggest a formula.</Card.Text>
      <div className='d-flex justify-content-center alight-items-center'>
        <Spinner animation='border' role='status' size='sm'>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
    )
  }
}
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function BackButton(){

    const router = useRouter();

    return(
        <Row>
            <Col>
                <Button className='fs-6' variant='light' onClick={()=> router.back()}>
                    ← Back
                </Button>
                <br/>
                <br/>
            </Col>
        </Row>
    );
}

export default BackButton;
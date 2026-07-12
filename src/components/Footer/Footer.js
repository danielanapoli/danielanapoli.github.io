import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function footer(){
    return(
        <div className="footer">
        <Container fluid>
            <Row>
            <Col className='text-center'>
            <br/>
            <p>✨</p>
            <h2>Let's Connect</h2>
            <p>
                <a href="mailto:hello@danielanapoli.com" rel="noopener noreferrer" title="Daniela's email address. Will open the mail app.">Email</a> |&nbsp;
                <a href="https://linkedin.com/in/danielanap/" target="_blank" rel="noopener noreferrer" title="Daniela's profile on LinkedIn. Opens in a new tab.">LinkedIn</a> |&nbsp;
                <a href="https://scholar.google.com/citations?user=qdH8ZZcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Daniela's profile on Google Scholar. Opens in a new tab.">Google Scholar</a> |&nbsp;
                <a href="https://www.substack.com/@hellodaniela" target="_blank" rel="noopener noreferrer" title="Daniela's blog on Substack. Opens in a new tab.">Substack</a> |&nbsp;
                <a href="https://github.com/danielanapoli" target="_blank" rel="noopener noreferrer" title="Daniela's profile on GitHub. Opens in a new tab.">GitHub</a>
            </p>  
            <br/>
            <p className="smaller-text">
                Designed & developed by Daniela Napoli <br/>
                Last updated July 2026<br/>
            </p> 
            </Col>
            </Row>
        </Container>
        </div>
    );
}

export default footer;
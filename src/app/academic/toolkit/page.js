'use-client';

import Image from 'react-bootstrap/Image';
import Container  from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Toolkit() {

//   const [index, setIndex] = useState(0);

  return (
    <div className='Toolkit'>
      <section id='content'>
        <Container fluid='md'>
            <Breadcrumb>
                <BreadcrumbItem href='/'>Home</BreadcrumbItem>
                <BreadcrumbItem href='/academic'>Academic Portfolio</BreadcrumbItem>
                <BreadcrumbItem active>Design Toolkit</BreadcrumbItem>
            </Breadcrumb>
            <h1>Remote Healthcare Technology Design Toolkit</h1>
            <br/>
            <Row fluid='true'>
                <Col md={7}>
                    <h2>Improving Remote Healthcare Tech</h2>
                    <p>
                        Focusing on what users need while creating technology can be tough. This can be especially challenging while multidisciplinary teams, filled with people who have different expertise and priorities, are trying to find common ground.
                    </p>
                    <p>
                        This toolkit focuses on what older adults need in terms of privacy when using technology to manage their health and well-being. By addressing these needs, the toolkit helps teams develop solutions that are specifically designed for this group.
                    </p>
                    <h2>Features</h2>
                    <p>The toolkit has 15 validated UX tools, including:</p>
                    <ul>
                        <li><strong>How-Tos</strong> to help decipher how the toolkit can help anyone in UX</li>
                        <li><strong>Personas</strong> to zero in on how different older adults have unique needs, privacy expectations, and opportunities</li>
                        <li><strong>Empathy maps</strong> to unpack older adults' emotions, thoughts, and behaviours with remote healthcare tech</li>
                    </ul>
                    <h2>Data-Driven Content</h2>
                    <p>
                        The toolkit is built on rich survey and interview data (see <a href='/academic/publications'>Publications</a>), and it has been assessed by professionals experienced in healthcare technology and older adults. 
                        Experts' feedback shows that our toolkit can help UX researchers, designers, and developers to...
                    </p>
                    <ol>
                        <li><strong>Build better understanding and empathy</strong> for the specific needs older adults have for remote healthcare tech.</li>
                        <li><strong>Stay focused on those needs</strong> while brainstorming potential solutions tailored for this group.</li>
                    </ol>
                    <h2>Coming Soon</h2>
                    <p>
                        Check back soon for the full details on the toolkit, including more information on how the toolkit was made and what we plan to do to help remote healthcare technology better serve older adults.
                    </p>
                 </Col>
                <Col md={5} className='bg-light text-center p-3'>
                    <h2>Toolkit Samples</h2>
                    <Image src='/img/toolkit-instructions.png' width={'100%'} className='pb-3' alt=''/>
                    <Image src='/img/toolkit-persona.png' width={'100%'} className='pb-3' alt=''/>
                    <Image src='/img/toolkit-empathymap.png' width={'100%'} className='pb-3' alt=''/>
                </Col>
            </Row> 
            <br/>     
            <Row className='text-center align-items-center'>
            <h5><i>In collaboration with...</i></h5>
            <Col className='text-center'>                    
                <Image src='/img/carleton-logo.png' width={'80%'} alt='Logo for Carleton University'/>
            </Col>
            <Col className='text-center'>  
                <Image src='/img/nrc-cnrc-logo.png' width={'60%'} alt='Logo for National Research Council Canada (NRC)'/>
            </Col>
            <Col className='text-center'>  
                <Image src='/img/hc2p-logo.png' width={'80%'} alt='Logo for Human-Centric Cybersecurity Partnership (HC2P)'/>
            </Col>
            </Row>
        </Container>
      </section>
    </div>
  );
}

export default Toolkit;
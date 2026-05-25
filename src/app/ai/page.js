export const metadata = {
  title: 'How I use AI',
  description: 'Learn about how Daniela Napoli uses AI in her user research work.',
};

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { CardLink } from 'react-bootstrap';

function HowIUseAI() {
  return (
    <div className='HowIUseAI'> 
      <section id='content'>
          <Container fluid='md'>
            <h1>My approach to using AI</h1>
            <Row className='prose-content'>
              
                <Table responsive>
                    <thead>
                        <tr>
                            <th style={{ width: '50%'}}><h3>Do ✅</h3></th>
                            <th style={{ width: '50%'}}><h3>Don't do 🚫</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    <li>Externalize ideas I've developed but haven't made coherent for sharing yet.</li>
                                    <li>Critically probe my interpretations, assumptions, and any other biases in research.</li>
                                    <li>Quickly generate obvious ideas to get those out of the way while problem solving.</li>
                                    <li>Adapt messaging to ensure research insights land with partners depending on their perspectives and needs.</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Make decisions for research directions and activities especially during early-stage sensemaking or high-stakes scenarios.</li>
                                    <li>Feed raw participant data without explicit consent and protective privacy mechanisms in place.</li>
                                    <li>Substitute AI conclusions for my personal judgment of user or business needs/insights.</li>
                                    <li>Share AI-generated content that is misleading about my own thinking, research best practices, or actual findings.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </Table>

              <h2>My experiments</h2>
                <h3></h3>
                    <p className='prose-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <CardLink href="" target='_blank' rel='noopener noreferrer' title='Link to the paper "Large language models encode clinical knowledge" published in Nature Communications. Opens in a new tab.'>Read more on Substack</CardLink>
                <h3></h3>
                    <p className='prose-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <CardLink href="" target='_blank' rel='noopener noreferrer' title='Link to the paper "Large language models encode clinical knowledge" published in Nature Communications. Opens in a new tab.'>Read more on Substack</CardLink>

            </Row>
          </Container>
      </section>
    </div>
  );
}

export default HowIUseAI;
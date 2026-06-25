import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardText from 'react-bootstrap/CardText';
import CardSubtitle from 'react-bootstrap/CardSubtitle';
import CardLink from 'react-bootstrap/CardLink';

export function CustomCard({
    cardImage, cardImageAlt = '',
    cardTitle, cardText,
    cardSubtitle, cardSubtext,
    cardLink, cardLinkText,
    cardBg = 'light', cardClassName = ''
}) {
    const linkText = cardLinkText ?? (typeof cardTitle === 'string' ? `Explore ${cardTitle.toLowerCase()}` : 'Read more');

    return(
       <Card bg={cardBg} className={`border-0 h-100 ${cardClassName}`.trim()}>
                {cardImage && <CardImg variant='top' src={cardImage} alt={cardImageAlt} className='p-2 card-img-index d-none d-md-block'/>}
                <CardBody className='d-flex flex-column'>
                  <CardTitle>{cardTitle}</CardTitle>
                  <CardText>{cardText}</CardText>
                  {cardSubtitle && <CardSubtitle>{cardSubtitle}</CardSubtitle>}
                  {cardSubtext && <CardText>{cardSubtext}</CardText>}
                  <CardLink className='mt-auto stretched-link' href={cardLink}>{linkText}</CardLink>
                </CardBody>
        </Card>
    );

}

export default CustomCard;
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

    return(
       <Card bg={cardBg} className={`border-0 h-100 ${cardClassName}`.trim()}>
                {cardImage && <CardImg variant='top' src={cardImage} alt={cardImageAlt} className='p-2 card-img-index d-none d-md-block'/>}
                <CardBody>
                  <CardTitle>{cardTitle}</CardTitle>
                  <CardText>{cardText}</CardText>
                  {cardSubtitle && <CardSubtitle>{cardSubtitle}</CardSubtitle>}
                  {cardSubtext && <CardText>{cardSubtext}</CardText>}
                  <CardLink className='stretched-link' href={cardLink}>{cardLinkText}</CardLink>
                </CardBody>
        </Card>
    );

}

export default CustomCard;
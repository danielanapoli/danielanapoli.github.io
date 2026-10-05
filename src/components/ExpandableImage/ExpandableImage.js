import Image from 'react-bootstrap/Image';

// Wraps an image in a link to the full-size file so visitors can
// open detailed diagrams in a new tab and zoom in.
const ExpandableImage = ({ src, alt, ...props }) => {
    return (
        <a href={src} target='_blank' rel='noopener noreferrer' title='Open full-size image in a new tab' className='d-block text-decoration-none'>
            <Image src={src} alt={alt} fluid className='d-block' {...props} />
            <span className='d-block text-center small text-body-secondary'>
                Click the image to see it full size in a new tab.
            </span>
        </a>
    )
}

export default ExpandableImage

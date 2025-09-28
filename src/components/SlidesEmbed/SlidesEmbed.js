// SOURCE: modelled off of YouTubeEmbed

import PropTypes from "prop-types";

const SlidesEmbed = ({ embedId }) => (
    <div style={{ width: '100%', height: '500px' }}>
    <iframe
        src={embedId}
        width="100%"
        height="100%"
        allowFullScreen={true}
        title="My PowerPoint Presentation"
    />
    </div>
);

SlidesEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default SlidesEmbed;
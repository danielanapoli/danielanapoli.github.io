// SOURCE: modelled off of YouTubeEmbed

import PropTypes from "prop-types";

const SlidesEmbed = ({ embedId }) => (
    <div className="video-responsive">
    <iframe
        src={embedId}
        allowFullScreen={true}
        title="My PowerPoint Presentation"
    />
    </div>
);

SlidesEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default SlidesEmbed;
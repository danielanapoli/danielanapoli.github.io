// SOURCE: modelled off of YouTubeEmbed

import PropTypes from "prop-types";

const SlidesEmbed = ({ embedId, title }) => (
    <div className="video-responsive">
    <iframe
        src={embedId}
        allowFullScreen={true}
        title={title}
    />
    </div>
);

SlidesEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SlidesEmbed;
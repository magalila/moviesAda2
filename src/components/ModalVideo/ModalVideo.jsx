import { useState, useEffect } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";
import PropTypes from "prop-types"; 
import "./ModalVideo.scss";

const ModalVideo = (props) => {
  const { isOpen, close, videoKey, videoPlatform } = props;

  const [urlVideo, setUrlVideo] = useState(null);

  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
  }, [videoKey, videoPlatform]);

  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      <ReactPlayer url={urlVideo} controls muted />
    </Modal>
  );
};

ModalVideo.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  videoKey: PropTypes.string.isRequired,
  videoPlatform: PropTypes.oneOf(["YouTube", "Vimeo"]).isRequired,
};

export default ModalVideo;

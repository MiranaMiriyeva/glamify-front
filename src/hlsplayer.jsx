import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const HLSPlayer = ({ src, autoplay = true, controls = true }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoplay) {
          videoRef.current.play();
        }
      });
      return () => {
        hls.destroy();
      };
    } else if (videoRef.current?.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = src;
      if (autoplay) {
        videoRef.current.play();
      }
    }
  }, [src, autoplay]);

  return <video ref={videoRef} autoPlay loop muted />;
};

export default HLSPlayer;

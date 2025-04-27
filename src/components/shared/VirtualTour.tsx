import { useEffect, useRef } from "react";
import Page from "./Page";

const VirtualTour = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleDeviceMotion = (e: any) => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(
          {
            type: "devicemotion",
            deviceMotionEvent: {
              acceleration: {
                x: e.acceleration.x,
                y: e.acceleration.y,
                z: e.acceleration.z,
              },
              accelerationIncludingGravity: {
                x: e.accelerationIncludingGravity.x,
                y: e.accelerationIncludingGravity.y,
                z: e.accelerationIncludingGravity.z,
              },
              rotationRate: {
                alpha: e.rotationRate.alpha,
                beta: e.rotationRate.beta,
                gamma: e.rotationRate.gamma,
              },
              interval: e.interval,
              timeStamp: e.timeStamp,
            },
          },
          "*"
        );
      }
    };

    window.addEventListener("devicemotion", handleDeviceMotion);

    return () => {
      window.removeEventListener("devicemotion", handleDeviceMotion);
    };
  }, []);

  return (
    <Page styling="bg-gray-200">
      <section className="bg-gray-200 py-12">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6 mt-8 ">
          360 Virtual Tour
        </h2>
        <iframe
          ref={iframeRef}
          id="tour-embeded"
          name="Villa"
          src="https://tour.panoee.net/iframe/67d2a35c4b056f7e6ecee26d"
          frameBorder="0"
          width="100%"
          height="800px"
          scrolling="no"
          allow="vr; xr; accelerometer; gyroscope; autoplay;"
          allowFullScreen={false}
          loading="eager"
        ></iframe>
      </section>
    </Page>
  );
};

export default VirtualTour;

interface VideoProps {
  src: string
}

function Video(props: VideoProps) {
    const src = props.src;
    console.log(`src: ${src}`);
    return (
      <div>
        <video src={src} controls autoPlay />
      </div>
    );
};
export default Video;
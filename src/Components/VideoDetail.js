import react from "react";
import { Paper, Typography } from "@material-ui/core";

export default function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading ...</div>;
  }
  console.log(video.id.videoId);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div style={{ marginLeft:'8px' }}>
      <Paper elevation={6} style={{ height: "100%"}}>
        <iframe
          frameBorder="0"
          height="500px"
          width="500px"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "25px" }}>
        <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </div>
  );
}

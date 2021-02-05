import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default function VideoItem({ video , onVideoSelect }) {
  return (
    <div>
      <Grid item xs={12}>
        <Paper style={{ display: "flex", alignItems: "center" , cursor : 'pointer' }} onClick={ () => onVideoSelect(video)}>
          <img
            style={{ marginRight: "20px" }}
            src={video.snippet.thumbnails.medium.url}
          ></img>
          <Typography variant="subtitle1">{video.snippet.title}</Typography>
        </Paper>
      </Grid>
    </div>
  );
}

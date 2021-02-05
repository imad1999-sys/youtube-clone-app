import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@material-ui/core";
import YoutubeApi from "../src/Components/API/YoutubeApi.js";
import SearchBar from "../src/Components/SearchBar";
import VideoList from "../src/Components/VideoList";
import VideoDetail from "../src/Components/VideoDetail";
import { Component } from "react";
class App extends Component {
  state = {
    videos : [] , 
    selectedVideo : null , 
  }
  onVideoSelect = (video) =>{
    this.setState({
      selectedVideo : video , 
    })
  }
  componentDidMount () {
    this.handleSubmit('Elzero Web School');
  }
  handleSubmit = async (SearchTerm) => {
    const response = await YoutubeApi.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCiI4wHWzYg2lENbx02DJKCXEZ5fUg0S1g",
        q: SearchTerm , 
      },
    });
    this.setState({
      videos : response.data.items , 
      selectedVideo : response.data.items[0] , 
    })
    console.log(response.data.items);
  };
  render() {
    return (
      <div className="App">
        <h1>Youtube Clone Application</h1>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={this.state.selectedVideo}></VideoDetail>
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}></VideoList>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

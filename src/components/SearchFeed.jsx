import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPi } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import SideBar from "./SideBar";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr"}}>
    <div style={{position:"fixed",top:'80px'}}><SideBar/></div>
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        {/* <Box sx={{ mr: { sm: '100px' } }}/> */}
        {<Videos videos={videos} />}
      </Box>
    </Box>
    </div>
  );
};

export default SearchFeed;
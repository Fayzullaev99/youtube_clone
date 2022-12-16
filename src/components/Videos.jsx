import React from "react";
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
    // console.log(videos);
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
      {videos.map((item, i) => (
        <Box key={i} sx={{ width: { xs: '100%', sm: '360px', md: "360px", }}}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
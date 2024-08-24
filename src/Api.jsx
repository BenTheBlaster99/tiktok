import React from "react";
import axios from "axios";

function Api() {
  const API_URL = "https://mock-api/videos";
  const fetchVideos = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("error fetching videos", error);
      return [];
    }
  };
}

export default Api;

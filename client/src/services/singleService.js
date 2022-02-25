import axios from "axios";

const getAllSingles = async () => {
  const response = await axios.get(`/api/single`);

  return response.data || [];
};

const getAllSinglesByLocation = async (location) => {
  const response = await axios.get(`/api/single/${location}`);

  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getAllSingles, getAllSinglesByLocation };

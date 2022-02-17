import axios from "axios";

const getAllUsers = async () => {
  const response = await axios.get(`/api/user`);

  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getAllUsers };

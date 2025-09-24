
import axios from "axios";

const API_URL = "https://64fa8e3c-1234.mockapi.io/patients"; 

export const getPatients = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching patients", err);
    return [];
  }
};


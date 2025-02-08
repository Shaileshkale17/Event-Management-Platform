import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const ConnectionDb = async () => {
  try {
    const connectURL = await connect(process.env.COnnectURl);
    console.log("Connection Host Name :- ", connectURL.connection.host);
  } catch (error) {
    exit(1);
    console.log(error);
  }
};

export default ConnectionDb;

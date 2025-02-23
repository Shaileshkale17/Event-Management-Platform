import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const ConnectionDb = async () => {
  try {
    const connectURL = await connect(process.env.COnnectURl);
    console.log("Connection Host Name :- ", connectURL.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default ConnectionDb;

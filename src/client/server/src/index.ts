import dotenv from "dotenv";

import app from "./app";
import { connectToDatabase } from "./db";
import { verifyEnvironmentsVariables } from "./validators/appStarter";

dotenv.config();

const { DB_CONNECTION_STRING, PORT } = process.env;

const start = async () => {
  console.clear();

  verifyEnvironmentsVariables(process.env);
  await connectToDatabase(DB_CONNECTION_STRING);

  // start the App
  const port = PORT || 5000;
  app.listen(port, () => {
    console.log(`SERVER UP AND LISTENING ON PORT ${port}!`);
    console.log(`server status : GET http://localhost:${port}/api/status`);
  });
};

start();

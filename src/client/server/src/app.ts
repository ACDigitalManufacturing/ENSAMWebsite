import express from "express";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";

//? models
import { DocumentDoc, PostDoc } from "./models";

//? errors
import { NotFoundError } from "./errors/not-found-error";

//? middlewares
import { errorHandler } from "./middlewares/error-handler";

//? Routes
import { mainRouter } from "./routes";

//? global declaration
declare global {
  namespace Express {
    interface Request {
      post: PostDoc;
      document: DocumentDoc;
    }
  }
}

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use(morgan("dev"));

//!
//! routes - start
app.use("/api/", mainRouter);

//! routes - end
//!

app.get("/api/status", async (_, res) => {
  res.send("server up and running ✔✔");
});

app.all("*", async (_, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;

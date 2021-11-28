import express from "express";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";
import path from "path";

//? models

//? errors
import { NotFoundError } from "./errors/not-found-error";

//? middlewares
import { errorHandler } from "./middlewares/error-handler";

//? Routes
import { postsRouter } from "./routes/Posts";
import { PostDoc } from "./models";

//? global declaration
declare global {
  namespace Express {
    interface Request {
      //! Client
      //! Admin
      post: PostDoc;
    }
  }
}

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

app.use(morgan("dev"));

// public files
app.use("/public", express.static(path.join(__dirname, "public")));

//!
//! routes - start
app.use("/posts", postsRouter);
//! routes - end
//!

app.get("/status", async (_, res) => {
  res.send("server up and running ✔✔");
});

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;

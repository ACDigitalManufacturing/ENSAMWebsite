import express from "express";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";
import path from "path";

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
      //! Client
      //! Admin
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

// public files
// app.use("/public", express.static(path.join(__dirname, "public")));

//!
//! routes - start
app.use("/api/v1/", mainRouter);
app.use("/", express.static(path.join(__dirname, "..", "client")));

//! routes - end
//!

app.get("/status", async (_, res) => {
  res.send("server up and running ✔✔");
});

app.all("*", async (_, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.use(errorHandler);

export default app;

import http from "http";
import express, { Express } from "express";
import routes from "./routes/contact";

const router: Express = express();
router.use(express.json());
router.use("/", routes);

const httpServer = http.createServer(router);

httpServer.listen(5000, () => {
  console.log("server is running on port 5000");
});

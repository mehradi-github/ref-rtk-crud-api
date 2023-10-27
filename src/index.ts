import http from "http";
import express, { Express } from "express";
import routes from "./routes/contact";

const router: Express = express();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.use((req, res, next) => {
  // set the CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  // set the CORS headers
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );
  // set the CORS method headers
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
    return res.status(200).json({});
  }
  next();
});

router.use("/", routes);
const httpServer = http.createServer(router);

httpServer.listen(5000, () => {
  console.log("server is running on port 5000");
});

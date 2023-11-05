import http from "http";
import express, { Express } from "express";
import routes from "./routes/contact";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
// app.use((req, res, next) => {
//   // set the CORS policy
//   res.header("Access-Control-Allow-Origin", "*");
//   // set the CORS headers
//   res.header(
//     "Access-Control-Allow-Headers",
//     "origin, X-Requested-With,Content-Type,Accept, Authorization"
//   );
//   // set the CORS method headers
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
//     return res.status(200).json({});
//   }
//   next();
// });

app.use("/", routes);
const httpServer = http.createServer(app);

httpServer.listen(5002, () => {
  console.log("server is running on port 5002");
});

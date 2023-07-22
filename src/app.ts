import express from 'express';
const app = express();
require("dotenv").config();
const databaseUrl = process.env.MONGO_URL;
app.use(express.json());
app.get("/home", (req, res) => {
    res.send("Hello World");
  });
app.listen(5000, async () => {
try {
    //await database.connect();
    console.log("DB Connected");
} catch (e) {
    console.log(e.message);
}
console.log("Server has started on port 5000");
});
    
export default app
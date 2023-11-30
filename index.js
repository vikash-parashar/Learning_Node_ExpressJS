import express from "express";
const app = express();

function logger(req, res) {
    console.log("Request Method : ", req.method)
    console.log("Request URL : ", req.url)
    console.log("Response Status Code : ", res.statusCode)
}
app.use(logger);
app.get("/", (req, res) => {
    res.send("Hello")
});
app.listen("3000", () => {
    console.log("application is running")
});
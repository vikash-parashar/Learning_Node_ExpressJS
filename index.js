import express from "express";
const app = express();
app.use((req, res, next) => {
    console.log("Request Method : ", req.method)
    console.log("Request URL : ", req.url)
    console.log("Response Status Code : ", res.statusCode)
    next();
})
app.get("/", (req, res) => {
    res.send("Hello")
});
app.listen("3000", () => {
    console.log("application is running")
});
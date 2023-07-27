const app = require("./app");
const port = 3000;

// listen for requests
app.listen(port, () => {
    // log
    console.log(`Server is listening on port ${port}`);
});

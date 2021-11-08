const express = require ('express');
const app = express();

app.listen(3000, () => {
    console.log("buuhjah!");
});

// paths
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
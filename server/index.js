const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,
        getFortunes,
        addCompliment,
        getQuotes,
        addFortune,
} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortunes);
app.post("/api/compliment", addCompliment);
app.get("/api/quote", getQuotes);
app.post("/api/fortune/", addFortune);


app.listen(4000, () => console.log("Server running on 4000"));

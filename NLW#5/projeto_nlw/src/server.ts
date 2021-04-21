import express, { request, response } from 'express';

const app = express();

// creating routes GET = Search / POST = CREATE / PUT = Alter / DELETE = Drop / PATCH = Alter a specific information

app.get("/", (request, response) => {
    return response.json({
        message: "Hey dude, how's it going? Let's try to build something with node.js?"
    })
});

app.post("/users", (request, response) => {
    return response.json({
        message: "user created successfull!!"
    });
})

//SERVER 
app.listen(3333, () => console.log("Server is running on port 3333"));
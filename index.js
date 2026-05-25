const express = require("express");
const app = express();
app.use(express.json());
let users = [
    { id: 1, name: "Hassan" },
    { id: 2, name: "Asif" }
];
//This is GET Route 
app.get("/", (req, res) => {
    res.json(
       res.json(users)
    );
});
//This is POST Route
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.json({
        message: "User is Added",
        user: newUser
    });
});
//This is DELETE Route
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.json({
        message: "User is Deleted"
    });
});
//This is PORT
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
    require("dotenv").config();
    require("./config/database.con")
    const app = require("./app");
    const PORT = process.env.PORT || 4000 ;




    app.listen(PORT, ()=>{
        console.log(`Nodemon Server is Running http://localhost:${PORT}`);
        console.log("<h1>Coder Yeasin </h1>");
    });
    
    
//git init 
// echo "# Authentication-with-mongobd" >> README.md
// git init
// git add README.md   / git add .
// git commit -m "first commit"
// git branch -M main
// git remote add conected https://github.com/coder-yeasin/Authentication-with-mongobd.git
// git push -u conected main


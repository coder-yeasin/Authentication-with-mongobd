    require("dotenv").config();
    require("./config/database.con")
    const app = require("./app");
    const PORT = process.env.PORT || 4000 ;




    app.listen(PORT, ()=>{
        console.log(`Nodemon Server is Running http://localhost:${PORT}`);
    });
    
    
//git init 
// echo "# Authentication-with-mongobd" >> README.md
// git init
// git add README.md   / git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/coder-yeasin/Authentication-with-mongobd.git
// git push -u origin main


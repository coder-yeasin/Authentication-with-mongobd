    require("dotenv").config();
    require("./config/database.con")
    const app = require("./app");
    const PORT = process.env.PORT || 4000 ;




    app.listen(PORT, ()=>{
        console.log(`Nodemon Server is Running http://localhost:${PORT}`);
        console.log("<h1>Coder Yeasin </h1>");
    });
    
    
//git init 

 




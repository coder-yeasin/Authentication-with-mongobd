    require("dotenv").config();
    require("./config/database.con")
    const app = require("./app");
    const PORT = process.env.PORT || 4000 ;




    app.listen(PORT, ()=>{
        console.log(`Server is Running http://localhost:${PORT}`)
    });
    
    


 




import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
    try {
        await mongoose.connect(config.database_uri as string);
        app.listen(config.port, () => {
            console.log(`server is running at ${config.port}`);
        })
    }
    catch (err) {
        console.log(err);
    }
    
}

main();


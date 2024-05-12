
let instance = null;
const mongoose = require("mongoose")
class Database {
    constructor(){
        if (!instance) {
            this.mongoConnection = null;
            instance = this;
        }
        return instance;
    }

    async connect(options){
        try {
            let db = await mongoose.connect(options.CONNECTION_STRING);
        
            this.mongoConnection = db;
            console.log("Db_Connected")
        } catch (error) {
            console.error(err);
            process.exit(1)
        }


    }
}


module.exports = Database;
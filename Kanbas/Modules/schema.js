import mongoose from "mongoose";

const modulesSchema = new mongoose.Schema({
    id : String,
    name: { type: String, required: true },
    description: String,
    course: { type: String, required: true },
    lessons: [
        {
            id: String,
            name: String,
            description: String,
            module: String,
        }
    ]
},
    { collection: "modules" }
);

export default modulesSchema;
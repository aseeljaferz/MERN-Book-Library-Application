import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        aboutBook: {
            type: String,
            required: true,
        },
        geners: {
            type: String,
            required: true,
        },
        // type: {
        //     type: String,
        //     required: true,
        // }
    },
    {
        timestamps: true,
    }
)

export const Book = mongoose.model('Book', bookSchema);
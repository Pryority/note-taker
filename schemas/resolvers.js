const { Note } = require('../models/Note');
export const resolvers = {
    Query: {
        async allNotes() {
            return await Note.find();
        }
    }
};
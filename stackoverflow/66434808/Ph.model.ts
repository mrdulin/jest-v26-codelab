import mongoose from 'mongoose';

const schema = new mongoose.Schema();

const Ph = mongoose.model('Ph', schema);

export default Ph;

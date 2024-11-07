require('dotenv').config();
const mongoose = require('mongoose');

const dbURL = process.env.MONGO_URI;

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
      console.log('MongoDB Atlas에 성공적으로 연결되었습니다!');
  })
  .catch(err => {
      console.error('MongoDB Atlas 연결 에러:', err);
  });
  
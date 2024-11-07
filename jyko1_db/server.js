require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db'); // MongoDB 연결 설정
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json()); // JSON 파싱을 위한 미들웨어
app.use('/api', userRoutes); // 라우트 설정

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});

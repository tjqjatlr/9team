// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/users');  // User 모델 가져오기

// // 로그인 함수
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // 이메일을 기준으로 사용자 검색
//     const user = await User.findOne({ email: email });

//     if (!user) {
//       return res.status(400).json({ message: '이메일 또는 비밀번호가 잘못되었습니다.' });
//     }

//     // 비밀번호 확인
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: '이메일 또는 비밀번호가 잘못되었습니다.' });
//     }

//     // JWT 토큰 생성
//     const token = jwt.sign({ user_id: user.user_id, email: user.email }, process.env.JWT_SECRET_KEY, {
//       expiresIn: '1h',  // 1시간 만료
//     });

//     // 로그인 성공 시 토큰과 사용자 정보를 반환
//     return res.status(200).json({
//       message: '로그인 성공',
//       token: token,
//       user: {
//         email: user.email,
//         is_boss: user.is_boss,
//         status: user.status,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: '서버 오류, 나중에 다시 시도해주세요.' });
//   }
// };

// // 회원가입 함수
// const signup = async (req, res) => {
//   const { email, password, is_boss } = req.body;

//   try {
//     // 이미 존재하는 이메일 확인
//     const existingUser = await User.findOne({ email: email });
//     if (existingUser) {
//       return res.status(400).json({ message: '이미 사용 중인 이메일입니다.' });
//     }

//     // 비밀번호 암호화
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // 새로운 사용자 생성
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//       is_boss,
//       status: 'active',
//       created: new Date(),
//       updated: new Date(),
//     });

//     // 저장
//     await newUser.save();

//     // 회원가입 성공 메시지
//     return res.status(201).json({ message: '회원가입 성공' });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: '서버 오류, 나중에 다시 시도해주세요.' });
//   }
// };

// module.exports = {
//   login,
//   signup,
// };

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');  // uuid 모듈 임포트
const User = require('../models/users');  // User 모델 가져오기

// 로그인 함수
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 이메일을 기준으로 사용자 검색
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: '이메일 또는 비밀번호가 잘못되었습니다.' });
    }

    // 비밀번호 확인
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: '이메일 또는 비밀번호가 잘못되었습니다.' });
    }

    // JWT 토큰 생성
    const token = jwt.sign({ user_id: user.user_id, email: user.email }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',  // 1시간 만료
    });

    // 로그인 성공 시 토큰과 사용자 정보를 반환
    return res.status(200).json({
      message: '로그인 성공',
      token: token,
      user: {
        email: user.email,
        is_boss: user.is_boss,
        status: user.status,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: '서버 오류, 나중에 다시 시도해주세요.' });
  }
};

// 회원가입 함수
const signup = async (req, res) => {
  const { email, password, is_boss } = req.body;

  try {
    // 이미 존재하는 이메일 확인
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: '이미 사용 중인 이메일입니다.' });
    }

    // user_id를 UUID로 생성
    const user_id = uuidv4();

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 새로운 사용자 생성
    const newUser = new User({
      user_id,  // 자동 생성된 user_id
      email,
      password: hashedPassword,
      is_boss,
      status: 'active',  // 기본적으로 'active'로 설정
      created: new Date(),
      updated: new Date(),
    });

    // 사용자 저장
    await newUser.save();

    // 회원가입 성공 메시지
    return res.status(201).json({ message: '회원가입 성공' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: '서버 오류, 나중에 다시 시도해주세요.' });
  }
};

module.exports = {
  login,
  signup,
};


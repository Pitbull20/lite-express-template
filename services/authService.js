import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

// Генерація JWT
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Реєстрація нового користувача
export const register = async (email, password) => {
    if (!email || !password) {
        throw { status: 400, message: 'Email and password are required.' };
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw { status: 400, message: 'Email already in use.' };
    }

    const user = await User.create({ email, password });
    const token = generateToken(user.id);

    return { token, user: { id: user.id, email: user.email } };
};

// Логін користувача
export const login = async (email, password) => {
    if (!email || !password) {
        throw { status: 400, message: 'Email and password are required.' };
    }

    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw { status: 401, message: 'Invalid email or password.' };
    }

    const token = generateToken(user.id);
    return { token, user: { id: user.id, email: user.email } };
};

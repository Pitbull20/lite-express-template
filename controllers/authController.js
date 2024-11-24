import * as authService from '../services/authService.js';

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.register(email, password);
        res.status(201).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Registration failed.' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.login(email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || 'Login failed.' });
    }
};

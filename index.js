import dotenv from 'dotenv';
import express from 'express';
import sequelize from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import path from 'path';
dotenv.config({ path: path.resolve('config', '.env') });

const app = express();

// Middleware для обробки JSON
app.use(express.json());

// Маршрути
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Lite Express Template 🚀');
});

// Запуск сервера
const PORT = process.env.PORT || 5000;

(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully!');
        await sequelize.sync(); // Заміни на `{ alter: true }` для розробки, щоб пересинхронізувати базу
        console.log('✅ All models were synchronized successfully!');
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Failed to connect to the database:', error);
    }
})();

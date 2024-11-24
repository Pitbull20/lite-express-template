
# Lite Express Template 🚀

Базова структура для швидкого старту з Express.js, Sequelize та MySQL. Цей шаблон має організовану архітектуру, яка легко розширюється для побудови будь-якого REST API.

## 📂 Структура проєкту
```
lite-express-template/
├── config/          # Налаштування (база даних, змінні оточення)
│   ├── .env         # Змінні оточення
│   ├── database.js  # Конфігурація бази даних
├── controllers/     # Контролери (логіка обробки маршрутів)
├── middleware/      # Проміжні функції (наприклад, перевірка токенів)
├── models/          # Моделі Sequelize
│   ├── User.js      # Модель користувача
├── routes/          # Маршрути (поділ API за ресурсами)
├── services/        # Бізнес-логіка
├── utils/           # Утиліти (наприклад, генерація токенів)
├── index.js         # Головний файл сервера
├── package.json     # Залежності Node.js
└── README.md        # Опис проєкту
```

## ⚙️ Встановлення

### Крок 1: Клонування репозиторію
```bash
git clone https://github.com/your-username/lite-express-template.git
cd lite-express-template
```

### Крок 2: Встановлення залежностей
```bash
npm install
```

### Крок 3: Налаштування змінних оточення
Створи файл `.env` у папці `config` і додай такі змінні:
```
DB_HOST=localhost
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASS=your_database_password
JWT_SECRET=your_secret_key
```

### Крок 4: Запуск серверу
#### У режимі розробки:
```bash
npm run dev
```

#### У режимі продакшен:
```bash
npm run start
```

## 🛠️ Можливості
- **Архітектура MVC**: Чистий та зрозумілий поділ на шари.
- **Sequelize**: ORM для взаємодії з MySQL.
- **JWT Авторизація**: Захист маршрутів за допомогою JSON Web Token.
- **Модульний підхід**: Використання `type: "module"` для сучасного JavaScript.

## 📚 Як використовувати
1. Додай нові моделі в папку `models/`.
2. Опиши відповідну бізнес-логіку в `services/`.
3. Налаштуй нові маршрути в `routes/`.
4. Внеси зміни в `controllers/` для обробки запитів.

## 📜 Ліцензія
Цей проект має ліцензію [MIT](LICENSE).

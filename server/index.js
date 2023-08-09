require('dotenv').config();

const app = require('./app.js');
const sequelize = require('./database/postgresql.js');
const Directory = require('./internal/model/directoryModel.js');
const Note = require('./internal/model/noteModel.js');
const User = require('./internal/model/userModel.js');

const PORT = process.env.PORT || 5000;

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection established successfully');

        await User.sync();
        await Directory.sync();
        await Note.sync();

        // Получаем список имеющихся моделей и выводим их названия (таблицы)
        const modelNames = Object.keys(sequelize.models);
        console.log('Existing tables:', modelNames.join(', '));

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch(err) {
        console.log(err);
    }
})();

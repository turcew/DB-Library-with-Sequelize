const { sequelize } = require("./src/db/models");

async function test() {
  try {
    await sequelize.authenticate();
    console.log("Соединение с БД было успешно установлено");
  } catch (e) {
    console.log("Невозможно выполнить подключение к БД: ", e.message);
  } finally {
    await sequelize.close();
  }
}

test();

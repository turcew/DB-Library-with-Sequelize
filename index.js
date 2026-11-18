const { sequelize, Authors } = require("./src/db/models");

async function test() {
  try {
    await sequelize.authenticate();
    console.log("Соединение с БД было успешно установлено");
  } catch (e) {
    console.log("Невозможно выполнить подключение к БД: ", e.message);
  }
}

test();

async function run() {
  try {
    await Authors.sync();
    console.log(`Таблица ${Authors.name} воссоздана успешно`);

    const [results] = await sequelize.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name='authors';",
    );
    console.log(
      "Подтверждение:",
      results.length > 0 ? "Таблица существует" : "Таблица отсутствует",
    );
    await Authors.drop();
    console.log(`Таблица ${Authors.name} удалена успешно`);

    await Authors.sync();
    console.log(`Таблица ${Authors.name} воссоздана успешно`);
  } catch (e) {
    console.log("Ошибка: ", e.message);
  } finally {
    await sequelize.close();
  }
}

run();

const { sequelize, Authors } = require("./src/db/models");

async function run() {
  try {
    await sequelize.authenticate();
    console.log("Подключено");

    // await Authors.drop();
    // console.log(`Таблица ${Authors.name} удалена успешно`);

    await Authors.sync();
    console.log(`Таблица ${Authors.name} воссоздана успешно`);

    const [results] = await sequelize.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_name='authors';",
    );
    console.log(
      "Подтверждение:",
      results.length > 0 ? "Таблица существует" : "Таблица отсутствует",
    );
  } catch (e) {
    console.log("Ошибка: ", e.message);
  } finally {
    await sequelize.close();
  }
}

run();

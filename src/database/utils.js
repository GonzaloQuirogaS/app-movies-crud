const fs = require("fs");

const saveToDb = (DB) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf8",
  });
};

module.exports = { saveToDb };

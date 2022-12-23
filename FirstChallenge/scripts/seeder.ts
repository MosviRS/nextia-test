import fs from 'fs';
import { parse } from 'csv-parse';
import {User} from '../src/models/UserModel';
import {Goods} from '../src/models/GoodsModel';

async function importGoods(userId) {
  const PATH = `${__dirname}/data.csv`;
  fs.createReadStream(PATH)
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", async function (row) {
    const article = row[1].trim();
    const description = row[2].trim();
    // crea un objeto para el nuevo artículo
    const newGood = {
      article,
      description,
      userId,
    };
    // agrega el nuevo articulo a la base de datos
    await Goods.create(newGood);
  })
  .on("end", function () {
    console.log('Finished importing goods');
  })
  .on("error", function (error) {
    console.log(error.message);
  });
}

async function main() {
  // register a new user
  const newUser = {
    name: 'John Doe',
    email: 'johdn.doe@example.com',
    password: '123456'
  };
  const user = await User.create(newUser);
  console.log(`Successfully created user with id ${user.id}`); 

  // import goods for the user
  await importGoods(user.id);
}

main();
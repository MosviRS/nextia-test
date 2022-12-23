import fs  from 'fs';
import {parse} from "csv-parse";
import { User } from '../src/models/UserModel';
import {Goods} from '../src/models/GoodsModel';

async function importGoods(userId: number) {
  const PATH = `${__dirname}/../../store/data.csv`;
  fs.createReadStream(PATH)
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });
 /*  // abre el archivo CSV para su lectura
  const stream = createReadStream('goods.csv');
  // crea un parser para procesar los datos del archivo
  const parser = new Parser();

  // procesa cada línea del archivo
  parser.on('data', async (data) => {
    const { article, description } = data;
    // crea un objeto para el nuevo bien
    const newGood = {
      article,
      description,
      userId,
    };
    // agrega el nuevo bien a la base de datos
    await Good.create(newGood);
  });

  // maneja el error si ocurre alguno al leer el archivo
  parser.on('error', (error) => {
    console.error(error);
  });

  // maneja el evento 'end' cuando se ha terminado de leer el archivo
  parser.on('end', () => {
    console.log('Finished importing goods');
  });

  // comienza a leer el archivo
  stream.pipe(parser); */
}

async function main() {
  // register a new user
/*   const newUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };
  const user = await User.create(newUser);
  console.log(`Successfully created user with id ${user.id}`); */

  // import goods for the user
  await importGoods(1);
}

main();
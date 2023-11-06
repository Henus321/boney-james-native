import {
  SQLiteDatabase,
  enablePromise,
  openDatabase,
} from 'react-native-sqlite-storage';
import {CartItemType, CartItemRawType} from '../models';

const tableName = 'bj';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'bj.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
		slug TEXT PRIMARY KEY NOT NULL,
		size TEXT NOT NULL,
		color TEXT NOT NULL,
		quantity INTEGER NOT NULL,
		cost INTEGER NOT NULL,
		description TEXT NOT NULL,
		name TEXT NOT NULL,
		type TEXT NOT NULL,
		options TEXT NOT NULL,
 		sizes TEXT NOT NULL
	  );`;

  await db.executeSql(query);
};

export const getCartItems = async (
  db: SQLiteDatabase,
): Promise<CartItemType[]> => {
  try {
    const cartItemsRaw: CartItemRawType[] = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        cartItemsRaw.push({...result.rows.item(index)});
      }
    });
    return cartItemsRaw.map(item => ({
      ...item,
      options: JSON.parse(item.options),
      sizes: JSON.parse(item.sizes),
    })) as CartItemType[];
  } catch (error) {
    console.error(error);
    throw Error('Failed to get cartItems !!!');
  }
};

export async function insertCartItem(item: CartItemType) {
  const database = await getDBConnection();
  const promise = new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        `INSERT INTO ${tableName} (size, color, quantity, options, cost, description, name, sizes, slug, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          item.size,
          item.color,
          item.quantity,
          JSON.stringify(item.options),
          item.cost,
          item.description,
          item.name,
          JSON.stringify(item.sizes),
          item.slug,
          item.type,
        ],
        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });

  return promise;
}

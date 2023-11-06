import {openDatabase} from 'react-native-sqlite-storage';
import {CartItemType} from '../models';

const tableName = 'bj';

export const getDBConnection = async () => {
  return openDatabase({name: 'bj.db', location: 'default'});
};

export const initSqlite = async () => {
  const db = await getDBConnection();
  const promise = new Promise<void>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${tableName} (
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
		  );`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });

  return promise;
};

export const getCartItems = async () => {
  const db = await getDBConnection();
  const promise = new Promise<CartItemType[]>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM ${tableName}`,
        [],
        (_, result) => {
          const cartItems: CartItemType[] = [];

          for (const dp of result.rows.raw()) {
            cartItems.push({
              color: dp.color,
              cost: dp.cost,
              description: dp.description,
              name: dp.name,
              options: JSON.parse(dp.options),
              quantity: dp.quantity,
              size: dp.size,
              sizes: JSON.parse(dp.sizes),
              slug: dp.slug,
              type: dp.type,
            });
          }

          resolve(cartItems);
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });

  return promise;
};

export const insertCartItem = async (item: CartItemType) => {
  const db = await getDBConnection();
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
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
          resolve(result);
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });

  return promise;
};

const { client } = require("./common");

const seed = async () => {
  try {
    await client.connect();
    const SQL = `DROP TABLE IF EXISTS flavors;
        CREATE TABLE flavors(
         id  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
         name VARCHAR(100),
         is_favorite BOOLEAN DEFAULT FALSE ,
         created_at TIMESTAMP DEFAULT now (),
         updated_at TIMESTAMP DEFAULT now(),
       );
           INSERT INTO flavors(name) VALUES('Clive');
           INSERT INTO flavors(name, is_favorite) VALUES('Cleo', true);
           INSERT INTO flavors(name) VALUES('Snoh');
           INSERT INTO flavors(name, is_favorite) VALUES('Suzie', true);
       `;
    await client.query(SQL);
    await client.end();
    console.log("We have data");
  } catch (error) {
    console.log(error);
  }
};

seed();
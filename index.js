const { Pool } = require("pg");
const yargs = require("yargs");
yargs.version("1.0.5");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "summer", // Use the new database name
  password: "postgres",
  port: 5432, // Default PostgreSQL port
});

if (!yargs.argv) {
  throw yargs.requiresArg;
}

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

yargs.command({
  command: "show_all",
  describe: "Show All Customer",
  builder: {},
  handler(argv) {
    getallcustomers();
  },
});

const getallcustomers = async () => {
  try {
    let query = "SELECT * FROM customer";
    let params = [];

    const result = await pool.query(query, params);
    console.log(result.rows);
  } catch (err) {
    console.error(err.message);
  }
};

yargs.command({
  command: "get_one_customer",
  describe: "Show One Customer",
  builder: {
    id: {
      describe: "customer_id",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    getonecustomers(argv.id);
  },
});

const getonecustomers = async (id) => {
  try {
    let query = "SELECT * FROM customer WHERE customer_id=" + id;
    let params = [];

    const result = await pool.query(query, params);
    console.log(result.rows);
  } catch (err) {
    console.error(err.message);
  }
};

yargs.command({
  command: "get_order_of_one",
  describe: "Show All Orders of Specific Customer",
  builder: {
    id: {
      describe: "customer_id",
      demandOption: false,
      type: "number",
    },
  },
  handler(argv) {
    orderofcustomer(argv.id);
  },
});

const orderofcustomer = async (id) => {
  try {
    let query = "SELECT * FROM orders WHERE customer_id=" + id;
    let params = [];

    const result = await pool.query(query, params);
    // json(result.rows);
    console.log(result.rows);
  } catch (err) {
    console.error(err.message);
  }
};
yargs.parse();

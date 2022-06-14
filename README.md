# Cookbook

Cookbook is a place for me to keep, update, and read my recipes. Coded in MERN stack

## Installation

1. Clone Repository

```bash
git clone https://github.com/ThomJGregory/cookbook
```

2. Run npm install to install necessary node_modules

```bash
npm install
```

3. Create .env file in root directory

4. Within the .env file, add variables for your Node Environment(NODE_ENV), backend server port (PORT), your MongoDB URI (MONGO_URI), and your JWT secret (JWT_SECRET)

```bash
NODE_ENV = development
PORT = 5000
MONGO_URI = mongodb+srv://username:password@yourcluster.xxxx.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET = mysecret
```

5. To start server:

Node:

```bash
npm start
```

Nodemon:

```bash
npm run server
```

## Usage

Once the database is connected: Add, View, Edit, and Delete your favorite recipes!

## License

[MIT](https://choosealicense.com/licenses/mit/)

# ruan.nodejs.express


To configure the project run the command below in the terminal:
```sh
npm install
```

To generate a new secure key run the command below (or another one with a more complex and/or longer password)
```sh
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```
# simple-express-rest-crud-sample
☕ Simple REST application made with express.js

### Run the sample locally
```bash
# clone the repository locally
git clone https://github.com/estebanborai/simple-express-rest-crud-sample.git

# install dependencies
cd simple-express-rest-crud-sample/server/
yarn

# run the server
yarn start

# open your browser at the following URL
# http://localhost:4200/api/palette
```

### Run using Docker
```bash
# build Docker assets
docker-compose build

# run Docker container
docker-compose up
```

##### SSH into Docker container
There is a docker exec command that can be used to connect to a container that is already running.

```bash
docker exec -it <container id> /bin/bash
```

Get the docker <container id> using `docker container ls` in your terminal, copy the *CONTAINER ID* and change it for *<container id>* in the command above.

### Debugging
Here are some steps to setup the environment in order to debug this application using VSCode and Nodemon.
This project already has the configuration loaded at: `.vscode/launch.json`.
All you have to do is:

1. Run the project using **debug** script as follows `yarn run debug`
2. Open Visual Studio Code in the Debug section
3. Select the **Node: Nodemon** option from the select menu right to the **DEBUG** title.
4. Click on the "Play" button
5. Choose the option that says "--inspect" from the prompt menu
6. Set your breakpoints and have fun debbuging!

[Reference](https://github.com/Microsoft/vscode-recipes/tree/master/nodemon).


### Required VSCode Extensions
1. ESLint
2. EditorConfig for VSCode

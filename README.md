# ShareNotes

Before you begin, you need to install:
   - Node.js ( https://nodejs.org );
   - local server ( I used OpenServer https://ospanel.io ); 

How to start!

Local server:
1. Start the server;
2. Add table reactjs.sql ( backend_project/db/reactjs.sql ) to database;
3. Modify the index.js file ( backend_project/db/index.js ) as needed;
```javascript
   const sequelize = new Sequelize(
     'reactjs', // database name
     'root', // database login
     '', // database pass
     {
       dialect: "mysql", // database dialect
       host: "127.0.0.1" // database host
   });
``` 
Project:
1. Open the project folder in the development environment;
2. Modify the index.js ( backend_project/index.js ) file as needed ( on line 76 you can specify the port as needed );
```javascript
   }).listen(3500);
```
3. Run the following commands in the console for backend:
   - cd/backend_project;
   - npm install ( install the required packages );
   - node index.js;
4. Onpe new console and run the following commands for frontend:
   - cd/react_project;
   - npm install;
   - npm start;
5. The project will be available in the browser at http://localhost:3000 ( if you haven't changed the port );

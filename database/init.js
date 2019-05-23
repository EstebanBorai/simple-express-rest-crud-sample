db.getSiblingDB('simple-express-crud-sample');

db.createUser(
  {
    user: 'admin',
    pwd: 'admin',
    roles: [
      { role: 'readWrite', db: 'simple-express-crud-sample' }
    ],
  }
)

db.palette.insert({
  name: 'Black & White',
  colors: ['#000000', '#ffffff'],
  dateCreated: new Date().toISOString()
});

db.palette.insert({
  name: 'Multiple Colors',
  colors: [
    '#aaaaaa',
    '#bbbbbb',
    '#cccccc',
    '#dddddd',
    '#eeeeee'
  ],
  dateCreated: new Date().toISOString()
});

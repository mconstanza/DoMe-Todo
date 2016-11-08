var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'clbadcs2f8mabf4w',
  password: 'n2hb9oqywz3lcs1e',
  database: 'todo_db'
});

connection.connect(function(err) {
  if (err) throw err;
})

module.exports = connection;

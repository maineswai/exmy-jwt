const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into Registration(firstName,lastName,gender,email,password,number)
              values (?,?,?,?,?,?)`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.number
      ],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getUsers: (callback) => {
    pool.query(
      `select id,firstName,lastName,gender,email,password,number from Registration`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUsersByUserId: (id, callback) => {
    pool.query(
      `select id,firstName,lastName,gender,email,password,number from Registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateUsers: (data, callback) => {
    pool.query(
      `update Registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  deleteUser: (data, callback) => {
    pool.query(
      `delete from Registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  getUsersByUserEmail: (email, callback) => {
    pool.query(
      `select * from Registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  }
};

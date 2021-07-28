// import * as mysql from 'mysql';
const mysql = require('mysql');
import chirps from './chirps';

let connection = mysql.connection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    database: 'chirpr'
});

connection.connect();
// export const Connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'chirprapp',
//     password: 'PasstotheChirp123',
//     database: 'chirpr'
// });

connection.query('SELECT * FROM chirps', (err, results, fields) => {
if (err) {
    connection.end();
    return console.log(err);
} console.log(results);
connection.end();
});
// export const Query = (query: string, values?: Array<string | number>) => {

//     return new Promise<Array<any>>((resolve, reject) => {
//         Connection.query(query, values, (err, results) => {
//             if (err) return reject(err);
//             resolve(results);
//         })
//     })    
// };

export default {
    all
}
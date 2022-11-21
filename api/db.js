import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SQL@MITwpu22",
    database:"blog"
})
const mysql = require("mysql");
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
  });
  
exports.getSubject = (req, res) => {
    res.render('subject');
};
// exports.postSubject = (req, res) => {
//     const { subID, subName } = req.body;

//     db.query('SELECT * FROM t_subject where subName = ?',[subName],function(error,results,fields){
//           if(results.length > 0){ 
//                 res.send("Already have Subject");
//           }
//           else{
//                 var sql = 'INSERT INTO `t_subject` (`subID`,`subName`) VALUES (?.?)';
//                 var values = [subID, subName];
//                 db.connect(function(err){
//                     db.query(sql, values, function (err, result){
//                             if(err) throw err;
//                             console.log("entry added");
//                             db.destroy();
//                             res.render('subject');
//                       })
//                 });
//           }
//     }); 
// };

exports.postSubject = (req, res) => {
    console.log(req.body);
  
    const { subID, subName } = req.body;
  
    db.query('SELECT subName FROM t_subject WHERE subName = ?', [subName], async (error, results) => {
      if(error) {
        console.log(error);
      }
  
      if( results.length > 0 ) {
        return res.render('subject', {
          message: 'That subject is already in use'
        })
      } 
     
  
      db.query('INSERT INTO t_subject SET ?', {subID: subID, subName: subName }, (error, results) => {
        if(error) {
          console.log(error);
        } else {
          console.log(results);
          return res.render('subject', {
            message: 'Created Successfull'
          });
        }
      })
    });
  
  }
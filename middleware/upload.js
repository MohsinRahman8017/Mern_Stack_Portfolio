const multer = require ("multer");

const upload = multer ( {
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"Files")
        },
        filename:function(req,file,cb){
            cb(null,file.originalname)
        }
    })
}).fields(
        [ 
          { name: 'file1', maxCount: 1 }, 
          { name: 'file2', maxCount: 1 }, 
          { name: 'file3', maxCount: 1 },
          { name: 'file4', maxCount: 1 }
 ])

module.exports = {upload}
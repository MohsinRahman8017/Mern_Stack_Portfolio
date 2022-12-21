const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
   title:String,
   category:String,
   polycategory:String,
   file1:String,
   file3:String,
   file4:String
}
)

const Post = mongoose.model("posts",PostSchema);

module.exports = {Post}

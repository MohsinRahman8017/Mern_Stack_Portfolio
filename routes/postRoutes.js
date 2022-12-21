const express = require("express");
const postRouter = express.Router();


const {CreatePost,GetAllPost,GetSinglePost,Editpost,DeletePost,GetLowPolyData,GetMidPolyData,GetHighPolyData} = require('../controller/postController')
const {upload} = require("./../middleware/upload")

postRouter.post("/createpost",upload,CreatePost)
postRouter.get("/GetAllPost",GetAllPost)
postRouter.get("/GetSinglePost",GetSinglePost)
postRouter.put("/editpost",upload,Editpost)
postRouter.delete("/deletePost",DeletePost)

// Poly Category

postRouter.get("/LowPolyData",GetLowPolyData)
postRouter.get("/MidPolyData",GetMidPolyData)
postRouter.get("/HighPolyData",GetHighPolyData)

module.exports = {postRouter}
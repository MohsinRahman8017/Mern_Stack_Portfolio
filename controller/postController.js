
const {Post} = require("../schema/postSchema")

let CreatePost = async (req,resp) => {

    const dataText = req.body;

    let dataFiles = {
        file1:req.files.file1[0].originalname,
        file3:req.files.file3 ? req.files.file3[0].originalname : "",
        file4:req.files.file4 ? req.files.file4[0].originalname : ""
    }

    let ModelObject = {
        ...dataText,
        ...dataFiles
    }

    const newModel = new Post(ModelObject)

    try {
         await newModel.save() ; 
         resp.status(201).json({message:"Model Uploaded Successfully"})
    } catch (error) {
        resp.status(401).json({message:"Something Went Wrong"})
    }

}

let GetAllPost = async (req,resp) => {

    try {
        const post = await Post.find({});
         resp.status(201).json({post:post})
    } catch (error) {
        resp.status(401).json({message:error})
    }
}

let GetSinglePost = async (req,resp) => {

   let PostId =  req.headers.postid;

   let post =  await Post.findOne({_id:PostId})

   try {
       resp.status(201).json(post)  
   } catch (error) {
       resp.status(401).json({message:error})  
   }

}

let Editpost = async (req,resp) => {
    let PostId = req.headers.postid;

    const old = await Post.findOne({_id:PostId})

    console.log(old)

    const dataText = req.body;

    let dataFiles = {
        file1:req.files.file1 ? req.files.file1[0].originalname:old.file1,
        file3:req.files.file3 ? req.files.file3[0].originalname :old.file3,
        file4:req.files.file4 ? req.files.file4[0].originalname :old.file4
    }


    let ModelObject = {
        ...dataText,
        ...dataFiles
    }

    const newModel = new Post(ModelObject)

    try {
         const Model = await Post.updateOne({_id:PostId},{$set:newModel}) ; 
         resp.status(201).json({message:"Model Updated Successfully",newModel})
    } catch (error) {
        resp.status(401).json({message:"Something Went Wrong"})
    }

}

let DeletePost = async (req,resp) => {

    let PostId = req.headers.postid;

    try {
        let post = await Post.deleteOne({_id:PostId})
        resp.status(201).json({message:"Model Deleted Successfully"})
        
    } catch (error) {
        resp.status(401).json({message:"Something Went Wrong"})
    }

}


// Poly Cateory 

let GetLowPolyData = async (req,resp) => {

    const posts = await Post.find({polycategory:"LowPoly"});
    try {
        resp.status(201).json({post:posts});
    } catch (error) {
        resp.status(401).json({message:error})
    }
    
}
let GetMidPolyData = async (req,resp) => {

    const posts = await Post.find({polycategory:"MidPoly"});
    try {
        resp.status(201).json({post:posts});
    } catch (error) {
        resp.status(401).json({message:error})
    }
    
}
let GetHighPolyData = async (req,resp) => {

    const posts = await Post.find({polycategory:"HighPoly"});
    try {
        resp.status(201).json({post:posts});
    } catch (error) {
        resp.status(401).json({message:error})
    }
    
}

module.exports = {CreatePost,GetAllPost,GetSinglePost,Editpost,
                  DeletePost,GetLowPolyData,GetMidPolyData,
                  GetHighPolyData}
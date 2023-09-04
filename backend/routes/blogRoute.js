import express from "express";
import { 
    getAllBlogPostsController, 
    getBlogByIdController, 
    createBlogPostController, 
    updateBlogPostController, 
    deleteBlogPostController, 
    userBlogPostsController 
} from "../controllers/blogControlller";

const router = express.Router();

// Get All Blogs
router.get("/blogs", getAllBlogPostsController);

//Get Single Blog 
router.get("/posts/:id", getBlogByIdController);

//Get User Blogs
router.get("/userBlog/:id", userBlogPostsController);

//Compose Blog
router.post("/composeBlog", createBlogPostController);

//Update Blogs
router.put("/updateBlog/:id", updateBlogPostController);

//Delete Blogs
router.delete("/deleteBlog/:id", deleteBlogPostController);

export default router;
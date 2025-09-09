import slugify from "slugify"
import catagoryModel from "../models/catagory.model.js"

// Simple in-memory cache for categories
let categoryCache = {
  data: null,
  timestamp: null,
  ttl: 5 * 60 * 1000 // 5 minutes cache
};

const isCacheValid = () => {
  return categoryCache.data && 
         categoryCache.timestamp && 
         (Date.now() - categoryCache.timestamp) < categoryCache.ttl;
};

export const createCatagoryController=async(req, res)=>{
try {
    const {name}=req.body
    if (!name) {
        return res.status(400).json({
            message:"name is required"
        })
    }
    //checking existing catagory
    const existingCatagory=await catagoryModel.findOne({name})

    if (existingCatagory) {
        return res.status(200).json({
            message:"catagory already exist"
        })
    }

    const catagory = await new catagoryModel({name, slug:slugify(name)}).save()
    
    // Invalidate cache when new category is created
    categoryCache.data = null;
    categoryCache.timestamp = null;
    
    res.status(200).json({
        success:true,
        message:"new catagory created"
    })
    
} catch (error) {
    console.log(error)
    res.status(500).json({
        success:false,
        error,
        message:"errorin catagory"
    })
}
}

//get all catagory
export const catagoryController=async(req, res)=>{
    try {
        // Check cache first
        if (isCacheValid()) {
            return res.status(200).json({
                success: true,
                message: "all catagories list (cached)",
                catagory: categoryCache.data,
                fromCache: true
            });
        }

        const catagory= await catagoryModel.find({})
        
        // Update cache
        categoryCache.data = catagory;
        categoryCache.timestamp = Date.now();
        
        res.status(200).json({
            success:true,
            message:"all catagories list",
            catagory,
            fromCache: false
        })
        

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"error while getting all catagories"
        })
    }
}

export const singleCatagoryController=async(req, res)=>{
            try {
                const catagory=await catagoryModel.findOne({slug:req.params.slug})
                res.status(200).json({
                    success:true,
                    message:"get single catagory successfully",
                    catagory
                })
                
            } catch (error) {
                console.log(error)
                res.status(404).json({
                    success:false,
                    message:'category not found'
                    })
            }
}

export const deleteCatagoryConntroller=async(req, res)=>{
    try {
        const {id} = req.params
        await catagoryModel.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"catagory deleted successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:"cant delete the catagory",
            error
        })
    }
}
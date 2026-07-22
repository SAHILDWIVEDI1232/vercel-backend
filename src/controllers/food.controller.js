// const foodModel=require('../models/food.model');
// const storageService=require("../services/storage.service");
// const likeModel=require("../models/likes.model");
// const saveModel=require("../models/save.model")
// const { v4:uuid}=require ("uuid");

// async function createFood(req,res){
//     //console.log(req.foodPartner)
//     // console.log(req.body)
//     // console.log(req.file)//file ko access krne k liye

//     // ab hm cloud storage k use kremnge kyuki jb apko productuion level pr kaam krenge to apke
//     //paas hard disk y ssd storage k access nbhi rhega to jo apne abhi server pe store kraya hai
//     //use apko cloud storage me bhejna hoga taaki ap bd me use kr ske uske liye hmne use kiya
//     // imagekit pr, bhut se available hain jaise dropbox,google drive, pr hmne use kiya imagekit.

//     const fileUploadResult=await storageService.uploadFile(req.file.buffer,uuid())
// //    console.log(fileUploadResult)

// const foodItem=await foodModel.create({
//     name:req.body.name,
//     description:req.body.description,
//     video:fileUploadResult.url,
//     foodPartner:req.foodPartner._id

// })
// res.status(201).json({
//     mesage:"food created successfully",
//     food:foodItem
// })
//    //res.send("food item created")
// }

// async function getFoodItems(req,res){
//     const foodItems=await foodModel.find({})
//     res.status(200).json({
//         message:"Food items fetched successfully",
//         foodItems
//     })
// }

// async function likeFood(req,res){
//     const {foodId}=req.body;
//     const user=req.user;

//     const isAlreadyLiked=await likeModel.findOne({
//         user:user._id,
//         food:foodId
//     })
//     if(isAlreadyLiked){
//         await likeModel.deleteOne({
//             user:user._id,
//             food:foodId
//         })
//         await foodModel.findByIdAndUpdate(foodId,{
//             $inc:{likeCount:-1}
//         })
//         return res.status(200).json({
//             message:"Food unliked successfully"
//         })
//     }
//     const like=await likeModel.create({
//         user:user._id,
//         food:foodId
//     })
//     await foodModel.findByIdAndUpdate(foodId,{
//         $inc:{likeCount:1}
//     })
//     res.status(201).json({
//         message:"Food Liked successfully",
//         like
//     })
// }

// async function saveFood(req, res) {

//     const { foodId } = req.body;
//     const user = req.user;

//     const isAlreadySaved = await saveModel.findOne({
//         user: user._id,
//         food: foodId
//     })
// if (isAlreadySaved) {

//     await saveModel.deleteOne({
//         user: user._id,
//         food: foodId
//     })

//     await foodModel.findByIdAndUpdate(foodId,{
//         $inc:{ savesCount:-1 }
//     })

//     return res.status(200).json({
//         saved:false,
//         message:"Food unsaved successfully"
//     })
// }

// await saveModel.create({
//     user:user._id,
//     food:foodId
// })

// await foodModel.findByIdAndUpdate(foodId,{
//     $inc:{ savesCount:1 }
// })

// return res.status(201).json({
//     saved:true,
//     message:"Food saved successfully"
// })
// }

// async function getSaveFood(req, res) {

//     const user = req.user;

//     const savedFoods = await saveModel.find({ user: user._id }).populate('food');

//     if (!savedFoods || savedFoods.length === 0) {
//         return res.status(404).json({ message: "No saved foods found" });
//     }

//     res.status(200).json({
//         message: "Saved foods retrieved successfully",
//         savedFoods
//     });

// }
// module.exports={
//     createFood,
//     getFoodItems,
//     likeFood,
//     saveFood,
//     getSaveFood
// }

// const foodModel = require("../models/food.model");
// const storageService = require("../services/storage.service");
// const likeModel = require("../models/likes.model");
// const commentModel = require("../models/comment.model");
// const saveModel = require("../models/save.model");
// const { v4: uuid } = require("uuid");

// async function createFood(req, res) {
//     try {
//         console.log("FILE =", req.file);
//         console.log("BODY =", req.body);

//         if (!req.file) {
//             return res.status(400).json({
//                 message: "Video file is required"
//             });
//         }

//         const fileUploadResult = await storageService.uploadFile(
//             req.file.buffer,
//             uuid()
//         );

//         console.log("UPLOAD RESULT =", fileUploadResult);

//         const foodItem = await foodModel.create({
//             name: req.body.name,
//             description: req.body.description,
//             video: fileUploadResult.secure_url,
//             foodPartner: req.foodPartner._id
//         });

//         return res.status(201).json({
//             message: "Food created successfully",
//             food: foodItem
//         });

//     } catch (err) {
//         console.error("CREATE FOOD ERROR =", err);

//         return res.status(500).json({
//             message: err.message
//         });
//     }
// }

// async function getFoodItems(req, res) {
//     try {
//         const foodItems = await foodModel.find({});

//         return res.status(200).json({
//             message: "Food items fetched successfully",
//             foodItems
//         });

//     } catch (err) {
//         return res.status(500).json({
//             message: err.message
//         });
//     }
// }

// async function likeFood(req, res) {
//     try {
//         const { foodId } = req.body;
//         const user = req.user;

//         const isAlreadyLiked = await likeModel.findOne({
//             user: user._id,
//             food: foodId
//         });

//         if (isAlreadyLiked) {

//             await likeModel.deleteOne({
//                 user: user._id,
//                 food: foodId
//             });

//             await foodModel.findByIdAndUpdate(foodId, {
//                 $inc: { likeCount: -1 }
//             });

//             return res.status(200).json({
//                 liked: false,
//                 message: "Food unliked successfully"
//             });
//         }

//         await likeModel.create({
//             user: user._id,
//             food: foodId
//         });

//         await foodModel.findByIdAndUpdate(foodId, {
//             $inc: { likeCount: 1 }
//         });

//         return res.status(201).json({
//             liked: true,
//             message: "Food liked successfully"
//         });

//     } catch (err) {
//         return res.status(500).json({
//             message: err.message
//         });
//     }
// }

// async function commentFood(req, res) {
//     try {

//         const { foodId } = req.body;
//         const user = req.user;

//         const isAlreadyCommented = await commentModel.findOne({
//             user: user._id,
//             food: foodId
//         });

//         if (isAlreadyCommented) {

//             await commentModel.deleteOne({
//                 user: user._id,
//                 food: foodId
//             });

//             await foodModel.findByIdAndUpdate(foodId, {
//                 $inc: { commentsCount: -1 }
//             });

//             return res.status(200).json({
//                 commented: false,
//                 message: "Comment removed"
//             });
//         }

//         await commentModel.create({
//             user: user._id,
//             food: foodId
//         });

//         await foodModel.findByIdAndUpdate(foodId, {
//             $inc: { commentsCount: 1 }
//         });

//         return res.status(201).json({
//             commented: true,
//             message: "Comment added"
//         });

//     } catch (err) {

//         return res.status(500).json({
//             message: err.message
//         });

//     }
// }

// async function saveFood(req, res) {
//     try {
//         const { foodId } = req.body;
//         const user = req.user;

//         const isAlreadySaved = await saveModel.findOne({
//             user: user._id,
//             food: foodId
//         });

//         if (isAlreadySaved) {

//             await saveModel.deleteOne({
//                 user: user._id,
//                 food: foodId
//             });

//             await foodModel.findByIdAndUpdate(foodId, {
//                 $inc: { savesCount: -1 }
//             });

//             return res.status(200).json({
//                 saved: false,
//                 message: "Food unsaved successfully"
//             });
//         }

//         await saveModel.create({
//             user: user._id,
//             food: foodId
//         });

//         await foodModel.findByIdAndUpdate(foodId, {
//             $inc: { savesCount: 1 }
//         });

//         return res.status(201).json({
//             saved: true,
//             message: "Food saved successfully"
//         });

//     } catch (err) {
//         return res.status(500).json({
//             message: err.message
//         });
//     }
// }

// async function getSaveFood(req, res) {
//     try {
//         const user = req.user;

//         const savedFoods = await saveModel
//             .find({ user: user._id })
//             .populate("food");

//         return res.status(200).json({
//             message: "Saved foods retrieved successfully",
//             savedFoods: savedFoods || []
//         });

//     } catch (err) {
//         return res.status(500).json({
//             message: err.message
//         });
//     }
// }

// module.exports = {
//     createFood,
//     getFoodItems,
//     likeFood,
//     saveFood,
//     getSaveFood,
//     commentFood
// };

const foodModel = require("../models/food.model");

const storageService = require("../services/storage.service");

const likeModel = require("../models/likes.model");

const commentModel = require("../models/comment.model");

const saveModel = require("../models/save.model");

const { v4: uuid } = require("uuid");

async function createFood(req, res) {
  try {
    console.log("FILE =", req.file);

    console.log("BODY =", req.body);

    if (!req.file) {
      return res.status(400).json({
        message: "Video file is required",
      });
    }

    const uploadResult = await storageService.uploadFile(
      req.file.buffer,
      uuid(),
    );

    const foodItem = await foodModel.create({
      name: req.body.name,

      description: req.body.description,

      video: uploadResult.secure_url,

      foodPartner: req.foodPartner._id,
    });

    return res.status(201).json({
      message: "Food created successfully",

      food: foodItem,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: err.message,
    });
  }
}

async function getFoodItems(req, res) {
  try {
    const foodItems = await foodModel.find({}).sort({
      createdAt: -1,
    });

    console.log("FOOD ITEMS =", foodItems);

    return res.status(200).json({
      message: "Food items fetched successfully",

      foodItems,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
}

async function likeFood(req, res) {
  try {
    const { foodId } = req.body;

    const user = req.user;

    const already = await likeModel.findOne({
      user: user._id,

      food: foodId,
    });

    if (already) {
      await likeModel.deleteOne({
        user: user._id,

        food: foodId,
      });

      await foodModel.findByIdAndUpdate(foodId, {
        $inc: {
          likeCount: -1,
        },
      });

      return res.json({
        liked: false,
      });
    }

    await likeModel.create({
      user: user._id,

      food: foodId,
    });

    await foodModel.findByIdAndUpdate(foodId, {
      $inc: {
        likeCount: 1,
      },
    });

    res.json({
      liked: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function saveFood(req, res) {
  try {
    const { foodId } = req.body;

    const user = req.user;

    const already = await saveModel.findOne({
      user: user._id,

      food: foodId,
    });

    if (already) {
      await saveModel.deleteOne({
        user: user._id,

        food: foodId,
      });

      await foodModel.findByIdAndUpdate(foodId, {
        $inc: {
          savesCount: -1,
        },
      });

      return res.json({
        saved: false,
      });
    }

    await saveModel.create({
      user: user._id,

      food: foodId,
    });

    await foodModel.findByIdAndUpdate(foodId, {
      $inc: {
        savesCount: 1,
      },
    });

    res.json({
      saved: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function commentFood(req, res) {
  try {
    const { foodId } = req.body;

    const user = req.user;

    const exists = await commentModel.findOne({
      user: user._id,

      food: foodId,
    });

    if (exists) {
      await commentModel.deleteOne({
        user: user._id,

        food: foodId,
      });

      await foodModel.findByIdAndUpdate(foodId, {
        $inc: {
          commentsCount: -1,
        },
      });

      return res.json({
        commented: false,
      });
    }

    await commentModel.create({
      user: user._id,

      food: foodId,
    });

    await foodModel.findByIdAndUpdate(foodId, {
      $inc: {
        commentsCount: 1,
      },
    });

    res.json({
      commented: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

async function getSaveFood(req, res) {
  try {
    const savedFoods = await saveModel
      .find({
        user: req.user._id,
      })
      .populate("food");

    res.json({
      savedFoods,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = {
  createFood,

  getFoodItems,

  likeFood,

  saveFood,

  commentFood,

  getSaveFood,
};

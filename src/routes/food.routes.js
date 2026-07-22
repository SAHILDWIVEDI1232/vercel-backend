// const express = require("express");
// const multer = require("multer");

// const foodController = require("../controllers/food.controller");
// const authMiddleware = require("../middlewares/auth.middleware");

// const router = express.Router();

// const upload = multer({
//     storage: multer.memoryStorage()
// });

// /*
// POST /api/food
// Create Food (Food Partner Only)
// */
// router.post(
//     "/",
//     authMiddleware.authFoodPartnerMiddleware,
//     upload.single("video"),
//     foodController.createFood
// );

// /*
// GET /api/food
// Get All Food Videos
// */
// router.get(
//     "/",
//     authMiddleware.authUserMiddleware,
//     foodController.getFoodItems
// );

// /*
// POST /api/food/like
// Like / Unlike Food
// */
// router.post(
//     "/like",
//     authMiddleware.authUserMiddleware,
//     foodController.likeFood
// );

// /*
// POST /api/food/save
// Save / Unsave Food
// */
// router.post(
//     "/save",
//     authMiddleware.authUserMiddleware,
//     foodController.saveFood
// );

// /*
// GET /api/food/save
// Get Saved Foods
// */
// router.get(
//     "/save",
//     authMiddleware.authUserMiddleware,
//     foodController.getSaveFood
// );
// router.post(
//     '/comment',
//     authMiddleware.authUserMiddleware,
//     foodController.commentFood
// );

// module.exports = router;

const express = require("express");

const multer = require("multer");

const foodController = require("../controllers/food.controller");

const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/",

  authMiddleware.authFoodPartnerMiddleware,

  upload.single("video"),

  foodController.createFood,
);

router.get(
  "/",

  authMiddleware.authUserMiddleware,

  foodController.getFoodItems,
);

router.post(
  "/like",

  authMiddleware.authUserMiddleware,

  foodController.likeFood,
);

router.post(
  "/save",

  authMiddleware.authUserMiddleware,

  foodController.saveFood,
);

router.get(
  "/save",

  authMiddleware.authUserMiddleware,

  foodController.getSaveFood,
);

router.post(
  "/comment",

  authMiddleware.authUserMiddleware,

  foodController.commentFood,
);

module.exports = router;

const router = require("express").Router();

 const apiRoutes = require("./apiRoutes");
router.use("/api", apiRoutes);

userRoutes = require("./userRoutes");
//homeRoutes=require("./homeRoutes");
subscribeRoutes = require("./subscribeRoutes");
//courseRoutes = require("./courseRoutes");//
router.use("/users", userRoutes);
//router.use("/chat", homeRoutes);
router.use("/subscribers", subscribeRoutes);
//router.use("/courses", courseRoutes);//


module.exports = router;

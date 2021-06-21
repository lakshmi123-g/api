const router = require("express").Router(),
    usercontroller = require("../controllers/usercontroller");
router.get("/", usercontroller.index,
    usercontroller.indexView);
router.get("/new", usercontroller.new);
router.post("/create", usercontroller.create, usercontroller.redirectView);
router.get("/login", usercontroller.login);
router.post("/login", usercontroller.authenticate);
router.get("/logout", usercontroller.redirectView);
router.get("/:id/edit", usercontroller.edit);
router.put("/:id/update", usercontroller.update,
    usercontroller.redirectView);
router.get("/:id", usercontroller.show,
    usercontroller.showView);
router.delete("/:id/delete", usercontroller.delete,
    usercontroller.redirectView);
module.exports = router;

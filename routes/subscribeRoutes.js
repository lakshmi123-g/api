const router = require("express").Router(),
    subscribecontroller = require("../controllers/subscribecontroller");
router.get("/subscribers", subscribecontroller.index,
    subscribecontroller.indexView);
router.get("/subscribers/new", subscribecontroller.new);
router.post("/subscribers/create", subscribecontroller.create,
    subscribecontroller.redirectView);
router.get("/subscribers/:id", subscribecontroller.show,
    subscribecontroller.showView);
router.get("/subscribers/:id/edit", subscribecontroller.edit);
router.put("/subscribers/:id/update", subscribecontroller.update,
    subscribecontroller.redirectView);
router.delete("/subscribers/:id/delete", subscribecontroller.delete,
    subscribecontroller.redirectView);
module.exports = router;

const { Router } = require("express");
const { studentsController } = require("../controllers/student.controller");

const router = Router();

router.post("/student", studentsController.addStudent);
router.delete("/student", studentsController.deleteStudent);
router.get("/student", studentsController.getStudent);
router.patch("/student", studentsController.patchStudent);

module.exports = router;

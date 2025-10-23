const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password
    })
        .then(res.json({
            msg: "User is created",
        }))
    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
     

});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    
    const courseId = req.params.courseId;
    const username = req.headers.username;

    User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    }).catch(err => {
        console.log(err);
    });
    res.json({
        msg: "You have successfully purchased the course"
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
     
});

module.exports = router
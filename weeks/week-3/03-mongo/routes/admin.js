const { Router, response } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../db");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password
    })
        .then(res.json({
            message: 'Admin created successfully'
        }))

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    
    const newCourse = await Course.create({
        // if the key and value are same then we can write like this
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse);

    res.send({
        msg: 'Course created successfully', courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});
    res.send({
        courses: response
    });
    
    
});

module.exports = router;
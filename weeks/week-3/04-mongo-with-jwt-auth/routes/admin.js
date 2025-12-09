const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require('jsonwebtoken');
const { Admin } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();
const { Course } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

     
    const adminn = await Admin.create({
        username: username,
        password: password
    })

    console.log(adminn);
    res.json({
        msg: "Admin create successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // console.log(JWT_SECRET);
    const user = await Admin.findOne({
        username: username,
        password: password
    })

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        // console.log(token);

        res.json({
            msg: "Admin logged in successfully",
            token: token
        })

    }else {
        res.status(403).json({
            msg: "Admin authentication failed"
        }) 
    }
     
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const titile = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    console.log(titile, description, imageLink, price);

    const courseId = await Course.create({
        title: titile,
        description: description,
        imageLink: imageLink,
        price: price    
    })

    res.json({
        msg: "Course created successfully",
        courseId: courseId._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

module.exports = router;
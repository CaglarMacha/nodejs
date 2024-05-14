const express = require("express");
const router = express.Router();
const Categories = require("../db/models/Categories");
const Response = require("../lib/Response");
const CustomError = require("../lib/Error");
const Enum = require("../config/Enum");
// router.get("/", (req, res, next) => {
//     res.json({
//         body:req.body,
//         params: req.params,
//         query: req.query,
//         headers:req.headers
//     })
// });


router.get("/", async(req, res, next) => {
    try {
        let categories = await Categories.find({})

        return res.json(Response.successsResponse(categories));
    } catch (error) {
        // res.json(Response.errorResponse(error))
    }
})

router.post("/add", async(req, res) =>  {
    let body = req.body
    try {
        if(!body.name) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST);
    } catch (error) {
        
    }
})




module.exports = router;
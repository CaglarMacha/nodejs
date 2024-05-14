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

router.get("/", async (req, res, next) => {
  try {
    var categories = await Categories.find({});

    return res.json(Response.successsResponse(categories));
  } catch (error) {
    // res.json(Response.errorResponse(error))
    return res.json(Response.successsResponse(categories));
  }
});

router.post("/add", async (req, res) => {
  let body = req.body;
  try {
    if (!body.name)
      throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Validation error");

    let category = new Categories({
      name: body.name,
      is_active: true,
      created_by: req.user?.id,
    });
    await category.save();

    res.json(Response.successsResponse({ response: true }));
  } catch (error) {
    // let errorResponse = Response.errorResponse(error);
    // res.status(errorResponse.code).json(errorResponse);
  }
});

router.put("/update", async (req, res) => {
  let body = req.body;
  try {
    if (!body._id)
        throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Validation error");
    let updates = {};
    if (body.name) updates.name = body.name;
    if (typeof body.is_active === "boolean") updates.is_active = body.is_active; // === tip kontrolü

    await categories.updateOne({ _id: body._id }, updates);
  } catch (error) {}
});

module.exports = router;

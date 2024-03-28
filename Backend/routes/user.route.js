const http = require("http");
const { userModel } = require("../model/user.model");
const router = require("express").Router();

router.get("/", async(req, res) => {
    const data = await userModel.find();
    try {
        res.status(200).json({data});
        
    } catch (error) {
        res.status(200).json({err: error});
    }
})

import express from "express"
import { createReview, getReviewsByProductId,  } from "../controller/reviewdata.js"


const router = express.Router()


router.post("/createreview",createReview)
router.get("/getonereview/:productId",getReviewsByProductId)

export default router
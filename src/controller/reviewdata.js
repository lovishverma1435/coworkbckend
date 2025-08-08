import Review from "../Models/review.js";

// ✅ Create Review
export const createReview = async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json({ message: "Review created", review: newReview });
  } catch (error) {
    res.status(500).json({ message: "Error creating review", error: error.message });
  }
};

export const getReviewsByProductId = async (req, res) => {
  try {
    const reviews = await Review.findAll({ where: { productId: req.params.productId } });
    res.status(200).json({ message: "Reviews fetched", reviews });
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};
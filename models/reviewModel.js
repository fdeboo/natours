const mongoose = require('mongoose');
const Tour = require('./tourModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review cannot be empty'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'review must belong to a tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'review must belong to a user.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// reviewSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'tour',
//     select: 'name',
//   }).populate({
//     path: 'user',
//     select: 'name photo',
//   });

//   next();
// });

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });

  next();
});

/**
 * finds all reviews for the tour passed as a parameter.
 * counts the total number of documents and calculates the average
 * @param {*} tourId
 */
reviewSchema.statics.calcAverageRatings = async function (tourId) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 }, // count (sum:) 1 for each document
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: stats[0].nRating,
      ratingAverage: stats[0].avgRating,
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingAverage: 4.5,
    });
  }
};

reviewSchema.post('save', function () {
  // 'this' points to current review
  this.constructor.calcAverageRatings(this.tour);
});

// findByIdAndUpdate
// findByIdAndDelete

// Update & Delete Functions need to use Query Middleware
// Query middleware does not have access to the current document
// but can be retrieved from database and stored on current query variable
reviewSchema.pre(/^findOneAnd/, async function (next) {
  // console.log(this);
  this.r = await this.findOne();
  next();
});

// Relies on previous ^^ Query middleware to retrieve the current document
// from current query this.r and run up to date
reviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageRatings(this.r.tour);
});

reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;

// POST /tour/303404507/reviews
// GET /tour/303404507/reviews
// GET /tour/303404507/reviews/9853045803

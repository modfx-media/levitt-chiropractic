/**
 * Per-client Google review types + fallback.
 * Fallback quotes must be real 5-star Google reviews for THIS business.
 * Leave googleReviews empty if none are on file.
 */
export const googleReviewsMeta = {
  rating: 5, // Google's overall rating for Alan G. Levitt, DC
  reviewCount: 29, // Google's total review count, all stars
  fiveStarCount: 9,
  placeId: "ChIJJ6Hv_cEg9ocRkJSJrpeMJ6M",
  reviewsUrl: "https://maps.google.com/?cid=11756519935370171536",
} as const;

export type GoogleReview = {
  quote: string;
  name: string;
  rating: number;
  relativeTime?: string;
};

export type GoogleReviewsMeta = {
  rating: number;
  reviewCount: number;
  fiveStarCount: number;
  placeId: string;
  reviewsUrl: string;
};

export const googleReviews: GoogleReview[] = [
  {
    quote:
      "Dr. Levitt is an amazing chiropractor! Our family has been seeing him for over 7 years and we truly look forward to our appointments! I've never felt like I got a \"cookie cutter\" adjustment from him. He truly listens to what is going on in my body and will work to find the original cause not just take away the discomfort! We are truly thankful for him!",
    name: "Tiffany Knutson",
    rating: 5,
    relativeTime: "2 years ago",
  },
  {
    quote:
      "We have seen Dr. Levitt for many years and so appreciate his unique & holistic approach to health. He is extremely efficient, thorough and has helped our family through many health challenges. He has undoubtedly improved the quality of our lives and for that we are so grateful! He is also very kind & has a great sense of humor!",
    name: "Lori French",
    rating: 5,
    relativeTime: "2 years ago",
  },
  {
    quote:
      "My family of 4 and I have been going to Dr. Levitt for years. He has put us back in line regarding so many issues from our heads to our toes. For me, my physical has always directly reflected in my mental outlook and regular visits keep me upbeat and that blasted ADHD in check and off the meds that that other Dr is always offering 👍👍. Thank you for everything Dr Levitt ❤️❣️",
    name: "Tom Crowley",
    rating: 5,
    relativeTime: "2 years ago",
  },
  {
    quote:
      "I have known Dr. Levitt for over 30 years and he always shows great patience and truly listens to you with every visit.   When I was diagnosed with Parkinson’s, he has made a huge difference in how I feel every day! I have so much more energy!\n\nI highly recommend him for all your chiropractic and wellness care!",
    name: "David Streeter",
    rating: 5,
    relativeTime: "2 years ago",
  },
  {
    quote:
      "I've seen Dr. Levitt multiple times since I was in a serious car accident. He is able to perceive and treat my issues with a variety of methods in a short amount of time each visit. I am much more rested and relieved of discomfort than prior to beginning treatment.\n\nDr. Levitt and his staff have been very flexible with accommodating my schedule, and I appreciate their professionalism very much.",
    name: "Barb Weinstock",
    rating: 5,
    relativeTime: "10 years ago",
  },
  {
    quote:
      "I have been seeing Dr. Levitt weekly for several years because he is amazing! He listens carefully to what your issues are and has done an excellent job of helping me stay pain free so I can be active . Janelle and Jodi at the desk are super nice and always so helpful with appointments. I look forward to going there every week!",
    name: "cindy k",
    rating: 5,
    relativeTime: "2 years ago",
  },
  {
    quote:
      "I don’t understand exactly how dr Levitt’s process works but he was able to significantly reduce migraines that I’ve had for over 15 years. I strongly recommend seeing him.",
    name: "Paul S",
    rating: 5,
    relativeTime: "3 years ago",
  },
  {
    quote:
      "I couldn't turn my head when I went to see Dr. Levitt. It took a couple of months, but he fixed it!! 3 years later, I called and they fit me in that very day. The staff is awesome.",
    name: "Rachel P",
    rating: 5,
    relativeTime: "4 years ago",
  },
  {
    quote:
      "Dr. Levitt is not the conventional in-and-out chiropractor. He actually listens to what you say and runs tests against your own body to find the root cause of a problem. It’s remarkable, truly, to think how many lives this humble man has changed including mine. I highly recommend Dr. Levitt to anyone looking for a down-to-earth, personable, kind, reliable chiropractor a hidden gem for sure!",
    name: "Handy H",
    rating: 5,
    relativeTime: "4 years ago",
  },
];

/** The only acceptance test for a card or a JSON-LD review. */
export function isFiveStarReview(review: GoogleReview): boolean {
  return review.rating === 5 && review.quote.trim().length > 0 && review.name.trim().length > 0;
}

export const fiveStarReviews = googleReviews.filter(isFiveStarReview);

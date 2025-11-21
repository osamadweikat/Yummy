import QuoteImage1 from "../images/quote-image1.jpeg";
import QuoteImage2 from "../images/quote-image2.jpeg";
import QuoteImage3 from "../images/quote-image3.jpeg";
import QuoteImage4 from "../images/quote-image4.jpeg";

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  jobTitle: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "janice damon",
    image: QuoteImage1,
    jobTitle: "designer",
    quote:
      "Yummy has become my go-to place for comfort food. The flavors are rich, the atmosphere is warm, and every dish feels crafted with real care.",
  },
  {
    id: 2,
    name: "david bronson",
    image: QuoteImage2,
    jobTitle: "architect",
    quote:
      "I was impressed by how fresh everything tasted. The meals are beautifully presented, and the service at Yummy is consistently outstanding.",
  },
  {
    id: 3,
    name: "alex donovan",
    image: QuoteImage3,
    jobTitle: "manager",
    quote:
      "Yummy delivers the perfect balance between quality and creativity. Every visit surprises me with new flavors and exceptional attention to detail.",
  },
  {
    id: 4,
    name: "rachel parson",
    image: QuoteImage4,
    jobTitle: "doctor",
    quote:
      "One of the best dining experiences I’ve had in a long time. The dishes were delicious, portions generous, and the staff incredibly friendly.",
  },
];

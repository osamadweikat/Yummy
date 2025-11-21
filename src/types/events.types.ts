export interface Event {
  id: number;
  name: string;
  backgroundImage: string;
  description: string;
}

export const events: Event[] = [
  {
    id: 1,
    name: "weddings",
    backgroundImage:
      "https://cdn.prod.website-files.com/5d5ffc98b6d68de20504403c/5d79489425199e27a590fbac_events-wedding.jpg",
    description:
      "Celebrate your special day at Yummy with elegant dining and attentive service. Our tailored wedding menus and warm atmosphere make every moment unforgettable.",
  },
  {
    id: 2,
    name: "corporate",
    backgroundImage:
      "https://cdn.prod.website-files.com/5d5ffc98b6d68de20504403c/5d7944fb25199e253790d3d6_events-corporate.jpg",
    description:
      "Host productive corporate events with professional catering and flexible seating options. We deliver polished service and delicious menus suited to your schedule.",
  },
  {
    id: 3,
    name: "birthdays",
    backgroundImage:
      "https://cdn.prod.website-files.com/5d5ffc98b6d68de20504403c/5d79451ef035e1438019e896_events-birthday.jpg",
    description:
      "Make birthdays memorable at Yummy with bright flavors and generous portions. Enjoy festive dishes and a friendly team that adds a personal touch to every celebration.",
  },
  {
    id: 4,
    name: "holidays",
    backgroundImage:
      "https://cdn.prod.website-files.com/5d5ffc98b6d68de20504403c/5d7945292514506b523974fd_events-holiday.jpg",
    description:
      "Gather for holiday feasts in a cozy, welcoming setting with seasonal menus and family-style options. Relax while we handle the details and create a joyful dining experience.",
  },
];

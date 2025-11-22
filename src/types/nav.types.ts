export interface NavLinks {
  id: number;
  label: string;
  path: number | string;
}

export const navLinks: NavLinks[] = [
  {
    id: 1,
    label: "home",
    path: 0,
  },
  {
    id: 2,
    label: "book a table",
    path: 1,
  },
  {
    id: 3,
    label: "gallery",
    path: 2,
  },
  {
    id: 4,
    label: "house dishes",
    path: 3,
  },
  {
    id: 5,
    label: "events",
    path: 4,
  },
  {
    id: 6,
    label: "contact",
    path: 5,
  },
];

export const miniNavbarLinks: NavLinks[] = [
  { id: 9, label: "all", path: "all" },
  { id: 10, label: "house dishes", path: "house" },
  { id: 11, label: "soups", path: "soups" },
  { id: 12, label: "pizzas", path: "pizzas" },
  { id: 13, label: "pastas", path: "pastas" },
  { id: 14, label: "salads", path: "salads" },
  { id: 15, label: "dessert", path: "dessert" },
  { id: 16, label: "drinks", path: "drinks" },
];

import Recipe from "./model/recipe";

const testData: Recipe[] = [
  {
    id: "bc57b897-81d1-4331-9d0e-f431945586c5",
    title: "Lasagne",
    ingredients: [
      "Hackfleisch",
      "Dosentomaten",
      "Gouda",
      "Milch",
      "Mehl",
      "Karotten",
      "Zwiebeln",
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: "73d93cf8-5d85-411e-9044-761c7ddfdf99",
    title: "Carbanossi Auflauf",
    ingredients: [
      "Carbanossi",
      "Penne",
      "Paprika",
      "Zwiebeln",
      "Knoblauch",
      "Gouda",
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: "e06adc37-a111-47e9-a1b0-6ccc587c5d9e",
    title: "Wiener Schnitzel mit Kartoffelsalat",
    ingredients: [
      "Kalbsschnitzel",
      "Paniermehl",
      "Ei",
      "Kartoffel",
      "Balsamico",
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: "bc096f78-7c51-4732-bc4f-9afd1bc0bea3",
    title: "Pizza Margerita",
    ingredients: ["Mehl", "Hefe", "Tomaten", "Olivenöl", "Mozarella"],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: "ac096f78-7c51-4733-bc4f-9afd1bc0bea3",
    title: "Gnocci, Spargel - Polenta",
    ingredients: [
      "Gnocci",
      "Grüner Spargel",
      "Weißer Spargel",
      "Olivenöl",
      "Mozarella",
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: "cc096f78-7c51-4734-bc4f-9afd1bc0bea3",
    title: "Knoblauchbrot",
    ingredients: ["Baguette", "Butter", "Knoblauch"],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: "dc096f78-7c51-4735-bc4f-9afd1bc0bea3",
    title: "Türkische Pizza",
    ingredients: ["Mehl", "Hefe", "Tomaten", "Hackfleisch", "Ei"],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: "ec096f78-7c51-5735-bc4f-9afd1bc0bea3",
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Parmesan", "Eigelb", "Olivenöl", "Pancetta"],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
];

export default testData;

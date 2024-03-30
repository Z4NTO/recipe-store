import Recipe from "./model/recipe";

const testData: Recipe[] = [
  {
    id: "bc57b897-81d1-4331-9d0e-f431945586c5",
    title: "Lasagne",
    tags: ["Hauptspeise", "Italienisch"],
    ingredients: [
      { name: "Hackfleisch", amount: "500g" },
      { name: "Dosentomaten", amount: "800g" },
      { name: "Gouda", amount: "150g" },
      { name: "Milch", amount: "400ml" },
      { name: "Mehl", amount: "25g" },
      { name: "Karotten", amount: "3" },
      { name: "Zwiebeln", amount: "2" },
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
    tags: ["Hauptspeise", "Ungarisch", "Schnell", "Lieblingsessen"],
    ingredients: [
      { name: "Carbanossi", amount: "1" },
      { name: "Penne", amount: "300g" },
      { name: "Paprika", amount: "2" },
      { name: "Zwiebeln", amount: "3" },
      { name: "Knoblauch", amount: "3 Zehen" },
      { name: "Gouda", amount: "100g" },
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
    tags: ["Hauptspeise", "Deutsche Küche"],
    ingredients: [
      { name: "Kalbsschnitzel", amount: "100g" },
      { name: "Paniermehl" },
      { name: "Ei", amount: "100g" },
      { name: "Kartoffel", amount: "100g" },
      { name: "Balsamico", amount: "100g" },
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
      "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et " +
      "accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata " +
      "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing " +
      "elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed " +
      "diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd " +
      "gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." +
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
    tags: ["Hauptspeise", "Italienisch"],
    ingredients: [
      { name: "Mehl", amount: "100g" },
      { name: "Hefe", amount: "100g" },
      { name: "Tomaten", amount: "100g" },
      { name: "Olivenöl", amount: "100g" },
      { name: "Mozarella", amount: "100g" },
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
    id: "ac096f78-7c51-4733-bc4f-9afd1bc0bea3",
    title: "Gnocci, Spargel - Polenta",
    tags: ["Hauptspeise", "Schnell"],
    ingredients: [
      { name: "Gnocci", amount: "100g" },
      { name: "Grüner Spargel", amount: "100g" },
      { name: "Weißer Spargel", amount: "100g" },
      { name: "Olivenöl", amount: "100g" },
      { name: "Mozarella", amount: "100g" },
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
    tags: ["Beilage", "Schnell"],
    ingredients: [
      { name: "Baguette", amount: "100g" },
      { name: "Butter", amount: "100g" },
      { name: "Knoblauch", amount: "100g" },
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
    id: "dc096f78-7c51-4735-bc4f-9afd1bc0bea3",
    title: "Türkische Pizza",
    tags: ["Hauptspeise", "Türkisch"],
    ingredients: [
      { name: "Mehl", amount: "100g" },
      { name: "Hefe", amount: "100g" },
      { name: "Tomaten", amount: "100g" },
      { name: "Hackfleisch", amount: "100g" },
      { name: "Ei", amount: "100g" },
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
    id: "ec096f78-7c51-5735-bc4f-9afd1bc0bea3",
    title: "Spaghetti Carbonara",
    tags: ["Hauptspeise", "Italienisch", "Schnell"],
    ingredients: [
      { name: "Spaghetti", amount: "100g" },
      { name: "Parmesan", amount: "100g" },
      { name: "Eigelb", amount: "100g" },
      { name: "Olivenöl", amount: "100g" },
      { name: "Pancetta", amount: "100g" },
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
];

export default testData;

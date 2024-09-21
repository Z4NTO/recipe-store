import { v4 as uuidv4 } from "uuid";
import Recipe from "./model/recipe";

const testData: Recipe[] = [
  {
    id: uuidv4(),
    title: "Türkische Pizza",
    tags: [
      { id: uuidv4(), name: "Hauptspeise" },
      { id: uuidv4(), name: "Türkisch" },
    ],
    ingredients: [
      { id: uuidv4(), ingredient: { id: "1", name: "Mehl" }, amount: "100g" },
      { id: uuidv4(), ingredient: { id: "2", name: "Hefe" }, amount: "100g" },
      {
        id: uuidv4(),
        ingredient: { id: "3", name: "Tomaten" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "4", name: "Hackfleisch" },
        amount: "100g",
      },
      { id: uuidv4(), ingredient: { id: "5", name: "Ei" }, amount: "100g" },
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: uuidv4(),
    title: "Lasagne",
    tags: [
      { id: uuidv4(), name: "Hauptspeise" },
      { id: uuidv4(), name: "Italienisch" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "1", name: "Hackfleisch" },
        amount: "500g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "2", name: "Dosentomaten" },
        amount: "800g",
      },
      { id: uuidv4(), ingredient: { id: "3", name: "Gouda" }, amount: "150g" },
      { id: uuidv4(), ingredient: { id: "4", name: "Milch" }, amount: "400ml" },
      { id: uuidv4(), ingredient: { id: "5", name: "Mehl" }, amount: "25g" },
      { id: uuidv4(), ingredient: { id: "6", name: "Karotten" }, amount: "3" },
      { id: uuidv4(), ingredient: { id: "7", name: "Zwiebeln" }, amount: "2" },
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: uuidv4(),
    title: "Carbanossi Auflauf",
    tags: [
      { id: uuidv4(), name: "Hauptspeise" },
      { id: uuidv4(), name: "Ungarisch" },
      { id: uuidv4(), name: "Schnell" },
      { id: uuidv4(), name: "Lieblingsessen" },
      { id: uuidv4(), name: "1234" },
      { id: uuidv4(), name: "2345" },
      { id: uuidv4(), name: "3456" },
      { id: uuidv4(), name: "4657" },
      { id: uuidv4(), name: "5678" },
      { id: uuidv4(), name: "6789" },
      { id: uuidv4(), name: "7890" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "1", name: "Carbanossi" },
        amount: "1",
      },
      { id: uuidv4(), ingredient: { id: "2", name: "Penne" }, amount: "300g" },
      { id: uuidv4(), ingredient: { id: "3", name: "Paprika" }, amount: "2" },
      { id: uuidv4(), ingredient: { id: "4", name: "Zwiebeln" }, amount: "3" },
      {
        id: uuidv4(),
        ingredient: { id: "5", name: "Knoblauch" },
        amount: "3 Zehen",
      },
      { id: uuidv4(), ingredient: { id: "6", name: "Gouda" }, amount: "100g" },
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: uuidv4(),
    title: "Wiener Schnitzel mit Kartoffelsalat",
    tags: [
      { id: uuidv4(), name: "Hauptspeise" },
      { id: uuidv4(), name: "Deutsche Küche" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "1", name: "Kalbsschnitzel" },
        amount: "100g",
      },
      { id: uuidv4(), ingredient: { id: "2", name: "Paniermehl" } },
      { id: uuidv4(), ingredient: { id: "3", name: "Ei" }, amount: "100g" },
      {
        id: uuidv4(),
        ingredient: { id: "4", name: "Kartoffel" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "5", name: "Balsamico" },
        amount: "100g",
      },
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: uuidv4(),
    title: "Pizza Margerita",
    tags: [
      { id: uuidv4(), name: "Hauptspeise" },
      { id: uuidv4(), name: "Italienisch" },
    ],
    ingredients: [
      { id: uuidv4(), ingredient: { id: "2", name: "Mehl" }, amount: "100g" },
      { id: uuidv4(), ingredient: { id: "3", name: "Hefe" }, amount: "100g" },
      {
        id: uuidv4(),
        ingredient: { id: "4", name: "Tomaten" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "5", name: "Olivenöl" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "6", name: "Mozarella" },
        amount: "100g",
      },
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: uuidv4(),
    title: "Gnocci, Spargel - Polenta",
    tags: [
      { id: uuidv4(), name: "Hauptspeise" },
      { id: uuidv4(), name: "Schnell" },
    ],
    ingredients: [
      { id: uuidv4(), ingredient: { id: "1", name: "Gnocci" }, amount: "100g" },
      {
        id: uuidv4(),
        ingredient: { id: "2", name: "Grüner Spargel" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "3", name: "Weißer Spargel" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "4", name: "Olivenöl" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "5", name: "Mozarella" },
        amount: "100g",
      },
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: uuidv4(),
    title: "Knoblauchbrot",
    tags: [
      { id: uuidv4(), name: "Beilage" },
      { id: uuidv4(), name: "Schnell" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "1", name: "Baguette" },
        amount: "100g",
      },
      { id: uuidv4(), ingredient: { id: "2", name: "Butter" }, amount: "100g" },
      {
        id: uuidv4(),
        ingredient: { id: "3", name: "Knoblauch" },
        amount: "100g",
      },
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    id: uuidv4(),
    title: "Spaghetti Carbonara",
    tags: [
      { id: uuidv4(), name: "Hauptspeise" },
      { id: uuidv4(), name: "Italienisch" },
      { id: uuidv4(), name: "Schnell" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "1", name: "Spaghetti" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "2", name: "Parmesan" },
        amount: "100g",
      },
      { id: uuidv4(), ingredient: { id: "3", name: "Eigelb" }, amount: "100g" },
      {
        id: uuidv4(),
        ingredient: { id: "4", name: "Olivenöl" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "5", name: "Pancetta" },
        amount: "100g",
      },
    ],
    notes:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
];

export default testData;

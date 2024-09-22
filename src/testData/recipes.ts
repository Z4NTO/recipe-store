import { v4 as uuidv4 } from "uuid";
import Recipe from "../model/recipe.ts";

const testDataRecipes: Recipe[] = [
  {
    id: uuidv4(),
    title: "Türkische Pizza",
    tags: [
      { id: "1", name: "Hauptspeise" },
      { id: "3", name: "Türkisch" },
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
      "Diese türkische Pizza, auch bekannt als Lahmacun, ist ein köstliches und einfach zuzubereitendes Gericht. Servieren Sie es mit einem frischen Salat und einem Spritzer Zitronensaft für ein authentisches Erlebnis.",
  },
  {
    id: uuidv4(),
    title: "Lasagne",
    tags: [
      { id: "1", name: "Hauptspeise" },
      { id: "4", name: "Italienisch" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "4", name: "Hackfleisch" },
        amount: "500g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "6", name: "Dosentomaten" },
        amount: "800g",
      },
      { id: uuidv4(), ingredient: { id: "7", name: "Gouda" }, amount: "150g" },
      { id: uuidv4(), ingredient: { id: "8", name: "Milch" }, amount: "400ml" },
      { id: uuidv4(), ingredient: { id: "1", name: "Mehl" }, amount: "25g" },
      { id: uuidv4(), ingredient: { id: "9", name: "Karotten" }, amount: "3" },
      { id: uuidv4(), ingredient: { id: "10", name: "Zwiebeln" }, amount: "2" },
    ],
    notes:
      "Ein klassisches italienisches Gericht, diese Lasagne ist reichhaltig und herzhaft. Perfekt für Familienessen, kann sie im Voraus zubereitet und kurz vor dem Servieren gebacken werden.",
  },
  {
    id: uuidv4(),
    title: "Carbanossi Auflauf",
    tags: [
      { id: "1", name: "Hauptspeise" },
      { id: "6", name: "Ungarisch" },
      { id: "5", name: "Schnell" },
      { id: "7", name: "Lieblingsessen" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "11", name: "Carbanossi" },
        amount: "1",
      },
      { id: uuidv4(), ingredient: { id: "12", name: "Penne" }, amount: "300g" },
      { id: uuidv4(), ingredient: { id: "13", name: "Paprika" }, amount: "2" },
      { id: uuidv4(), ingredient: { id: "10", name: "Zwiebeln" }, amount: "3" },
      {
        id: uuidv4(),
        ingredient: { id: "14", name: "Knoblauch" },
        amount: "3 Zehen",
      },
      { id: uuidv4(), ingredient: { id: "7", name: "Gouda" }, amount: "100g" },
    ],
    notes:
      "Dieser Carbanossi-Auflauf ist ein schnelles und einfaches Gericht, das voller Geschmack ist. Die Kombination aus Wurst, Pasta und Käse macht es zu einem Familienfavoriten.",
  },
  {
    id: uuidv4(),
    title: "Wiener Schnitzel mit Kartoffelsalat",
    tags: [
      { id: "1", name: "Hauptspeise" },
      { id: "8", name: "Deutsche Küche" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "15", name: "Kalbsschnitzel" },
        amount: "100g",
      },
      { id: uuidv4(), ingredient: { id: "16", name: "Paniermehl" } },
      { id: uuidv4(), ingredient: { id: "5", name: "Ei" }, amount: "100g" },
      {
        id: uuidv4(),
        ingredient: { id: "17", name: "Kartoffel" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "18", name: "Balsamico" },
        amount: "100g",
      },
    ],
    notes:
      "Ein traditionelles österreichisches Gericht, Wiener Schnitzel wird am besten mit einem Kartoffelsalat serviert. Das Schnitzel sollte dünn und knusprig sein, während der Kartoffelsalat würzig und erfrischend ist.",
  },
  {
    id: uuidv4(),
    title: "Pizza Margerita",
    tags: [
      { id: "1", name: "Hauptspeise" },
      { id: "4", name: "Italienisch" },
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
        ingredient: { id: "19", name: "Olivenöl" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "20", name: "Mozarella" },
        amount: "100g",
      },
    ],
    notes:
      "Eine einfache, aber köstliche Pizza, Margherita ist ein Favorit für viele. Die Kombination aus frischen Tomaten, Mozzarella und Basilikum ist unschlagbar.",
  },
  {
    id: uuidv4(),
    title: "Gnocci, Spargel - Polenta",
    tags: [
      { id: "1", name: "Hauptspeise" },
      { id: "5", name: "Schnell" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "21", name: "Gnocci" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "22", name: "Grüner Spargel" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "23", name: "Weißer Spargel" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "19", name: "Olivenöl" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "20", name: "Mozarella" },
        amount: "100g",
      },
    ],
    notes:
      "Dieses Gericht kombiniert die Aromen von Gnocchi und Spargel mit cremiger Polenta. Es ist eine schnelle und sättigende Mahlzeit, die perfekt für geschäftige Wochentage ist.",
  },
  {
    id: uuidv4(),
    title: "Knoblauchbrot",
    tags: [
      { id: "9", name: "Beilage" },
      { id: "5", name: "Schnell" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "24", name: "Baguette" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "25", name: "Butter" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "14", name: "Knoblauch" },
        amount: "100g",
      },
    ],
    notes:
      "Knoblauchbrot ist eine perfekte Beilage zu jeder Mahlzeit. Es ist schnell zubereitet und verleiht Ihrem Abendessen einen köstlichen Knoblauchgeschmack.",
  },
  {
    id: uuidv4(),
    title: "Spaghetti Carbonara",
    tags: [
      { id: "1", name: "Hauptspeise" },
      { id: "4", name: "Italienisch" },
      { id: "5", name: "Schnell" },
    ],
    ingredients: [
      {
        id: uuidv4(),
        ingredient: { id: "26", name: "Spaghetti" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "27", name: "Parmesan" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "28", name: "Eigelb" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "19", name: "Olivenöl" },
        amount: "100g",
      },
      {
        id: uuidv4(),
        ingredient: { id: "29", name: "Pancetta" },
        amount: "100g",
      },
    ],
    notes:
      "Spaghetti Carbonara ist ein klassisches italienisches Pastagericht, das mit Eiern, Käse, Pancetta und Pfeffer zubereitet wird. Es ist cremig, lecker und einfach zuzubereiten.",
  },
];

export default testDataRecipes;

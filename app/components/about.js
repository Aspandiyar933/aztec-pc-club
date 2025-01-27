"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Мы — Aztec, уникальный компьютерный клуб, объединяющий современные технологии с духом древней ацтекской цивилизации. Мощное оборудование, тематические игровые зоны и комфорт ждут тебя.
`;

export function About() {
  return <TextGenerateEffect words={words} />;
}

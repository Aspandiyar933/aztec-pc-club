"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Navbar } from "./nav";
import { Moving } from "./moving";
import { About } from "./about";
import { Footer } from "./footer";

export function Hero() {
  return (
    <HeroHighlight>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        <div className="container mx-auto px-6 lg:px-16 py-16">
          <Navbar />
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6">
            <div className="max-w-96 space-y-4">
              <h1 className="text-10xl sm:text-6xl font-bold text-gray-900">
                Играй как воин ацтеков.{" "}
                <Highlight className="text-black dark:text-white">
                  Легенда начинается здесь.
                </Highlight>
              </h1>
              <p className="text-lg text-gray-600">
                Мощное оборудование, тематические игровые зоны и комфорт ждут
                тебя.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://wa.link/x6dgkc"
                  className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Забронировать
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
              <img
                src="https://framerusercontent.com/images/yzTyt50jLt6zQhHNP0ZkUBq2E8.jpg?scale-down-to=1024"
                alt="Example screenshot"
                className="rounded-lg shadow-lg w-full lg:w-auto lg:max-w-lg"
              />
            </div>
          </div>

          <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Игровые зоны
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div className="flex justify-center">
                <img
                  src="https://framerusercontent.com/images/PzQ6RiNApDJQH51mCwQISR8diQ.jpg?scale-down-to=2048"
                  alt="Recording example"
                  className="w-full h-auto max-w-sm rounded shadow"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  Пирамида
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Командные игры (CS:GO, Dota 2)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  Солнце
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Индивидуальные места (RPG, квесты).
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img
                  src="https://framerusercontent.com/images/sxKerXyUleQ28sMnkznepZosXck.jpg?scale-down-to=2048"
                  alt="Setting a hotkey"
                  className="w-full h-auto max-w-sm rounded shadow"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  src="bla.jpeg"
                  alt="Running the macro"
                  className="w-full h-auto max-w-sm rounded shadow"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Жрец</h3>
                <p className="text-gray-600 leading-relaxed">
                  VIP-зона с премиальным комфортом.
                </p>
              </div>
            </div>
          </section>
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  ⁠Цены и тарифы
                </h2>
                <p className="text-gray-600 mt-2">Простые, прозрачные цены.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600">
                      Дневной
                    </h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold text-gray-800">
                        ₸ 500
                      </span>
                      <span className="ml-2 text-gray-500">/ час</span>
                    </div>
                    <ul className="mt-6 space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✦</span>
                        Кешбэк 20% на оплату.
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✦</span>
                        Скидка 50% на первый визит.
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✦</span>
                        Бонусный час в день рождения.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700">
                      Ночной
                    </h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold text-gray-800">
                        ₸ 450
                      </span>
                      <span className="ml-2 text-gray-500">/ час</span>
                    </div>
                    <ul className="mt-6 space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✦</span>
                        Кешбэк 20% на оплату.
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✦</span>
                        Скидка 50% на первый визит.
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✦</span>
                        Бонусный час в день рождения.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600">
                      Абонементы с бонусами
                    </h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold text-gray-800">
                        10 часов
                      </span>
                      <span className="ml-2 text-gray-500">/ 10% скидка</span>
                    </div>
                    <ul className="mt-6 space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✦</span>
                        Кешбэк 20% на оплату.
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✦</span>
                        Скидка 50% на первый визит
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">✦</span>
                        Бонусный час в день рождения.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex items-center justify-center pb-10">
            <a
              href="https://wa.link/x6dgkc"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Забронировать
            </a>
          </section>
          <Footer />
        </div>
      </motion.div>
    </HeroHighlight>
  );
}

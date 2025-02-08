"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Navbar } from "./nav";
import { Moving } from "./moving";
import { About } from "./about";
import { Footer } from "./footer";
import { ParallaxText } from "./ui/ParallaxText";

export function Hero() {
  return (
    <HeroHighlight>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
      >
        {/* Container with adaptive padding and width */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
          
          {/* ParallaxText section visible only on small+ screens */}
          <section className="hidden sm:block text-orange-500 mb-8">
            <ParallaxText
              baseVelocity={-5}
              className="text-gray-900 text-base sm:text-lg md:text-xl"
            >
              20 ПРОЦЕНТОВ СКИДКА НА 20 ЧАСОВ
              <span className="hidden sm:inline"> ЧТООООООООООООООООООООООО</span>
            </ParallaxText>
          </section>
          
          {/* Navbar */}
          <Navbar />

          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 my-8">
            {/* Text container with adaptive text alignment */}
            <div id="1" className="max-w-lg space-y-4 text-center lg:text-left">
              <h1 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-yellow-300">
                Все условия для ваших{" "}
                <Highlight className="text-black dark:text-white">побед</Highlight>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Мощное оборудование, тематические игровые зоны и комфорт ждут тебя.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a
                  href="https://wa.link/x6dgkc"
                  className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Забронировать
                </a>
              </div>
            </div>
            {/* Image container adapts its width */}
            <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
              <img
                src="https://framerusercontent.com/images/yzTyt50jLt6zQhHNP0ZkUBq2E8.jpg?scale-down-to=1024"
                alt="Example screenshot"
                className="rounded-lg shadow-lg w-full lg:w-auto lg:max-w-lg"
              />
            </div>
          </div>

          {/* Secondary ParallaxText section:
              Visible on extra-small (xs) and large (lg+) devices;
              hidden on small (sm) devices */}
          <section className="block text-orange-500 sm:hidden lg:block py-12">
            <ParallaxText
              baseVelocity={-5}
              className="text-gray-900 text-base sm:text-lg md:text-xl"
            >
              <span className="hidden sm:inline">
                ОООООООООООООООООООООООOOOOOOOOOO
              </span>
            </ParallaxText>
          </section>

          {/* Gallery Section */}
          <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Gallery Image 1 */}
              <div className="flex justify-center">
                <img
                  src="https://framerusercontent.com/images/PzQ6RiNApDJQH51mCwQISR8diQ.jpg?scale-down-to=2048"
                  alt="Gallery image 1"
                  className="w-full h-auto rounded shadow object-cover"
                />
              </div>
              {/* Gallery Image 2 */}
              <div className="flex justify-center">
                <img
                  src="https://framerusercontent.com/images/sxKerXyUleQ28sMnkznepZosXck.jpg?scale-down-to=2048"
                  alt="Gallery image 2"
                  className="w-full h-auto rounded shadow object-cover"
                />
              </div>
              {/* Gallery Image 3 */}
              <div className="flex justify-center">
                <img
                  src="bla.jpeg"
                  alt="Gallery image 3"
                  className="w-full h-auto rounded shadow object-cover"
                />
              </div>
              {/* Gallery Image 4 */}
              <div className="flex justify-center">
                <img
                  src="r.jpeg"
                  alt="Gallery image 4"
                  className="w-full h-auto rounded shadow object-cover"
                />
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                  ⁠Цены и тарифы
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Простые, прозрачные цены.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {/* Pricing Card 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                      Дневной
                    </h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                        ₸ 500
                      </span>
                      <span className="ml-2 text-gray-500 dark:text-gray-400">
                        / час
                      </span>
                    </div>
                    <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
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
                {/* Pricing Card 2 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-500">
                      Ночной
                    </h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                        ₸ 450
                      </span>
                      <span className="ml-2 text-gray-500 dark:text-gray-400">
                        / час
                      </span>
                    </div>
                    <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
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
                {/* Pricing Card 3 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                      Абонементы с бонусами
                    </h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                        10 часов
                      </span>
                      <span className="ml-2 text-gray-500 dark:text-gray-400">
                        / 10% скидка
                      </span>
                    </div>
                    <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
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
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="flex items-center justify-center pb-10">
            <a
              href="https://wa.link/x6dgkc"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Забронировать
            </a>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </motion.div>
    </HeroHighlight>
  );
}

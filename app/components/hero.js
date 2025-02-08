"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Navbar } from "./nav";
import { Moving } from "./moving";
import { About } from "./about";
import { Footer } from "./footer";
import { ParallaxText } from "./ui/ParallaxText";
import PricingSection from "./card";

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
          <section className=" text-orange-500 mb-8">
            <ParallaxText
              baseVelocity={-5}
              className="text-gray-900 text-base sm:text-lg md:text-xl"
            >
              20 ПРОЦЕНТОВ СКИДКА НА 20 ЧАСОВ
              <span className="hidden sm:inline">
                {" "}
                ЧТООООООООООООООООООООООО
              </span>
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
                <Highlight className="text-black dark:text-white">
                  побед
                </Highlight>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Мощное оборудование, тематические игровые зоны и комфорт ждут
                тебя.
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
            <div className="hidden md:flex justify-center lg:justify-end w-full lg:w-1/2">
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
          <section className=" text-orange-500 py-12">
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
          <section className="max-w-7xl mx-auto px-4 py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Gallery Image 1 */}
              <div className="flex justify-center">
                <img
                  src="https://framerusercontent.com/images/PzQ6RiNApDJQH51mCwQISR8diQ.jpg?scale-down-to=2048"
                  alt="Gallery image 1"
                  className="w-64 md:w-full h-48 md:h-auto rounded shadow object-cover"
                />
              </div>
              {/* Gallery Image 2 */}
              <div className="flex justify-center">
                <img
                  src="https://framerusercontent.com/images/sxKerXyUleQ28sMnkznepZosXck.jpg?scale-down-to=2048"
                  alt="Gallery image 2"
                  className="w-64 md:w-full h-48 md:h-auto rounded shadow object-cover"
                />
              </div>
              {/* Gallery Image 3 */}
              <div className="flex justify-center">
                <img
                  src="bla.jpeg"
                  alt="Gallery image 3"
                  className="w-64 md:w-full h-48 md:h-auto rounded shadow object-cover"
                />
              </div>
              {/* Gallery Image 4 */}
              <div className="flex justify-center">
                <img
                  src="r.jpeg"
                  alt="Gallery image 4"
                  className="w-64 md:w-full h-48 md:h-auto rounded shadow object-cover"
                />
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <PricingSection />

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

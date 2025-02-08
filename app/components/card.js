import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

const pricingPlans = [
  {
    title: "Дневной",
    price: "₸ 500",
    period: "/ час",
    color: "text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Ночной",
    price: "₸ 450",
    period: "/ час",
    color: "text-green-700 dark:text-green-500",
  },
  {
    title: "Абонементы с бонусами",
    price: "10 часов",
    period: "/ 10% скидка",
    color: "text-purple-600 dark:text-purple-400",
  },
];

export default function PricingSection() {
  return (
    // The "hidden sm:block" class hides this section on mobile screens.
    <section className="py-6 md:py-12 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Цены и тарифы
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
            Простые, прозрачные цены.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <CardHeader>
                <CardTitle className={`text-lg sm:text-xl font-semibold ${plan.color}`}>
                  {plan.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col space-y-4">
                {/* Plan Price */}
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
                {/* Plan Features */}
                <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 text-lg sm:text-xl">✦</span>
                    Кешбэк 20% на оплату.
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 text-lg sm:text-xl">✦</span>
                    Скидка 50% на первый визит.
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 text-lg sm:text-xl">✦</span>
                    Бонусный час в день рождения.
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

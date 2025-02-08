import React from 'react';

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

const PricingTags = () => (
  <section className="py-8 bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Цены и тарифы
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Простые, прозрачные цены.
        </p>
      </div>
      {/* Pricing Cards */}
      <div className="flex flex-wrap -mx-4">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              {/* Plan Title */}
              <h3 className={`text-xl font-semibold ${plan.color}`}>
                {plan.title}
              </h3>
              {/* Plan Price */}
              <div className="mt-3 flex items-baseline">
                <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                  {plan.price}
                </span>
                <span className="ml-2 text-lg text-gray-500 dark:text-gray-400">
                  {plan.period}
                </span>
              </div>
              {/* Plan Features */}
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                {[
                  "Кешбэк 20% на оплату.",
                  "Скидка 50% на первый визит.",
                  "Бонусный час в день рождения."
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.754 4.635 1.122 6.545z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingTags;

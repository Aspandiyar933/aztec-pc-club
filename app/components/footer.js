import React from "react";

export function Footer() {
  return (
    <footer className="bg-slate-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Footer container with mobile-first grid */}
        <div className="grid grid-cols-1 gap-6 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Location & Hours */}
          <div className="space-y-2">
            <h3 className="text-base md:text-lg font-semibold">
              Улица Курмангазы, 144
            </h3>
            <p className="text-xs md:text-sm text-gray-300">
              Алмалинский район, Алматы
              <br />
              050008/A05E8H2
            </p>
            <p className="text-xs md:text-sm font-medium text-green-400">
              Круглосуточно
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-2">
            <h3 className="text-base md:text-lg font-semibold">Контакты</h3>
            <p className="text-xs md:text-sm text-gray-300">
              +7 778 826 5141
            </p>
            <a
              href="mailto:cybernationaztecs@gmail.com"
              className="text-xs md:text-sm text-gray-300 hover:text-blue-400 inline-block"
            >
              cybernationaztecs@gmail.com
            </a>
          </div>

          {/* Column 3: Social Links */}
          <div className="space-y-2 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold">Мы в соцсетях</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              {/* Instagram link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-300 hover:text-blue-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.265.058-1.645.07-4.849.07-3.205 0-3.584-.012-4.849-.07-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608C2.175 15.646 2.163 15.266 2.163 12c0-3.205.012-3.584.07-4.849.062-1.366.342-2.633 1.317-3.608C4.525 2.575 5.792 2.295 7.158 2.233 8.423 2.175 8.803 2.163 12 2.163zm0 1.62C8.802 3.783 8.44 3.79 7.195 3.846c-1.058.05-1.632.23-2.015.384-.507.198-.87.436-1.253.82-.383.383-.622.746-.82 1.253-.153.382-.334.957-.384 2.015-.056 1.245-.063 1.607-.063 4.081 0 2.473.007 2.835.063 4.08.05 1.059.23 1.633.384 2.016.198.507.436.87.82 1.253.383.383.746.622 1.253.82.382.153.957.334 2.015.384 1.246.056 1.607.063 4.08.063s2.835-.007 4.08-.063c1.059-.05 1.633-.23 2.016-.384.507-.198.87-.436 1.253-.82.383-.383.622-.746.82-1.253.153-.382.334-.957.384-2.015.056-1.246.063-1.607.063-4.081 0-2.474-.007-2.835-.063-4.08-.05-1.059-.23-1.633-.384-2.016-.198-.507-.436-.87-.82-1.253-.383-.383-.746-.622-1.253-.82-.382-.153-.957-.334-2.015-.384-1.246-.057-1.608-.063-4.082-.063zm0 3.027a5.189 5.189 0 110 10.378 5.189 5.189 0 010-10.378zm0 8.57a3.381 3.381 0 100-6.763 3.381 3.381 0 000 6.763zm5.2-8.717a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path>
                </svg>
                Instagram
              </a>

              {/* WhatsApp link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-300 hover:text-green-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path d="M380.9 97.1C339.2 55.5 283.9 32 224 32 103.5 32 0 135.5 0 256c0 44.8 11.8 88.5 34.2 126.7l-22.7 85.2 87.4-22.4c36.4 19.9 77.8 30.5 120.9 30.5 120.5 0 224-103.5 224-224 0-59.9-23.4-115.2-65.8-157.6zM224 456c-38.1 0-75.2-10.1-107.9-29.2l-7.7-4.5-51.9 13.3 13.8-50.3-5-8.1C45 341.3 32 299.8 32 256c0-105.9 86.1-192 192-192 51.2 0 99.3 19.9 135.6 56.2C395.9 156.5 416 204.6 416 256c0 105.9-86.1 192-192 192zm106.5-138.5c-5.8-2.9-34.4-17-39.8-18.9-5.3-1.9-9.1-2.9-12.9 2.9-3.8 5.8-14.8 18.9-18.2 22.8-3.3 3.8-6.7 4.3-12.5 1.4-5.8-2.9-24.4-8.9-46.5-28.4-17.2-15.3-28.8-34.2-32.2-40-3.3-5.8-.3-8.9 2.5-11.8 2.6-2.6 5.8-6.7 8.7-10.1 2.9-3.3 3.8-5.8 5.8-9.6 1.9-3.8 1-7.2-.5-10.1-1.4-2.9-12.9-31.2-17.7-42.5-4.7-11.3-9.5-9.8-12.9-9.9-3.3-.2-7.2-.2-11.1-.2s-10.1 1.4-15.4 7.2c-5.3 5.8-20.2 19.8-20.2 48.2s20.7 55.9 23.6 59.8c2.9 3.8 40.7 61.7 98.6 86.5 58 24.8 58 16.5 68.5 15.5 10.5-.9 34.4-13.9 39.2-27.2 4.8-13.3 4.8-24.6 3.3-27.2-1.4-2.8-5.2-4.3-10.9-7.2z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-6 md:mt-8 border-t border-gray-700 pt-4 text-center text-xs md:text-sm text-gray-400">
          &copy; 2023 CyberNation Aztecs. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-10 my-8 bg-white">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold">
              Aztecs <span className="font-normal">PC club</span>
            </span>
          </Link>

          <ul className="flex items-center gap-8">
            {[
              { name: "Главная", href: "/forum" },
              { name: "О клубе", href: "/results" },
              { name: "Зоны", href: "/intro" },
              { name: "Турниры", href: "/telegram-bot" },
              { name: "Цены", href: "/telegram-bot" },
              { name: "Отзывы", href: "/telegram-bot" },
              { name: "Бронирование", href: "/telegram-bot" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

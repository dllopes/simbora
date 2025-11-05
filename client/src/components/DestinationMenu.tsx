import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

type Destination = {
  href: string;
  label: string;
  emoji: string;
  soon?: boolean;
};

type DestinationMenuProps = {
  className?: string;
};

const destinations: Destination[] = [
  {
    href: "/vale-do-capao",
    label: "Vale do Capão",
    emoji: "🏞️",
  },
  {
    href: "/buenos-aires",
    label: "Buenos Aires",
    emoji: "🌆",
  },
  {
    href: "/bonito",
    label: "Bonito",
    emoji: "🐠",
  },
];

export function DestinationMenu({ className }: DestinationMenuProps) {
  const [location] = useLocation();

  return (
    <nav className={cn("flex justify-center", className)}>
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 p-2 backdrop-blur-sm shadow-sm">
        {destinations.map((destination) => {
          const isHome =
            destination.href === "/vale-do-capao" &&
            (location === "/" || location === destination.href);
          const isActive =
            isHome ||
            (destination.href !== "/vale-do-capao" && location === destination.href);

          return (
            <Link key={destination.href} href={destination.href}>
              <a
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-900 text-white shadow"
                    : "bg-white/70 text-slate-700 hover:bg-white hover:text-slate-900"
                )}
              >
                <span aria-hidden="true">{destination.emoji}</span>
                <span>{destination.label}</span>
                {destination.soon && (
                  <span className="text-[10px] uppercase tracking-wide text-orange-600">
                    Em breve
                  </span>
                )}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

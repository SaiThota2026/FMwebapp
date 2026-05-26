import Link from "next/link";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
};

export function Breadcrumbs({ items, variant = "light" }: BreadcrumbsProps) {
  const isDark = variant === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-6 text-sm ${isDark ? "text-brand-offwhite/75" : "text-brand-dark/70"}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href="/"
            className={
              isDark
                ? "hover:text-brand-gold"
                : "hover:text-brand-teal"
            }
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {index === items.length - 1 ? (
              <span
                className={`font-medium ${isDark ? "text-brand-offwhite" : "text-brand-dark"}`}
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link
                href={item.path}
                className={
                  isDark
                    ? "hover:text-brand-gold"
                    : "hover:text-brand-teal"
                }
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbSchemaItems(items: BreadcrumbItem[]) {
  return [
    { name: "Home", path: "/" },
    ...items,
  ];
}

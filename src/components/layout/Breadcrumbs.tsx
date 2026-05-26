import Link from "next/link";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-brand-dark/70">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-brand-teal">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {index === items.length - 1 ? (
              <span className="font-medium text-brand-dark" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-brand-teal">
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

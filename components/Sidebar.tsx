import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  { label: "Dashboard", href: "/" },
  // add more items later
];

export function Sidebar() {
  const router = useRouter();
  return (
    <nav className="h-full bg-white border-r w-64 p-4">
      <ul>
        {menuItems.map((item) => (
          <li key={item.href} className="mb-2">
            <Link href={item.href}>
              <a
                className={`block p-2 rounded-md hover:bg-gray-100 ${
                  router.pathname === item.href ? "bg-gray-200" : ""
                }`}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
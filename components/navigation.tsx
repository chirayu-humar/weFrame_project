import Link from "next/link"

const categories = [
  "ART DE LA TABLE",
  "MOBILIER",
  "NAPPAGE",
  "MATÉRIEL DE SALLE",
  "CUISINE",
  "BARBECUE",
  "TENTE",
  "CHAUFFAGE",
  "PODIUM - PISTE DE DANSE",
  "SON ET LUMIÈRE",
  "PACKS",
  "CONSOMMABLES"
]

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-8 overflow-x-auto py-4">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/${category.toLowerCase().replace(/ - /g, '-').replace(/ /g, '-')}`}
                className="text-sm whitespace-nowrap hover:text-[#00A8E8] transition-colors"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}


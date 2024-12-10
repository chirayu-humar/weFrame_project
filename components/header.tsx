import Link from "next/link"
import { Search, ShoppingCart, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              we<span className="text-[#00E6C3]">frame</span>tech
            </span>
          </Link>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Rechercher un produit"
                className="w-full pl-4 pr-10"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/inspirations" className="flex items-center text-sm">
              <span className="mr-2">🎯</span>
              Inspirations
            </Link>
            
            <Link href="/favorites" className="flex items-center text-sm">
              <Heart className="mr-2 h-5 w-5" />
              Mes favoris
              <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5">24</span>
            </Link>
            
            <Button variant="default" className="bg-[#00A8E8] hover:bg-[#0096D1]">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Panier
            </Button>

            <select className="border rounded px-2 py-1 text-sm">
              <option value="FR">FR</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}


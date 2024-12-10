import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Truck, Sparkles, ShoppingCart, Timer } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">
          On s'occupe de <span className="text-[#7DD0D5]">tout</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Truck className="w-12 h-12 text-[#7DD0D5]" />
            </div>
            <h3 className="font-medium mb-2">Livraison & Reprise</h3>
            <p className="text-gray-500 text-sm">Selon vos besoins</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-[#7DD0D5]" />
            </div>
            <h3 className="font-medium mb-2">Nettoyage</h3>
            <p className="text-gray-500 text-sm">Selon vos besoins</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-[#7DD0D5]" />
            </div>
            <h3 className="font-medium mb-2">Commande Illimitée</h3>
            <p className="text-gray-500 text-sm">Tout est possible</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Timer className="w-12 h-12 text-[#7DD0D5]" />
            </div>
            <h3 className="font-medium mb-2">Transport & Enlèvement</h3>
            <p className="text-gray-500 text-sm">On s'occupe de tout</p>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="bg-pink-50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Interior with green sofa"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium">
              S'inscrire & économiser <span className="text-[#7DD0D5]">10%</span>
            </h2>
            <p className="text-gray-600">
              Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
            </p>
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="john@doe.com"
                className="flex-1"
              />
              <Button className="bg-[#7DD0D5] hover:bg-[#6BC0C5] text-white px-8">
                S'INSCRIRE →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


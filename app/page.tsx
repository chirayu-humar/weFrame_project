'use client'

import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { ProductGallery } from "@/components/product-gallery"
import ProductDetails from "@/components/product-details"
import LandingPage from "@/components/description"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Minus, Plus } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="min-h-screen">
      <div className="">
      <Header />
      <Navigation />
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-sm breadcrumbs mb-8">
          <span className="text-muted-foreground">Home</span>
          <span className="mx-2">/</span>
          <span className="text-muted-foreground">Art de la table</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ProductGallery />

          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-semibold">Cheese - appareil à raclette 1/2 roue</h1>
              <Button variant="ghost" size="icon">
                <Heart className="h-6 w-6" />
              </Button>
            </div>

            <div className="text-3xl font-bold">
              39,50€ <span className="text-sm text-muted-foreground font-normal">/pièce</span>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">📏</span>
                <span>20<sup>cm</sup></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">⭕</span>
                <span>50<sup>cm</sup></span>
              </div>
              <div className="text-sm text-muted-foreground">
                RÉF : VABGNB
              </div>
            </div>

            <div className="space-y-2">
              <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
              <p>Réglable en hauteur</p>
              <p>Appareil à raclette professionnel</p>
              <p>Boîtier de chauffe horizontal réglable en hauteur</p>
              <p className="text-sm text-muted-foreground">220V</p>
              <p className="text-sm text-muted-foreground">900W</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 text-center border-none"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="flex-1 bg-[#79E7DF] hover:bg-[#6CD3CB] text-black">
                AJOUTER AU PANIER
              </Button>
            </div>
          </div>
        </div>
      </main>
      <ProductDetails />
      <LandingPage />
      <Footer />
    </div>
  )
}



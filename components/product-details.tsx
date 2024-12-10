'use client'

import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Description */}
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">Description produit</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Festi vous propose à la location un/une Jewel – grand couteau/10pc pour votre évènement et ce dès 0,35 € / pce (HTVA). Que ce soit pour votre mariage, une fête d anniversaire ou du personnel, ce produit a fait l objet d une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence VAJGC. Nous sommes votre disposition pour que les évènements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d autre produit à louer de ce type dans la catégorie Art de la Table.
        </p>
      </section>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="livraisons">
          <AccordionTrigger className="text-xl font-medium">LIVRAISONS</AccordionTrigger>
          <AccordionContent>
            Contenu des informations de livraison...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="questions">
          <AccordionTrigger className="text-xl font-medium">QUESTIONS</AccordionTrigger>
          <AccordionContent>
            Contenu des questions fréquentes...
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Similar Products */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">Articles similaires</h2>
          <Button variant="link" className="text-gray-600">
            VOIR TOUTE LA COLLECTION
          </Button>
        </div>

        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#7DD0D5]"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-4 overflow-x-auto px-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <Card key={item} className="min-w-[250px] p-4">
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-0 top-0 z-10"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <span className="absolute left-0 top-0 bg-white text-xs px-2 py-1">
                    ART DE LA TABLE
                  </span>
                  <img
                    src="/placeholder.svg"
                    alt="Round table"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#7DD0D5]"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}


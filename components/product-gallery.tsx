"use client"

import Image from "next/image"
import { useState } from "react"

interface ProductImage {
  src: string
  alt: string
}

const productImages: ProductImage[] = [
  { src: "/placeholder.svg", alt: "Cheese raclette device - Main view" },
  { src: "/placeholder.svg", alt: "Cheese raclette device - Side view" },
  { src: "/placeholder.svg", alt: "Cheese raclette device - Back view" },
  { src: "/placeholder.svg", alt: "Cheese raclette device - Detail view" },
]

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`border rounded-lg overflow-hidden ${
              selectedImage === index ? "ring-2 ring-[#00A8E8]" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={80}
              height={80}
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <div className="flex-1 border rounded-lg overflow-hidden">
        <Image
          src={productImages[selectedImage].src}
          alt={productImages[selectedImage].alt}
          width={600}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}


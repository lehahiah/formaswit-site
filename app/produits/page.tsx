"use client";

import { ArrowRight } from "lucide-react";
import products from "@/data/products.json";

export default function ProduitsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Produits digitaux</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-6 bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-500 mb-1">{product.category}</p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-gray-900 mb-4">
                {product.priceTTC} € TTC
              </p>
            </div>

            <a
              href="https://payhip.com/lesguidesformaswift"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Voir le produit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

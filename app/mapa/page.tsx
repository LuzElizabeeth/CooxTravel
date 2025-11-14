"use client"

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Filter, Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input"

export default function MapaPage() {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("todos")

  const destinations = [
    {
      id: 1,
      name: "Chichén Itzá",
      city: "Tinum",
      state: "Yucatán",
      type: "Arqueológico",
      lat: 20.6843,
      lng: -88.5678,
      description: "Una de las siete maravillas del mundo moderno",
      image: "/chichen-itza-pyramid-mexico.jpg",
      rating: 4.9,
      price: "Desde $2,500 MXN"
    },
    {
      id: 2,
      name: "Cancún",
      city: "Cancún",
      state: "Quintana Roo",
      type: "Playa",
      lat: 21.1619,
      lng: -86.8515,
      description: "Playas paradisíacas y vida nocturna vibrante",
      image: "/cancun-beach-turquoise-water.jpg",
      rating: 4.9,
      price: "Desde $3,800 MXN"
    },
    {
      id: 3,
      name: "Palacio de Bellas Artes",
      city: "Ciudad de México",
      state: "CDMX",
      type: "Cultural",
      lat: 19.4350,
      lng: -99.1412,
      description: "Icono arquitectónico y cultural de México",
      image: "/palacio-bellas-artes-mexico-city.jpg",
      rating: 4.7,
      price: "Desde $1,200 MXN"
    },
    {
      id: 4,
      name: "Creel",
      city: "Creel",
      state: "Chihuahua",
      type: "Aventura",
      lat: 27.7508,
      lng: -107.6414,
      description: "Pueblo mágico en las Barrancas del Cobre",
      image: "/creel-chihuahua-mountains-mexico.jpg",
      rating: 4.8,
      price: "Desde $2,100 MXN"
    },
    {
      id: 5,
      name: "Oaxaca",
      city: "Oaxaca de Juárez",
      state: "Oaxaca",
      type: "Cultural",
      lat: 17.0654,
      lng: -96.7236,
      description: "Tradiciones ancestrales y gastronomía excepcional",
      image: "/guelaguetza-oaxaca-festival.jpg",
      rating: 4.8,
      price: "Desde $1,800 MXN"
    },
    {
      id: 6,
      name: "Tulum",
      city: "Tulum",
      state: "Quintana Roo",
      type: "Arqueológico",
      lat: 20.2114,
      lng: -87.4294,
      description: "Ruinas mayas frente al mar turquesa",
      image: "/tulum-ruins-caribbean-beach.jpg",
      rating: 4.7,
      price: "Desde $2,800 MXN"
    },
    {
      id: 7,
      name: "Guanajuato",
      city: "Guanajuato",
      state: "Guanajuato",
      type: "Cultural",
      lat: 21.0190,
      lng: -101.2574,
      description: "Ciudad colonial con callejones coloridos",
      image: "/festival-cervantino-guanajuato.jpg",
      rating: 4.8,
      price: "Desde $1,500 MXN"
    },
    {
      id: 8,
      name: "Mazatlán",
      city: "Mazatlán",
      state: "Sinaloa",
      type: "Playa",
      lat: 23.2494,
      lng: -106.4111,
      description: "La perla del Pacífico mexicano",
      image: "/carnaval-mazatlan-beach.jpg",
      rating: 4.6,
      price: "Desde $2,200 MXN"
    }
  ]

  const categories = [
    { id: "todos", name: "Todos", color: "from-[#5c2a3a] to-[#8b3a5a]" },
    { id: "Playa", name: "Playas", color: "from-[#1ba098] to-[#2d5d68]" },
    { id: "Cultural", name: "Cultural", color: "from-[#f04883] to-[#e02057]" },
    { id: "Arqueológico", name: "Arqueológico", color: "from-[#ff8d4d] to-[#ff6b35]" },
    { id: "Aventura", name: "Aventura", color: "from-[#8b3a5a] to-[#d41f4f]" }
  ]

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.state.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === "todos" || dest.type === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9f8] via-[#fef5f7] to-[#f9feff]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#5c2a3a] backdrop-blur-sm border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="Co'ox Travel Logo" 
                className="h-12 lg:h-14 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
                <Link href="/">Inicio</Link>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
                <Link href="/promociones">Promociones</Link>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
                <Link href="/eventos">Eventos</Link>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
                <Link href="/reservaciones">Reservaciones</Link>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
                <Link href="/experiencias">Experiencias</Link>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
                <Link href="/mapa">Mapa</Link>
              </Button>
            </nav>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-gradient-to-r from-[#f04883] to-[#e02057] hover:from-[#f56ba0] hover:to-[#f04883] text-white shadow-lg" asChild>
              <Link href="/chatbot">Planear Viaje con IA</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-8 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] bg-clip-text text-transparent">
              Explora México en el Mapa
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre destinos increíbles en todo el país
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por destino, ciudad o estado..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 h-14 text-base border-2 border-gray-200 focus:border-[#1ba098] rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className={`${
                    activeFilter === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-0`
                      : "border-2 text-gray-700 hover:bg-gray-50"
                  } transition-all duration-300`}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Container */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-2 border-gray-200 shadow-xl sticky top-24">
                <div className="relative w-full h-[600px] bg-gradient-to-br from-[#e8f5f3] to-[#cce7e3]">
                  <iframe 
                    src="https://www.google.com/maps/d/u/4/embed?mid=1rYB-36U73cRLrPCaxEtc3MtFJE5jWeU&ehbc=2E312F" 
                    width="100%" 
                    height="600"
                    className="w-full h-full border-0"
                    loading="lazy"
                    title="Mapa de Destinos Co'ox Travel"
                  />
                  
                  {/* Results Counter - positioned over the map */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-bold text-[#5c2a3a]">
                      {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destino' : 'destinos'}
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Destinations List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#5c2a3a] mb-4">
                Destinos Disponibles
              </h2>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredDestinations.map((dest) => (
                  <Card
                    key={dest.id}
                    className={`overflow-hidden cursor-pointer transition-all duration-300 ${
                      selectedDestination === dest.id
                        ? 'border-2 border-[#f04883] shadow-xl scale-[1.02]'
                        : 'border-2 border-gray-200 hover:border-[#1ba098] hover:shadow-lg'
                    }`}
                    onClick={() => setSelectedDestination(dest.id)}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={dest.image || "/placeholder.svg"}
                        alt={dest.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-gradient-to-r from-[#1ba098] to-[#2d5d68] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {dest.type}
                      </div>
                    </div>
                    
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-bold text-[#5c2a3a]">{dest.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-[#1ba098]" />
                        <span>{dest.city}, {dest.state}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{dest.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm font-bold text-[#f04883]">{dest.price}</span>
                        <div className="flex items-center gap-1 text-xs text-[#ff8d4d] font-bold">
                          ★ {dest.rating}
                        </div>
                      </div>
                      <Button
                        className="w-full bg-gradient-to-r from-[#8b3a5a] to-[#d41f4f] hover:from-[#a0496e] hover:to-[#f04883] text-white"
                        asChild
                      >
                        <Link href="/chatbot">
                          Planear Viaje
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-12 lg:py-16 bg-[#2d5d68]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logfoot.jpg" 
                alt="Co'ox Travel Logo" 
                className="h-20 w-auto"
              />
            </div>
            
            <p className="text-sm text-white/80 text-center md:text-left">
              © 2025 Co'ox Travel. Todos los derechos reservados.
            </p>
            
            <div className="flex gap-4">
              <Link href="/privacidad" className="text-sm text-white/80 hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-sm text-white/80 hover:text-white transition-colors">
                Términos
              </Link>
              <Link href="/contacto" className="text-sm text-white/80 hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1ba098;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2d5d68;
        }
      `}</style>
    </div>
  )
}

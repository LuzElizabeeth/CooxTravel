"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Hotel, Plane, UtensilsCrossed, MapPinned, Calendar, ArrowRight } from 'lucide-react'

type PromoType = 'hoteles' | 'vuelos' | 'restaurantes' | 'tours'

export default function PromocionesPage() {
  const [activeTab, setActiveTab] = useState<PromoType>('hoteles')

  const hoteles = [
    {
      name: "Hotel Boutique Casa Oaxaca",
      city: "Oaxaca",
      state: "Oaxaca",
      image: "/oaxaca-boutique-hotel.jpg",
      validity: "Válido hasta 30 Jun 2025",
      originalPrice: 2500,
      promoPrice: 1899
    },
    {
      name: "Grand Palladium Riviera Maya",
      city: "Playa del Carmen",
      state: "Quintana Roo",
      image: "/riviera-maya-resort.jpg",
      validity: "Válido hasta 31 Ago 2025",
      originalPrice: 5800,
      promoPrice: 4199
    },
    {
      name: "Hotel Emporio Zacatecas",
      city: "Zacatecas",
      state: "Zacatecas",
      image: "/zacatecas-hotel-colonial.jpg",
      validity: "Válido hasta 15 Jul 2025",
      originalPrice: 1800,
      promoPrice: 1299
    },
    {
      name: "Live Aqua San Miguel de Allende",
      city: "San Miguel de Allende",
      state: "Guanajuato",
      image: "/san-miguel-luxury-hotel.jpg",
      validity: "Válido hasta 20 Sep 2025",
      originalPrice: 4200,
      promoPrice: 3299
    },
    {
      name: "Hotel Xcaret México",
      city: "Cancún",
      state: "Quintana Roo",
      image: "/hotel-xcaret-cancun.jpg",
      validity: "Válido hasta 31 Dic 2025",
      originalPrice: 7500,
      promoPrice: 5999
    },
    {
      name: "Quinta Real Guadalajara",
      city: "Guadalajara",
      state: "Jalisco",
      image: "/guadalajara-quinta-real.jpg",
      validity: "Válido hasta 30 Nov 2025",
      originalPrice: 3200,
      promoPrice: 2499
    }
  ]

  const vuelos = [
    {
      name: "Ciudad de México - Cancún",
      airline: "Aeroméxico",
      image: "/flight-cdmx-cancun.jpg",
      validity: "Válido hasta 31 Jul 2025",
      originalPrice: 3200,
      promoPrice: 2199
    },
    {
      name: "Guadalajara - Puerto Vallarta",
      airline: "Volaris",
      image: "/flight-gdl-pvr.jpg",
      validity: "Válido hasta 15 Ago 2025",
      originalPrice: 1800,
      promoPrice: 1299
    },
    {
      name: "Monterrey - Los Cabos",
      airline: "VivaAerobus",
      image: "/flight-mty-cabo.jpg",
      validity: "Válido hasta 30 Jun 2025",
      originalPrice: 2500,
      promoPrice: 1799
    },
    {
      name: "Ciudad de México - Oaxaca",
      airline: "Aeroméxico Connect",
      image: "/flight-cdmx-oaxaca.jpg",
      validity: "Válido hasta 20 Sep 2025",
      originalPrice: 1500,
      promoPrice: 999
    },
    {
      name: "Tijuana - Guadalajara",
      airline: "Volaris",
      image: "/flight-tijuana-gdl.jpg",
      validity: "Válido hasta 31 Oct 2025",
      originalPrice: 2100,
      promoPrice: 1599
    },
    {
      name: "Mérida - Ciudad de México",
      airline: "Aeroméxico",
      image: "/flight-merida-cdmx.jpg",
      validity: "Válido hasta 30 Nov 2025",
      originalPrice: 2800,
      promoPrice: 1999
    }
  ]

  const restaurantes = [
    {
      name: "Pujol",
      city: "Ciudad de México",
      state: "CDMX",
      image: "/restaurant-pujol-cdmx.jpg",
      validity: "Válido hasta 31 Ago 2025",
      originalPrice: 3500,
      promoPrice: 2799
    },
    {
      name: "Quintonil",
      city: "Ciudad de México",
      state: "CDMX",
      image: "/restaurant-quintonil-cdmx.jpg",
      validity: "Válido hasta 30 Sep 2025",
      originalPrice: 2800,
      promoPrice: 2199
    },
    {
      name: "Alcalde",
      city: "Guadalajara",
      state: "Jalisco",
      image: "/restaurant-alcalde-gdl.jpg",
      validity: "Válido hasta 15 Jul 2025",
      originalPrice: 1800,
      promoPrice: 1399
    },
    {
      name: "Casa Oaxaca",
      city: "Oaxaca",
      state: "Oaxaca",
      image: "/restaurant-casa-oaxaca.jpg",
      validity: "Válido hasta 31 Oct 2025",
      originalPrice: 1500,
      promoPrice: 1099
    },
    {
      name: "Hartwood",
      city: "Tulum",
      state: "Quintana Roo",
      image: "/restaurant-hartwood-tulum.jpg",
      validity: "Válido hasta 30 Jun 2025",
      originalPrice: 2200,
      promoPrice: 1699
    },
    {
      name: "Pangea",
      city: "Monterrey",
      state: "Nuevo León",
      image: "/restaurant-pangea-monterrey.jpg",
      validity: "Válido hasta 31 Dic 2025",
      originalPrice: 2500,
      promoPrice: 1999
    }
  ]

  const tours = [
    {
      name: "Tour Chichén Itzá + Cenote Ik Kil",
      city: "Mérida",
      state: "Yucatán",
      image: "/tour-chichen-itza-cenote.jpg",
      validity: "Válido hasta 31 Ago 2025",
      originalPrice: 1800,
      promoPrice: 1299
    },
    {
      name: "Tour Barrancas del Cobre",
      city: "Chihuahua",
      state: "Chihuahua",
      image: "/tour-copper-canyon.jpg",
      validity: "Válido hasta 30 Sep 2025",
      originalPrice: 2500,
      promoPrice: 1899
    },
    {
      name: "Avistamiento de Ballenas",
      city: "Los Cabos",
      state: "Baja California Sur",
      image: "/tour-whale-watching-cabo.jpg",
      validity: "Válido hasta 30 Abr 2025",
      originalPrice: 1200,
      promoPrice: 899
    },
    {
      name: "Tour Teotihuacán + Tlatelolco",
      city: "Ciudad de México",
      state: "CDMX",
      image: "/tour-teotihuacan-pyramids.jpg",
      validity: "Válido hasta 31 Dic 2025",
      originalPrice: 900,
      promoPrice: 649
    },
    {
      name: "Snorkel en Cozumel",
      city: "Cozumel",
      state: "Quintana Roo",
      image: "/tour-snorkel-cozumel.jpg",
      validity: "Válido hasta 31 Jul 2025",
      originalPrice: 1500,
      promoPrice: 1099
    },
    {
      name: "Tour del Tequila Express",
      city: "Guadalajara",
      state: "Jalisco",
      image: "/tour-tequila-express.jpg",
      validity: "Válido hasta 30 Nov 2025",
      originalPrice: 1100,
      promoPrice: 799
    }
  ]

  const tabs = [
    { id: 'hoteles' as PromoType, label: 'Hoteles', icon: Hotel },
    { id: 'vuelos' as PromoType, label: 'Vuelos', icon: Plane },
    { id: 'restaurantes' as PromoType, label: 'Restaurantes', icon: UtensilsCrossed },
    { id: 'tours' as PromoType, label: 'Tours', icon: MapPinned }
  ]

  const getCurrentData = () => {
    switch (activeTab) {
      case 'hoteles': return hoteles
      case 'vuelos': return vuelos
      case 'restaurantes': return restaurantes
      case 'tours': return tours
    }
  }

  const isVuelo = activeTab === 'vuelos'

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9f8] via-[#fef5f7] to-[#f9feff]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#5c2a3a] backdrop-blur-sm border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#1ba098] to-[#2d5d68] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-white">
                Có'ox Travel
              </span>
            </Link>

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

            <Button className="hidden md:flex bg-gradient-to-r from-[#f04883] to-[#e02057] hover:from-[#f56ba0] hover:to-[#f04883] text-white shadow-lg" asChild>
              <Link href="/chatbot">Planear Viaje con IA</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] bg-clip-text text-transparent">
              Promociones Especiales
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Aprovecha nuestras mejores ofertas en hoteles, vuelos, restaurantes y tours
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveTab('hoteles')}
              className="h-auto py-4 px-8 flex flex-col items-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#8b3a5a] transition-all hover:shadow-lg group"
            >
              <Hotel className="w-8 h-8 text-[#8b3a5a] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-700 group-hover:text-[#8b3a5a]">Hoteles</span>
            </Button>
            
            <Button
              onClick={() => setActiveTab('vuelos')}
              className="h-auto py-4 px-8 flex flex-col items-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#1ba098] transition-all hover:shadow-lg group"
            >
              <Plane className="w-8 h-8 text-[#1ba098] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-700 group-hover:text-[#1ba098]">Vuelos</span>
            </Button>
            
            <Button
              onClick={() => setActiveTab('restaurantes')}
              className="h-auto py-4 px-8 flex flex-col items-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#ff8d4d] transition-all hover:shadow-lg group"
            >
              <UtensilsCrossed className="w-8 h-8 text-[#ff8d4d] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-700 group-hover:text-[#ff8d4d]">Restaurantes</span>
            </Button>
            
            <Button
              onClick={() => setActiveTab('tours')}
              className="h-auto py-4 px-8 flex flex-col items-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#f04883] transition-all hover:shadow-lg group"
            >
              <MapPinned className="w-8 h-8 text-[#f04883] group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-700 group-hover:text-[#f04883]">Tours</span>
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`h-auto py-3 px-6 flex items-center gap-2 transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#f04883] to-[#e02057] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{tab.label}</span>
                </Button>
              )
            })}
          </div>

          {/* Promociones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentData().map((item: any, index) => (
              <Card key={index} className="group overflow-hidden border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Location/Airline Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#1ba098] backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    {isVuelo ? (
                      <>
                        <Plane className="w-4 h-4 text-white" />
                        <span className="text-sm font-semibold text-white">{item.airline}</span>
                      </>
                    ) : (
                      <>
                        <MapPin className="w-4 h-4 text-white" />
                        <span className="text-sm font-semibold text-white">{item.city}, {item.state}</span>
                      </>
                    )}
                  </div>

                  {/* Promo Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#ff8d4d] to-[#f04883] px-3 py-1 rounded-full shadow-lg">
                    <span className="text-xs font-bold text-white">
                      {Math.round(((item.originalPrice - item.promoPrice) / item.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  {/* Name */}
                  <h3 className="text-lg font-bold text-[#5c2a3a] line-clamp-2 min-h-[3.5rem]">
                    {item.name}
                  </h3>

                  {/* Validity */}
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-[#1ba098]" />
                    <span className="text-sm">{item.validity}</span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-lg text-gray-400 line-through font-medium">
                      ${item.originalPrice.toLocaleString('es-MX')} MXN
                    </span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#f04883] to-[#e02057] bg-clip-text text-transparent">
                      ${item.promoPrice.toLocaleString('es-MX')} MXN
                    </span>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-gradient-to-r from-[#8b3a5a] to-[#d41f4f] hover:from-[#a0496e] hover:to-[#f04883] text-white mt-3">
                    Reservar Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#1ba098] to-[#2d5d68]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-lg text-white/90">
              Deja que nuestro asistente IA te ayude a encontrar las mejores ofertas personalizadas para tu viaje
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#ff8d4d] to-[#f04883] hover:from-[#ffaa70] hover:to-[#ff6ba0] text-white text-lg px-8 h-14 shadow-xl" asChild>
              <Link href="/chatbot">
                Consultar Asistente IA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#2d5d68]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1ba098] to-[#2d5d68] flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Có'ox Travel</span>
            </div>
            
            <p className="text-sm text-white/80">
              © 2025 Có'ox Travel. Todos los derechos reservados.
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
    </div>
  )
}

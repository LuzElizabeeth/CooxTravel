"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Hotel, Plane, UtensilsCrossed, MapPinned, Clock, DollarSign, Tag, ArrowRight } from 'lucide-react'

type ReservationType = 'hoteles' | 'vuelos' | 'restaurantes' | 'tours'

export default function ReservacionesPage() {
  const [activeTab, setActiveTab] = useState<ReservationType>('hoteles')

  const hoteles = [
    {
      name: "Hotel Boutique Casa Oaxaca",
      city: "Oaxaca",
      state: "Oaxaca",
      image: "/oaxaca-boutique-hotel.jpg",
      schedule: "Check-in: 3:00 PM - Check-out: 12:00 PM",
      price: 2500,
      hasPromo: true
    },
    {
      name: "Grand Palladium Riviera Maya",
      city: "Playa del Carmen",
      state: "Quintana Roo",
      image: "/riviera-maya-resort.jpg",
      schedule: "Check-in: 4:00 PM - Check-out: 11:00 AM",
      price: 5800,
      hasPromo: true
    },
    {
      name: "Hotel Emporio Zacatecas",
      city: "Zacatecas",
      state: "Zacatecas",
      image: "/zacatecas-hotel-colonial.jpg",
      schedule: "Check-in: 3:00 PM - Check-out: 1:00 PM",
      price: 1800,
      hasPromo: false
    },
    {
      name: "Live Aqua San Miguel de Allende",
      city: "San Miguel de Allende",
      state: "Guanajuato",
      image: "/san-miguel-luxury-hotel.jpg",
      schedule: "Check-in: 3:00 PM - Check-out: 12:00 PM",
      price: 4200,
      hasPromo: true
    },
    {
      name: "Hotel Xcaret México",
      city: "Cancún",
      state: "Quintana Roo",
      image: "/hotel-xcaret-cancun.jpg",
      schedule: "Check-in: 3:00 PM - Check-out: 12:00 PM",
      price: 7500,
      hasPromo: true
    },
    {
      name: "Quinta Real Guadalajara",
      city: "Guadalajara",
      state: "Jalisco",
      image: "/guadalajara-quinta-real.jpg",
      schedule: "Check-in: 3:00 PM - Check-out: 1:00 PM",
      price: 3200,
      hasPromo: false
    }
  ]

  const vuelos = [
    {
      name: "Ciudad de México - Cancún",
      airline: "Aeroméxico",
      image: "/flight-cdmx-cancun.jpg",
      schedule: "Salidas: 6:00 AM, 12:00 PM, 6:00 PM - Todos los días",
      price: 3200,
      hasPromo: true
    },
    {
      name: "Guadalajara - Puerto Vallarta",
      airline: "Volaris",
      image: "/flight-gdl-pvr.jpg",
      schedule: "Salidas: 7:00 AM, 3:00 PM - Lun a Dom",
      price: 1800,
      hasPromo: true
    },
    {
      name: "Monterrey - Los Cabos",
      airline: "VivaAerobus",
      image: "/flight-mty-cabo.jpg",
      schedule: "Salidas: 8:00 AM, 2:00 PM - Lun a Sáb",
      price: 2500,
      hasPromo: false
    },
    {
      name: "Ciudad de México - Oaxaca",
      airline: "Aeroméxico Connect",
      image: "/flight-cdmx-oaxaca.jpg",
      schedule: "Salidas: 9:00 AM, 5:00 PM - Todos los días",
      price: 1500,
      hasPromo: true
    },
    {
      name: "Tijuana - Guadalajara",
      airline: "Volaris",
      image: "/flight-tijuana-gdl.jpg",
      schedule: "Salidas: 10:00 AM, 4:00 PM - Lun a Vie",
      price: 2100,
      hasPromo: false
    },
    {
      name: "Mérida - Ciudad de México",
      airline: "Aeroméxico",
      image: "/flight-merida-cdmx.jpg",
      schedule: "Salidas: 6:30 AM, 1:00 PM, 7:00 PM - Todos los días",
      price: 2800,
      hasPromo: true
    }
  ]

  const restaurantes = [
    {
      name: "Pujol",
      city: "Ciudad de México",
      state: "CDMX",
      image: "/restaurant-pujol-cdmx.jpg",
      schedule: "Mar - Sáb: 1:00 PM - 11:00 PM | Dom: 1:00 PM - 6:00 PM",
      price: 3500,
      hasPromo: true
    },
    {
      name: "Quintonil",
      city: "Ciudad de México",
      state: "CDMX",
      image: "/restaurant-quintonil-cdmx.jpg",
      schedule: "Lun - Sáb: 1:00 PM - 11:00 PM | Cerrado Domingos",
      price: 2800,
      hasPromo: false
    },
    {
      name: "Alcalde",
      city: "Guadalajara",
      state: "Jalisco",
      image: "/restaurant-alcalde-gdl.jpg",
      schedule: "Mar - Sáb: 2:00 PM - 11:00 PM | Dom: 2:00 PM - 6:00 PM",
      price: 1800,
      hasPromo: true
    },
    {
      name: "Casa Oaxaca",
      city: "Oaxaca",
      state: "Oaxaca",
      image: "/restaurant-casa-oaxaca.jpg",
      schedule: "Todos los días: 8:00 AM - 11:00 PM",
      price: 1500,
      hasPromo: false
    },
    {
      name: "Hartwood",
      city: "Tulum",
      state: "Quintana Roo",
      image: "/restaurant-hartwood-tulum.jpg",
      schedule: "Mié - Lun: 6:00 PM - 11:00 PM | Cerrado Martes",
      price: 2200,
      hasPromo: true
    },
    {
      name: "Pangea",
      city: "Monterrey",
      state: "Nuevo León",
      image: "/restaurant-pangea-monterrey.jpg",
      schedule: "Lun - Sáb: 1:00 PM - 12:00 AM | Dom: 1:00 PM - 6:00 PM",
      price: 2500,
      hasPromo: true
    }
  ]

  const tours = [
    {
      name: "Tour Chichén Itzá + Cenote Ik Kil",
      city: "Mérida",
      state: "Yucatán",
      image: "/tour-chichen-itza-cenote.jpg",
      schedule: "Todos los días: 7:00 AM - 6:00 PM | Duración: 11 hrs",
      price: 1800,
      hasPromo: true
    },
    {
      name: "Tour Barrancas del Cobre",
      city: "Chihuahua",
      state: "Chihuahua",
      image: "/tour-copper-canyon.jpg",
      schedule: "Lun - Sáb: 8:00 AM - 7:00 PM | Duración: 11 hrs",
      price: 2500,
      hasPromo: false
    },
    {
      name: "Avistamiento de Ballenas",
      city: "Los Cabos",
      state: "Baja California Sur",
      image: "/tour-whale-watching-cabo.jpg",
      schedule: "Dic - Abr: 7:00 AM - 12:00 PM | Duración: 5 hrs",
      price: 1200,
      hasPromo: true
    },
    {
      name: "Tour Teotihuacán + Tlatelolco",
      city: "Ciudad de México",
      state: "CDMX",
      image: "/tour-teotihuacan-pyramids.jpg",
      schedule: "Todos los días: 8:00 AM - 5:00 PM | Duración: 9 hrs",
      price: 900,
      hasPromo: false
    },
    {
      name: "Snorkel en Cozumel",
      city: "Cozumel",
      state: "Quintana Roo",
      image: "/tour-snorkel-cozumel.jpg",
      schedule: "Todos los días: 9:00 AM - 3:00 PM | Duración: 6 hrs",
      price: 1500,
      hasPromo: true
    },
    {
      name: "Tour del Tequila Express",
      city: "Guadalajara",
      state: "Jalisco",
      image: "/tour-tequila-express.jpg",
      schedule: "Sáb - Dom: 10:00 AM - 8:00 PM | Duración: 10 hrs",
      price: 1100,
      hasPromo: true
    }
  ]

  const tabs = [
    { id: 'hoteles' as ReservationType, label: 'Hoteles', icon: Hotel },
    { id: 'vuelos' as ReservationType, label: 'Vuelos', icon: Plane },
    { id: 'restaurantes' as ReservationType, label: 'Restaurantes', icon: UtensilsCrossed },
    { id: 'tours' as ReservationType, label: 'Tours', icon: MapPinned }
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
              Reservaciones
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Reserva hoteles, vuelos, restaurantes y tours en todo México
            </p>
          </div>

          {/* Quick Navigation Buttons */}
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

          {/* Reservaciones Grid */}
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
                </div>

                <div className="p-5 space-y-3">
                  {/* Name */}
                  <h3 className="text-lg font-bold text-[#5c2a3a] line-clamp-2 min-h-[3.5rem]">
                    {item.name}
                  </h3>

                  {/* Schedule */}
                  <div className="flex items-start gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-[#1ba098] mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item.schedule}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 pt-2">
                    <DollarSign className="w-5 h-5 text-[#ff8d4d]" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#f04883] to-[#e02057] bg-clip-text text-transparent">
                      ${item.price.toLocaleString('es-MX')} MXN
                    </span>
                  </div>

                  {/* Promo Badge */}
                  {item.hasPromo && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-[#ff8d4d] to-[#f04883] px-3 py-2 rounded-lg">
                      <Tag className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold text-white">Promoción Disponible</span>
                    </div>
                  )}

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
              ¿Necesitas ayuda para planear tu viaje?
            </h2>
            <p className="text-lg text-white/90">
              Deja que nuestro asistente IA cree un itinerario completo con todas tus reservaciones coordinadas
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

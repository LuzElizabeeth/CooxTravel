"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, Heart, MessageSquare, User, ArrowRight, Filter, Search } from 'lucide-react'
import { useState } from "react"

interface UserExperience {
  id: number
  userName: string
  userAvatar?: string
  hasPhoto: boolean
  photo?: string
  event: string
  city: string
  state: string
  date: string
  likes: number
  comments: number
  comment?: string
}

export default function ExperienciasPage() {
  const [filter, setFilter] = useState<'all' | 'photos' | 'comments'>('all')

  // Data de ejemplo de experiencias de usuarios
  const experiences: UserExperience[] = [
    {
      id: 1,
      userName: "María González",
      userAvatar: "/user-avatar-woman.jpg",
      hasPhoto: true,
      photo: "/chichen-itza-sunset-tourist-photo.jpg",
      event: "Tour Chichén Itzá al Atardecer",
      city: "Chichén Itzá",
      state: "Yucatán",
      date: "15 de Enero, 2025",
      likes: 234,
      comments: 18
    },
    {
      id: 2,
      userName: "Carlos Ramírez",
      hasPhoto: false,
      event: "Experiencia Gastronómica Oaxaqueña",
      city: "Oaxaca",
      state: "Oaxaca",
      date: "10 de Enero, 2025",
      likes: 89,
      comments: 12,
      comment: "Increíble experiencia culinaria. Los moles tradicionales fueron espectaculares y el tour por el mercado de Benito Juárez fue muy educativo. El chef nos expliCo cada ingrediente y la historia detrás de cada platillo. Totalmente recomendado para los amantes de la gastronomía mexicana."
    },
    {
      id: 3,
      userName: "Ana Martínez",
      userAvatar: "/user-avatar-woman-2.jpg",
      hasPhoto: true,
      photo: "/cancun-beach-turquoise-water-tourist.jpg",
      event: "Snorkel en Isla Mujeres",
      city: "Cancún",
      state: "Quintana Roo",
      date: "8 de Enero, 2025",
      likes: 567,
      comments: 45
    },
    {
      id: 4,
      userName: "Roberto Silva",
      hasPhoto: false,
      event: "Tour por el Centro Histórico",
      city: "Ciudad de México",
      state: "CDMX",
      date: "5 de Enero, 2025",
      likes: 142,
      comments: 8,
      comment: "El tour guiado por el centro histórico superó mis expectativas. Visitamos el Palacio de Bellas Artes, el Zócalo y la Catedral Metropolitana. Nuestro guía tenía un conocimiento profundo de la historia y arquitectura. Una experiencia cultural imperdible."
    },
    {
      id: 5,
      userName: "Laura Pérez",
      userAvatar: "/user-avatar-woman-3.jpg",
      hasPhoto: true,
      photo: "/copper-canyon-train-scenic-view.jpg",
      event: "Viaje en el Chepe Express",
      city: "Creel",
      state: "Chihuahua",
      date: "28 de Diciembre, 2024",
      likes: 412,
      comments: 31
    },
    {
      id: 6,
      userName: "Diego Hernández",
      hasPhoto: false,
      event: "Noche de Gala en Guanajuato",
      city: "Guanajuato",
      state: "Guanajuato",
      date: "20 de Diciembre, 2024",
      likes: 95,
      comments: 5,
      comment: "Asistimos a la Gala de Año Nuevo en el Teatro Juárez. El ambiente era mágico con las calles coloniales iluminadas. La cena fue exquisita y el espectáculo de danza folklórica nos dejó sin palabras. Guanajuato de noche es simplemente hermoso."
    },
    {
      id: 7,
      userName: "Patricia Morales",
      userAvatar: "/user-avatar-woman-4.jpg",
      hasPhoto: true,
      photo: "/tulum-ruins-caribbean-beach.jpg",
      event: "Ruinas de Tulum & Playa",
      city: "Tulum",
      state: "Quintana Roo",
      date: "18 de Diciembre, 2024",
      likes: 789,
      comments: 62
    },
    {
      id: 8,
      userName: "Fernando López",
      hasPhoto: false,
      event: "Vuelo en Globo Teotihuacán",
      city: "San Juan Teotihuacán",
      state: "Estado de México",
      date: "15 de Diciembre, 2024",
      likes: 324,
      comments: 27,
      comment: "Ver el amanecer desde un globo aerostático sobre las pirámides de Teotihuacán fue una experiencia inolvidable. El piloto fue muy profesional y nos expliCo la historia del lugar desde el aire. El desayuno después del vuelo fue el cierre perfecto."
    }
  ]

  const filteredExperiences = experiences.filter(exp => {
    if (filter === 'photos') return exp.hasPhoto
    if (filter === 'comments') return !exp.hasPhoto
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9f8] via-[#fef5f7] to-[#f9feff]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#5c2a3a] backdrop-blur-sm border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#1ba098] to-[#2d5d68] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-white">
                Co'ox Travel
              </span>
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
              <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/20 bg-white/10" asChild>
                <Link href="/experiencias">Experiencias</Link>
              </Button>
            </nav>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-gradient-to-r from-[#f04883] to-[#e02057] hover:from-[#f56ba0] hover:to-[#f04883] text-white shadow-lg" asChild>
              <Link href="/chatbot">Planear Viaje con IA</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f04883] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1ba098] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 lg:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] bg-clip-text text-transparent">Experiencias</span>{" "}
              <span className="bg-gradient-to-r from-[#1ba098] to-[#2d5d68] bg-clip-text text-transparent">Reales</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Descubre las experiencias auténticas de viajeros como tú. Comparte tus momentos favoritos e inspira a otros.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl shadow-md p-4">
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'}
                className={filter === 'all' 
                  ? "bg-gradient-to-r from-[#8b3a5a] to-[#d41f4f] text-white" 
                  : "border-2 border-gray-300 text-gray-700 hover:border-[#8b3a5a]"
                }
                onClick={() => setFilter('all')}
              >
                Todas
              </Button>
              <Button 
                variant={filter === 'photos' ? 'default' : 'outline'}
                className={filter === 'photos' 
                  ? "bg-gradient-to-r from-[#8b3a5a] to-[#d41f4f] text-white" 
                  : "border-2 border-gray-300 text-gray-700 hover:border-[#8b3a5a]"
                }
                onClick={() => setFilter('photos')}
              >
                Con Fotos
              </Button>
              <Button 
                variant={filter === 'comments' ? 'default' : 'outline'}
                className={filter === 'comments' 
                  ? "bg-gradient-to-r from-[#8b3a5a] to-[#d41f4f] text-white" 
                  : "border-2 border-gray-300 text-gray-700 hover:border-[#8b3a5a]"
                }
                onClick={() => setFilter('comments')}
              >
                Comentarios
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-[#1ba098] hover:text-[#1ba098]">
                <Filter className="w-4 h-4 mr-2" />
                Filtrar
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-[#1ba098] hover:text-[#1ba098]">
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredExperiences.map((experience) => (
              <Card key={experience.id} className="group overflow-hidden border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f04883] via-[#1ba098] to-[#ff8d4d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-lg" />
                </div>
                
                <div className="relative">
                  {/* User Header */}
                  <div className="p-4 pb-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b3a5a] to-[#d41f4f] flex items-center justify-center overflow-hidden">
                      {experience.userAvatar ? (
                        <img src={experience.userAvatar || "/placeholder.svg"} alt={experience.userName} className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#5c2a3a] truncate">{experience.userName}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {experience.date}
                      </p>
                    </div>
                  </div>

                  {/* Photo or Comment Content */}
                  {experience.hasPhoto ? (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={experience.photo || "/placeholder.svg"}
                        alt={experience.event}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                  ) : (
                    <div className="p-4 pt-0">
                      <div className="bg-gradient-to-br from-[#fef9f8] to-[#f9feff] rounded-xl p-4 min-h-[200px] flex items-center">
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {experience.comment}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Event Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#5c2a3a] mb-2 line-clamp-1">
                      {experience.event}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 text-[#1ba098]" />
                      <span className="truncate">{experience.city}, {experience.state}</span>
                    </div>

                    {/* Interactions */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:text-[#f04883] hover:bg-[#f04883]/5">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs font-medium">{experience.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:text-[#1ba098] hover:bg-[#1ba098]/5">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-xs font-medium">{experience.comments}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Share */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="relative overflow-hidden border-2 border-transparent bg-gradient-to-br from-[#1ba098] to-[#2d5d68] p-8 lg:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-20 w-64 h-64 bg-[#f04883] rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#ff8d4d] rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
                Comparte tu Experiencia
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                ¿Ya viajaste con nosotros? Comparte tus fotos y comentarios para inspirar a otros viajeros.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-[#ff8d4d] to-[#f04883] hover:from-[#ffaa70] hover:to-[#ff6ba0] text-white text-base lg:text-lg px-8 h-12 lg:h-14 shadow-xl">
                Subir Experiencia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 lg:py-16 bg-[#2d5d68]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1ba098] to-[#2d5d68] flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Co'ox Travel
              </span>
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
    </div>
  )
}

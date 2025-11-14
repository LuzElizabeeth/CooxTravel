import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Camera, MessageSquare, Calendar, MapPinned, ArrowLeft } from 'lucide-react'

export default function ExperienciasPage() {
  // Mock data for user-shared experiences (photos and comments)
  const userExperiences = [
    {
      type: 'photo',
      imageUrl: '/chichen-itza-pyramid-mexico.jpg',
      event: 'Tour arqueológico Chichén Itzá',
      city: 'Valladolid',
      state: 'Yucatán',
      userName: 'María González',
      date: '15 de Marzo, 2024',
      likes: 234
    },
    {
      type: 'comment',
      text: 'La comida en Oaxaca fue increíble. El mole negro en Casa Oaxaca es algo que todos deben probar. La experiencia culinaria fue única y auténtica.',
      event: 'Ruta Gastronómica Oaxaqueña',
      city: 'Oaxaca de Juárez',
      state: 'Oaxaca',
      userName: 'Carlos Ramírez',
      date: '8 de Marzo, 2024',
      likes: 156
    },
    {
      type: 'photo',
      imageUrl: '/cancun-beach-turquoise-water.jpg',
      event: 'Escapada de playa todo incluido',
      city: 'Cancún',
      state: 'Quintana Roo',
      userName: 'Ana López',
      date: '22 de Febrero, 2024',
      likes: 412
    },
    {
      type: 'photo',
      imageUrl: '/creel-chihuahua-mountains-mexico.jpg',
      event: 'Aventura en las Barrancas del Cobre',
      city: 'Creel',
      state: 'Chihuahua',
      userName: 'Roberto Sánchez',
      date: '5 de Febrero, 2024',
      likes: 198
    },
    {
      type: 'comment',
      text: 'El museo Frida Kahlo me dejó sin palabras. La Casa Azul es mágica y llena de historia. Definitivamente regresaré con más tiempo para explorar la colonia Coyoacán.',
      event: 'Tour cultural Ciudad de México',
      city: 'Ciudad de México',
      state: 'CDMX',
      userName: 'Laura Martínez',
      date: '1 de Febrero, 2024',
      likes: 287
    },
    {
      type: 'photo',
      imageUrl: '/palacio-bellas-artes-mexico-city.jpg',
      event: 'Noche de ballet folklórico',
      city: 'Ciudad de México',
      state: 'CDMX',
      userName: 'Diego Torres',
      date: '18 de Enero, 2024',
      likes: 342
    },
    {
      type: 'comment',
      text: 'Nadar en el cenote Ik Kil fue una experiencia surrealista. El agua cristalina y la vegetación alrededor crean un ambiente mágico. Altamente recomendado.',
      event: 'Tour de cenotes Yucatecos',
      city: 'Tinum',
      state: 'Yucatán',
      userName: 'Patricia Ruiz',
      date: '12 de Enero, 2024',
      likes: 523
    },
    {
      type: 'photo',
      imageUrl: '/mexico-pattern-abstract.jpg',
      event: 'Festival de Día de Muertos',
      city: 'Pátzcuaro',
      state: 'Michoacán',
      userName: 'Fernando Díaz',
      date: '2 de Noviembre, 2023',
      likes: 678
    }
  ]

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
                Có'ox Travel
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
              <Button variant="ghost" className="text-white bg-white/10" asChild>
                <Link href="/experiencias">Experiencias</Link>
              </Button>
            </nav>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-gradient-to-r from-[#f04883] to-[#e02057] hover:from-[#f56ba0] hover:to-[#f04883] text-white shadow-lg">
              Reserva Ahora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Button variant="ghost" className="mb-6 text-[#5c2a3a] hover:text-[#5c2a3a] hover:bg-[#5c2a3a]/5" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1ba098] to-[#2d5d68] text-white text-sm font-medium shadow-lg">
              <Camera className="w-4 h-4" />
              <span>Compartido por viajeros</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] bg-clip-text text-transparent">
                Experiencias de Viajeros
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              Descubre los lugares que han visitado otros viajeros. Fotos reales y comentarios auténticos de personas que han disfrutado nuestros paquetes y tours.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userExperiences.map((experience, index) => (
              <Card key={index} className="group overflow-hidden border-2 border-gray-200 hover:border-[#1ba098] hover:shadow-xl transition-all duration-300">
                {experience.type === 'photo' ? (
                  // Photo Experience
                  <div className="relative">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={experience.imageUrl || "/placeholder.svg"}
                        alt={experience.event}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#1ba098] px-3 py-1.5 rounded-full shadow-md">
                        <Camera className="w-4 h-4 text-white" />
                        <span className="text-xs font-medium text-white">Foto</span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium mb-1">{experience.userName}</p>
                        <p className="text-white/80 text-xs">{experience.date}</p>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-[#5c2a3a] mb-2 line-clamp-2">
                          {experience.event}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPinned className="w-4 h-4 text-[#1ba098]" />
                          <span>{experience.city}, {experience.state}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                        <span className="text-sm text-gray-500">{experience.likes} me gusta</span>
                        <Button size="sm" variant="ghost" className="text-[#f04883] hover:text-[#f04883] hover:bg-[#f04883]/5">
                          Me gusta
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Comment Experience
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff8d4d] to-[#f04883] flex items-center justify-center shadow-md">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[#5c2a3a]">{experience.userName}</p>
                        <p className="text-xs text-gray-500">{experience.date}</p>
                      </div>
                      <div className="px-3 py-1 bg-[#ff8d4d]/10 rounded-full">
                        <span className="text-xs font-medium text-[#ff8d4d]">Comentario</span>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm">
                      {experience.text}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-[#8b3a5a] mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <span className="font-semibold text-[#5c2a3a]">Evento:</span>
                          <span className="text-gray-600 ml-1">{experience.event}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <MapPinned className="w-4 h-4 text-[#1ba098] mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <span className="font-semibold text-[#5c2a3a]">Ubicación:</span>
                          <span className="text-gray-600 ml-1">{experience.city}, {experience.state}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <span className="text-sm text-gray-500">{experience.likes} me gusta</span>
                      <Button size="sm" variant="ghost" className="text-[#f04883] hover:text-[#f04883] hover:bg-[#f04883]/5">
                        Me gusta
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-[#1ba098] to-[#2d5d68] hover:from-[#25b5ab] hover:to-[#3a7082] text-white px-8">
              Cargar más experiencias
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-[#f04883] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#1ba098] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
              Comparte tu experiencia
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              ¿Has viajado con nosotros? Comparte tus fotos y comentarios para inspirar a otros viajeros a descubrir los tesoros de México.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#ff8d4d] to-[#ff6b35] hover:from-[#ffaa70] hover:to-[#ff8d4d] text-white text-base lg:text-lg px-8 h-12 shadow-xl">
              <Camera className="mr-2 h-5 w-5" />
              Compartir mi experiencia
            </Button>
          </div>
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

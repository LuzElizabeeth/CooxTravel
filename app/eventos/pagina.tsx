import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, DollarSign, ArrowLeft, Sparkles } from 'lucide-react'

export default function EventosPage() {
  // Mock data for events
  const events = [
    {
      title: 'Festival Cervantino',
      image: '/guanajuato-colorful-festival-international-cervant.jpg',
      city: 'Guanajuato',
      state: 'Guanajuato',
      date: '4 - 22 de Octubre, 2025',
      budget: '3,500'
    },
    {
      title: 'Día de Muertos en Pátzcuaro',
      image: '/day-of-dead-patzcuaro-michoacan-altar-offerings.jpg',
      city: 'Pátzcuaro',
      state: 'Michoacán',
      date: '31 Oct - 2 Nov, 2025',
      budget: '4,200'
    },
    {
      title: 'Carnaval de Mazatlán',
      image: '/mazatlan-carnival-floats-parade-colorful-mexico.jpg',
      city: 'Mazatlán',
      state: 'Sinaloa',
      date: '27 Feb - 4 Mar, 2025',
      budget: '5,800'
    },
    {
      title: 'Festival de Música de Morelia',
      image: '/morelia-music-festival-classical-cathedral.jpg',
      city: 'Morelia',
      state: 'Michoacán',
      date: '8 - 24 de Noviembre, 2025',
      budget: '2,900'
    },
    {
      title: 'Guelaguetza Oaxaca',
      image: '/guelaguetza-oaxaca-traditional-dance-indigenous-co.jpg',
      city: 'Oaxaca de Juárez',
      state: 'Oaxaca',
      date: '21 - 28 de Julio, 2025',
      budget: '6,500'
    },
    {
      title: 'Festival de las Luces Querétaro',
      image: '/queretaro-lights-festival-night-illumination.jpg',
      city: 'Querétaro',
      state: 'Querétaro',
      date: '15 - 30 de Diciembre, 2025',
      budget: '3,200'
    },
    {
      title: 'Feria Nacional de San Marcos',
      image: '/aguascalientes-san-marcos-fair-traditional-mexico.jpg',
      city: 'Aguascalientes',
      state: 'Aguascalientes',
      date: '13 Abr - 5 May, 2025',
      budget: '4,800'
    },
    {
      title: 'Festival Internacional de Cine Guadalajara',
      image: '/guadalajara-film-festival-cinema-red-carpet.jpg',
      city: 'Guadalajara',
      state: 'Jalisco',
      date: '6 - 14 de Junio, 2025',
      budget: '5,200'
    },
    {
      title: 'Desfile de Alebrijes CDMX',
      image: '/mexico-city-alebrijes-parade-colorful-creatures-re.jpg',
      city: 'Ciudad de México',
      state: 'CDMX',
      date: '26 de Octubre, 2025',
      budget: '2,500'
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
              <Button variant="ghost" className="text-white bg-white/10" asChild>
                <Link href="/eventos">Eventos</Link>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
                <Link href="/reservaciones">Reservaciones</Link>
              </Button>
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff8d4d] to-[#f04883] text-white text-sm font-medium shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Eventos especiales</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] bg-clip-text text-transparent">
                Eventos Culturales de México
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              Descubre los festivales y eventos más importantes del país. Vive la cultura mexicana en su máximo esplendor.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="group overflow-hidden border-2 border-gray-200 hover:border-[#ff8d4d] hover:shadow-2xl transition-all duration-300">
                {/* Image with overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* City and State overlay box */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#1ba098]" />
                      <div className="text-sm">
                        <span className="font-bold text-[#5c2a3a]">{event.city}</span>
                        <span className="text-gray-600">, {event.state}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event details */}
                <div className="p-6 space-y-4">
                  {/* Event name */}
                  <h3 className="text-xl font-bold text-[#5c2a3a] line-clamp-2 min-h-[3.5rem]">
                    {event.title}
                  </h3>

                  {/* Three data points */}
                  <div className="space-y-3">
                    {/* Date/Duration */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8b3a5a] to-[#d41f4f] flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Fecha</p>
                        <p className="text-sm font-medium text-[#5c2a3a]">{event.date}</p>
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1ba098] to-[#2d5d68] flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Presupuesto</p>
                        <p className="text-sm font-medium text-[#5c2a3a]">${event.budget} MXN por persona</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-to-r from-[#ff8d4d] to-[#f04883] hover:from-[#ffaa70] hover:to-[#ff6ba0] text-white group-hover:shadow-lg transition-all mt-4">
                    Me Interesa
                  </Button>
                </div>
              </Card>
            ))}
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
              No te pierdas ningún evento
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Reserva con anticipación y asegura tu lugar en los eventos más populares de México. Paquetes todo incluido con hotel, transporte y entradas.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#ff8d4d] to-[#ff6b35] hover:from-[#ffaa70] hover:to-[#ff8d4d] text-white text-base lg:text-lg px-8 h-12 shadow-xl">
              <Calendar className="mr-2 h-5 w-5" />
              Reservar paquete
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
                Có'ox Travel
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

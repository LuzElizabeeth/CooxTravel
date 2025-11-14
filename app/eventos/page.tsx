import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, DollarSign, ArrowRight, Filter } from 'lucide-react'

export default function EventosPage() {
  const eventos = [
    {
      id: 1,
      nombre: "Guelaguetza",
      ciudad: "Oaxaca",
      estado: "Oaxaca",
      fecha: "15-25 Julio 2025",
      presupuesto: "8500",
      imagen: "/guelaguetza-oaxaca-festival.jpg",
      descripcion: "La máxima fiesta de la cultura oaxaqueña"
    },
    {
      id: 2,
      nombre: "Carnaval de Veracruz",
      ciudad: "Veracruz",
      estado: "Veracruz",
      fecha: "20 Feb - 5 Mar 2025",
      presupuesto: "12000",
      imagen: "/carnaval-veracruz-colorful.jpg",
      descripcion: "El carnaval más alegre de México"
    },
    {
      id: 3,
      nombre: "Festival Cervantino",
      ciudad: "Guanajuato",
      estado: "Guanajuato",
      fecha: "4-22 Octubre 2025",
      presupuesto: "15000",
      imagen: "/festival-cervantino-guanajuato.jpg",
      descripcion: "Festival internacional de artes"
    },
    {
      id: 4,
      nombre: "Día de Muertos",
      ciudad: "Pátzcuaro",
      estado: "Michoacán",
      fecha: "31 Oct - 2 Nov 2025",
      presupuesto: "9500",
      imagen: "/dia-muertos-patzcuaro-michoacan.jpg",
      descripcion: "Celebración tradicional única en el mundo"
    },
    {
      id: 5,
      nombre: "Festival del Globo",
      ciudad: "León",
      estado: "Guanajuato",
      fecha: "14-17 Noviembre 2025",
      presupuesto: "7000",
      imagen: "/festival-globo-leon-colorful.jpg",
      descripcion: "Cielos llenos de globos aerostáticos"
    },
    {
      id: 6,
      nombre: "Carnaval de Mazatlán",
      ciudad: "Mazatlán",
      estado: "Sinaloa",
      fecha: "27 Feb - 4 Mar 2025",
      presupuesto: "11500",
      imagen: "/carnaval-mazatlan-beach.jpg",
      descripcion: "Carnaval frente al mar Pacífico"
    },
    {
      id: 7,
      nombre: "Feria de San Marcos",
      ciudad: "Aguascalientes",
      estado: "Aguascalientes",
      fecha: "13 Abr - 5 May 2025",
      presupuesto: "10000",
      imagen: "/feria-san-marcos-aguascalientes.jpg",
      descripcion: "La feria más importante de México"
    },
    {
      id: 8,
      nombre: "Festival Internacional Chihuahua",
      ciudad: "Chihuahua",
      estado: "Chihuahua",
      fecha: "10-20 Octubre 2025",
      presupuesto: "8000",
      imagen: "/festival-internacional-chihuahua.jpg",
      descripcion: "Arte y cultura del norte de México"
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
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10" asChild>
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
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 lg:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] bg-clip-text text-transparent">
                Eventos y Festivales
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Descubre los mejores eventos y festivales de México. Vive experiencias culturales únicas que te conectarán con las tradiciones más auténticas.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-8 lg:mt-12 flex flex-wrap items-center justify-center gap-3">
            <Button variant="outline" className="border-2 border-[#1ba098] text-[#1ba098] hover:bg-[#1ba098] hover:text-white">
              <Filter className="w-4 h-4 mr-2" />
              Todos los Eventos
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-100">
              Culturales
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-100">
              Gastronómicos
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-100">
              Musicales
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-100">
              Deportivos
            </Button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eventos.map((evento) => (
              <Card key={evento.id} className="group overflow-hidden border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                {/* Image Container with Location Badge */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={evento.imagen || "/placeholder.svg"}
                    alt={evento.nombre}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Location Badge - Bottom Left */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#1ba098] to-[#2d5d68] backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                      <div className="text-white">
                        <div className="text-sm font-bold leading-tight">{evento.ciudad}</div>
                        <div className="text-xs opacity-90 leading-tight">{evento.estado}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-5 space-y-4 bg-white">
                  {/* Event Name */}
                  <div>
                    <h3 className="text-xl font-bold text-[#5c2a3a] mb-1 line-clamp-2 leading-tight">
                      {evento.nombre}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-1">
                      {evento.descripcion}
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-2">
                    {/* Date */}
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-[#8b3a5a] flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Fecha</div>
                        <div className="text-sm text-gray-900 font-medium leading-tight">{evento.fecha}</div>
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-[#ff8d4d] flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Presupuesto</div>
                        <div className="text-sm text-gray-900 font-bold leading-tight">
                          ${parseInt(evento.presupuesto).toLocaleString('es-MX')} MXN
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-to-r from-[#f04883] to-[#e02057] hover:from-[#f56ba0] hover:to-[#f04883] text-white group-hover:shadow-lg transition-all">
                    Ver Detalles
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
              ¿Quieres asistir a algún evento?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Deja que nuestro asistente IA organice todo tu viaje, incluyendo boletos, hospedaje y transporte.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#ff8d4d] to-[#ff6b35] hover:from-[#ffaa70] hover:to-[#ff8d4d] text-white text-base lg:text-lg px-8 h-12 lg:h-14 shadow-xl" asChild>
              <Link href="/chatbot">
                Planear mi Viaje
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
              <span className="text-xl font-bold text-white">
                Có'ox Travel
              </span>
            </div>
            
            <p className="text-sm text-white/80 text-center md:text-left">
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

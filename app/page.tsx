import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, Star, ArrowRight, Plane, Hotel, UtensilsCrossed, MapPinned, Bot, Sparkles, Clock, Shield, MessageCircle } from 'lucide-react'

export default function HomePage() {
  const services = [
    {
      icon: Hotel,
      title: "Hoteles",
      description: "Miles de opciones de hospedaje en todo México",
      color: "from-[#5c2a3a] to-[#8b3a5a]"
    },
    {
      icon: Plane,
      title: "Vuelos",
      description: "Encuentra los mejores precios en boletos de avión",
      color: "from-[#1ba098] to-[#2d5d68]"
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurantes",
      description: "Reserva en los mejores lugares gastronómicos",
      color: "from-[#f04883] to-[#e02057]"
    },
    {
      icon: MapPinned,
      title: "Tours",
      description: "Experiencias guiadas y actividades únicas",
      color: "from-[#ff8d4d] to-[#ff6b35]"
    }
  ]

  const destinations = [
    {
      title: "Chichén Itzá",
      location: "Yucatán",
      image: "/chichen-itza-pyramid-mexico.jpg",
      description: "Descubre una de las siete maravillas del mundo moderno",
      rating: 4.9,
      reviews: 2847
    },
    {
      title: "Creel",
      location: "Chihuahua",
      image: "/creel-chihuahua-mountains-mexico.jpg",
      description: "Aventura en las montañas de la Sierra Tarahumara",
      rating: 4.8,
      reviews: 1523
    },
    {
      title: "Cancún",
      location: "Quintana Roo",
      image: "/cancun-beach-turquoise-water.jpg",
      description: "Playas paradisíacas y aguas cristalinas del Caribe",
      rating: 4.9,
      reviews: 5632
    },
    {
      title: "Palacio de Bellas Artes",
      location: "Ciudad de México",
      image: "/palacio-bellas-artes-mexico-city.jpg",
      description: "Icono cultural en el corazón de la capital",
      rating: 4.7,
      reviews: 3291
    }
  ]

  const chatbotBenefits = [
    {
      icon: Clock,
      title: "Ahorra Tiempo",
      description: "Itinerarios en minutos, no en horas"
    },
    {
      icon: Sparkles,
      title: "Personalizado",
      description: "Adaptado a tus gustos y presupuesto"
    },
    {
      icon: Shield,
      title: "Confiable",
      description: "Recomendaciones verificadas y seguras"
    }
  ]

  return (
    <div className="min-h-screen">
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#fef9f8] via-[#fef5f7] to-[#f9feff]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f04883] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1ba098] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
            <div className="">
              
        
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] bg-clip-text text-transparent">Co'ox</span>{" "}
              <span className="bg-gradient-to-r from-[#1ba098] to-[#2d5d68] bg-clip-text text-transparent">Travel</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-[#5c2a3a] text-pretty font-medium">
              "Planea hoy, viaja mañana"
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              La plataforma todo-en-uno para planear y reservar tus viajes. Hoteles, vuelos, restaurantes y tours en un solo lugar, con itinerarios personalizados creados por nuestro chatbot inteligente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#ff8d4d] to-[#ff6b35] hover:from-[#ffaa70] hover:to-[#ff8d4d] text-white text-base lg:text-lg px-8 h-12 lg:h-14 shadow-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Habla con el Asistente IA
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base lg:text-lg px-8 h-12 lg:h-14 border-2 border-[#1ba098] text-[#1ba098] hover:bg-[#1ba098] hover:text-white transition-all">
                Ver Promociones
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] bg-clip-text text-transparent">
              Todo en Una Plataforma
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Reserva todos los aspectos de tu viaje en un solo lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="group p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-transparent relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative space-y-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-[#5c2a3a] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <Button variant="ghost" className="w-full justify-between text-[#1ba098] hover:text-[#1ba098] hover:bg-[#1ba098]/5 group/btn">
                      Explorar
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1ba098] to-[#2d5d68] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#ff8d4d] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Tecnología Inteligente</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                Tu Asistente de Viajes con IA
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Nuestro chatbot inteligente automatiza la creación de itinerarios personalizados basados en tus preferencias, presupuesto y estilo de viaje. En minutos, obten un plan completo con hoteles, vuelos, restaurantes y tours perfectamente coordinados.
              </p>

              <div className="space-y-4 pt-4">
                {chatbotBenefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff8d4d] to-[#f04883] flex items-center justify-center shadow-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <Button size="lg" className="bg-gradient-to-r from-[#ff8d4d] to-[#f04883] hover:from-[#ffaa70] hover:to-[#ff6ba0] text-white text-base lg:text-lg px-8 h-12 lg:h-14 shadow-xl mt-6">
                <Bot className="mr-2 h-5 w-5" />
                Probar el Asistente IA
              </Button>
            </div>

            <div className="relative lg:h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f04883] via-[#ff8d4d] to-[#5c2a3a] rounded-3xl blur-2xl opacity-50 animate-pulse" />
                
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff8d4d] to-[#f04883] flex items-center justify-center">
                      <Bot className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Asistente IA</div>
                      <div className="text-white/60 text-xs">En línea</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4">
                      <p className="text-white text-sm">
                        Hola! Quiero planear un viaje de 3 días a Oaxaca para 2 personas
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#ff8d4d] to-[#f04883] rounded-2xl rounded-tr-sm p-4">
                      <p className="text-white text-sm">
                        Perfecto! He creado un itinerario con hotel boutique en el centro, tour a Monte Albán, y reservas en 3 restaurantes tradicionales. Presupuesto: $12,500 MXN
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce delay-75" />
                      <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce delay-150" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] bg-clip-text text-transparent">
              Destinos Populares
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Explora nuestros destinos más solicitados y encuentra tu próxima aventura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="group overflow-hidden border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f04883] via-[#1ba098] to-[#ff8d4d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-lg" />
                </div>
                
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#1ba098] backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                      <MapPin className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium text-white">{destination.location}</span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                      <Star className="w-4 h-4 fill-[#ff8d4d] text-[#ff8d4d]" />
                      <span className="text-sm font-bold text-[#5c2a3a]">{destination.rating}</span>
                      <span className="text-xs text-gray-600">({destination.reviews})</span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {destination.title}
                      </h3>
                      <p className="text-white/90 text-sm lg:text-base">
                        {destination.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-white">
                    <Button className="w-full bg-gradient-to-r from-[#8b3a5a] to-[#d41f4f] hover:from-[#a0496e] hover:to-[#f04883] text-white group-hover:shadow-lg transition-all">
                      Ver Paquetes
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-[#f04883] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#1ba098] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
              ¿Listo para tu próxima aventura?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Deja que nuestro asistente IA cree el itinerario perfecto para ti. Hoteles, vuelos, restaurantes y tours, todo coordinado en un solo plan personalizado.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#ff8d4d] to-[#ff6b35] hover:from-[#ffaa70] hover:to-[#ff8d4d] text-white text-base lg:text-lg px-8 h-12 lg:h-14 shadow-xl">
              <MessageCircle className="mr-2 h-5 w-5" />
              Comenzar Ahora
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

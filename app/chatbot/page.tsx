'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Bot, Send, ArrowLeft, Sparkles, Calendar, MapPin, Users, DollarSign, Hotel, Plane, UtensilsCrossed, MapPinned } from 'lucide-react'
import Link from 'next/link'
import { ChatMessage, TravelData, generateItinerary } from '@/lib/chatbot-logic'

export default function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: '¡Hola! Soy tu asistente de viajes de Co\'ox Travel. Estoy aquí para ayudarte a planear el viaje perfecto. ¿A dónde te gustaría viajar?',
      timestamp: new Date()
    }
  ])
  
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [travelData, setTravelData] = useState<TravelData>({
    destination: '',
    guests: 0,
    days: 0,
    budget: 0,
    interests: [],
    dates: null
  })
  const [currentStep, setCurrentStep] = useState<'destination' | 'guests' | 'days' | 'budget' | 'interests' | 'dates' | 'complete'>('destination')
  const [showItinerary, setShowItinerary] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    addMessage('user', userMessage)
    setInput('')
    setIsTyping(true)

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    let response = ''
    let nextStep = currentStep

    switch (currentStep) {
      case 'destination':
        setTravelData(prev => ({ ...prev, destination: userMessage }))
        response = `¡Excelente elección! ${userMessage} es un destino maravilloso. ¿Cuántas personas viajarán? (Incluido tú)`
        nextStep = 'guests'
        break

      case 'guests':
        const guests = parseInt(userMessage)
        if (isNaN(guests) || guests < 1) {
          response = 'Por favor ingresa un número válido de personas (mínimo 1)'
        } else {
          setTravelData(prev => ({ ...prev, guests }))
          response = `Perfecto, ${guests} ${guests === 1 ? 'persona' : 'personas'}. ¿Cuántos días durará tu viaje?`
          nextStep = 'days'
        }
        break

      case 'days':
        const days = parseInt(userMessage)
        if (isNaN(days) || days < 1) {
          response = 'Por favor ingresa un número válido de días (mínimo 1)'
        } else {
          setTravelData(prev => ({ ...prev, days }))
          response = `Un viaje de ${days} ${days === 1 ? 'día' : 'días'} suena genial. ¿Cuál es tu presupuesto aproximado en MXN? (Por ejemplo: 10000)`
          nextStep = 'budget'
        }
        break

      case 'budget':
        const budget = parseInt(userMessage.replace(/[^0-9]/g, ''))
        if (isNaN(budget) || budget < 1000) {
          response = 'Por favor ingresa un presupuesto válido (mínimo $1,000 MXN)'
        } else {
          setTravelData(prev => ({ ...prev, budget }))
          response = `Entendido, presupuesto de $${budget.toLocaleString('es-MX')} MXN. ¿Qué te gustaría hacer en tu viaje? Puedes mencionar: playa, cultura, aventura, gastronomía, historia, naturaleza (Separa con comas si son varios)`
          nextStep = 'interests'
        }
        break

      case 'interests':
        const interests = userMessage.split(',').map(i => i.trim()).filter(i => i)
        setTravelData(prev => ({ ...prev, interests }))
        response = `Genial! Te interesan: ${interests.join(', ')}. ¿Cuándo planeas viajar? (Ejemplo: 15 de marzo al 20 de marzo, o simplemente "próximo mes")`
        nextStep = 'dates'
        break

      case 'dates':
        setTravelData(prev => ({ ...prev, dates: userMessage }))
        response = `Perfecto! Tengo toda la información necesaria. Estoy generando tu itinerario personalizado con hoteles, vuelos, restaurantes y tours...`
        nextStep = 'complete'
        
        // Wait a bit then show itinerary
        setTimeout(() => {
          addMessage('assistant', '¡Listo! He creado tu itinerario personalizado. Haz clic en "Ver Itinerario Completo" para ver todos los detalles y el presupuesto.')
          setShowItinerary(true)
        }, 2000)
        break

      default:
        response = 'Algo salió mal. Por favor recarga la página.'
    }

    setCurrentStep(nextStep)
    setIsTyping(false)
    
    if (response) {
      addMessage('assistant', response)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const itinerary = showItinerary ? generateItinerary(travelData) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9f8] via-[#fef5f7] to-[#f9feff]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#5c2a3a] via-[#8b3a5a] to-[#5c2a3a] backdrop-blur-sm border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
                <Link href="/">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff8d4d] to-[#f04883] flex items-center justify-center shadow-md">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">Asistente de Viajes IA</div>
                  <div className="text-white/70 text-xs">En línea</div>
                </div>
              </div>
            </div>

            {showItinerary && (
              <Button 
                onClick={() => {
                  const element = document.getElementById('itinerary-view')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gradient-to-r from-[#ff8d4d] to-[#f04883] hover:from-[#ffaa70] hover:to-[#ff6ba0] text-white"
              >
                Ver Itinerario Completo
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Chat Container */}
          <Card className="shadow-2xl border-2 border-gray-200 overflow-hidden">
            {/* Messages */}
            <div className="h-[500px] lg:h-[600px] overflow-y-auto p-6 space-y-4 bg-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1ba098] to-[#2d5d68] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-[#f04883] to-[#e02057] text-white rounded-tr-sm'
                        : 'bg-gray-100 text-gray-800 rounded-tl-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>

                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5c2a3a] to-[#8b3a5a] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      Tú
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1ba098] to-[#2d5d68] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu respuesta..."
                  disabled={isTyping || showItinerary}
                  className="flex-1 border-2 border-gray-300 focus:border-[#1ba098] focus:ring-[#1ba098]"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping || showItinerary}
                  className="bg-gradient-to-r from-[#1ba098] to-[#2d5d68] hover:from-[#1fbfb3] hover:to-[#35707f] text-white"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Itinerary View */}
          {showItinerary && itinerary && (
            <div id="itinerary-view" className="mt-8 space-y-6">
              {/* Summary Card */}
              <Card className="p-6 bg-gradient-to-br from-[#1ba098] to-[#2d5d68] text-white border-0 shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">Tu Itinerario Personalizado</h2>
                    <p className="text-white/90">Generado por IA especialmente para ti</p>
                  </div>
                  <Sparkles className="w-10 h-10 text-[#ff8d4d]" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <MapPin className="w-6 h-6 mb-2 text-[#ff8d4d]" />
                    <div className="text-sm text-white/80">Destino</div>
                    <div className="font-bold text-lg">{travelData.destination}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Users className="w-6 h-6 mb-2 text-[#ff8d4d]" />
                    <div className="text-sm text-white/80">Personas</div>
                    <div className="font-bold text-lg">{travelData.guests}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Calendar className="w-6 h-6 mb-2 text-[#ff8d4d]" />
                    <div className="text-sm text-white/80">Duración</div>
                    <div className="font-bold text-lg">{travelData.days} días</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <DollarSign className="w-6 h-6 mb-2 text-[#ff8d4d]" />
                    <div className="text-sm text-white/80">Presupuesto</div>
                    <div className="font-bold text-lg">${(travelData.budget || 0).toLocaleString('es-MX')}</div>
                  </div>
                </div>
              </Card>

              {/* Hotel Section */}
              <Card className="p-6 shadow-xl border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5c2a3a] to-[#8b3a5a] flex items-center justify-center">
                    <Hotel className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#5c2a3a]">Hotel Recomendado</h3>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-[#5c2a3a]">{itinerary.hotel.name}</h4>
                      <p className="text-sm text-gray-600">{itinerary.hotel.category}</p>
                      <p className="text-sm text-gray-500 mt-1">{itinerary.hotel.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#1ba098]">
                        ${itinerary.hotel.pricePerNight.toLocaleString('es-MX')}
                      </div>
                      <div className="text-xs text-gray-500">por noche</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {itinerary.hotel.amenities.map((amenity, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white rounded-full text-xs text-gray-700 border border-gray-200">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{travelData.days} noches × ${itinerary.hotel.pricePerNight.toLocaleString('es-MX')}</span>
                      <span className="font-bold text-[#5c2a3a]">${itinerary.hotel.total.toLocaleString('es-MX')} MXN</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Flight Section */}
              <Card className="p-6 shadow-xl border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1ba098] to-[#2d5d68] flex items-center justify-center">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#5c2a3a]">Vuelos</h3>
                </div>

                <div className="space-y-3">
                  {/* Outbound Flight */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Ida</div>
                        <div className="font-bold text-[#5c2a3a]">{itinerary.flights.outbound.airline}</div>
                        <div className="text-sm text-gray-600">{itinerary.flights.outbound.flightNumber}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#1ba098]">
                          ${itinerary.flights.outbound.price.toLocaleString('es-MX')}
                        </div>
                        <div className="text-xs text-gray-500">por persona</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <div className="font-bold text-gray-900">{itinerary.flights.outbound.departure}</div>
                        <div className="text-gray-500">{itinerary.flights.outbound.departureTime}</div>
                      </div>
                      <div className="flex-1 border-t-2 border-dashed border-gray-300" />
                      <Plane className="w-4 h-4 text-gray-400" />
                      <div className="flex-1 border-t-2 border-dashed border-gray-300" />
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{itinerary.flights.outbound.arrival}</div>
                        <div className="text-gray-500">{itinerary.flights.outbound.arrivalTime}</div>
                      </div>
                    </div>
                  </div>

                  {/* Return Flight */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Regreso</div>
                        <div className="font-bold text-[#5c2a3a]">{itinerary.flights.return.airline}</div>
                        <div className="text-sm text-gray-600">{itinerary.flights.return.flightNumber}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#1ba098]">
                          ${itinerary.flights.return.price.toLocaleString('es-MX')}
                        </div>
                        <div className="text-xs text-gray-500">por persona</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <div className="font-bold text-gray-900">{itinerary.flights.return.departure}</div>
                        <div className="text-gray-500">{itinerary.flights.return.departureTime}</div>
                      </div>
                      <div className="flex-1 border-t-2 border-dashed border-gray-300" />
                      <Plane className="w-4 h-4 text-gray-400 rotate-180" />
                      <div className="flex-1 border-t-2 border-dashed border-gray-300" />
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{itinerary.flights.return.arrival}</div>
                        <div className="text-gray-500">{itinerary.flights.return.arrivalTime}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{travelData.guests} personas × ${itinerary.flights.totalPerPerson.toLocaleString('es-MX')}</span>
                      <span className="font-bold text-[#5c2a3a]">${itinerary.flights.total.toLocaleString('es-MX')} MXN</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Restaurants Section */}
              <Card className="p-6 shadow-xl border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f04883] to-[#e02057] flex items-center justify-center">
                    <UtensilsCrossed className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#5c2a3a]">Restaurantes Recomendados</h3>
                </div>

                <div className="space-y-3">
                  {itinerary.restaurants.map((restaurant, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-bold text-[#5c2a3a]">{restaurant.name}</h4>
                          <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                          <p className="text-xs text-gray-500 mt-1">{restaurant.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="font-bold text-[#f04883]">
                            ${restaurant.avgPrice.toLocaleString('es-MX')}
                          </div>
                          <div className="text-xs text-gray-500">promedio</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Estimado para {travelData.days} días</span>
                      <span className="font-bold text-[#5c2a3a]">${itinerary.restaurantsTotal.toLocaleString('es-MX')} MXN</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Tours Section */}
              <Card className="p-6 shadow-xl border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff8d4d] to-[#ff6b35] flex items-center justify-center">
                    <MapPinned className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#5c2a3a]">Tours y Actividades</h3>
                </div>

                <div className="space-y-3">
                  {itinerary.tours.map((tour, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-bold text-[#5c2a3a]">{tour.name}</h4>
                          <p className="text-sm text-gray-600">{tour.duration}</p>
                          <p className="text-xs text-gray-500 mt-1">{tour.description}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {tour.includes.map((item, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-white rounded-full text-gray-600 border border-gray-200">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="font-bold text-[#ff8d4d]">
                            ${tour.price.toLocaleString('es-MX')}
                          </div>
                          <div className="text-xs text-gray-500">por persona</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{travelData.guests} personas</span>
                      <span className="font-bold text-[#5c2a3a]">${itinerary.toursTotal.toLocaleString('es-MX')} MXN</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Final Budget */}
              <Card className="p-6 bg-gradient-to-br from-[#5c2a3a] via-[#8b3a5a] to-[#d41f4f] text-white border-0 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Presupuesto Final</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-white/90">Hotel ({travelData.days} noches)</span>
                    <span className="font-semibold">${itinerary.hotel.total.toLocaleString('es-MX')}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-white/90">Vuelos ({travelData.guests} personas)</span>
                    <span className="font-semibold">${itinerary.flights.total.toLocaleString('es-MX')}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-white/90">Restaurantes (estimado)</span>
                    <span className="font-semibold">${itinerary.restaurantsTotal.toLocaleString('es-MX')}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-white/90">Tours y actividades</span>
                    <span className="font-semibold">${itinerary.toursTotal.toLocaleString('es-MX')}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xl lg:text-2xl font-bold pt-6 border-t-2 border-white/30">
                  <span>Total</span>
                  <span className="text-[#ff8d4d]">${itinerary.grandTotal.toLocaleString('es-MX')} MXN</span>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-white/80 text-sm mb-4">
                    Tu presupuesto original: ${travelData.budget.toLocaleString('es-MX')} MXN
                  </p>
                  {itinerary.grandTotal <= travelData.budget ? (
                    <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3">
                      <p className="text-sm text-white">
                        ✓ ¡Excelente! Tu itinerario está dentro del presupuesto. Te sobran ${(travelData.budget - itinerary.grandTotal).toLocaleString('es-MX')} MXN
                      </p>
                    </div>
                  ) : (
                    <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-3">
                      <p className="text-sm text-white">
                        El itinerario supera tu presupuesto por ${(itinerary.grandTotal - travelData.budget).toLocaleString('es-MX')} MXN. Podemos ajustarlo si lo deseas.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-[#ff8d4d] to-[#ff6b35] hover:from-[#ffaa70] hover:to-[#ff8d4d] text-white h-12 text-base font-semibold">
                    Reservar Ahora
                  </Button>
                  <Button variant="outline" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20 h-12 text-base font-semibold">
                    Ajustar Itinerario
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

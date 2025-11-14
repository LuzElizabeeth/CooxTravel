export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface TravelData {
  destination: string
  guests: number
  days: number
  budget: number
  interests: string[]
  dates: string | null
}

export interface Hotel {
  name: string
  category: string
  location: string
  pricePerNight: number
  amenities: string[]
  total: number
}

export interface Flight {
  airline: string
  flightNumber: string
  departure: string
  arrival: string
  departureTime: string
  arrivalTime: string
  price: number
}

export interface Flights {
  outbound: Flight
  return: Flight
  totalPerPerson: number
  total: number
}

export interface Restaurant {
  name: string
  cuisine: string
  description: string
  avgPrice: number
}

export interface Tour {
  name: string
  duration: string
  description: string
  includes: string[]
  price: number
}

export interface Itinerary {
  hotel: Hotel
  flights: Flights
  restaurants: Restaurant[]
  restaurantsTotal: number
  tours: Tour[]
  toursTotal: number
  grandTotal: number
}

export function generateItinerary(data: TravelData): Itinerary {
  const budgetPerDay = data.budget / data.days
  
  // Distribute budget more carefully: 30% hotel, 40% flights, 15% food, 15% tours
  const hotelPricePerNight = Math.floor(budgetPerDay * 0.30) // 30% of daily budget for hotel
  
  const hotel: Hotel = {
    name: `Hotel ${data.destination} ${budgetPerDay > 2000 ? 'Boutique' : 'Central'}`,
    category: budgetPerDay > 3000 ? '5 Estrellas' : budgetPerDay > 1500 ? '4 Estrellas' : '3 Estrellas',
    location: `Centro de ${data.destination}`,
    pricePerNight: hotelPricePerNight,
    amenities: budgetPerDay > 2000 
      ? ['WiFi gratis', 'Desayuno incluido', 'Alberca', 'Gimnasio', 'Spa', 'Estacionamiento']
      : ['WiFi gratis', 'Desayuno incluido', 'Recepción 24h', 'Aire acondicionado'],
    total: hotelPricePerNight * data.days
  }

  const totalFlightBudget = Math.floor(data.budget * 0.40)
  const flightPricePerPerson = Math.floor(totalFlightBudget / (data.guests * 2)) // divided by 2 for round trip
  const flights: Flights = {
    outbound: {
      airline: 'Aeroméxico',
      flightNumber: 'AM ' + Math.floor(Math.random() * 900 + 100),
      departure: 'CDMX',
      arrival: data.destination.substring(0, 3).toUpperCase(),
      departureTime: '08:30',
      arrivalTime: '11:45',
      price: flightPricePerPerson
    },
    return: {
      airline: 'Volaris',
      flightNumber: 'Y4 ' + Math.floor(Math.random() * 900 + 100),
      departure: data.destination.substring(0, 3).toUpperCase(),
      arrival: 'CDMX',
      departureTime: '16:20',
      arrivalTime: '19:35',
      price: flightPricePerPerson
    },
    totalPerPerson: flightPricePerPerson * 2,
    total: flightPricePerPerson * 2 * data.guests
  }

  const totalRestaurantBudget = Math.floor(data.budget * 0.15)
  const restaurantBudgetPerDay = Math.floor(totalRestaurantBudget / data.days)
  const restaurants: Restaurant[] = [
    {
      name: `La Tradición de ${data.destination}`,
      cuisine: 'Cocina Local',
      description: 'Auténtica comida regional en ambiente tradicional',
      avgPrice: Math.floor(restaurantBudgetPerDay * 0.3)
    },
    {
      name: 'El Sabor del Mar',
      cuisine: 'Mariscos y Pescados',
      description: 'Mariscos frescos con vista panorámica',
      avgPrice: Math.floor(restaurantBudgetPerDay * 0.35)
    },
    {
      name: 'Fusión Moderna',
      cuisine: 'Fusión Contemporánea',
      description: 'Experiencia gastronómica de alto nivel',
      avgPrice: Math.floor(restaurantBudgetPerDay * 0.35)
    }
  ]

  const restaurantsTotal = totalRestaurantBudget

  const totalToursBudget = Math.floor(data.budget * 0.15)
  const tours: Tour[] = []
  
  if (data.interests.some(i => i.toLowerCase().includes('cultura') || i.toLowerCase().includes('historia'))) {
    tours.push({
      name: `Tour Histórico por ${data.destination}`,
      duration: 'Día completo (8 horas)',
      description: 'Visita guiada a los sitios históricos más emblemáticos',
      includes: ['Guía certificado', 'Transporte', 'Entradas', 'Comida'],
      price: Math.floor(totalToursBudget * 0.45 / data.guests)
    })
  }

  if (data.interests.some(i => i.toLowerCase().includes('aventura') || i.toLowerCase().includes('naturaleza'))) {
    tours.push({
      name: 'Aventura Extrema',
      duration: 'Medio día (4 horas)',
      description: 'Actividades de aventura en entorno natural',
      includes: ['Equipo incluido', 'Instructor', 'Seguro', 'Refrigerios'],
      price: Math.floor(totalToursBudget * 0.30 / data.guests)
    })
  }

  if (data.interests.some(i => i.toLowerCase().includes('gastronomía') || i.toLowerCase().includes('comida'))) {
    tours.push({
      name: 'Tour Gastronómico',
      duration: '4 horas',
      description: 'Degustación de platillos locales y visita a mercados',
      includes: ['Guía', 'Degustaciones', 'Bebidas', 'Recetario'],
      price: Math.floor(totalToursBudget * 0.25 / data.guests)
    })
  }

  // If no specific interests or need more tours, add generic one
  if (tours.length < 2) {
    tours.push({
      name: 'City Tour Completo',
      duration: '5 horas',
      description: 'Recorrido por los puntos más importantes de la ciudad',
      includes: ['Transporte', 'Guía', 'Entradas', 'Agua embotellada'],
      price: Math.floor(totalToursBudget * 0.40 / data.guests)
    })
  }

  const toursTotal = tours.reduce((sum, tour) => sum + (tour.price * data.guests), 0)

  // Calculate grand total
  const grandTotal = hotel.total + flights.total + restaurantsTotal + toursTotal

  return {
    hotel,
    flights,
    restaurants,
    restaurantsTotal,
    tours,
    toursTotal,
    grandTotal
  }
}

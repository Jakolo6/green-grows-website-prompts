import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, FlaskConical, Utensils, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const plans = [
    {
      title: "Basis Plan",
      description: "Perfekt für den Einstieg in eine gesunde Ernährung",
      features: ["Personalisierte Ernährungspläne", "Wöchentliche Rezepte", "Grundlegende Nährstoffanalyse"],
      price: "29€/Monat",
      icon: <Sprout className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Premium Plan",
      description: "Umfassende Betreuung für optimale Gesundheit",
      features: ["Alles aus Basis Plan", "1-zu-1 Ernährungsberatung", "Detaillierte Gesundheitsanalyse", "24/7 Support"],
      price: "69€/Monat",
      icon: <Leaf className="w-8 h-8 text-orange-600" />,
      popular: true
    },
    {
      title: "Familie Plan",
      description: "Gesunde Ernährung für die ganze Familie",
      features: ["Bis zu 4 Familienmitglieder", "Kinderfreundliche Rezepte", "Familien-Ernährungscoaching"],
      price: "89€/Monat",
      icon: <Users className="w-8 h-8 text-orange-600" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Dank der personalisierten Pläne habe ich endlich eine gesunde Routine entwickelt. Ich fühle mich energiegeladener denn je!",
      rating: 5
    },
    {
      name: "Michael K.",
      text: "Die wissenschaftlich fundierte Herangehensweise hat mich überzeugt. Meine Blutwerte haben sich deutlich verbessert.",
      rating: 5
    },
    {
      name: "Anna L.",
      text: "Als vielbeschäftigte Mutter war es perfekt - einfache, gesunde Rezepte für die ganze Familie.",
      rating: 5
    }
  ];

  const values = [
    {
      icon: <Leaf className="w-12 h-12 text-orange-600" />,
      title: "Nachhaltigkeit",
      description: "Wir setzen auf lokale, saisonale Zutaten für eine bessere Zukunft"
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-orange-600" />,
      title: "Wissenschaftlich fundiert",
      description: "Alle Pläne basieren auf aktuellen Ernährungswissenschaften"
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-600" />,
      title: "Personalisiert",
      description: "Jeder Plan wird individuell an Ihre Bedürfnisse angepasst"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                VitalPlan
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">Über uns</a>
              <a href="#plans" className="text-gray-700 hover:text-orange-600 transition-colors">Pläne</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors">Bewertungen</a>
              <Link to="/create-plan">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                  Plan erstellen
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                  Nähre deinen Körper.
                </span>
                <br />
                <span className="text-gray-800">Nähre den Planeten.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Entdecke eine neue Art der Ernährung mit personalisierten Plänen, die auf nachhaltigen, 
                wissenschaftlich fundierten Prinzipien basieren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/create-plan">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Ernährungsplan erstellen
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full text-lg transition-all duration-300">
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                alt="Frische Lebensmittel" 
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,50 Q50,20 80,50 Q50,80 20,50" fill="currentColor" className="text-orange-300"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">Unsere Philosophie</h3>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Wir glauben daran, dass gesunde Ernährung der Schlüssel zu einem erfüllten Leben ist. 
              Unsere Mission ist es, jedem Menschen zu helfen, sein volles Potenzial durch bewusste, 
              nachhaltige Ernährung zu entfalten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-orange-100 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-2xl text-orange-800">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Wähle deinen <span className="text-orange-600">perfekten Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jeder Plan ist individuell auf deine Bedürfnisse, Ziele und Vorlieben abgestimmt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "29€",
                period: "pro Monat",
                description: "Perfekt für Einsteiger",
                features: [
                  "Personalisierter Ernährungsplan",
                  "Wöchentliche Rezepte",
                  "Grundlegende Nährstoffanalyse",
                  "Email-Support"
                ],
                popular: false
              },
              {
                name: "Pro",
                price: "49€",
                period: "pro Monat",
                description: "Für ambitionierte Ziele",
                features: [
                  "Erweiterte Personalisierung",
                  "Täglich neue Rezepte",
                  "Detaillierte Nährstoffanalyse",
                  "Einkaufslisten",
                  "Priority Support",
                  "Fitness-Integration"
                ],
                popular: true
              },
              {
                name: "Premium",
                price: "79€",
                period: "pro Monat",
                description: "Komplette Transformation",
                features: [
                  "Alles aus Pro",
                  "1:1 Ernährungsberatung",
                  "Wöchentliche Check-ins",
                  "Supplement-Empfehlungen",
                  "Meal-Prep Guides",
                  "24/7 Premium Support"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-2xl scale-105' 
                  : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-white text-orange-600 px-4 py-1 text-sm font-semibold">
                      Beliebtester Plan
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-orange-600'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-orange-100' : 'text-gray-500'}`}>
                      /{plan.period}
                    </span>
                  </div>
                  <p className={`${plan.popular ? 'text-orange-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-3 ${plan.popular ? 'text-orange-200' : 'text-orange-500'}`} />
                      <span className={`${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="/create-plan">
                  <Button 
                    className={`w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-white text-orange-600 hover:bg-orange-50' 
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    Plan wählen
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">Was unsere Kunden sagen</h3>
            <p className="text-xl text-orange-700">
              Echte Geschichten von Menschen, die ihr Leben verändert haben
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
                      <CardContent className="p-8 text-center">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-orange-700 mb-6 italic">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-orange-800 font-bold text-xl">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <cite className="text-orange-800 font-semibold">
                          {testimonial.name}
                        </cite>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-orange-200 text-orange-600" />
              <CarouselNext className="border-orange-200 text-orange-600" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Bereit für deine Transformation?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Starte heute mit deinem personalisierten Ernährungsplan und erlebe, 
              wie sich dein Leben verändert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create-plan">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Jetzt kostenlosen Plan erstellen
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg transition-all duration-300">
                Kostenloses Beratungsgespräch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-orange-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-8 h-8 text-orange-400" />
                <h4 className="text-2xl font-bold">VitalGreen</h4>
              </div>
              <p className="text-orange-200">
                Ihre Gesundheit, unsere Leidenschaft. 
                Nachhaltige Ernährung für eine bessere Zukunft.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-orange-300">Links</h5>
              <ul className="space-y-2 text-orange-200">
                <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pläne</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-orange-300">Legal</h5>
              <ul className="space-y-2 text-orange-200">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-orange-300">Folgen Sie uns</h5>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
                <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-orange-800 mt-12 pt-8 text-center text-orange-300">
            <p>&copy; 2024 VitalGreen. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper component for Sprout icon (using available icons)
const Sprout = ({ className }: { className: string }) => (
  <div className={className}>
    <Leaf className="w-full h-full" />
  </div>
);

export default Index;

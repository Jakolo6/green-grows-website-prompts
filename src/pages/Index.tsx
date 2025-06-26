
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, FlaskConical, Utensils, Users, Star } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-orange-600" />
            <h1 className="text-2xl font-bold text-orange-800">VitalGreen</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#philosophy" className="text-orange-700 hover:text-orange-900 transition-colors">Philosophie</a>
            <a href="#plans" className="text-orange-700 hover:text-orange-900 transition-colors">Pläne</a>
            <a href="#testimonials" className="text-orange-700 hover:text-orange-900 transition-colors">Kundenstimmen</a>
            <a href="#contact" className="text-orange-700 hover:text-orange-900 transition-colors">Kontakt</a>
          </nav>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            Jetzt starten
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-orange-800 mb-6 leading-tight">
              Nähre deinen Körper.
              <br />
              <span className="text-orange-600">Nähre den Planeten.</span>
            </h2>
            <p className="text-xl md:text-2xl text-orange-700 mb-8 max-w-2xl mx-auto">
              Entdecke personalisierte Ernährungspläne, die nicht nur deine Gesundheit fördern, 
              sondern auch unsere Umwelt schützen.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                Ernährungsplan erstellen
              </Button>
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-300">
          <div className="w-16 h-16 bg-orange-200 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-700">
          <div className="w-12 h-12 bg-orange-300 rounded-full opacity-40"></div>
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">Unsere Pläne</h3>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Wählen Sie den Plan, der am besten zu Ihrem Lebensstil passt. 
              Jeder Plan wird individuell an Ihre Bedürfnisse angepasst.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-orange-500 border-2 scale-105' : 'border-orange-200'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white">
                    Beliebtester Plan
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-orange-100 rounded-full w-fit">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl text-orange-800">{plan.title}</CardTitle>
                  <CardDescription className="text-orange-600">{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-orange-800 mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-orange-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Plan wählen
                  </Button>
                </CardContent>
              </Card>
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bereit für Ihre Transformation?
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute Ihre Reise zu einem gesünderen, nachhaltigeren Leben. 
            Unser Team von Ernährungsexperten begleitet Sie auf jedem Schritt.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold">
            Kostenloses Beratungsgespräch buchen
          </Button>
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

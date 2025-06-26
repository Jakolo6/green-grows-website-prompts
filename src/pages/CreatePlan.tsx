import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, CheckCircle, User, Target, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const CreatePlan = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    
    // Goals
    goal: '',
    targetWeight: '',
    activityLevel: '',
    
    // Preferences
    dietType: '',
    allergies: [],
    dislikes: '',
    mealsPerDay: '',
    
    // Lifestyle
    cookingTime: '',
    budget: '',
    specialNeeds: ''
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Plan erstellt:', formData);
    // Hier würde die Logik für die Planerstellung stehen
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const allergyOptions = [
    'Gluten', 'Laktose', 'Nüsse', 'Soja', 'Eier', 'Fisch', 'Meeresfrüchte', 'Sesam'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-orange-600 hover:text-orange-700">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück zur Startseite
            </Link>
            <div className="text-sm text-gray-600">
              Schritt {currentStep} von {totalSteps}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                step <= currentStep 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
              </div>
              {step < totalSteps && (
                <div className={`w-20 h-1 mx-4 ${
                  step < currentStep ? 'bg-orange-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {currentStep === 1 && <User className="w-12 h-12 text-orange-500" />}
              {currentStep === 2 && <Target className="w-12 h-12 text-orange-500" />}
              {currentStep === 3 && <Utensils className="w-12 h-12 text-orange-500" />}
              {currentStep === 4 && <CheckCircle className="w-12 h-12 text-orange-500" />}
            </div>
            <CardTitle className="text-2xl text-gray-800">
              {currentStep === 1 && "Persönliche Informationen"}
              {currentStep === 2 && "Deine Ziele"}
              {currentStep === 3 && "Ernährungsvorlieben"}
              {currentStep === 4 && "Lebensstil & Bestätigung"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Erzähle uns etwas über dich"}
              {currentStep === 2 && "Was möchtest du erreichen?"}
              {currentStep === 3 && "Welche Ernährung passt zu dir?"}
              {currentStep === 4 && "Letzte Details für deinen perfekten Plan"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    placeholder="Dein Name"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Alter</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => updateFormData('age', e.target.value)}
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <Label>Geschlecht</Label>
                    <RadioGroup 
                      value={formData.gender} 
                      onValueChange={(value) => updateFormData('gender', value)}
                      className="flex gap-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Männlich</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Weiblich</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="height">Größe (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={formData.height}
                      onChange={(e) => updateFormData('height', e.target.value)}
                      placeholder="170"
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Gewicht (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={formData.weight}
                      onChange={(e) => updateFormData('weight', e.target.value)}
                      placeholder="70"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Goals */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label>Hauptziel</Label>
                  <RadioGroup 
                    value={formData.goal} 
                    onValueChange={(value) => updateFormData('goal', value)}
                    className="mt-2 space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lose-weight" id="lose-weight" />
                      <Label htmlFor="lose-weight">Gewicht verlieren</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gain-weight" id="gain-weight" />
                      <Label htmlFor="gain-weight">Gewicht zunehmen</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maintain" id="maintain" />
                      <Label htmlFor="maintain">Gewicht halten</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="muscle" id="muscle" />
                      <Label htmlFor="muscle">Muskeln aufbauen</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="targetWeight">Zielgewicht (kg)</Label>
                  <Input
                    id="targetWeight"
                    type="number"
                    value={formData.targetWeight}
                    onChange={(e) => updateFormData('targetWeight', e.target.value)}
                    placeholder="65"
                  />
                </div>

                <div>
                  <Label>Aktivitätslevel</Label>
                  <Select value={formData.activityLevel} onValueChange={(value) => updateFormData('activityLevel', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wähle dein Aktivitätslevel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Wenig aktiv (Bürojob, kein Sport)</SelectItem>
                      <SelectItem value="light">Leicht aktiv (1-3x Sport/Woche)</SelectItem>
                      <SelectItem value="moderate">Mäßig aktiv (3-5x Sport/Woche)</SelectItem>
                      <SelectItem value="very">Sehr aktiv (6-7x Sport/Woche)</SelectItem>
                      <SelectItem value="extreme">Extrem aktiv (2x täglich Sport)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <Label>Ernährungstyp</Label>
                  <RadioGroup 
                    value={formData.dietType} 
                    onValueChange={(value) => updateFormData('dietType', value)}
                    className="mt-2 space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="omnivore" id="omnivore" />
                      <Label htmlFor="omnivore">Alles (Omnivore)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vegetarian" id="vegetarian" />
                      <Label htmlFor="vegetarian">Vegetarisch</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vegan" id="vegan" />
                      <Label htmlFor="vegan">Vegan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="keto" id="keto" />
                      <Label htmlFor="keto">Ketogen</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Allergien & Unverträglichkeiten</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {allergyOptions.map((allergy) => (
                      <div key={allergy} className="flex items-center space-x-2">
                        <Checkbox
                          id={allergy}
                          checked={formData.allergies.includes(allergy)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData('allergies', [...formData.allergies, allergy]);
                            } else {
                              updateFormData('allergies', formData.allergies.filter(a => a !== allergy));
                            }
                          }}
                        />
                        <Label htmlFor={allergy}>{allergy}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="dislikes">Lebensmittel die du nicht magst</Label>
                  <Textarea
                    id="dislikes"
                    value={formData.dislikes}
                    onChange={(e) => updateFormData('dislikes', e.target.value)}
                    placeholder="z.B. Brokkoli, Pilze, Fisch..."
                  />
                </div>

                <div>
                  <Label>Mahlzeiten pro Tag</Label>
                  <Select value={formData.mealsPerDay} onValueChange={(value) => updateFormData('mealsPerDay', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Anzahl Mahlzeiten" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 Mahlzeiten</SelectItem>
                      <SelectItem value="4">4 Mahlzeiten</SelectItem>
                      <SelectItem value="5">5 Mahlzeiten</SelectItem>
                      <SelectItem value="6">6 Mahlzeiten</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 4: Lifestyle */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <Label>Zeit für Kochen</Label>
                  <Select value={formData.cookingTime} onValueChange={(value) => updateFormData('cookingTime', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wie viel Zeit hast du zum Kochen?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Minimal (unter 15 Min)</SelectItem>
                      <SelectItem value="moderate">Moderat (15-30 Min)</SelectItem>
                      <SelectItem value="extended">Ausgedehnt (30-60 Min)</SelectItem>
                      <SelectItem value="unlimited">Ich liebe es zu kochen!</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Budget pro Woche</Label>
                  <Select value={formData.budget} onValueChange={(value) => updateFormData('budget', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Dein wöchentliches Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Sparsam (unter 50€)</SelectItem>
                      <SelectItem value="medium">Mittel (50-100€)</SelectItem>
                      <SelectItem value="high">Komfortabel (100-150€)</SelectItem>
                      <SelectItem value="premium">Premium (über 150€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="specialNeeds">Besondere Bedürfnisse oder Notizen</Label>
                  <Textarea
                    id="specialNeeds"
                    value={formData.specialNeeds}
                    onChange={(e) => updateFormData('specialNeeds', e.target.value)}
                    placeholder="z.B. Diabetes, Schwangerschaft, Sportereignisse..."
                  />
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Zusammenfassung</h4>
                  <div className="text-sm text-orange-700 space-y-1">
                    <p><strong>Name:</strong> {formData.name || 'Nicht angegeben'}</p>
                    <p><strong>Ziel:</strong> {formData.goal || 'Nicht angegeben'}</p>
                    <p><strong>Ernährung:</strong> {formData.dietType || 'Nicht angegeben'}</p>
                    <p><strong>Mahlzeiten:</strong> {formData.mealsPerDay || 'Nicht angegeben'} pro Tag</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="flex items-center bg-pink-500 hover:bg-pink-600"
                >
                  Weiter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="flex items-center bg-pink-500 hover:bg-pink-600"
                >
                  Plan erstellen
                  <CheckCircle className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatePlan;

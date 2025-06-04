# Plan: Classic Home → Offline Business Fundament

## 🗂️ Gefaseerd Implementatieplan

### Fase 1: Voorbereiding & Inventarisatie
- Analyseer de huidige componenten en content op de classic home pagina.
- Maak een backup van de bestaande content en arrays.
- Zet een testbranch op voor de transformatie.

### Fase 2: Hero Section & Navigatie
- Pas de HeroSection component aan met de nieuwe Nederlandse teksten, CTA's en terminal demo.
- Update de navigatie in de Header (app/page.tsx) naar ./fundament en pas breadcrumbs aan.
- Controleer of de retro-future styling en terminal aesthetic behouden blijven.

### Fase 3: Features → Fundament Pijlers
- Vervang de features array in FeaturesSection door de vier nieuwe fundament pijlers.
- Voeg de Nederlandse beschrijvingen toe.
- Test of iconen, kleuren en animaties correct blijven werken.

### Fase 4: Services → Fundament Diensten
- Pas de services array en beschrijvingen aan in ServicesSection.
- Zorg voor Nederlandstalige, fundament-georiënteerde teksten.
- Controleer links naar portfolio/voorbeelden.

### Fase 5: Projects → Succesverhalen
- Vervang de projecten/case studies in ProjectsSection door de drie Nederlandse cases.
- Update progress bars en context naar fundament resultaten.
- Voeg quotes toe.

### Fase 6: Terminal Demo & Contact
- Vervang het terminalLines script in TerminalDemo door het nieuwe Nederlandse diagnose script.
- Pas ContactSection aan: vertaal headings, labels en CTA's naar het Nederlands.

### Fase 7: Cross-page Integratie
- Voeg de extra CTA toe na de contactsectie op de fundamentpagina (doorlink naar /matrix of /fusion).
- Voeg waarschuwingen en teruglink-buttons toe op de matrix/fusion pagina's.

### Fase 8: Review & Testen
- Test alle componenten op correcte weergave, werking en styling.
- Controleer of alle teksten, knoppen en navigatie in het Nederlands zijn.
- Laat een collega of tester de nieuwe flow doorlopen.

### Fase 9: Livegang
- Merge de testbranch naar main.
- Monitor de eerste gebruikersfeedback en los eventuele issues snel op.

## 🎯 Strategische Focus
De huidige classic home (/) moet transformeren van "generieke AI tech" naar **"Elmer's Offline Foundation"** - het stabiele fundament waarop alle AI-acceleratie rust.

## 📝 Nederlandse Content Aanpassingen

### Header & Navigation
**Huidig:** AI-LINER (generiek)  
**Nieuw:** AI-LINER **FUNDAMENT** 
- Tagline: "Solide fundamenten voor AI-transformatie"
- Breadcrumb stijl: `./fundament` i.p.v. `./home`

### Hero Section Overhaul
**Huidig:** "AI-LINER ASCII TECH - Building AI solutions with retro-future style"

**Nieuw:**
```
AI-LINER FUNDAMENT
SOLIDE • BETROUWBAAR • ESSENTIEEL

"Voordat je accelereert, heb je een fundament nodig dat houdt"
```

**Terminal Demo Aanpassing:**
```
> Initialiseren FUNDAMENT protocol...
> Scannen bedrijfsinfrastructuur...
> Analyseren merk geloofwaardigheid...
> Controleren marktpositie...
> Status: FUNDAMENT KLAAR voor AI-acceleratie
> Volgende stap: ./verbinden_met_acceleratie
```

### Features Section → Fundament Pijlers
**Oude features:** Neural Networks, Clean Code, Secure Systems, Fast Deployment

**Nieuwe Fundament Pijlers:**
1. **Merkidentiteit** 📱
   - Logo's die vertrouwen wekken
   - Huisstijlen die professioneel ogen
   - Eerste indrukken die beklijven

2. **Digitale Aanwezigheid** 🌐
   - Websites die converteren 
   - Content die verkoopt
   - SEO die gevonden wordt

3. **Marketing Fundament** 📢
   - Catalogi die overtuigen
   - Brochures die boeien
   - Beursstands die opvallen

4. **Bedrijfsprocessen** ⚙️
   - Workflows die werken
   - Systemen die schalen
   - Processen die blijven

### Services Section → Fundament Diensten
**Huidige services:** AI Development, Data Processing, Analytics, System Integration

**Nieuwe Fundament Diensten:**
1. **Merk & Identiteit Ontwerp**
   - Logo ontwerp en huisstijl ontwikkeling
   - Merk positionering en messaging
   - Visuele identiteit systemen

2. **Website & Digitale Aanwezigheid**
   - Professionele websites die converteren
   - SEO-geoptimaliseerde content
   - Social media setup en strategie

3. **Marketing Materialen**
   - Brochures, catalogi en presentaties
   - Beursmaterialen en displays
   - Print en digitale marketing assets

4. **Bedrijfsproces Ontwerp**
   - Workflow optimalisatie
   - Documentatie en handleidingen
   - Team training en implementatie

### Projects Section → Fundament Succesverhalen
**Case studies die het offline fundament benadrukken:**

1. **Lokale Dakdekker - Zwolle**
   - Fundament: Professionele website + branding
   - Resultaat: 300% meer leads binnen 3 maanden
   - Quote: "Klanten nemen me nu serieus voordat ik ook maar iets zeg"

2. **Verfenfabrikant - Apeldoorn**
   - Fundament: Internationale website + productcatalogus
   - Resultaat: Orders uit 12 nieuwe landen
   - Quote: "Onze online uitstraling opende deuren die jarenlang dicht waren"

3. **Makelaar - Utrecht**
   - Fundament: Premium branding + marketing materialen
   - Resultaat: 40% hogere commissies door premium positionering
   - Quote: "Ik word nu benaderd door high-end klanten"

### Contact Section → Fundament Consultatie
**Aanpassing naar fundament-focus:**
- "Plan Fundament Assessment"
- "Krijg je Bedrijfs Fundament Score"
- "Begin vandaag met je Fundament"

### Terminal Demo → Fundament Checker
**Nieuwe interactieve terminal:**
```
> Uitvoeren Fundament Diagnose...
> Controleren merk consistentie... ❌ INCONSISTENT
> Analyseren website prestaties... ⚠️ VERBETERING NODIG  
> Evalueren marketing materialen... ❌ VEROUDERD
> Beoordelen klantjourney... ⚠️ GEFRAGMENTEERD
> 
> FUNDAMENT SCORE: 3/10
> AANBEVELING: Start met merkidentiteit overhaul
> GESCHATTE FUNDAMENT TIJD: 2-4 weken
> 
> Type './krijg_fundament_offerte' om te beginnen
```

## 🔗 Implementatie Instructies voor AI-Developer

### Component Aanpassingen Prioriteit

**1. HeroSection Component (`components/hero-section.tsx`)**
```
Zoek naar: "AI-LINER ASCII TECH"
Vervang met: "AI-LINER FUNDAMENT"

Zoek naar: "Building AI solutions with retro-future style"  
Vervang met: "Solide fundamenten voor AI-transformatie"

Terminal text array wijzigen naar Nederlandse fundament teksten
```

**2. FeaturesSection Component (`components/features-section.tsx`)**
```
Features array vervangen:
- titel: "Neural Networks" → "Merkidentiteit"
- titel: "Clean Code" → "Digitale Aanwezigheid"  
- titel: "Secure Systems" → "Marketing Fundament"
- titel: "Fast Deployment" → "Bedrijfsprocessen"

Beschrijvingen vertalen naar Nederlandse fundament-focus
```

**3. ServicesSection Component (`components/services-section.tsx`)**
```
Services array aanpassen:
- "AI Development" → "Merk & Identiteit Ontwerp"
- "Data Processing" → "Website & Digitale Aanwezigheid"
- "Analytics" → "Marketing Materialen"  
- "System Integration" → "Bedrijfsproces Ontwerp"

Nederlandse beschrijvingen toevoegen per service
```

**4. ProjectsSection Component (`components/projects-section.tsx`)**
```
Projects array vervangen met Nederlandse case studies:
- Dakdekker Zwolle project
- Verfenfabrikant Apeldoorn project
- Makelaar Utrecht project

Progress percentages behouden, maar context wijzigen naar fundament resultaten
```

**5. TerminalDemo Component (`components/terminal-demo.tsx`)**
```
terminalLines array volledig vervangen met Nederlandse fundament diagnose
Tijdinterval behouden (1000ms)
Cursor animatie behouden
```

**6. ContactSection Component (`components/contact-section.tsx`)**
```
Headings wijzigen:
- "Send us a message" → "Stuur ons een bericht"
- Form labels naar Nederlands
- CTA button: "./send_message" → "./verstuur_bericht"
```

### Navigatie Aanpassingen

**Header Component (`app/page.tsx`)**
```
Navigation links:
- "./home" → "./fundament"
- Breadcrumb styling behouden
- Terminal aesthetic consistent houden
```

### CSS/Styling Behouden
```
Alle huidige styling en animations behouden
Retro-future kleuren blijven hetzelfde
Font-mono en terminal aesthetic intact laten
Hover effects en transitions behouden
```

### Cross-Reality Integratie

**Fundament Page (classic home):**
```
CTA toevoegen na contact section:
"Je fundament is solide. Klaar voor acceleratie?"
Button: "./ga_naar_acceleratie" → linkt naar /matrix of /fusion
```

**Matrix/Fusion Pages:**
```
Waarschuwing toevoegen bovenaan:
"Fundament niet solide genoeg? Begin hier eerst."
Button: "./bouw_eerst_fundament" → linkt terug naar /
```

## 📊 Nieuwe Content Teksten

### Hero Section Volledige Tekst
```
Titel: "AI-LINER FUNDAMENT"
Subtitel: "SOLIDE • BETROUWBAAR • ESSENTIEEL"
Beschrijving: "Voordat je accelereert, heb je een fundament nodig dat houdt"

CTA buttons:
- Primair: "./start_fundament_check"
- Secundair: "./bekijk_portfolio"
```

### Features Section Nederlandse Teksten
```
1. Merkidentiteit:
   "Logo's die vertrouwen wekken, huisstijlen die professioneel ogen, eerste indrukken die beklijven."

2. Digitale Aanwezigheid:
   "Websites die converteren, content die verkoopt, SEO die gevonden wordt."

3. Marketing Fundament:
   "Catalogi die overtuigen, brochures die boeien, beursstands die opvallen."

4. Bedrijfsprocessen:
   "Workflows die werken, systemen die schalen, processen die blijven."
```

### Terminal Diagnose Volledige Script
```
Regel 1: "> Uitvoeren Fundament Diagnose..."
Regel 2: "> Controleren merk consistentie... ❌ INCONSISTENT"
Regel 3: "> Analyseren website prestaties... ⚠️ VERBETERING NODIG"
Regel 4: "> Evalueren marketing materialen... ❌ VEROUDERD"
Regel 5: "> Beoordelen klantjourney... ⚠️ GEFRAGMENTEERD"
Regel 6: "> FUNDAMENT SCORE: 3/10"
Regel 7: "> AANBEVELING: Start met merkidentiteit overhaul"
Regel 8: "> Type './krijg_fundament_offerte' om te beginnen"
```

## 🚀 Implementatie Volgorde

**Stap 1: Hero Section (30 min)**
- Titel en beschrijving wijzigen
- CTA buttons aanpassen
- Terminal intro tekst updaten

**Stap 2: Features naar Pijlers (45 min)**
- Array data vervangen
- Nederlandse beschrijvingen
- Icons en kleuren behouden

**Stap 3: Services naar Fundament (60 min)**
- Service titels en beschrijvingen
- Links naar portfolio voorbeelden
- Hover effects behouden

**Stap 4: Terminal Demo (45 min)**
- Volledig nieuwe script
- Timing en animaties behouden
- Nederlandse diagnose output

**Stap 5: Projects naar Cases (30 min)**
- Nederlandse case studies
- Lokale bedrijven focus
- Progress bars en styling behouden

**Total tijd: ~3.5 uur voor complete transformatie**
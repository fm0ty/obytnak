/* ==========================================================
   Jednoduchá lokalizace (CS výchozí, EN/DE/PL) pro klíčové UI prvky.
   Texty se hledají podle atributu data-i18n="klic" (textContent)
   nebo data-i18n-attr="atribut:klic" (hodnota atributu, např. placeholder).
   Volba jazyka se ukládá do localStorage a je sdílená napříč stránkami.
   ========================================================== */

const I18N_DICT = {
  "nav.auto": { cs: "Obytné auto", en: "The camper", de: "Das Wohnmobil", pl: "Kamper" },
  "nav.gallery": { cs: "Fotogalerie", en: "Gallery", de: "Galerie", pl: "Galeria" },
  "nav.pricing": { cs: "Ceník", en: "Prices", de: "Preise", pl: "Cennik" },
  "nav.blog": { cs: "Blog", en: "Blog", de: "Blog", pl: "Blog" },
  "nav.reservation": { cs: "Rezervace", en: "Booking", de: "Buchung", pl: "Rezerwacja" },
  "nav.contact": { cs: "Kontakt", en: "Contact", de: "Kontakt", pl: "Kontakt" },

  "logo.tagline": { cs: "Obytňák na prázdniny", en: "Camper for your holiday", de: "Wohnmobil für den Urlaub", pl: "Kamper na wakacje" },

  "hero.eyebrow": { cs: "Pronájem obytného vozu", en: "Camper van rental", de: "Wohnmobilvermietung", pl: "Wynajem kampera" },
  "hero.title": { cs: "Objevte svobodu na čtyřech kolech", en: "Discover freedom on four wheels", de: "Entdecken Sie die Freiheit auf vier Rädern", pl: "Odkryj wolność na czterech kółkach" },
  "hero.lead": { cs: "Alkovna Carado A 464 pro až 6 osob. Nasedněte, vyražte a spěte tam, kde se vám nejvíc líbí. O zbytek se postaráme.", en: "Carado A 464 alcove camper for up to 6 people. Hop in, hit the road and sleep wherever you like. We take care of the rest.", de: "Alkoven-Wohnmobil Carado A 464 für bis zu 6 Personen. Einsteigen, losfahren und übernachten, wo es Ihnen gefällt. Um den Rest kümmern wir uns.", pl: "Kamper alkowowy Carado A 464 dla maks. 6 osób. Wsiądź, ruszaj w trasę i śpij tam, gdzie Ci się podoba. O resztę zadbamy my." },
  "hero.cta.book": { cs: "Rezervovat termín", en: "Book a date", de: "Termin buchen", pl: "Zarezerwuj termin" },
  "hero.cta.view": { cs: "Prohlédnout vůz", en: "View the vehicle", de: "Fahrzeug ansehen", pl: "Zobacz pojazd" },
  "hero.badge.seats": { cs: "6 míst k spaní i jízdě", en: "6 seats & sleeping places", de: "6 Sitz- und Schlafplätze", pl: "6 miejsc do spania i jazdy" },
  "hero.badge.license": { cs: "Řidičák skupiny B", en: "Category B licence", de: "Führerschein Klasse B", pl: "Prawo jazdy kat. B" },
  "hero.badge.price": { cs: "Od <b>3 090 Kč</b> / den", en: "From <b>3,090 CZK</b> / day", de: "Ab <b>3.090 CZK</b> / Tag", pl: "Od <b>3090 CZK</b> / dzień" },

  "why.eyebrow": { cs: "Proč s námi", en: "Why us", de: "Warum wir", pl: "Dlaczego my" },
  "why.title": { cs: "Cestování bez starostí", en: "Travel without worries", de: "Reisen ohne Sorgen", pl: "Podróżowanie bez zmartwień" },
  "why.lead": { cs: "Jeden vůz, o který se staráme s péčí. Vy si užijete cestu, my vám všechno připravíme.", en: "One vehicle we care for with great attention. You enjoy the trip, we prepare everything else.", de: "Ein Fahrzeug, um das wir uns mit Sorgfalt kümmern. Sie genießen die Reise, wir bereiten alles vor.", pl: "Jeden pojazd, o który dbamy z troską. Ty cieszysz się podróżą, my przygotujemy resztę." },
  "why.pillar1.title": { cs: "Komfortní obytňák", en: "Comfortable camper", de: "Komfortables Wohnmobil", pl: "Komfortowy kamper" },
  "why.pillar1.text": { cs: "Prostorná alkovna s manželskou postelí vzadu, jídelním koutem, kuchyní, sprchou i WC.", en: "Spacious alcove with a double bed at the back, dining area, kitchen, shower and toilet.", de: "Geräumiger Alkoven mit Doppelbett hinten, Sitzgruppe, Küche, Dusche und WC.", pl: "Przestronna alkowa z podwójnym łóżkiem z tyłu, jadalnią, kuchnią, prysznicem i WC." },
  "why.pillar2.title": { cs: "Vše připraveno", en: "Everything ready", de: "Alles vorbereitet", pl: "Wszystko gotowe" },
  "why.pillar2.text": { cs: "Vůz převezmete čistý, natankovaný a s kompletní výbavou – markýza, nosič kol, klíny i hadice.", en: "You'll receive the vehicle clean, fuelled up and fully equipped – awning, bike rack, levelling blocks and hoses.", de: "Sie erhalten das Fahrzeug sauber, betankt und komplett ausgestattet – Markise, Fahrradträger, Keile und Schläuche.", pl: "Otrzymasz pojazd czysty, zatankowany i w pełni wyposażony – markiza, bagażnik na rowery, kliny i węże." },
  "why.pillar3.title": { cs: "Zážitky a výlety", en: "Adventures & trips", de: "Erlebnisse & Ausflüge", pl: "Przygody i wycieczki" },
  "why.pillar3.text": { cs: "Hory, moře, jezera i klidné kempy. Inspiraci na trasy najdete v našem blogu.", en: "Mountains, sea, lakes and quiet campsites. Find route inspiration on our blog.", de: "Berge, Meer, Seen und ruhige Campingplätze. Inspiration für Routen finden Sie in unserem Blog.", pl: "Góry, morze, jeziora i spokojne kempingi. Inspiracje na trasy znajdziesz na naszym blogu." },

  "vehicle.eyebrow": { cs: "Náš vůz", en: "Our vehicle", de: "Unser Fahrzeug", pl: "Nasz pojazd" },
  "vehicle.subtitle": { cs: "Alkovna pro celou rodinu", en: "Alcove camper for the whole family", de: "Alkoven für die ganze Familie", pl: "Alkowa dla całej rodziny" },
  "vehicle.text": { cs: "Moderní obytný vůz z roku 2023 na podvozku Fiat Ducato. Velká alkovna nad kabinou, pevné lůžko vzadu a rozkládací jídelní kout – ideální pro rodiny i větší skupiny.", en: "Modern 2023 camper van on a Fiat Ducato chassis. Large alcove over the cab, fixed bed at the back and a convertible dining area – ideal for families and bigger groups.", de: "Modernes Wohnmobil aus 2023 auf Fiat-Ducato-Basis. Großer Alkoven über dem Fahrerhaus, festes Bett hinten und verwandelbare Sitzgruppe – ideal für Familien und größere Gruppen.", pl: "Nowoczesny kamper z 2023 roku na podwoziu Fiat Ducato. Duża alkowa nad kabiną, stałe łóżko z tyłu i rozkładana jadalnia – idealny dla rodzin i większych grup." },
  "vehicle.cta.detail": { cs: "Detail vozu", en: "Vehicle details", de: "Fahrzeugdetails", pl: "Szczegóły pojazdu" },
  "vehicle.cta.book": { cs: "Rezervovat", en: "Book now", de: "Jetzt buchen", pl: "Zarezerwuj" },
  "vehicle.name": { cs: "Carado A 464", en: "Carado A 464", de: "Carado A 464", pl: "Carado A 464" },
  "vehicle.chip.seats": { cs: "6 míst k jízdě", en: "6 seats", de: "6 Sitzplätze", pl: "6 miejsc do jazdy" },
  "vehicle.chip.beds": { cs: "6 lůžek", en: "6 beds", de: "6 Schlafplätze", pl: "6 miejsc do spania" },
  "vehicle.chip.gearbox": { cs: "Manuál", en: "Manual", de: "Manuell", pl: "Manualna" },
  "vehicle.priceFrom": { cs: "od", en: "from", de: "ab", pl: "od" },
  "vehicle.perDay": { cs: "/ den", en: "/ day", de: "/ Tag", pl: "/ dzień" },

  "benefit.mileage.title": { cs: "Bez limitu nájezdu", en: "Unlimited mileage", de: "Unbegrenzte Fahrleistung", pl: "Bez limitu przebiegu" },
  "benefit.mileage.text": { cs: "Najeté kilometry neomezujeme", en: "We do not limit the kilometres driven", de: "Wir begrenzen die gefahrenen Kilometer nicht", pl: "Nie ograniczamy przejechanych kilometrów" },
  "benefit.support.title": { cs: "Podpora na cestě", en: "Support on the road", de: "Unterstützung unterwegs", pl: "Wsparcie w podróży" },
  "benefit.support.text": { cs: "Jsme na telefonu, kdykoli potřebujete", en: "We are on the phone whenever you need us", de: "Wir sind telefonisch erreichbar, wann immer Sie uns brauchen", pl: "Jesteśmy dostępni telefonicznie, gdy tylko nas potrzebujesz" },
  "benefit.insurance.title": { cs: "Pojištění", en: "Insurance", de: "Versicherung", pl: "Ubezpieczenie" },
  "benefit.insurance.text": { cs: "Havarijní i povinné ručení", en: "Comprehensive and liability insurance", de: "Kasko- und Haftpflichtversicherung", pl: "Ubezpieczenie AC i OC" },
  "benefit.modern.title": { cs: "Moderní vůz", en: "Modern vehicle", de: "Modernes Fahrzeug", pl: "Nowoczesny pojazd" },
  "benefit.modern.text": { cs: "Ročník 2023, udržovaný", en: "2023 model, well maintained", de: "Baujahr 2023, gepflegt", pl: "Rocznik 2023, zadbany" },
  "benefit.vignette.title": { cs: "Dálniční známka", en: "Motorway vignette", de: "Autobahnvignette", pl: "Winieta autostradowa" },
  "benefit.vignette.text": { cs: "Pro Českou republiku", en: "For the Czech Republic", de: "Für die Tschechische Republik", pl: "Na Czechy" },
  "benefit.equip.title": { cs: "Kompletní výbava", en: "Complete equipment", de: "Komplette Ausstattung", pl: "Pełne wyposażenie" },
  "benefit.equip.text": { cs: "Kuchyň, sprcha, WC, markýza", en: "Kitchen, shower, toilet, awning", de: "Küche, Dusche, WC, Markise", pl: "Kuchnia, prysznic, WC, markiza" },
  "benefit.tips.title": { cs: "Tipy na trasy", en: "Route tips", de: "Routentipps", pl: "Wskazówki na trasy" },
  "benefit.tips.text": { cs: "Poradíme, kam vyrazit", en: "We'll advise you where to go", de: "Wir beraten Sie, wohin Sie fahren können", pl: "Doradzimy, dok\u0105d jecha\u0107" },
  "benefit.personal.title": { cs: "Osobní přístup", en: "Personal approach", de: "Persönlicher Ansatz", pl: "Indywidualne podejście" },
  "benefit.personal.text": { cs: "Předání i vysvětlení vozu", en: "Handover and explanation of the vehicle", de: "Übergabe und Erklärung des Fahrzeugs", pl: "Przekazanie i objaśnienie pojazdu" },

  "index.steps.title": { cs: "Rezervace v pěti krocích", en: "Booking in five steps", de: "Buchung in fünf Schritten", pl: "Rezerwacja w pięciu krokach" },
  "index.step1.title": { cs: "Vyberte vůz", en: "Choose the vehicle", de: "Fahrzeug wählen", pl: "Wybierz pojazd" },
  "index.step1.text": { cs: "Prohlédněte si výbavu a fotografie.", en: "Check out the equipment and photos.", de: "Sehen Sie sich Ausstattung und Fotos an.", pl: "Zobacz wyposa\u017Cenie i zdj\u0119cia." },
  "index.step2.title": { cs: "Zvolte termín", en: "Choose the date", de: "Termin wählen", pl: "Wybierz termin" },
  "index.step2.text": { cs: "V kalendáři uvidíte volné dny.", en: "You'll see the free days in the calendar.", de: "Im Kalender sehen Sie freie Tage.", pl: "W kalendarzu zobaczysz wolne dni." },
  "index.step3.title": { cs: "Vyplňte údaje", en: "Fill in your details", de: "Daten ausfüllen", pl: "Wype\u0142nij dane" },
  "index.step3.text": { cs: "Jméno, telefon a počet osob.", en: "Name, phone and number of people.", de: "Name, Telefon und Personenzahl.", pl: "Imi\u0119, telefon i liczba os\u00F3b." },
  "index.step4.title": { cs: "Odešlete poptávku", en: "Send the request", de: "Anfrage senden", pl: "Wy\u015Blij zapytanie" },
  "index.step4.text": { cs: "Formulář připraví e-mail za vás.", en: "The form will prepare the e-mail for you.", de: "Das Formular erstellt die E-Mail für Sie.", pl: "Formularz przygotuje e-mail za Ciebie." },
  "index.step5.title": { cs: "Potvrdíme", en: "We confirm", de: "Wir bestätigen", pl: "Potwierdzimy" },
  "index.step5.text": { cs: "Ozveme se a domluvíme předání.", en: "We'll get in touch and arrange the handover.", de: "Wir melden uns und vereinbaren die Übergabe.", pl: "Odezwiemy si\u0119 i om\u00F3wimy przekazanie." },
  "index.steps.cta": { cs: "Přejít na rezervaci", en: "Go to booking", de: "Zur Buchung", pl: "Przejd\u017A do rezerwacji" },
  "index.blog.eyebrow": { cs: "Blog", en: "Blog", de: "Blog", pl: "Blog" },
  "index.blog.title": { cs: "Rady, tipy a inspirace", en: "Advice, tips and inspiration", de: "Ratschläge, Tipps und Inspiration", pl: "Porady, wskaz\u00F3wki i inspiracje" },

  "allinclusive.eyebrow": { cs: "Vše v ceně", en: "All included", de: "Alles inklusive", pl: "Wszystko w cenie" },
  "allinclusive.title": { cs: "Jednoduché a férové podmínky", en: "Simple and fair terms", de: "Einfache und faire Bedingungen", pl: "Proste i uczciwe warunki" },
  "allinclusive.text": { cs: "V ceně pronájmu najdete to nejdůležitější, abyste nemuseli nic dokupovat. Žádné skryté poplatky.", en: "The rental price already includes the essentials, so you won't need to buy anything extra. No hidden fees.", de: "Im Mietpreis ist das Wichtigste bereits enthalten, sodass Sie nichts zusätzlich kaufen müssen. Keine versteckten Gebühren.", pl: "W cenie wynajmu znajdziesz to, co najważniejsze, więc nie musisz nic dokupować. Żadnych ukrytych opłat." },

  "cta.title": { cs: "Kam vyrazíme?", en: "Where shall we go?", de: "Wohin soll die Reise gehen?", pl: "Dokąd wyruszymy?" },
  "cta.text": { cs: "Zkontrolujte volné termíny a pošlete nám nezávaznou poptávku. Ozveme se co nejdříve.", en: "Check available dates and send us a non-binding request. We'll get back to you as soon as possible.", de: "Prüfen Sie freie Termine und senden Sie uns eine unverbindliche Anfrage. Wir melden uns so schnell wie möglich.", pl: "Sprawdź dostępne terminy i wyślij nam niezobowiązujące zapytanie. Odezwiemy się jak najszybciej." },
  "cta.button": { cs: "Rezervovat obytňák", en: "Book the camper", de: "Wohnmobil buchen", pl: "Zarezerwuj kampera" },

  "footer.about": { cs: "Pronájem obytného vozu Carado A 464. Vyrazte za dobrodružstvím bez starostí – vůz je připravený, pojištěný a čeká jen na vás.", en: "Rental of the Carado A 464 camper van. Head off on an adventure worry-free – the vehicle is ready, insured and waiting just for you.", de: "Vermietung des Wohnmobils Carado A 464. Starten Sie sorgenfrei in Ihr Abenteuer – das Fahrzeug ist bereit, versichert und wartet nur auf Sie.", pl: "Wynajem kampera Carado A 464. Wyrusz na przygodę bez zmartwień – pojazd jest gotowy, ubezpieczony i czeka tylko na Ciebie." },
  "footer.menu": { cs: "Menu", en: "Menu", de: "Menü", pl: "Menu" },
  "footer.useful": { cs: "Užitečné", en: "Useful links", de: "Nützliches", pl: "Przydatne" },
  "footer.useful.terms": { cs: "Podmínky pronájmu", en: "Rental terms", de: "Mietbedingungen", pl: "Warunki wynajmu" },
  "footer.useful.dates": { cs: "Volné termíny", en: "Available dates", de: "Freie Termine", pl: "Wolne terminy" },
  "footer.useful.tips": { cs: "Rady a tipy", en: "Tips & advice", de: "Tipps & Ratschläge", pl: "Porady i wskazówki" },
  "footer.contact": { cs: "Kontakt", en: "Contact", de: "Kontakt", pl: "Kontakt" },
  "footer.hours": { cs: "Po–Ne 8:00–20:00 (po domluvě)", en: "Mon–Sun 8:00–20:00 (by arrangement)", de: "Mo–So 8:00–20:00 Uhr (nach Vereinbarung)", pl: "Pon–Nd 8:00–20:00 (po uzgodnieniu)" },
  "footer.rights": { cs: "Všechna práva vyhrazena.", en: "All rights reserved.", de: "Alle Rechte vorbehalten.", pl: "Wszelkie prawa zastrzeżone." },
  "footer.rental": { cs: "Pronájem obytného vozu Carado A 464", en: "Rental of the Carado A 464 camper van", de: "Vermietung des Wohnmobils Carado A 464", pl: "Wynajem kampera Carado A 464" },

  "auto.eyebrow": { cs: "Obytné auto", en: "The camper", de: "Das Wohnmobil", pl: "Kamper" },
  "auto.lead": { cs: "Alkovna pro celou rodinu – prostorná, moderní a připravená na cesty.", en: "Alcove camper for the whole family – spacious, modern and ready for the road.", de: "Alkoven für die ganze Familie – geräumig, modern und reisebereit.", pl: "Alkowa dla całej rodziny – przestronna, nowoczesna i gotowa do podróży." },
  "auto.spec.seats": { cs: "míst k jízdě", en: "travel seats", de: "Sitzplätze", pl: "miejsc do jazdy" },
  "auto.spec.sleep": { cs: "míst ke spaní", en: "sleeping places", de: "Schlafplätze", pl: "miejsc do spania" },
  "auto.spec.length": { cs: "délka", en: "length", de: "Länge", pl: "długość" },
  "auto.spec.year": { cs: "rok výroby", en: "year", de: "Baujahr", pl: "rok produkcji" },
  "auto.spec.gearbox": { cs: "převodovka", en: "gearbox", de: "Getriebe", pl: "skrzynia biegów" },
  "auto.spec.license": { cs: "řidičský průkaz", en: "driving licence", de: "Führerschein", pl: "prawo jazdy" },
  "auto.about.eyebrow": { cs: "O voze", en: "About the vehicle", de: "Über das Fahrzeug", pl: "O pojeździe" },
  "auto.about.title": { cs: "Prostor a pohodlí pro celou posádku", en: "Space and comfort for the whole crew", de: "Platz und Komfort für die ganze Crew", pl: "Przestrzeń i komfort dla całej załogi" },
  "auto.cta.book": { cs: "Rezervovat vůz", en: "Book the vehicle", de: "Fahrzeug buchen", pl: "Zarezerwuj pojazd" },
  "auto.interior.eyebrow": { cs: "Interiér", en: "Interior", de: "Innenraum", pl: "Wnętrze" },
  "auto.interior.title": { cs: "Podívejte se dovnitř", en: "Take a look inside", de: "Schauen Sie hinein", pl: "Zajrzyj do środka" },
  "auto.gallery.toggle.show": { cs: "Celá fotogalerie", en: "Full photo gallery", de: "Ganze Fotogalerie", pl: "Cała galeria zdjęć" },
  "auto.gallery.toggle.hide": { cs: "Skrýt fotogalerii", en: "Hide gallery", de: "Galerie ausblenden", pl: "Ukryj galerię" },
  "auto.gallery.title": { cs: "Podívejte se na náš obytňák", en: "Take a look at our camper", de: "Werfen Sie einen Blick auf unser Wohnmobil", pl: "Zobacz nasz kamper" },
  "auto.filter.all": { cs: "Vše", en: "All", de: "Alle", pl: "Wszystko" },
  "auto.filter.ext": { cs: "Exteriér", en: "Exterior", de: "Außen", pl: "Zewnątrz" },
  "auto.filter.int": { cs: "Interiér", en: "Interior", de: "Innenraum", pl: "Wnętrze" },
  "auto.filter.plan": { cs: "Půdorys", en: "Floor plan", de: "Grundriss", pl: "Rzut" },
  "auto.layout.eyebrow": { cs: "Dispozice", en: "Layout", de: "Aufteilung", pl: "Układ" },
  "auto.layout.title": { cs: "Přes den obývák, v noci ložnice", en: "A living room by day, a bedroom by night", de: "Tagsüber Wohnzimmer, nachts Schlafzimmer", pl: "W dzień salon, w nocy sypialnia" },
  "auto.equip.eyebrow": { cs: "Výbava", en: "Equipment", de: "Ausstattung", pl: "Wyposażenie" },
  "auto.equip.title": { cs: "Na co se můžete těšit", en: "What you can look forward to", de: "Worauf Sie sich freuen können", pl: "Na co możesz się cieszyć" },
  "auto.equip.cabin": { cs: "Kabina řidiče", en: "Driver's cab", de: "Fahrerkabine", pl: "Kabina kierowcy" },
  "auto.equip.living": { cs: "Obytná část", en: "Living area", de: "Wohnbereich", pl: "Część mieszkalna" },
  "auto.equip.outside": { cs: "Venku a příslušenství", en: "Outdoors & accessories", de: "Draußen & Zubehör", pl: "Na zewnątrz i akcesoria" },
  "auto.kitchen.eyebrow": { cs: "Kuchyň", en: "Kitchen", de: "Küche", pl: "Kuchnia" },
  "auto.kitchen.title": { cs: "Vařit se dá i na cestách", en: "You can cook on the road too", de: "Auch unterwegs kann gekocht werden", pl: "Można gotować także w podróży" },
  "auto.kitchen.cta": { cs: "Ceník", en: "Prices", de: "Preise", pl: "Cennik" },
  "auto.cta2.title": { cs: "Líbí se vám?", en: "Do you like it?", de: "Gefällt es Ihnen?", pl: "Podoba Ci się?" },
  "auto.cta2.text": { cs: "Vyberte termín v kalendáři a pošlete nám poptávku.", en: "Pick a date in the calendar and send us a request.", de: "Wählen Sie einen Termin im Kalender und senden Sie uns eine Anfrage.", pl: "Wybierz termin w kalendarzu i wyślij nam zapytanie." },
  "auto.cta2.button": { cs: "Rezervovat", en: "Book now", de: "Jetzt buchen", pl: "Zarezerwuj" },

  "cenik.eyebrow": { cs: "Ceník", en: "Prices", de: "Preise", pl: "Cennik" },
  "cenik.title": { cs: "Přehledné a férové ceny", en: "Clear and fair prices", de: "Übersichtliche und faire Preise", pl: "Przejrzyste i uczciwe ceny" },
  "cenik.body.info": { cs: "Cena se řídí sezónou, ve které pronájem začíná a končí. Pronájem se počítá na dny (den převzetí i den vrácení se počítají). Minimální délka pronájmu je v hlavní sezóně 5 dní, jinak 2 dny.", en: "The price depends on the season when the rental starts and ends. Rental is calculated per day (pick-up and return days are both counted). Minimum rental length is 5 days in high season, otherwise 2 days.", de: "Der Preis richtet sich nach der Saison, in der die Vermietung beginnt und endet. Die Vermietung wird pro Tag berechnet (Abhol- und Rückgabetag werden beide gezählt). Mindestmietdauer ist in der Hauptsaison 5 Tage, sonst 2 Tage.", pl: "Cena zależy od sezonu, w którym zaczyna i kończy się wynajem. Wynajem liczony jest na dni (liczy się dzień odbioru i dzień zwrotu). Minimalny okres wynajmu to 5 dni w sezonie wysokim, w przeciwnym razie 2 dni." },

  "rezervace.eyebrow": { cs: "Rezervace", en: "Booking", de: "Buchung", pl: "Rezerwacja" },
  "rezervace.title": { cs: "Zarezervujte si obytňák", en: "Book the camper", de: "Wohnmobil buchen", pl: "Zarezerwuj kampera" },

  "kontakt.eyebrow": { cs: "Kontakt", en: "Contact", de: "Kontakt", pl: "Kontakt" },
  "kontakt.title": { cs: "Ozvěte se nám", en: "Get in touch", de: "Kontaktieren Sie uns", pl: "Skontaktuj się z nami" },
  "kontakt.lead": { cs: "Rádi poradíme s výběrem termínu, trasou i výbavou.", en: "We're happy to help you choose a date, a route and the equipment.", de: "Wir beraten Sie gerne bei der Terminwahl, Route und Ausstattung.", pl: "Chętnie doradzimy w wyborze terminu, trasy i wyposażenia." },
  "kontakt.card.address": { cs: "Adresa", en: "Address", de: "Adresse", pl: "Adres" },
  "kontakt.card.hours": { cs: "Kdy jsme k dispozici", en: "When we're available", de: "Wann wir erreichbar sind", pl: "Kiedy jesteśmy dostępni" },
  "kontakt.card.hoursValue": { cs: "Po–Ne 8:00–20:00 (po domluvě)", en: "Mon–Sun 8:00–20:00 (by arrangement)", de: "Mo–So 8:00–20:00 Uhr (nach Vereinbarung)", pl: "Pon–Nd 8:00–20:00 (po uzgodnieniu)" },

  "auto.hero.title": { cs: "Carado A 464", en: "Carado A 464", de: "Carado A 464", pl: "Carado A 464" },
  "cenik.lead": { cs: "Cena za den podle sezóny. Žádné skryté poplatky.", en: "Price per day depending on the season. No hidden fees.", de: "Preis pro Tag je nach Saison. Keine versteckten Gebühren.", pl: "Cena za dzień w zależności od sezonu. Żadnych ukrytych opłat." },
  "rezervace.title2": { cs: "Rezervujte svůj termín", en: "Book your date", de: "Buchen Sie Ihren Termin", pl: "Zarezerwuj swój termin" },
  "rezervace.lead": { cs: "Podívejte se do kalendáře, vyberte dny a odešlete poptávku.", en: "Check the calendar, select the days and send us your request.", de: "Schauen Sie in den Kalender, wählen Sie die Tage und senden Sie Ihre Anfrage.", pl: "Sprawdź kalendarz, wybierz dni i wyślij zapytanie." },

  // Index / vehicle chips
  "vehicle.chips.seats": { cs: "6 míst k jízdě", en: "6 seats", de: "6 Sitzplätze", pl: "6 miejsc do jazdy" },
  "vehicle.chips.beds": { cs: "6 lůžek", en: "6 beds", de: "6 Schlafplätze", pl: "6 miejsc do spania" },
  "vehicle.chips.length": { cs: "7,24 m", en: "7.24 m", de: "7,24 m", pl: "7,24 m" },
  "vehicle.chips.gearbox": { cs: "Manuál", en: "Manual", de: "Schaltgetriebe", pl: "Manualna" },
  "vehicle.chips.license": { cs: "Sk. B", en: "Cat. B", de: "Kl. B", pl: "Kat. B" },

  // Auto detail: about
  "auto.about.p1": { cs: "Carado A 464 je alkovnový obytný vůz z roku 2023 na podvozku Fiat Ducato. Díky velké alkovně nad kabinou, pevnému lůžku vzadu a rozkládacímu jídelnímu koutu pohodlně přenocuje až šest lidí.", en: "The Carado A 464 is an alcove camper from 2023 built on a Fiat Ducato chassis. Thanks to the large alcove over the cab, a fixed bed at the rear and a convertible dining area, it comfortably sleeps up to six people.", de: "Der Carado A 464 ist ein Alkoven-Wohnmobil aus dem Jahr 2023 auf Fiat-Ducato-Basis. Dank des großen Alkoven über dem Fahrerhaus, dem festen Bett hinten und der umbaubaren Sitzgruppe bietet es bequem Platz für bis zu sechs Personen.", pl: "Carado A 464 to kamper alkowowy z 2023 roku na podwoziu Fiat Ducato. Dzięki dużej alkowie nad kabiną, stałemu łóżku z tyłu i rozkładanej jadalni pomieści komfortowo do sześciu osób." },
  "auto.about.p2": { cs: "Vzadu najdete pevné lůžko, uprostřed vybavenou kuchyň a koupelnu s oddělenou sprchou a WC. Vůz zvládne řidič se skupinou B a je vhodný i pro rodiny s dětmi (ISOFIX pro dvě sedačky).", en: "At the rear you'll find a fixed bed, a fully equipped kitchen in the middle and a bathroom with a separate shower and toilet. The vehicle can be driven with a category B licence and is family-friendly (ISOFIX for two child seats).", de: "Im Heck finden Sie ein festes Bett, in der Mitte eine ausgestattete Küche und ein Bad mit separater Dusche und WC. Das Fahrzeug ist mit Führerschein Klasse B fahrbar und familienfreundlich (ISOFIX für zwei Kindersitze).", pl: "Z tyłu znajduje się stałe łóżko, pośrodku w pełni wyposażona kuchnia i łazienka z oddzielnym prysznicem i toaletą. Pojazd może prowadzić kierowca z prawem jazdy kat. B i jest odpowiedni dla rodzin z dziećmi (ISOFIX dla dwóch fotelików)." },
  "auto.about.dimensions": { cs: "Rozměry: délka 7,24 m", en: "Dimensions: length 7.24 m", de: "Abmessungen: Länge 7,24 m", pl: "Wymiary: długość 7,24 m" },

  // Gallery
  "auto.gallery.bedroom": { cs: "Pevné lůžko vzadu", en: "Fixed bed at the rear", de: "Festes Bett hinten", pl: "Stałe łóżko z tyłu" },
  "auto.gallery.kitchen": { cs: "Kuchyňský kout", en: "Kitchen area", de: "Küchenzeile", pl: "Kuchnia" },
  "auto.gallery.bathroom": { cs: "Koupelna s oddělenou sprchou", en: "Bathroom with separate shower", de: "Badezimmer mit separater Dusche", pl: "Łazienka z oddzielnym prysznicem" },
  "auto.gallery.alkove": { cs: "Alkovna nad kabinou", en: "Alcove over the cab", de: "Alkoven über dem Fahrerhaus", pl: "Alkowa nad kabiną" },
  "auto.gallery.front": { cs: "Pohled zepředu", en: "Front view", de: "Blick von vorne", pl: "Widok z przodu" },
  "auto.gallery.interior": { cs: "Interiér vozu", en: "Interior view", de: "Innenansicht", pl: "Widok wnętrza" },
  "auto.gallery.cabinview": { cs: "Pohled do kabiny", en: "View into the cab", de: "Blick in die Kabine", pl: "Widok na kabin\u0119" },
  "auto.gallery.floorplan": { cs: "Půdorys vozu", en: "Floor plan", de: "Grundriss", pl: "Rzut pojazdu" },
  "auto.gallery.floorplan": { cs: "Půdorys vozu", en: "Floor plan", de: "Grundriss", pl: "Rzut" },

  // Layout
  "auto.layout.text": { cs: "Vzadu je pevné lůžko, které nemusíte každý večer stavět. Jídelní kout se snadno promění na další lůžko a alkovna nabízí další velkou spací plochu.", en: "At the rear there is a fixed bed you don't have to set up nightly. The dining area easily converts into another bed and the alcove offers an additional large sleeping surface.", de: "Im Heck befindet sich ein festes Bett, das Sie nicht jede Nacht aufbauen müssen. Die Sitzgruppe lässt sich leicht in ein weiteres Bett verwandeln und der Alkoven bietet zusätzliche Schlaffläche.", pl: "Z tyłu znajduje się stałe łóżko, którego nie trzeba codziennie rozkładać. Jadalnia łatwo zamienia się w kolejne łóżko, a alkowa oferuje dodatkową dużą powierzchnię do spania." },
  "auto.layout.li.fixed": { cs: "Pevné lůžko vzadu", en: "Fixed bed at the rear", de: "Festes Bett hinten", pl: "Stałe łóżko z tyłu" },
  "auto.layout.li.alkove": { cs: "Alkovna nad kabinou", en: "Alcove over the cab", de: "Alkoven über dem Fahrerhaus", pl: "Alkowa nad kabiną" },
  "auto.layout.li.dining": { cs: "Rozkládací jídelní kout", en: "Convertible dining area", de: "Umbaubare Sitzgruppe", pl: "Rozkładana jadalnia" },
  "auto.layout.li.shower": { cs: "Koupelna s oddělenou sprchou", en: "Bathroom with separate shower", de: "Badezimmer mit separater Dusche", pl: "Łazienka z oddzielnym prysznicem" },

  // Equipment – cabin
  "auto.equip.cabin.1": { cs: "Automatická klimatizace", en: "Automatic air conditioning", de: "Automatische Klimaanlage", pl: "Klimatyzacja automatyczna" },
  "auto.equip.cabin.2": { cs: "Parkovací kamera a senzory", en: "Parking camera and sensors", de: "Rückfahrkamera und Sensoren", pl: "Kamera i czujniki parkowania" },
  "auto.equip.cabin.3": { cs: "Tempomat a rádio", en: "Cruise control and radio", de: "Tempomat und Radio", pl: "Tempomat i radio" },
  "auto.equip.cabin.4": { cs: "Airbag řidiče a spolujezdce", en: "Driver and passenger airbags", de: "Fahrer- und Beifahrerairbags", pl: "Poduszki powietrzne kierowcy i pasażera" },
  "auto.equip.cabin.5": { cs: "ABS + ESP", en: "ABS + ESP", de: "ABS + ESP", pl: "ABS + ESP" },
  "auto.equip.cabin.6": { cs: "ISOFIX pro dvě sedačky", en: "ISOFIX for two child seats", de: "ISOFIX für zwei Kindersitze", pl: "ISOFIX dla dwóch fotelików" },

  // Equipment – living
  "auto.equip.living.1": { cs: "Klimatizace Dometic FreshJet FJZ4 2200", en: "Dometic FreshJet FJZ4 2200 air conditioning", de: "Dometic FreshJet FJZ4 2200 Klimaanlage", pl: "Klimatyzacja Dometic FreshJet FJZ4 2200" },
  "auto.equip.living.2": { cs: "Plynové topení Truma Combi 6 s 10l bojlerem", en: "Truma Combi 6 gas heating with 10l boiler", de: "Truma Combi 6 Gasheizung mit 10-l-Boiler", pl: "Ogrzewanie gazowe Truma Combi 6 z bojlerem 10 l" },
  "auto.equip.living.3": { cs: "Izolovaná odpadní nádrž", en: "Insulated waste water tank", de: "Isolierter Abwassertank", pl: "Izolowany zbiornik na ścieki" },
  "auto.equip.living.4": { cs: "Koupelna s oddělenou sprchou a WC", en: "Bathroom with separate shower and toilet", de: "Badezimmer mit separater Dusche und WC", pl: "Łazienka z oddzielnym prysznicem i toaletą" },
  "auto.equip.living.5": { cs: "Lednice, vařič a dřez", en: "Fridge, stove and sink", de: "Kühlschrank, Herd und Spüle", pl: "Lodówka, kuchenka i zlew" },
  "auto.equip.living.6": { cs: "Čalounění Arctica", en: "Arctica upholstery", de: "Arctica-Polsterung", pl: "Tapicerka Arctica" },
  "auto.equip.living.7": { cs: "Záruka těsnosti nástavby 7 let", en: "7-year watertightness warranty on the body", de: "7 Jahre Dichtigkeitsgarantie der Aufbauten", pl: "7-letnia gwarancja szczelności zabudowy" },
  "auto.equip.living.8": { cs: "Zatemnění oken a moskytiéry", en: "Window darkening and mosquito nets", de: "Verdunkelung der Fenster und Mückennetze", pl: "Przyciemnianie okien i moskitiery" },
  "auto.equip.living.9": { cs: "Zásuvky 230 V, 12 V a USB", en: "230 V, 12 V and USB sockets", de: "230 V-, 12 V- und USB-Steckdosen", pl: "Gniazdka 230 V, 12 V i USB" },

  // Equipment – outside
  "auto.equip.outside.1": { cs: "Prostorná garáž, nosnost 150 kg", en: "Spacious garage, load capacity 150 kg", de: "Großer Stauraum, Tragfähigkeit 150 kg", pl: "Przestronny bagażnik, nośność 150 kg" },
  "auto.equip.outside.2": { cs: "Markýza s LED osvětlením", en: "Awning with LED lighting", de: "Markise mit LED-Beleuchtung", pl: "Markiza z oświetleniem LED" },
  "auto.equip.outside.3": { cs: "Solární panely + přídavná baterie", en: "Solar panels + auxiliary battery", de: "Solarmodule + Zusatzbatterie", pl: "Panele słoneczne + akumulator pomocniczy" },
  "auto.equip.outside.4": { cs: "Nosič na 4 kola", en: "Rack for 4 bikes", de: "Fahrradträger für 4 Räder", pl: "Uchwyt na 4 rowery" },
  "auto.equip.outside.5": { cs: "Vyrovnávací klíny", en: "Levelling blocks", de: "Nivellierkeile", pl: "Kliny poziomujące" },
  "auto.equip.outside.6": { cs: "Hadice na vodu, prodlužovací kabel", en: "Water hose, extension cable", de: "Wasseranschluss, Verlängerungskabel", pl: "Wąż do wody, przedłużacz" },
  "auto.equip.outside.7": { cs: "Základní nářadí", en: "Basic tools", de: "Basiswerkzeug", pl: "Narzędzia podstawowe" },

  // Kitchen
  "auto.kitchen.text": { cs: "Vestavěný vařič, dřez, prostorná lednice a spousta úložného prostoru v zásuvkách a skříňkách.", en: "Built-in stove, sink, spacious fridge and lots of storage space in drawers and cupboards.", de: "Eingebauter Herd, Spüle, großer Kühlschrank und viel Stauraum in Schubladen und Schränken.", pl: "Wbudowana kuchenka, zlew, pojemna lodówka i mnóstwo miejsca do przechowywania w szufladach i szafkach." },

  // Pricing / cenik table headers
  "cenik.table.season": { cs: "Sezóna", en: "Season", de: "Saison", pl: "Sezon" },
  "cenik.table.period": { cs: "Období", en: "Period", de: "Zeitraum", pl: "Okres" },
  "cenik.table.min": { cs: "Min. délka", en: "Min. length", de: "Mindestdauer", pl: "Min. długość" },
  "cenik.table.price": { cs: "Cena", en: "Price", de: "Preis", pl: "Cena" },

  // Seasons (names + periods + mindays)
  "season.main.name": { cs: "Hlavní sezóna", en: "High season", de: "Hauptsaison", pl: "Sezon główny" },
  "season.main.period": { cs: "červenec – srpen", en: "July–August", de: "Juli–August", pl: "lipiec–sierpień" },
  "season.main.mindays": { cs: "5 dní", en: "5 days", de: "5 Tage", pl: "5 dni" },

  "season.june.name": { cs: "Červen", en: "June", de: "Juni", pl: "czerwiec" },
  "season.june.period": { cs: "červen", en: "June", de: "Juni", pl: "czerwiec" },
  "season.june.mindays": { cs: "2 dny", en: "2 days", de: "2 Tage", pl: "2 dni" },

  "season.maysep.name": { cs: "Květen a září", en: "May & September", de: "Mai & September", pl: "maj i wrzesień" },
  "season.maysep.period": { cs: "květen, září", en: "May, September", de: "Mai, September", pl: "maj, wrzesień" },
  "season.maysep.mindays": { cs: "2 dny", en: "2 days", de: "2 Tage", pl: "2 dni" },

  "season.spring.name": { cs: "Jaro, říjen a Vánoce", en: "Spring, October & Christmas", de: "Frühling, Oktober & Weihnachten", pl: "Wiosna, październik i Boże Narodzenie" },
  "season.spring.period": { cs: "únor – duben, říjen, 23.–31. 12.", en: "Feb–Apr, Oct, 23–31 Dec", de: "Feb–Apr, Okt, 23.–31. Dez", pl: "lut–kwi, paźdz., 23.–31.12." },
  "season.spring.mindays": { cs: "2 dny", en: "2 days", de: "2 Tage", pl: "2 dni" },

  "season.winter.name": { cs: "Zima", en: "Winter", de: "Winter", pl: "Zima" },
  "season.winter.period": { cs: "listopad, 1.–22. 12., leden", en: "November, 1–22 Dec, January", de: "November, 1.–22. Dez, Januar", pl: "listopad, 1.–22.12., styczeń" },
  "season.winter.mindays": { cs: "2 dny", en: "2 days", de: "2 Tage", pl: "2 dni" },

  // Discounts / notes
  "cenik.discounts": { cs: "Slevy za delší pronájem: od 11 dní sleva 10 %, od 21 dní sleva 15 %. Slevy se nesčítají a týkají se jen půjčovného.", en: "Long-term discounts: from 11 days 10% off, from 21 days 15% off. Discounts are not cumulative and apply only to the rental fee.", de: "Rabatte für längere Vermietungen: ab 11 Tagen 10%, ab 21 Tagen 15%. Rabatte sind nicht kombinierbar und gelten nur für die Mietgebühr.", pl: "Zniżki przy dłuższych wynajmach: od 11 dni 10%, od 21 dni 15%. Zniżki nie łączą się i dotyczą tylko opłaty za wynajem." },
  "cenik.note": { cs: "Ceny jsou orientační. Přesnou cenu vypočítá kalkulačka na stránce Rezervace.", en: "Prices are indicative. The exact price is calculated by the calculator on the Booking page.", de: "Preise sind Richtwerte. Den genauen Preis berechnet der Rechner auf der Buchungsseite.", pl: "Ceny są orientacyjne. Dokładną cenę obliczy kalkulator na stronie rezerwacji." },

  // Extras
  "cenik.extras.eyebrow": { cs: "Doplňky", en: "Extras", de: "Zusatzleistungen", pl: "Dodatki" },
  "cenik.extras.title": { cs: "Doplňkové položky", en: "Additional items", de: "Zusätzliche Posten", pl: "Dodatkowe pozycje" },
  "extra.scooter": { cs: "Koloběžka", en: "Scooter", de: "Tretroller", pl: "Hulajnoga" },
  "extra.dog": { cs: "Pes", en: "Dog", de: "Hund", pl: "Pies" },
  "extra.cat": { cs: "Kočka", en: "Cat", de: "Katze", pl: "Kot" },
  "extra.price": { cs: "1 000 Kč", en: "1,000 CZK", de: "1.000 CZK", pl: "1 000 CZK" },

  // Conditions / Podmínky
  "cenik.conditions.eyebrow": { cs: "Podmínky", en: "Conditions", de: "Bedingungen", pl: "Warunki" },
  "cenik.conditions.title": { cs: "Co je dobré vědět", en: "What to know", de: "Was Sie wissen sollten", pl: "Co warto wiedzieć" },
  "cenik.conditions.takeover.title": { cs: "Předání a vrácení", en: "Pick-up & return", de: "Übergabe und Rückgabe", pl: "Odbiór i zwrot" },
  "cenik.conditions.takeover.1": { cs: "Převzetí od 14:00, vrácení do 10:00", en: "Pick-up from 14:00, return by 10:00", de: "Abholung ab 14:00, Rückgabe bis 10:00", pl: "Odbiór od 14:00, zwrot do 10:00" },
  "cenik.conditions.takeover.2": { cs: "Vůz předáváme čistý s plnou nádrží – vracíte ve stejném stavu", en: "You receive the vehicle clean with a full tank – return it in the same condition", de: "Sie erhalten das Fahrzeug sauber mit vollem Tank – Rückgabe im gleichen Zustand", pl: "Otrzymasz pojazd czysty z pełnym bakiem – zwrot w tym samym stanie" },
  "cenik.conditions.takeover.3": { cs: "Řidič musí mít platný řidičský průkaz skupiny B a být starší 21 let", en: "Driver must hold a valid category B licence and be at least 21 years old", de: "Der Fahrer muss einen gültigen Führerschein Klasse B besitzen und mindestens 21 Jahre alt sein", pl: "Kierowca musi posiadać ważne prawo jazdy kat. B i być starszy niż 21 lat" },
  "cenik.conditions.takeover.4": { cs: "Součástí předání je podrobné seznámení s vozem", en: "A detailed walkthrough of the vehicle is included in the handover", de: "Bei der Übergabe erhalten Sie eine ausführliche Einweisung in das Fahrzeug", pl: "W ramach odbioru przeprowadzamy szczegółowe zapoznanie się z pojazdem" },
  "cenik.conditions.insurance.title": { cs: "Kauce a pojištění", en: "Deposit & insurance", de: "Kaution und Versicherung", pl: "Kaucja i ubezpieczenie" },
  "cenik.conditions.insurance.deposit": { cs: "Vratná kauce 25 000 Kč", en: "Refundable deposit 25,000 CZK", de: "Rückzahlbare Kaution 25.000 CZK", pl: "Zwracalna kaucja 25 000 CZK" },
  "cenik.conditions.insurance.1": { cs: "Vozidlo je pojištěno (povinné ručení i havarijní pojištění)", en: "The vehicle is insured (liability and comprehensive insurance)", de: "Das Fahrzeug ist versichert (Haftpflicht- und Kaskoversicherung)", pl: "Pojazd jest ubezpieczony (OC i AC)" },
  "cenik.conditions.insurance.2": { cs: "Rezervace je platná po zaplacení zálohy", en: "The reservation is valid once the deposit has been paid", de: "Die Reservierung ist g\u00FCltig, sobald die Anzahlung bezahlt wurde", pl: "Rezerwacja jest wa\u017Cna po op\u0142aceniu zaliczki" },
  "cenik.conditions.insurance.3": { cs: "Bezplatné storno do 30 dní před odjezdem", en: "Free cancellation up to 30 days before departure", de: "Kostenlose Stornierung bis 30 Tage vor Abfahrt", pl: "Bezp\u0142atna rezygnacja do 30 dni przed wyjazdem" },
  "cenik.conditions.mileage.title": { cs: "Kilometry", en: "Mileage", de: "Kilometer", pl: "Kilometry" },
  "cenik.conditions.mileage.1": { cs: "<b>Bez limitu</b> nájezdu, najeté kilometry neúčtujeme", en: "<b>Unlimited</b> mileage, we do not charge for kilometres driven", de: "<b>Unbegrenzte</b> Fahrleistung, gefahrene Kilometer werden nicht berechnet", pl: "<b>Bez limitu</b> przebiegu, nie naliczamy op\u0142at za przejechane kilometry" },
  "cenik.conditions.rules.title": { cs: "Pravidla na palubě", en: "Rules on board", de: "Regeln an Bord", pl: "Zasady na pok\u0142adzie" },
  "cenik.conditions.rules.1": { cs: "V celém voze platí zákaz kouření", en: "Smoking is prohibited throughout the vehicle", de: "Im gesamten Fahrzeug gilt Rauchverbot", pl: "W ca\u0142ym pojeździe obowi\u0105zuje zakaz palenia" },
  "cenik.conditions.rules.2": { cs: "Domácí mazlíčci jsou vítáni, poplatek najdete v ceníku", en: "Pets are welcome, see the price list for the fee", de: "Haustiere sind willkommen, die Geb\u00FChr finden Sie in der Preisliste", pl: "Zwierz\u0119ta domowe s\u0105 mile widziane, op\u0142at\u0119 znajdziesz w cenniku" },
  "cenik.conditions.rules.3": { cs: "Toaletu a odpadní vody vypouštějte pouze na určených místech", en: "Empty the toilet and waste water only at designated places", de: "Entleeren Sie Toilette und Abwasser nur an daf\u00FCr vorgesehenen Stellen", pl: "Toalet\u0119 i \u015Bcieki opr\u00F3\u017Cniaj wy\u0142\u0105cznie w wyznaczonych miejscach" },
  "cenik.cta.calculate": { cs: "Spočítat cenu a rezervovat", en: "Calculate price and book", de: "Preis berechnen und buchen", pl: "Oblicz cen\u0119 i zarezerwuj" },
  "extras.table.oneoff": { cs: "jednorázově", en: "one-off", de: "einmalig", pl: "jednorazowo" },

  // Reservation page – calendar and price info
  "rezervace.step1.title": { cs: "1. Kalendář obsazenosti", en: "1. Availability calendar", de: "1. Belegungskalender", pl: "1. Kalendarz dostępności" },
  "rezervace.calendar.info": { cs: "Obsazené dny jsou v kalendáři modré. Klikněte na den převzetí a poté na den vrácení, termín se sám doplní do poptávky.", en: "Booked days are blue in the calendar. Click the pick-up day and then the return day; the dates will be filled into the request automatically.", de: "Belegte Tage sind im Kalender blau. Klicken Sie auf den Abholtag und dann auf den Rückgabetag; die Daten werden automatisch in die Anfrage übernommen.", pl: "Zajęte dni są na kalendarzu oznaczone na niebiesko. Kliknij dzień odbioru, a potem dzień zwrotu — terminy zostaną automatycznie wprowadzone do zapytania." },
  "rezervace.legend.booked": { cs: "Obsazeno", en: "Booked", de: "Belegt", pl: "Zajęte" },
  "rezervace.legend.free": { cs: "Volno", en: "Free", de: "Frei", pl: "Wolne" },
  "rezervace.legend.selection": { cs: "Váš výběr", en: "Your selection", de: "Ihre Auswahl", pl: "Twój wybór" },
  "rezervace.price.summary": { cs: "Sazby a údaje pro výpočet ceny", en: "Rates and data for price calculation", de: "Tarife und Daten zur Preisberechnung", pl: "Stawki i dane do obliczenia ceny" },
  "rezervace.price.note": { cs: "Vratná kauce: 25 000 Kč · Servisní poplatek: 1 500 Kč · Nájezd: bez limitu · Všechny ceny jsou včetně DPH", en: "Refundable deposit: 25,000 CZK · Service fee: 1,500 CZK · Mileage: unlimited · All prices include VAT", de: "Rückzahlbare Kaution: 25.000 CZK · Servicegebühr: 1.500 CZK · Fahrleistung: unbegrenzt · Alle Preise inkl. MwSt.", pl: "Zwracalna kaucja: 25 000 CZK · Opłata serwisowa: 1 500 CZK · Przebieg: bez limitu · Wszystkie ceny zawierają VAT" },

  // Reservation form labels and buttons
  "rezervace.step2.title": { cs: "2. Vaše poptávka", en: "2. Your request", de: "2. Ihre Anfrage", pl: "2. Twoje zapytanie" },
  "form.label.dateFrom": { cs: "Převzetí (první den)", en: "Pick-up (first day)", de: "Abholung (erster Tag)", pl: "Odbiór (pierwszy dzień)" },
  "form.label.dateTo": { cs: "Vrácení (poslední den)", en: "Return (last day)", de: "Rückgabe (letzter Tag)", pl: "Zwrot (ostatni dzień)" },
  "form.label.guests": { cs: "Počet osob", en: "Number of people", de: "Anzahl Personen", pl: "Liczba osób" },
  "form.label.name": { cs: "Jméno a příjmení", en: "Full name", de: "Name und Nachname", pl: "Imię i nazwisko" },
  "form.label.phone": { cs: "Telefon", en: "Phone", de: "Telefon", pl: "Telefon" },
  "form.label.email": { cs: "E-mail", en: "E-mail", de: "E-Mail", pl: "E-mail" },
  "form.extras.legend": { cs: "Doplňkové položky (jednorázově)", en: "Additional items (one-off)", de: "Zusatzartikel (einmalig)", pl: "Dodatki (jednorazowo)" },
  "extras.scooter.label": { cs: "Koloběžka", en: "Scooter", de: "Tretroller", pl: "Hulajnoga" },
  "extras.dog.label": { cs: "Pes", en: "Dog", de: "Hund", pl: "Pies" },
  "extras.cat.label": { cs: "Kočka", en: "Cat", de: "Katze", pl: "Kot" },
  "form.note.label": { cs: "Poznámka (nepovinné)", en: "Note (optional)", de: "Anmerkung (optional)", pl: "Notatka (opcjonalnie)" },
  "form.note.placeholder": { cs: "Kam plánujete vyrazit, dotazy…", en: "Where are you planning to go, questions…", de: "Wohin möchten Sie fahren, Fragen…", pl: "Dokąd planujesz jechać, pytania…" },
  "form.submit": { cs: "Odeslat poptávku e-mailem", en: "Send request by e-mail", de: "Anfrage per E-Mail senden", pl: "Wyślij zapytanie e-mailem" },
  "form.summary.note": { cs: "Poptávka je nezávazná. Rezervace je platná až po našem potvrzení, které pošleme nejpozději do 24 hodin.", en: "The request is non-binding. The reservation is valid only after our confirmation, which we will send within 24 hours.", de: "Die Anfrage ist unverbindlich. Die Reservierung ist erst nach unserer Bestätigung gültig, die wir innerhalb von 24 Stunden senden.", pl: "Zapytanie jest niezobowiązujące. Rezerwacja jest ważna dopiero po naszym potwierdzeniu, które wyślemy w ciągu 24 godzin." },

  // Steps (how it works)
  "steps.eyebrow": { cs: "Jak to funguje", en: "How it works", de: "So funktioniert's", pl: "Jak to dzia\u0142a" },
  "steps.title": { cs: "Co bude d\u00e1l?", en: "What happens next?", de: "Wie geht es weiter?", pl: "Co dalej?" },
  "steps.step1.title": { cs: "Vyberete vůz", en: "You choose the vehicle", de: "Sie wählen das Fahrzeug", pl: "Wybierasz pojazd" },
  "steps.step1.text": { cs: "Carado A 464.", en: "Carado A 464.", de: "Carado A 464.", pl: "Carado A 464." },
  "steps.step2.title": { cs: "Zvolíte termín", en: "You pick a date", de: "Sie wählen einen Termin", pl: "Wybierasz termin" },
  "steps.step2.text": { cs: "Podle kalendáře obsazenosti.", en: "Using the availability calendar.", de: "Anhand des Belegungskalenders.", pl: "Według kalendarza dostępności." },
  "steps.step3.title": { cs: "Vyplníte údaje", en: "You fill in your details", de: "Sie füllen Ihre Daten aus", pl: "Wypełniasz dane" },
  "steps.step3.text": { cs: "Jméno, telefon a e-mail.", en: "Name, phone and e-mail.", de: "Name, Telefon und E-Mail.", pl: "Imię, telefon i e-mail." },
  "steps.step4.title": { cs: "Odešlete poptávku", en: "Send the request", de: "Senden Sie die Anfrage", pl: "Wyślij zapytanie" },
  "steps.step4.text": { cs: "Dorazí nám e-mailem.", en: "It arrives to us by e-mail.", de: "Die Anfrage erreicht uns per E-Mail.", pl: "Dotarcie do nas e-mailem." },
  "steps.step5.title": { cs: "Potvrdíme", en: "We confirm", de: "Wir bestätigen", pl: "Potwierdzimy" },
  "steps.step5.text": { cs: "Zašleme zálohu a pokyny.", en: "We will send deposit instructions and details.", de: "Wir senden Anweisungen und Details.", pl: "Wyślemy zaliczkę i instrukcje." },

  // Kontakt page / contact form
  "kontakt.card.phone": { cs: "Telefon", en: "Phone", de: "Telefon", pl: "Telefon" },
  "kontakt.card.email": { cs: "E-mail", en: "E-mail", de: "E-Mail", pl: "E-mail" },
  "kontakt.form.title": { cs: "Napište nám", en: "Write to us", de: "Schreiben Sie uns", pl: "Napisz do nas" },
  "kontakt.form.name": { cs: "Jméno", en: "Name", de: "Name", pl: "Imię" },
  "kontakt.form.phone": { cs: "Telefon (nepovinné)", en: "Phone (optional)", de: "Telefon (optional)", pl: "Telefon (opcjonalnie)" },
  "kontakt.form.email": { cs: "E-mail", en: "E-mail", de: "E-Mail", pl: "E-mail" },
  "kontakt.form.message": { cs: "Zpráva", en: "Message", de: "Nachricht", pl: "Wiadomość" },
  "kontakt.form.submit": { cs: "Odeslat zprávu", en: "Send message", de: "Nachricht senden", pl: "Wyślij wiadomość" },
  "kontakt.note": { cs: "Po kliknutí se otevře váš e-mailový program s předvyplněnou zprávou.", en: "Clicking will open your e-mail client with a pre-filled message.", de: "Durch Klicken öffnet sich Ihr E-Mail-Programm mit einer vorausgefüllten Nachricht.", pl: "Po kliknięciu otworzy się Twój program pocztowy z wstępnie wypełnioną wiadomością." },
  "kontakt.map.note": { cs: "Místo převzetí a vrácení vozu. Přesný postup vám pošleme po potvrzení rezervace.", en: "Pick-up and return location. We will send exact instructions after confirming your reservation.", de: "Abhol- und Rückgabeort. Die genauen Anweisungen senden wir nach Bestätigung der Reservierung.", pl: "Miejsce odbioru i zwrotu pojazdu. Dokładne instrukcje prześlemy po potwierdzeniu rezerwacji." },

  // Ceník: section headings and table rows
  "cenik.rates.eyebrow": { cs: "Sazby", en: "Rates", de: "Tarife", pl: "Stawki" },
  "cenik.rates.title": { cs: "Cena pronájmu za den", en: "Rental price per day", de: "Mietpreis pro Tag", pl: "Cena wynajmu za dzień" },
  "cenik.table.discount11": { cs: "Sleva od 11 dní pronájmu", en: "Discount from 11 days rental", de: "Rabatt ab 11 Tagen Mietdauer", pl: "Zniżka od 11 dni wynajmu" },
  "cenik.table.discount21": { cs: "Sleva od 21 dní pronájmu", en: "Discount from 21 days rental", de: "Rabatt ab 21 Tagen Mietdauer", pl: "Zniżka od 21 dni wynajmu" },

  // Extras section
  "cenik.extras.lead": { cs: "Položky, které si můžete k pronájmu domluvit.", en: "Items you can arrange for the rental.", de: "Posten, die Sie zur Miete dazubuchen können.", pl: "Pozycje, które możesz uzgodnić przy wynajmie." },
  "cenik.extras.table.item": { cs: "Položka", en: "Item", de: "Posten", pl: "Pozycja" },
  "cenik.extras.table.charge": { cs: "Účtuje se", en: "Charged", de: "Berechnet als", pl: "Naliczane jako" }
};

(function () {
  const LANGS = ["cs", "en", "de", "pl"];
  const STORAGE_KEY = "obytnak-lang";

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return LANGS.includes(saved) ? saved : "cs";
  }

  function setLang(lang) {
    if (!LANGS.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
    updateSwitcherUI(lang);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const entry = I18N_DICT[key];
      if (!entry) return;
      const text = entry[lang] || entry.cs;
      el.innerHTML = text;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      el.getAttribute("data-i18n-attr").split(";").forEach(pair => {
        const [attr, key] = pair.split(":").map(s => s.trim());
        const entry = I18N_DICT[key];
        if (!attr || !entry) return;
        el.setAttribute(attr, entry[lang] || entry.cs);
      });
    });
  }

  function updateSwitcherUI(lang) {
    document.querySelectorAll(".lang-switch button").forEach(b => {
      b.classList.toggle("on", b.dataset.lang === lang);
    });
  }

  const FLAGS = {
    cs: '<svg viewBox="0 0 30 20" width="20" height="14" aria-hidden="true"><rect width="30" height="20" fill="#fff"/><rect width="30" height="10" y="10" fill="#d7141a"/><path d="M0 0L15 10L0 20Z" fill="#11457e"/></svg>',
    en: '<svg viewBox="0 0 30 20" width="20" height="14" aria-hidden="true"><rect width="30" height="20" fill="#00247d"/><path d="M0 0L30 20M30 0L0 20" stroke="#fff" stroke-width="4"/><path d="M0 0L30 20M30 0L0 20" stroke="#cf142b" stroke-width="2"/><path d="M15 0V20M0 10H30" stroke="#fff" stroke-width="6"/><path d="M15 0V20M0 10H30" stroke="#cf142b" stroke-width="3.5"/></svg>',
    de: '<svg viewBox="0 0 30 20" width="20" height="14" aria-hidden="true"><rect width="30" height="6.67" fill="#000"/><rect width="30" height="6.67" y="6.67" fill="#dd0000"/><rect width="30" height="6.67" y="13.33" fill="#ffce00"/></svg>',
    pl: '<svg viewBox="0 0 30 20" width="20" height="14" aria-hidden="true"><rect width="30" height="10" fill="#fff"/><rect width="30" height="10" y="10" fill="#dc143c"/></svg>'
  };

  function buildSwitcher() {
    document.querySelectorAll(".lang-switch").forEach(box => {
      if (box.children.length) return;
      LANGS.forEach(l => {
        const b = document.createElement("button");
        b.type = "button";
        b.dataset.lang = l;
        b.title = l.toUpperCase();
        b.setAttribute("aria-label", l.toUpperCase());
        b.innerHTML = `<span class="flag">${FLAGS[l] || ""}</span>`;
        b.addEventListener("click", () => setLang(l));
        box.appendChild(b);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildSwitcher();
    const lang = getLang();
    applyLang(lang);
    updateSwitcherUI(lang);
  });
})();

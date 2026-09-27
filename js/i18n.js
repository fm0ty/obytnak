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

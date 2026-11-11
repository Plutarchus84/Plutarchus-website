# TODO – Plutarchus website

## Bij het overzetten naar Netlify

Het contactformulier (`contact.html`) is al omgebouwd naar **Netlify Forms**. Het werkt pas zodra de site op Netlify draait; lokaal of bij een andere host geeft het een foutmelding.

- [ ] Site op Netlify zetten (map slepen naar app.netlify.com/drop, of koppelen aan een Git-repo)
- [ ] In Netlify: *Site configuration → Forms* → **Enable form detection** aanzetten
- [ ] Site opnieuw publiceren (deploy), zodat Netlify het formulier `contact` herkent
- [ ] Controleren of het formulier `contact` onder *Forms* in het dashboard staat
- [ ] E-mailmelding instellen: *Forms → Form notifications → Add notification → Email notification* naar `secundus@plutarchus.nl` (of ander adres)
- [ ] Testbericht versturen via de live contactpagina en controleren dat de mail aankomt
- [ ] Gratis limiet van het formulier nakijken in het Netlify-plan

## Overig

- [ ] Ledenfoto's toevoegen voor de 33 leden die nog een placeholder hebben (bestand: `images/leden/<slug>.jpg`, slug staat in `js/leden-data.js`)
- [ ] Eventueel een eigen achtergrondfoto voor de homepage (nu tijdelijk `historie-bg.jpg`, zie `css/style.css` bij `.hero`)

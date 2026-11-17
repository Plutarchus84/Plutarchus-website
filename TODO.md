# TODO – Plutarchus website

## Bij het overzetten naar Netlify

Het contactformulier (`contact.html`) is al omgebouwd naar **Netlify Forms**. Het werkt pas zodra de site op Netlify draait; lokaal of bij een andere host geeft het een foutmelding.

- [x] Site op Netlify zetten (gekoppeld aan GitHub-repo merlijn963/Plutarchus-website)
- [x] In Netlify: *Site configuration → Forms* → **Enable form detection** aanzetten
- [x] Site opnieuw publiceren (deploy), zodat Netlify het formulier `contact` herkent
- [x] Controleren of het formulier `contact` onder *Forms* in het dashboard staat
- [x] E-mailmelding instellen
- [x] Testbericht versturen via de live contactpagina: de mail komt aan
- [ ] Gratis limiet van het formulier nakijken in het Netlify-plan
- [ ] Officiële domeinnaam koppelen in Netlify (*Domain management*) zodra die bekend is

## Overig

- [ ] Ledenfoto's toevoegen voor de 33 leden die nog een placeholder hebben (bestand: `images/leden/<slug>.jpg`, slug staat in `js/leden-data.js`)
- [ ] Eventueel een eigen achtergrondfoto voor de homepage (nu tijdelijk `historie-bg.jpg`, zie `css/style.css` bij `.hero`)

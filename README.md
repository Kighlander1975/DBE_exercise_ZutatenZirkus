# Übungsaufgabe "ZutatenZirkus - Drachenatem-Curry"
## Einleitung
Im Rahmen meiner Weiterbildung zum Webfrontend-Entwickler entstand dieses JavaScript-Projekt als mehrteilige Übungsaufgabe. Das Ziel bestand darin, eine Rezeptwebseite zu entwickeln, bei der ich mich auf ein spezielles Rezept konzentrierte und es Schritt für Schritt aufbaute. Die Anwendung ermöglicht es, Zutatenmengen dynamisch an die gewünschte Portionszahl anzupassen. Als Besonderheit habe ich mit LESS gearbeitet, da ich die Übungsaufgabe im CSS-Teil zuvor ausgelassen hatte.

In dieser Dokumentation präsentiere ich das Gesamtergebnis ohne auf die einzelnen Entwicklungsschritte einzugehen.

## Grundstruktur
Die Webseite basiert auf drei Technologien: HTML, CSS und JavaScript.
### HTML-Teil
Das Grundgerüst für die Webseite war vorgegeben, mit Ausnahme des Overlays für die "Allergene". Diesen Teil fügte ich im Selbststudium hinzu. Der finale HTML-Code gestaltet sich wie folgt:
```html
<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ZutatenZirkus - Drachenatem - V6</title>
        <link rel="stylesheet" type="text/css" href="styles.css" />
    </head>
    <body>
        <div class="popup-overlay"></div>
        <div class="popup">
            <div class="popup-header">
                <!-- Header-Inhalt hier -->
                <h2>Allergene <span>(und andere übernatürliche Gefahren):</span></h2>
                <span class="closeBtn" id="closeBtn">x</span>
            </div>
            <div class="popup-content">
                <ul>
                    <li><strong>Chili (Stufe: Inferno)</strong> - Kann spontane Feuerspeiendeffekte verursachen.</li>
                    <li><strong>Ingwer</strong> - Wirkt wie ein Jetpack für deinen Kreislauf. Zündet von innen!</li>
                    <li><strong>Kokosmilch</strong> - Enthält Kokos. Überraschung! Kann Spuren von Palmenurlaub enthalten.</li>
                    <li><strong>Knoblauch</strong> - Nicht allergen, aber garantiert vampirresistent.</li>
                    <li><strong>Mut</strong> - Erforderlich in großen Mengen. Nicht für Zartbeseitete empfohlen.</li>
                    <li><strong>Drachenenergie (vermutlich Spuren enthalten)</strong> - Nicht offiziell bestätigt, aber... Du wirst es merken.</li>
                </ul>
            </div>
        </div>
        <div class="wrapper">
            <header>
                <h1>ZutatenZirkus</h1>
                <hr class="header-hr" />
                <h3>~ für alle die gern kochen ~</h3>
            </header>
            <main>
                <div class="card">
                    <h2>
                        Drachenatem-Curry
                        <span
                            id="info"
                            title="Mögliche Allergene & Inhaltsstoffe anzeigen"
                            >&#9432;</span
                        >
                    </h2>
                    <div class="card-content">
                        <p>
                            Dieses Curry ist nicht nur für mutige Esser gemacht,
                            sondern bringt dein Abendessen auf Hochtouren! Mit
                            seiner pikanten Chili-Note und dem wärmenden Ingwer
                            wird jeder Bissen zu einer explosiven
                            Geschmacksreise. Das beste daran? Dein Atem wird so
                            feurig sein, dass selbst Drachen neidisch werden
                            würden! Perfekt für alle, die es ein bisschen hotter
                            mögen - aber keine Angst: Die Kokosmilch sorgt
                            dafür, dass das Feuer im richtigen Maß bleibt. Also,
                            bereite dich auf einen kulinarischen Abenteuersprung
                            in den Orient vor - aber lass niemanden zu nahe
                            kommen, nachdem du davon probiert hast...
                        </p>
                    </div>
                </div>
                <div class="reciepe">
                    <div class="portion">
                        <form id="portionsForm" onsubmit="return false;">
                            <input
                                type="submit"
                                class="button"
                                value="Portionen"
                            />
                            <input type="text" id="portions" value="4" />
                        </form>
                    </div>
                    <div class="details">
                        <div class="ingredients">
                            <h4>Was Du brauchst:</h4>
                            <hr class="hr-details" />
                            <table>
                                <tbody>
                                    <tr>
                                        <td id="ingredient1">Huhn</td>
                                        <td id="ammount1">1 Stk</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient2">Currypulver</td>
                                        <td id="ammount2">10g</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient3">Kokosmilch</td>
                                        <td id="ammount3">250ml</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient4">Ingwer</td>
                                        <td id="ammount4">2ml</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient5">Zwiebel</td>
                                        <td id="ammount5">1 Stk</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient6">Reis</td>
                                        <td id="ammount6">200g</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient7">Zitronensaft</td>
                                        <td id="ammount7">20ml</td>
                                    </tr>
                                    <tr>
                                        <td id="ingredient8">Chili</td>
                                        <td id="ammount8">0.5g</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="todo">
                            <h4>So wird's gemacht</h4>
                            <hr class="hr-todo" />
                            <ol>
                                <li>
                                    <p>
                                        Den Reis nach Packungsanweisung in
                                        leicht gesalzenem Wasser weich kochen.
                                        Abschöpfen und warm stellen.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        In einem großen Topf oder einer Pfanne
                                        etwas Öl erhitzen (nicht im Rezept
                                        aufgeführt, aber empfohlen: 1-2 EL ÖI).
                                        Die fein gewürfelten Zwiebeln darin
                                        glasig anschwitzen.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Das gewürfelte Huhn zur Zwiebeln geben
                                        und von allen Seiten anbraten, bis es
                                        eine goldbraune Farbe bekommt. Ingwer
                                        und Chili hinzufügen: Den geriebenen
                                        Ingwer sowie die fein gehackte
                                        Chilischote zum Huhn geben und alles
                                        kurz mitanschwitzen lassen. So entfaltet
                                        sich der aromatische Duft!
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Das Currypulver einstreuen und gut unter
                                        das Huhn mischen. Etwa 1 Minute...
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <script src="ressources/JS/myScripts.js"></script>
    </body>
</html>
```

### CSS-Teil
Die CSS-Struktur wurde mithilfe von LESS entwickelt. Die folgende Ordnerstruktur verdeutlicht meinen Aufbau (Ordner: ./ressources/less/):
```
│   all.less
│
├───base
│       _mixings.less
│       _reset.less
│       _typography.less
│       _variables.less
│
├───components
│       _buttons.less
│       _cards.less
│
├───layout
│       _header.less
│
└───pages
        _dragon.less
```

Bei der Strukturierung des CSS-Teils legte ich Wert auf eine klare Organisation. Zunächst ließ ich mich durch KI-Empfehlungen zu Best Practices in der LESS-Strukturierung beraten. Diese Struktur erwies sich als effizient und bildete die Grundlage für meine weitere Entwicklung.

### JavaScript
Der JavaScript-Teil stellt das Herzstück der Webseite dar und wuchs mit den implementierten Funktionalitäten stetig an. Die anspruchsvollste Komponente war die Berechnung der Zutatenmengen bei unterschiedlichen Portionsgrößen. Als Ausgangsbasis dienten die Werte der statischen Seite, die für vier Portionen konzipiert waren.

Um die Benutzerfreundlichkeit zu erhöhen, implementierte ich folgende Funktionen:
- Rundung der Werte auf eine Nachkommastelle für bessere Lesbarkeit
- Verwendung von Bruchzeichen (½, ¼, ¾) bei Stückzahlen statt Dezimalzahlen
- Automatische Umrechnung von Maßeinheiten (g zu kg bzw. ml zu l) bei größeren Mengen

Diese Optimierungen sorgen für eine übersichtliche Darstellung der Zutatenliste bei gleichzeitiger Flexibilität in der Portionsberechnung.

## Fazit
Die Entwicklung dieser Webseite bot mir die Gelegenheit, meine JavaScript-Kenntnisse in einem praxisnahen Projekt anzuwenden und zu vertiefen. Besonders die dynamische Berechnung der Zutatenmengen stellte eine interessante Herausforderung dar, die ich durch logische Algorithmen und benutzerfreundliche Formatierungen lösen konnte. Die Arbeit mit LESS erweiterte zudem meine CSS-Kompetenzen und ermöglichte mir einen strukturierteren Ansatz bei der Gestaltung.

Insgesamt verdeutlicht dieses Projekt, wie bereits grundlegende Webtechnologien ausreichen, um interaktive und nützliche Anwendungen zu erstellen. Die gewonnenen Erkenntnisse werde ich in zukünftigen Projekten weiter ausbauen und verfeinern.
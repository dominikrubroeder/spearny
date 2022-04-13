import Feature from './Feature';
import classes from './Features.scss';
import SectionHead from './SectionHead';

const featuresBase = [
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'Intuitive Benutzeroberfläche',
    description:
      'Mit Spearney profitierst Du vor allem durch eine intuitive und intelligente Benutzeroberfläche.',
  },
  {
    icon: 'fa-up-right-and-down-left-from-center',
    title: 'Responsive Nutzung',
    description:
      'Ein Konto, bequem überall nutzen: Durch eine kostenlose Registierung ist es möglich Spearney im Web oder über die nativen Apps direkt auf Deinem Smartphone, Tablet oder den Desktop zu verwenden.',
  },
  {
    icon: 'fa-link',
    title: 'Mit Bankkonto verknüpfen',
    description:
      'Füge Einträge automatisiert hinzu, indem Du Spearney mit Deinem Bankkonto verbindest. Füge Informationen wie Kategorisierung, Verschlagwortung, Notizen oder weitere Details manuell hinzu, um deinen Geldfluss noch genauer nachvollziehen zu können. Automatisierte Einträge werden in der Übersicht entsprechend gekennzeichnet. Natürlich lassen sich auch diese nachträglich manuell bearbeiten.',
  },
  {
    icon: 'fa-rotate',
    title: 'Regelmäßige Einträge',
    description:
      'Einkommen und Ausgaben kommen häufig in regelmäßigen Abständen vor. Markiere daher ein Eintrag als regelmäßig, um es in täglichen, wöchentlichen, monatlichen oder jährlichen Intervallen automatisiert hinzufügen zu lassen. Somit ersparst Du dir den gleichen Eintrag wieder und wieder erstellen zu müssen. Wie auch bei den automatisierten Einträgen werden regelmäßige Einträge in der Übersicht entsprechend durch dieses Symbol gekennzeichnet. Du kannst jeden dieser Einträge individuell nachbearbeiten.',
  },
  {
    icon: 'fa-calendar-days',
    title: 'Bezahlt / erhalten am',
    description:
      'Durch diese Eigenschaft kannst Du genau nachvollziehen wann Du eine bestimme Zahlung erhalten oder selbst getätigt hast. Hiernach kann in der Übersicht gefiltert werden.',
  },
  {
    icon: 'fa-calendar-days',
    title: 'Bezahlt an / erhalten von',
    description:
      'Durch diese Eigenschaft kannst Du genau nachvollziehen von wem Du eine bestimme Zahlung erhalten oder an wen selbst getätigt hast. Dies können Personen oder natürlich auch Unternehmen und weitere Einrichtungen sein. Hiernach kann in der Übersicht gefiltert werden.',
  },
  {
    icon: 'fa-calendar-days',
    title: 'Bezahlt per',
    description:
      'Durch diese Eigenschaft kannst Du genau nachvollziehen mit welcher Zahlungsmethode Du eine bestimmte Zahlung erhalten oder selbst getätigt hast. Hiernach kann in der Übersicht gefiltert werden.',
  },
  {
    icon: 'fa-tags',
    title: 'Tags',
    description:
      'Durch diese Eigenschaft kannst Du deine Einträge verschlagworten und eine individuelle Kategoriesierung erstellen. Tags sind eindeutige Keywords, die du individuell für dich festlegen und deinen Einträgen zuordnen kannst. Die Zuweisung ermöglicht es dir in der Übersicht deine Einträge nach genau diesen Kategorien filtern zu können! Beispielhafte Tags sind: 👕 Klamotten, 💻 Technik, 🍴 Ernährung, 🎊 Party, Pflege, ... ',
  },
  {
    icon: 'fa-pen-clip',
    title: 'Individuelles Notizen- / Kommentarfeld',
    description:
      'Füge deinem Eintrag nach Bedarf Notizen oder Kommentare jeglicher Art hinzu.',
  },
];

const featuresHighlight = [
  {
    icon: 'fa-paper-plane',
    title: 'Bargeld verfolgen',
    description:
      'Durch die individuelle Eingabemöglichkeit der “Bezahlt mit”-Eigenschaft ist es Dir möglich einen Eintrag als Bargeld-Eintrag zu kennzeichnen und somit auch diese nicht aus den Augen zu verlieren.',
  },
  {
    icon: 'fa-filter',
    title: 'Mehrfach-Filter',
    description:
      'Je mehr Eigenschaften Du einem Eintrag hinzufügst, desto flexibler kannst Du anschließend in der Übersicht filtern. Beispiel: “Wie viel Geld habe ich innerhalb der letzten 3 Monate an Klamotten per Rechnung bei Zalando GmbH ausgegeben?” “Wie viel Geld habe ich innerhalb der letzten 6 Monate durch Logo-Erstellung verdient?”',
  },
  {
    icon: 'fa-hand',
    title: 'Monatliches Limit (Budget)',
    description:
      'Durch das Festlegen eines monatlichen Limits kannst du dein gewünschtes Budget besser im Blick behalten und dein Konsum nach Bedarf besser regulieren. Das monatliche Limit verrechnet sich mit allen Ausgaben und Einkommen innerhalb eines Monats. Du kannst das Limit auch auf bestimme Tags spezialisieren, falls du beispielsweise für den aktuellen Monat nur 100€ für den Tag “Kleidung” ausgeben möchtest. Erhalte entsprechende Benachrichtungen, falls dein Budget das entsprechende Limit erreicht: “Dein monatliches Budget für Klamotten ist aufgebraucht. 😔 Mach eine kleine Shopping Pause oder verkaufe eines deiner ungetragenen Stücke!”',
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <section className="features__base hv-grid">
        <div className="container--compressed">
          <SectionHead headline="Was kann Spearny?" anchor="features" />
          <div className="h-grid-gap-huge">
            {featuresBase.map((feature) => (
              <Feature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="features__highlights hv-grid" id="highlights">
        <div className="container--compressed">
          <SectionHead
            headline="Was zeichnet Spearny besonders aus?"
            anchor="highlights"
          />
          <div className="h-grid-gap-huge">
            {featuresHighlight.map((feature) => (
              <Feature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;

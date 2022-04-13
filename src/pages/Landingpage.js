import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Landingpage.scss';
import Feature from '../components/landingpage/Feature';
import BaseButton from '../components/base/BaseButton';

const features = [
  [
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
  ],
  [
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
  ],
];

const Landingpage = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <section className="hero">
        <h1>
          Geld kommt und geht. Spearney hilft dir dabei den Überblick zu
          behalten. Für was hast du wann dein Geld ausgegeben oder erhalten?
        </h1>
        <p>
          Behalte den Überblick über Dein ausgegebenes und verdientes Geld.
          Geräteunabhängig von überall.
        </p>
        <div className="v-grid">
          <BaseButton
            priority="primary"
            onClick={() => navigate('/authentication')}
          >
            Zum Login
          </BaseButton>
          <BaseButton
            mode="link"
            priority="primary"
            onClick={() => navigate('/authentication')}
          >
            Jetzt registrieren
          </BaseButton>
        </div>
      </section>
      <section className="features">
        <section className="features__base h-grid">
          <h2>Was kann Spearny?</h2>
          <div className="h-grid">
            {features[0].map((feature) => (
              <Feature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
        <section className="features__highlights">
          <h2>Was zeichnet Spearny besonders aus?</h2>
          <div className="h-grid">
            {features[1].map((feature) => (
              <Feature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Landingpage;

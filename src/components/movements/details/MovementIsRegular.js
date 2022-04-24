import { useDispatch } from 'react-redux';
import { movementsActions } from '../../../store/movements';
import BaseCard from '../../base/BaseCard';
import BaseDropdown from '../../base/BaseDropdown';
import BaseHelpText from '../../base/BaseHelpText';
import BaseSwitch from '../../base/BaseSwitch';

const MovementIsRegular = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const switchOptions = ['daily', 'monthly', 'yearly', 'custom'];

  console.log(props.isRegular);

  const update = (childValue) => {
    dispatch(
      movementsActions.updateProperty({
        id: id,
        updatedProperty: 'isRegular',
        updatedValue: childValue,
      })
    );
  };

  const dropdownHead = (
    <div className="v-grid-space-between">
      <label>Is Regular:</label>
      <BaseHelpText title="Is Regular">
        Einkommen und Ausgaben kommen häufig in regelmäßigen Abständen vor.
        Markiere daher ein Eintrag als regelmäßig, um es in täglichen,
        wöchentlichen, monatlichen oder jährlichen Intervallen automatiert
        hinzufügen zu lassen. Somit sparst Du dir den gleichen Eintrag wieder
        und wieder erstellen zu müssen.
        <br />
        <br />
        Wie auch bei den automatisierten Einträgen werden regelmäßige Einträge
        in der Übersicht entsprechend gekennzeichnet. Auch diese lassen sich
        jederzeit nachträglich manuell bearbeiten.
      </BaseHelpText>
    </div>
  );

  return (
    <BaseCard background="white">
      <BaseDropdown
        head={dropdownHead}
        hasToggle={true}
        isOpen={props.isRegular ?? false}
      >
        <BaseSwitch
          options={switchOptions}
          initialValue={switchOptions.indexOf(props.isRegular) || 0}
          onClick={update}
        />

        {props.isRegular && props.isRegular === 'monthly' && (
          <div className="v-grid-space-between">
            On which day of the month?
            <select>
              {[...Array(28).keys()].map((day) => (
                <option key={day + 1} value={day + 1}>
                  {day + 1}
                </option>
              ))}
            </select>
          </div>
        )}
      </BaseDropdown>
    </BaseCard>
  );
};

export default MovementIsRegular;

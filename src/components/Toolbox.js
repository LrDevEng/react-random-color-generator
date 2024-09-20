import { css, StyleSheet } from 'aphrodite';
import Button from './Button.js';
import Dropdown from './Dropdown.js';

const styles = StyleSheet.create({
  flexAround: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  humble: {
    height: 'fit-content',
    flex: 1,
  },
  greedy: {
    flex: 2,
  },
  basicToolbox: {
    height: '100%',
    width: '100%',
    padding: '10px 20px 10px 20px',
  },
});

// Container component for: hue dropdown menu, luminosity drop down menu, button to generate random color
// Placed in the navigation bar of the app
// Input interface:
// - props.handleColorGen         --> callback function to generate random color
// - props.hue                    --> currently selected hue value
// - props.setHue                 --> callback function to set selected hue value
// - props.hueOptions             --> options for hue dropdown menu
// - props.luminosity             --> currently selected luminosity value
// - props.setLuminosity          --> callback function to set selected luminosity value
// - props.luminosityOptions      --> options for luminosity dropdown menu
// - props.huePlaceholder         --> placeholder value for hue dropdown menu
// - props.luminosityPlaceholder  --> placeholder value for luminosity dropdown menu
function Toolbox(props) {
  return (
    <div
      className={css(styles.basicToolbox, styles.flexAround, styles.padding)}
    >
      <div className={css(styles.flexAround, styles.greedy)}>
        <h1>Toolbox</h1>
        <div className={css(styles.flexAround)}>
          <Dropdown
            label="Hue"
            selected={props.hue}
            setSelected={props.setHue}
            options={props.hueOptions}
            placeholder={props.huePlaceholder}
          />
          <Dropdown
            label="Luminosity"
            selected={props.luminosity}
            setSelected={props.setLuminosity}
            options={props.luminosityOptions}
            placeholder={props.luminosityPlaceholder}
          />
        </div>
      </div>
      <div className={css(styles.flexEnd, styles.humble)}>
        <Button text="Generate" onClick={props.handleColorGen} />
      </div>
    </div>
  );
}

export default Toolbox;

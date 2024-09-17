import { css, StyleSheet } from 'aphrodite';
import Button from './Button.js';

const styles = StyleSheet.create({
  flexAround: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  adjust: {
    flex: 1,
  },
  maxSizePadding: {
    height: '100%',
    width: '100%',
    padding: '20px',
  },
  border: {},
});

// Container component for: hue dropdown menu, luminosity drop down menu, button to generate random color
// Placed in the navigation bar of the app
// Input interface:
// - props.handleColorGen --> callback function to generate random color
function Toolbox(props) {
  return (
    <div
      className={css(styles.maxSizePadding, styles.flexAround, styles.padding)}
    >
      <div className={css(styles.flexAround, styles.adjust)}>
        <p>Toolbox</p>
        <button>button2</button>
        <button>button3</button>
      </div>
      <div className={css(styles.flexEnd, styles.adjust)}>
        <Button text="Generate" onClick={props.handleColorGen} />
      </div>
    </div>
  );
}

export default Toolbox;

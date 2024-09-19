import { css, StyleSheet } from 'aphrodite';
import Button from './Button';

// Keyframe for pumping animation
const pump = {
  from: { width: '300px', height: '200px' },
  to: { width: '315px', height: '210px' },
};

const styles = StyleSheet.create({
  bubble: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    marginTop: '20px',
    marginRight: '20px',
    right: '0px',
    width: '300px',
    height: '200px',
    background: 'rgba(8, 16, 39, 0.7)',
    borderRadius: '40px',
    padding: '24px',
    textAlign: 'center',
    color: '#0d6efd',
    boxShadow: '0 0 30px rgba(255, 255, 0, 1)',
    ':before': {
      content: '""',
      width: '0px',
      height: '0px',
      position: 'absolute',
      borderLeft: '24px solid #081027b3',
      borderRight: '12px solid transparent',
      borderTop: '12px solid #081027b3',
      borderBottom: '20px solid transparent',
      left: '40px',
      bottom: '-31px',
    },
  },
});

// Component styled as a speech bubble
// Input interface:// Input interface:
// - props.seekingHelp  --> boolean for conditional rendering
// - props.handleReset  --> callback function to reset to transparent color
function SpeechBubble(props) {
  return props.seekingHelp ? (
    <div className={css(styles.bubble)}>
      <div>Oh no ... 😱</div>
      <div>Seems like an uncolored object has entered our world.</div>
      <div>Can you help coloring it? 🎨</div>
    </div>
  ) : (
    <div className={css(styles.bubble)}>
      <div>Yeah ... 🎉🎉🎉</div>
      <div>Thank you so much!</div>
      <Button text="Reset" onClick={props.handleReset} />
    </div>
  );
}

export default SpeechBubble;

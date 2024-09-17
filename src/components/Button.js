import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  basicButton: {
    width: '150px',
    cursor: 'pointer',
    marginLeft: '10px',
    outline: 0,
    display: 'inline-block',
    fontWeight: '400',
    lineHeight: 1.5,
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    padding: '6px 12px',
    fontSize: '1rem',
    borderRadius: '.25rem',
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    color: '#0d6efd',
    borderColor: '#0d6efd',
    ':hover': {
      color: '#fff',
      backgroundColor: '#0d6efd',
      borderColor: '#0d6efd',
    },
    ':active': {
      color: '#0d6efd',
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
  },
});

// Styled button component
// Input interface:
// - props.onClick  --> callback function when button is clicked
// - props.text     --> displayed text
function Button(props) {
  return (
    <button className={css(styles.basicButton)} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;

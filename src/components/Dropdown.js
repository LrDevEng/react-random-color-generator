import { css, StyleSheet } from 'aphrodite';
import Select from 'react-select';

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    width: '250px',
    justifyContent: 'space-between',
    borderRadius: '.25rem',
    alignItems: 'center',
    color: '#0d6efd',
    textAlign: 'left',
    paddingLeft: '10px',
    border: '1px solid #0d6efd',
    marginLeft: '10px',
  },
});

// Styled dropdown menu component
// Input interface:
// - props.options      --> array of value/lable objects displayed in dropdown menu
// - props.selected     --> selected option
// - props.setSelected  --> callback function to set selected option
// - props.label        --> label to be displayed before the dropdown menu
function Dropdown(props) {
  return (
    <div className={css(styles.box)}>
      <div>{props.label}</div>
      <div style={{ width: '150px' }}>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isClearable={true}
          isSearchable={true}
          options={props.options}
          defaultValue={props.selected}
          onChange={props.setSelected}
          theme={(theme) => ({
            ...theme,
            border: 0,
            borderRadius: '.25rem',
            colors: {
              ...theme.colors,
              primary25: 'rgba(8, 16, 39, 0.3)',
              primary: '#0d6efd',
              neutral0: '#fff',
            },
          })}
        />
      </div>
    </div>
  );
}

export default Dropdown;

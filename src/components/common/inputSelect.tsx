import React from 'react';

export interface InputSelectProps {
  label: string;
  name: string;
  options: string[];
  onChange: any;
}

export interface InputSelectState {
  selectedValue: string;
}

class InputSelect extends React.Component<InputSelectProps, {}> {
  state = {
    selectedValue: ''
  };

  changeSelectedValue = (op: any) => {
    console.log(op);
    this.setState({ selectedValue: op });
  };

  render() {
    const { label, name, options, onChange } = this.props;
    return (
      <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <select
          name={name}
          defaultValue={options[0]}
          //value={this.state.selectedValue}
          onChange={onChange}
          className='form-control'
          id={name}
        >
          {options.map(op => (
            <option key={op} value={op} onClick={() => this.changeSelectedValue(op)}>
              {op}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default InputSelect;

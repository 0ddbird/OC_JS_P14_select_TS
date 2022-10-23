import React from 'react'

export interface IOption {
  label: string
  value: string
}

interface ISelectProps {
  options: IOption[]
  selected: IOption
  setSelected: React.Dispatch<React.SetStateAction<IOption>>
}

const Select = ({ options, selected, setSelected }: ISelectProps): JSX.Element => {
  function handleSelection (e: React.ChangeEvent<HTMLSelectElement>): void {
    const selectedOption = options.find(option => option.value === e.target.value)
    if (selectedOption != null) setSelected(selectedOption)
  }
  return (
    <select className='controlled-select' value={selected.value} onChange={handleSelection}>
      {
      options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)
      }
    </select>
  )
}

export default Select

import { useState } from 'react';
import Dropdown from './components/Dropdown';

function DropdownPage() {
  const [selection, setSelection] = useState(null);
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={setSelection} />
      <Dropdown options={options} value={selection} onChange={setSelection} />
    </div>
  );
}

export default DropdownPage;

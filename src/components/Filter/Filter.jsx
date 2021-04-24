import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label className="Filter">
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

export default Filter;

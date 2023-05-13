import { useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onInputChange = e => {
    const inputValue = e.target.value;
    dispatch(setFilter(inputValue));
  };
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={e => onInputChange(e)}
        value={value.filter}
      />
    </>
  );
};

import { useSearch } from '../../context/search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const [value, setValue] = useSearch();
  const navigate = useNavigate();

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/products/search/${value.keyword}`);
      
      // Assuming the server response contains an array of results
      const { data } = response;
      
      // Ensure that the data received is an array before updating the state
      if (Array.isArray(data)) {
        setValue({ ...value, result:data });
        navigate("/search");
      } else {
        console.error('Invalid response data format:', data);
      }
    } catch (error) {
      console.error('Error:', error);
      console.error('Response:', error.response);
    }
  };

  return (
    <div className="contain">
      <form role='search' onSubmit={handleSearchSubmit}>
        <input
          type="text"
          name="text"
          className="inputsearch"
          required
          placeholder="Type to search..."
          value={value.keyword}
          onChange={(e) => setValue({ ...value, keyword: e.target.value })}
        />

        <button type='submit' className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit={10}
              strokeWidth={32}
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M338.29 338.29L448 448"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;

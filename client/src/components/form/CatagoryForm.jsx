import PropTypes from "prop-types";

const CatagoryForm = ({ handelSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handelSubmit} className="flex gap-4">
        <div>
          <input
            className=" h-8"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="create new category"
          />
        </div>
        <button type="submit" className=" bg-blue-400 px-3 py-1">
          Add Category
        </button>
      </form>
    </>
  );
};

CatagoryForm.propTypes = {
  handelSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default CatagoryForm;

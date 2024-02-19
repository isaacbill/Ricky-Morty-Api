import React from 'react'
import Status from './Category/Status'
import Gender from './Category/Gender'
import Species from './Category/Species'

const Filters = ({setStatus, setPageNumber ,setGender, setSpecies}) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-8 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          setPageNumber={setPageNumber}
          setStatus={setStatus}
        />
        <Species
          setPageNumber={setPageNumber}
          setSpecies={setSpecies}
        />
        <Gender
          setPageNumber={setPageNumber}
          setGender={setGender}
        />
      </div>
    </div>
  );
};

export default Filters;
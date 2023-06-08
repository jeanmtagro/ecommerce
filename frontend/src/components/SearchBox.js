import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

function SearchBox() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`?keyword=${keyword}&page=1`);

      //  COMMENT : dispatch also here when press submit to filter AND reload page
      dispatch(listProducts(keyword));
    } else {
      navigate(navigate(navigate.pathname));
      dispatch(listProducts(keyword));
    }
  };
  return (
      <form onSubmit={submitHandler}>
        <label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <button className="submit">Submit</button>
      </form>
  );
}

export default SearchBox;

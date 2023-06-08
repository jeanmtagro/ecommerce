import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
  // IMPORTANT *********
  let keyword_ = "";
  if (keyword.split("?keyword=")[1]) {
    let keyword_ = keyword.split("?keyword=")[1];
    if (keyword.split("?keyword=")[1].split("&")[0]) {
      let keyword_ = keyword.split("?keyword=")[1].split("&")[0];
    }
  } // *******************

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer  
        
            key={x + 1}
            to={{
              pathname: !isAdmin ? "/" : "/admin/productlist/",
              search: `keyword=${keyword_}&page=${x + 1}`,
            }}
          >
            <Pagination.Item className="m-1 page-item" active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;

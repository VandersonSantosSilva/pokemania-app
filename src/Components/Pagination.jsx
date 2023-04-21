import "../Css_Components/Pagination.css"
import {GrFormPrevious, GrFormNext} from "react-icons/gr"

let MAX_PAGINATION = 9;
let MAX_LEFT = (MAX_PAGINATION - 1) / 2;
let largura = window.screen.width

if (largura <= 799) {
  MAX_PAGINATION = 5;
  MAX_LEFT = (MAX_PAGINATION - 1) / 2;
}

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? Math.ceil(offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  let first = Math.max(current - MAX_LEFT, 1);

  if (current <= MAX_LEFT) {
    first = 1;
  } else if (current > pages - MAX_LEFT) {
    first = pages - MAX_PAGINATION + 1;
  }

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }


  return (
    <ul className="container_pagination">

      <li>
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
          className={current === 1 ? "previous": "previous_next"}
        >
          <GrFormPrevious />
        </button>
      </li>

      {Array.from({ length: Math.min(MAX_PAGINATION, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button className={current === page ? 'pagination__item--active' : 'button_pagination'}   onClick={() => onPageChange(page)}>{page}</button>
          </li>
        ))}

      <li>
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === total / limit}
          className={current === total / limit ? "next" : "previous_next"}
        >
          <GrFormNext />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

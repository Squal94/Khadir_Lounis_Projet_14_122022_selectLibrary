import React, { useState } from "react";
import arrow from "./angle-arrow-down.png";
import styled from "styled-components";
import PropTypes from "prop-types";

// const Outlined = styled.div`
//   font-size: 16px;
//   padding: 15px;
//   border: 1px solid #e0115f;
//   outline: none;
//   box-shadow: none;
//   background-color: white;
//   color: #e0115f;
//   text-decoration: none;
//   transition: border 0.25s, background 0.25s, color 0.25s;
//   &:hover {
//     cursor: pointer;
//     color: #990c41;
//     border-color: #990c41;
//     background-color: #dddddd;
//   }
// `;

function SelectItem({ arrayProps, selectImg, selectId }) {
  const [option, setOption] = useState("");
  const [selected, setSelected] = useState(false);

  const toggleArrow = () => {
    const arrow = document.querySelector(
      `#selectItem__${selectId}__field--img`
    );
    arrow.classList.toggle("rotate");
  };

  const toggleList = () => {
    const list = document.querySelector(`#selectItem__${selectId}__list`);
    list.classList.toggle("hide");
    toggleArrow();
  };
  return (
    <div id="selectItem">
      <div
        id={`selectItem__${selectId}__field`}
        onClick={() => {
          toggleList();
        }}
      >
        <p id={`${selectId}`}>
          {selected === false ? `Select your ${selectClass}` : option}
        </p>
        <img
          id={`selectItem__${selectId}__field--img`}
          src={selectImg}
          alt="Fleche ouverture du select"
        />
      </div>
      <ul id={`selectItem__${selectId}__list hide`}>
        {arrayProps.map((unit) => (
          <li
            id={`selectItem__${selectId}__list--option`}
            onClick={() => {
              setOption(unit.name);
              setSelected(true);
              toggleList();
            }}
            key={unit.abbreviation}
          >
            <p>{unit.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
SelectItem.defaultProps = {
  variant: "outlined",
};

SelectItem.propTypes = {
  arrayProps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      abbreviation: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectImg: PropTypes.string.isRequired,
  selectClass: PropTypes.string.isRequired,
  // variant: PropTypes.oneOf(["outlined", "contained", "text"]),
};

export { SelectItem };

// <div className="selectItem">
//   <div
//     id="selectField"
//     className={`selectItem__${selectClass}__field`}
//     onClick={() => {
//       toggleList();
//     }}
//   >
//     <p id={`${selectClass}`}>
//       {selected === false ? `Select your ${selectClass}` : option}
//     </p>
//     <img
//       className={`selectItem__${selectClass}__field--img`}
//       src={selectImg}
//       alt="Fleche ouverture du select"
//     />
//   </div>
//   <ul className={`selectItem__${selectClass}__list hide`}>
//     {arrayProps.map((unit) => (
//       <li
//         className={`selectItem__${selectClass}__list--option`}
//         onClick={() => {
//           setOption(unit.name);
//           setSelected(true);
//           toggleList();
//         }}
//         key={unit.abbreviation}
//       >
//         <p>{unit.name}</p>
//       </li>
//     ))}
//   </ul>
// </div>;

import React, { useState } from "react";
import arrow from "./angle-arrow-down.png";
import styled from "styled-components";
import PropTypes from "prop-types";

export const PageContainer = styled.div`
  width: 230px;
  margin
  position: relative;
`;
export const ListContainer = styled.ul`
  width: 100%;
  overflow: hidden;
  margin: 0 0 0 -35px;
  position: absolute;
  background-color: white;
  z-index: 5;
`;
export const ListOption = styled.li`
  width: 100%;
  list-style: none;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    background-color: rgba(119, 119, 215, 0.573);
  }
  & p {
    margin: 0;
    padding: 0;
  }
`;
export const ListOptionP = styled.p`
  margin: 0;
  padding: 0;
`;
export const arrowImg = styled.img`
  width: 15px;
  transition: transform 0.3s ease-in-out;
`;
export const SelectFront = styled.div`
  width: 230px;
  padding: 7px 16px;
  height: 32px;
  box-sizing: border-box;
  background-color: #f6f6f6;
  border-radius: 3px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const SelectItem = ({ arrayProps, selectImg, selectId }) => {
  const [option, setOption] = useState("");
  const [selected, setSelected] = useState(false);
  const [hide, sethide] = useState(true);

  const toggleArrow = () => {
    const arrow = document.querySelector(
      `#selectItem__${selectId}__field--img`
    );
    arrow.classList.toggle("rotate");
  };

  return (
    <PageContainer>
      <SelectFront
        id={`selectItem__${selectId}__field`}
        onClick={() => {
          toggleArrow();
          sethide(!hide);
        }}
      >
        <p id={`${selectId}`}>
          {selected === false ? `Select your ${selectClass}` : option}
        </p>
        <arrowImg
          id={`selectItem__${selectId}__field--img`}
          src={selectImg}
          alt="Fleche ouverture du select"
        />
      </SelectFront>
      {hide === true ? (
        ""
      ) : (
        <ListContainer id={`selectItem__${selectId}__list`}>
          {arrayProps.map((unit) => (
            <ListOption
              id={`selectItem__${selectId}__list--option`}
              onClick={() => {
                setOption(unit.name);
                setSelected(true);
                toggleList();
              }}
              key={unit.abbreviation}
            >
              <ListOptionP>{unit.name}</ListOptionP>
            </ListOption>
          ))}
        </ListContainer>
      )}
    </PageContainer>
  );
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
};

export { SelectItem };

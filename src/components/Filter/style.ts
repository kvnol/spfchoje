import styled from "styled-components";

export const Filter = styled.div`
  font-size: 3rem;
  color: var(--white-dark);
`

export const FilterInput = styled.input`
  appearance: none;
  border: 0;
  margin: 0;
  padding: 0;
  border-bottom: 1px dotted var(--red-light);
  width: 2.2ch;
  background-color: transparent;
  color: var(--red);
  outline: 0;
  font-weight: 600;
  text-align: center;
  
  &:focus {
    color: var(--red-light);
    border-color: var(--red-light);
  }
`
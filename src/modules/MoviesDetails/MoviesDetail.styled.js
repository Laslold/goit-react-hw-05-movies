import styled from 'styled-components';
export const MoviesDetailsS = styled.main`
  border: 1px solid #00001214;
  padding: 30px 20px;
  border-radius: 4px;
  background-color: rgba(234, 233, 233, 0.494);
  box-shadow: 0px 4px 48px 9px rgba(0, 0, 0, 0.75);

  & .wraper {
    display: flex;
    box-shadow: 1px 12px 74px -13px rgba(0, 0, 0, 0.75);
  }
  & .box {
    padding-left: 10px;
    padding-right: 10px;
  }
  & .inner {
    display: inline;
    padding-left: 40px;
    list-style: none;
  }
  & .inner li {
    padding: 10px 0;
  }
  & .itemsGenr {
    display: flex;
    list-style: none;
    padding: 0;
  }
  & .itemsGenr li {
    padding-left: 10px;
  }
  & .innerIn {
    display: flex;
    align-items: center;
  }
`;

import styled from 'styled-components';
export const MoviesListS = styled.li`
  text-decoration: none;

  .box {
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 250px;
    border: 2px solid green;
    border-radius: 4px;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0px 4px 48px 9px rgba(0, 0, 0, 0.75);
  }
`;
export const MoviesListItm = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  list-style: none;
  margin-top: 50px;
  padding: 0;
  text-decoration: none;
`;

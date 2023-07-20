import styled from 'styled-components';
export const HeaderMenuS = styled.li`
  & .link {
    display: inline-block;
    text-decoration: none;
    color: rgb(163, 231, 61);
    padding: 10px 15px;
    margin: 5px;
    border: 1px solid green;
    border-radius: 3px;
    font-family: Arial, Helvetica, sans-serif;
  }
  & .linkActive {
    display: inline-block;
    text-decoration: none;
    color: white;
    background-color: rgb(163, 231, 61);
    padding: 10px 15px;
    margin: 5px;
    border: 1px solid green;
    border-radius: 3px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
export const HeaderMenuStUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;

  border-bottom: 5px solid rgba(0, 0, 0, 0.195);
`;

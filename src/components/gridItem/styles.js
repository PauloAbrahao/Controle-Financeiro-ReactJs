import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Type = styled.div`
  // background-color: red;
  width: 80%;
  display: flex;
  flex-direction: row;
  left: 0;
`
export const p = styled.p`
  padding: 0 5px;
`
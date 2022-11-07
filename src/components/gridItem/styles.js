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
  width: 80%;
  display: flex;
  flex-direction: row;
  left: 0;
  align-items: center;
`
export const p = styled.p`
  padding: 0px 5px;
`
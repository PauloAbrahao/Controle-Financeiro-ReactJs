import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  color: #6f6af8;
`;

export const Input = styled.input`
  font-size: 1rem;
  font-weight: 400;
  padding: 10px;
  margin-top: 5px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #6f6af8;
`;

export const Modal = styled.div`
  width: 500px;
  height: 550px;
  background: #f8fafb;
  color: white;
  z-index: 10;
  border-radius: 12px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const ModalHeader = styled.div`
  height: 80px;
  background: white;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
export const Heading = styled.h5`
  margin: 0;
  padding: 10px;
  padding-top: 30px;
  color: #6f6af8;
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
`;

export const ModalContent = styled.h5`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #2c3e50;
`;

export const ChangeValues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 90px;
  margin-top: 20px;
`;

export const RadioButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 90px;
  margin-top: 20px;
`;

export const Buttons = styled.button``;

export const ModalActions = styled.div`
  position: absolute;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AdicionarBtn = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 1.2rem;
  border: none;
  color: #ffffff;
  background: #2cae1e;
  transition: all 0.25s ease;
`;

export const DeletarBtn = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 1.2rem;
  border: none;
  color: #ffffff;
  background: #dc0000;
  transition: all 0.25s ease;
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 25px;
  color: #6F6AF8;
  background: white;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`;

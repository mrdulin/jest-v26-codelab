import React, { FC } from 'react';
import styled from 'styled-components';

interface AlertProps {
  message: string;
  onClose: () => void;
}

export const Button = styled.button`
  background-color: white;
  font-size: 15px;
  color: black;
  margin: 1em;
  border: 3px;
  padding: 0.25em 6em;
`;

export const Para = styled.p`
  font-size: 20px;
  color: white;
  font-family: sans-serif;
`;

export const Box = styled.div`
  background-color: #b81c36;
  width: 300px;
  padding: 20px;
  margin: auto;
  border-radius: 10px;
`;

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return (
    <>
      <Box>
        <Para>{message}</Para>
        <Button onClick={onClose}>Close</Button>
      </Box>
    </>
  );
};

export default Alert;

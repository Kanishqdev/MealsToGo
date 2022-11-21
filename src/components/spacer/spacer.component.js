import React from "react";
import styled, { useTheme } from "styled-components/native";

const positionVariants = {
  top: "margin-top",
  bottom: "margin-bottom",
  left: "margin-left",
  right: "margin-right",
};
const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariants[size];
  const positionVariant = positionVariants[position];
  const value = theme.space[sizeIndex];
  return `${positionVariant}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const SpacerComponent = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

SpacerComponent.defaultProps = {
  position: "top",
  size: "small",
};

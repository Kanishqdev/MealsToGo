import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Ratings = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const OpenSVG = styled(SvgXml)`
  flex-direction: row;
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

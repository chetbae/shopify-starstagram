import styled from "styled-components";
import { colors } from "./colors";
import { device } from "./device";

const largeText = "36px";
const mediumText = "24px";
const headingText = "18px";
const bodyText = "16px";
const smallText = "14px";
const extraSmallText = "12px";
const tinyText = "10px";

const AppTitle = styled.p`
    font-size: ${largeText};
    underline: none;
    margin: 0px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    word-wrap: normal;
    text-align: left;
    line-height: 48px;
    @media ${device.mobileM} {
    font-size: 28px;
    line-height: 36px;
`;

const LargeSubtitle = styled.p`
  font-family: Open Sans;
  margin: 0px;
  font-style: normal;
  font-weight: bold;
  font-size: ${headingText};
  line-height: 0;
  letter-spacing: 0.5px;
  color: ${colors.defaultText};
`;

const Date = styled.p`
  font-size: ${smallText};
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.black};
  letter-spacing: 1px;
  font-weight: normal;
`;

const StyledDescription = styled.p`
  font-size: ${smallText};
  font-family: "Inter", sans-serif;
  margin: 0 0 20px 0;
  word-wrap: normal;
  letter-spacing: 0.5px;
  color: ${colors.black};
  font-weight: 400;
  line-height: 20px;
`;

const ShowMore = styled.button`
    border: none;
    padding: 0;
    background-color: transparent; 
    font-size: ${smallText};
    font-family: "Inter", sans-serif;
    text-decoration: none;
    word-wrap: normal;
    color: ${colors.darkGrey};
    letter-spacing: 0.5px;
    font-weight: 700;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const typography = {
    AppTitle: AppTitle,
    LargeSubtitle: LargeSubtitle,
    Date: Date,
    ShowMore: ShowMore,
    StyledDescription: StyledDescription,
};
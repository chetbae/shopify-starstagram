import styled from "styled-components";
import { device } from "./device";

const Top8 = styled.div`
  padding-top: 8px;
`;

const Top12 = styled.div`
  padding-top: 12px;
`;

const Top24 = styled.div`
  padding-top: 24px;
`;

const Top20 = styled.div`
  padding-top: 20px;
`;

const Top30 = styled.div`
  padding-top: 30px;
`;

const Top60 = styled.div`
  padding-top: 60px;
`;

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  padding-top: 50px;
  @media ${device.mobileM} {
    width: 90%;
    padding-top: 40px;
  }
  @media ${device.laptop} {
    width: 45%;
  }
`;

const HorizontalLine = styled.div`
  border-top: 1px solid #dddddd;
  width: 100%;
`;

const CardsContainer = styled.div`
  width: 100%;
`;

export const containers = {
  PageContainer: PageContainer,
  ContentContainer: ContentContainer,
  CardsContainer: CardsContainer,
  Top8: Top8,
  Top12: Top12,
  Top24: Top24,
  Top30: Top30,
  Top60: Top60,
  HorizontalLine: HorizontalLine,
  Top20: Top20,
};
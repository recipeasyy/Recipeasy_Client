import GoBack from '../components/navigations/goBack';
import styled from '@emotion/styled';
import FONT from '../constants/fonts';
import Accordion from '../components/accordion';
import { accessApi } from '../api/api';
import { useQuery } from 'react-query';
import COLOR from '../constants/theme';
import { Measure } from '../interfaces/main';

export default function CalcDetail() {
  const getMeasurements = async () => {
    const res = await accessApi.get(`/measurements/`);
    return res.data.Measurements;
  };

  const { data } = useQuery('Measurements', getMeasurements);
  return (
    <Container>
      <GoBack color={COLOR.TYPEFACE_BLACK} />
      <Content>
        <SubTitle css={FONT.SUBTITLE_1}>
          자취생을 위한
          <br />
          초간단 숟가락 계량법
        </SubTitle>
        {data &&
          data.map((measure: Measure) => {
            return <Accordion key={measure.id} {...measure}></Accordion>;
          })}
      </Content>
    </Container>
  );
}

const SubTitle = styled.div`
  padding-bottom: 20px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  padding-top: 55px;
`;

import GoBack from '../components/top_navigations/goBack';
import styled from '@emotion/styled';
import FONT from '../constants/fonts';
import Accordion from '../components/accordion';
import { accessApi } from '../api/api';
import { useQuery } from 'react-query';

interface Measure {
  id: number;
  title: string;
  icon_type: string;
  full: string;
  full_image: string;
  half: string;
  half_image: string;
}

export default function calcDetail() {
  const getMeasurements = async () => {
    const res = await accessApi.get(`/measurements/`);
    console.log(res.data);
    return res.data.Measurements;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery('Measurements', getMeasurements);
  console.log(data);
  return (
    <>
      <Container>
        <Icon>
          <GoBack />
        </Icon>
        <SubTitle css={FONT.SUBTITLE_1}>
          자취생을 위한
          <br />
          초간단 숟가락 계량법
        </SubTitle>
        {data &&
          data.map((measure: Measure) => {
            return (
              <>
                <Accordion key={measure.id} {...measure}></Accordion>
              </>
            );
          })}
      </Container>
    </>
  );
}
const Icon = styled.div`
  width: 100%;
`;
const SubTitle = styled.div`
  padding-bottom: 20px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

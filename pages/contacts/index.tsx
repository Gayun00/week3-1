import axios from 'axios';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import FAQItem from '../../components/FAQItem';
import { FAQ_CONTENT, FAQ_TYPE } from '../../constants/api';
import * as S from '../../styles/contacts.styled';

function Contacts({ qaTypes, qas }) {
  const [clickedType, setClickedType] = useState(1);
  const [qaList, setQaList] = useState(qas[1]);
  function onClickFAQType(typeId) {
    setClickedType(typeId);
    setQaList(qas[typeId]);
  }

  return (
    <>
      <S.Info>
        <S.InfoTitle>상담시간 안내</S.InfoTitle>
        <S.InfoText>평일 10:00 ~ 18: 00</S.InfoText>
        <S.InfoText>점심시간 12:30 ~ 13:30 /토, 일 공휴일 휴무</S.InfoText>
      </S.Info>
      <S.FAQTitleWrapper>
        <S.FAQTitle>자주 묻는 질문</S.FAQTitle>
        <S.FAQButtonWrapper>
          {qaTypes.map((qaType) => (
            <S.FAQButton
              isClicked={qaType.id === clickedType}
              key={qaType.id}
              onClick={() => onClickFAQType(qaType.id)}
            >
              {qaType.name}
            </S.FAQButton>
          ))}
        </S.FAQButtonWrapper>
      </S.FAQTitleWrapper>
      <S.FAQList>
        {qaList.map((qa) => (
          <FAQItem key={qa.id} qa={qa.question} aw={qa.answer} />
        ))}
      </S.FAQList>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const qaType = {
    buy: 1,
    sell: 2,
  };
  const qaTypesRes = await axios.get(FAQ_TYPE);
  const buyQaRes = await axios.get(FAQ_CONTENT(qaType.buy));
  const sellQaRes = await axios.get(FAQ_CONTENT(qaType.sell));

  return {
    props: {
      qaTypes: qaTypesRes.data.qaTypes,
      qas: {
        1: buyQaRes.data.qas,
        2: sellQaRes.data.qas,
      },
    },
  };
};

export default Contacts;

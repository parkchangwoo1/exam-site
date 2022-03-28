import React from 'react';
import styled from 'styled-components';

const PeriodFilter = ({years, onSelectedYear}) => {
  return(
    <PeriodDiv>
      <PeriodTitle className='mt-16 mb-16'>등재일</PeriodTitle>
      {years.map((year) => {
        if (year.id === 0){
          return(<Year className='mb-8 pointer' key={year.id} onClick={() => onSelectedYear(year)}>전체보기</Year>)
        } else if (year.id === 5){
          return(<Year className='mb-8 pointer' key={year.id} onClick={() => onSelectedYear(year)}>{year.name}</Year>)
        } else {
          return(<Year className='mb-8 pointer' key={year.id} onClick={() => onSelectedYear(year)}>{year.name}년 부터</Year>)
        }
      }
      )}
    </PeriodDiv>
  );
}

export default PeriodFilter;

const PeriodDiv = styled.div`
  text-align: right;
  margin: 5% 20% 0% 0%;
  font-family: "Noto Sans KR", sans-serif;
`

const PeriodTitle = styled.h5`
  color: #77a5eb;
`
const Year = styled.div`
  &:hover {
		text-decoration: 1px underline;
		text-underline-position: under;
	}
`

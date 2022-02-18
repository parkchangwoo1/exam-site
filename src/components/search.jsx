import styled from 'styled-components';
import { request } from 'src/utils/axios';

/************************************* temp *************************************/

const data = [
	{
		id: 2312,
		title: '커뮤니티 기반의 질의 응답서비스(cQA)에서 질문-응답 쌍의 구조적 특징을 이용한 어쩌구 저쩌구 ',
		author: ['배경만', '어쩌구'],
		date: new Date(2012, 0, 1),
	},
	{
		id: 2322,
		title: '워드그래프와 전역 및 지역 언어모델을 사용한 한국어 문서 자동 요약',
		author: ['임미영'],
		date: new Date(2014, 11, 3),
	},
	{
		id: 120042,
		title: '인공지능 언어모델에 통사 구조와 한국어 특징에 대한 지식을 주입하는 방법',
		author: ['박진호'],
		date: new Date(2021, 10, 21),
	},
];

/************************************ function ************************************/
// search input timer
let timer;

export const SearchTimer = ({ text, setAutoComplete }) => {
	if (timer) {
		clearTimeout(timer);
	}
	timer = setTimeout(async function () {
		if (text) {
			// const res = await request('GET', '여기 url');
			// if (res.result) setAutoComplete(res.result);
			// else setAutoComplete([]);
			if (text.includes('학술')) setAutoComplete(data);
			else setAutoComplete([]);
		}
	}, 500);
};

// autoComplete thesis click
export const AutoCompleteClick = ({ id }) => {
	//논문 검색 페이지로 이동 함수
};

/******************************** styled-components ********************************/
export const SearchBoxLayout = styled.div`
	width: 800px;
	max-width: 1200px;
`;

export const SearchBox = styled.div`
	width: 100%;
	max-width: 1200px;
	height: 80px;
	border: 1px solid #9fb8c6;
	display: flex;
	input {
		width: 90%;
		height: 78px;
		border: none;
		outline: none;
	}
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10.01%;
		height: 78px;
		border: none;
		cursor: pointer;
		background: #9fb8c6;
		&:focus {
			outline: none;
		}
		&:hover {
			svg {
				path {
					fill: #f5f5f5;
				}
			}
		}
	}
`;

export const AutoComplete = styled.ul`
	position: absolute;
	width: 800px;
	li {
		list-style: none;
		padding: 1rem 1.5rem;
		background: #f2f2f2;
		cursor: pointer;
		&:hover {
			background: #eaeaea;
			span {
				text-decoration: underline;
				text-underline-position: under;
				color: #0070c0;
			}
		}
	}
`;

export const AutoCompleteTitle = styled.div`
	width: 75%;
	padding: 0.5rem 0;
	color: #678fa5;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const AutoCompleteInfo = styled.div`
	color: #afabab;
	padding: 0.5rem 0;
`;

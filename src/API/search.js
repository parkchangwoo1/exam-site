// const { request } = require('src/utils/axios');

/************************************* temp *************************************/

const autoCompleteData = [
	{
		id: 2312,
		title: '커뮤니티 기반의 질의 응답서비스(cQA)에서 질문-응답 쌍의 구조적 특징을 이용한 어쩌구 저쩌구',
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

const paperInfoTemp = {
	id: 2302,
	title: {
		ko: `커뮤니티 기반의 질의 응답서비스(cQA)에서 질문-응답 쌍의 구조적 특징을 이용한 언어 모델 기반의 주제 분류 기법`,
		en: `A topic classification technique based on a language model using the structural characteristics of a question-answer pair in a community-based question-and-answer service (cQA)`,
	},
	authors: ['배경만', '고영종', '김종훈'],
	concepts: [
		{ conceptId: '3', text: '커뮤니티 기반 질의-응답 서비스' },
		{ conceptId: '11', text: '언어모델' },
		{ conceptId: '13', text: 'Topic Classification' },
		{ conceptId: '23', text: 'cQA Service' },
		{ conceptId: '40', text: 'Language Model' },
	],
	subject: { subjectId: 3, text: '전자과학' },
	issuer: '한국정보과학회',
	journal: '정보과학회논문지 : 소프트웨어 및 응용',
	recommendations: 'Vol.39 No.8 [2012]',
	year: '2012',
	language: 'Korean',
	listing: 'KCI',
	form: '학술저널',
	page: '664-671(8쪽)',
	citations: 2,
	source: 'F NDSL, W DBpia',
	holdingInstitution: '영남대학교 과학도서관',
};

const paperRecommendTemp = [
	{
		id: 2305,
		title: `커뮤니티 기반의 질의 응답서비스(cQA)에서 질문-응답 쌍의 구조적 특징을 이용한 언어 모델 기반의 주제 분류 기법`,
		authors: ['배경만', '고영종', '김종훈'],
		concepts: [
			{ conceptId: 3, text: '커뮤니티 기반 질의-응답 서비스' },
			{ conceptId: 11, text: '언어모델' },
			{ conceptId: 13, text: 'Topic Classification' },
			{ conceptId: 234, text: 'cQA Service' },
			{ conceptId: 10, text: 'Language Model' },
		],
		year: 2021,
		subject: { subjectId: 569, text: '전자과학' },
	},
	{
		id: 2398,
		title: `K-means 클러스터링을 이용한 압축 기반 이상 탐지`,
		authors: ['안종하', '김대원'],
		concepts: [
			{ conceptId: 3, text: '이상 탐지' },
			{ conceptId: 5, text: '로그 압축' },
			{ conceptId: 12, text: '유전 알고리즘' },
			{ conceptId: 20, text: 'cQA Service' },
		],
		year: 2022,
		subject: { subjectId: 569, text: '전자과학' },
	},
];

const paperSearchResultTemp = [
	{
		id: 12341,
		title: '커뮤니티 기반의 질의 응답서비스(cQA)에서 질문-응답 쌍의 구조적 특징을 이용한 언어 모델 기반의 주제 분류 기법',
		authors: ['배경만', '고영중', '김종훈'],
		concepts: [
			{ conceptId: 1, text: '자연어 처리' },
			{ conceptId: 2, text: '문서요약' },
			{ conceptId: 7, text: '추상요약' },
			{ conceptId: 11, text: '언어모델' },
			{ conceptId: 15, text: '워드그래프' },
		],
		subject: {
			subjectId: 560,
			text: '전기공학, 통신공학, 전자공학',
		},
		year: 2022,
	},
	{
		id: 12342,
		title: '워드그래프와 전역 및 지역 언어모델을 사용한 한국어문서 자동요약',
		authors: ['임미영'],
		concepts: [
			{ conceptId: 101, text: '이미지 어노테이션' },
			{ conceptId: 22, text: '이미지 태깅' },
			{ conceptId: 73, text: '소셜 태그' },
			{ conceptId: 114, text: '태그 개선' },
			{ conceptId: 18, text: 'Image Annotation' },
			{ conceptId: 182, text: 'Image Tagging' },
			{ conceptId: 132, text: 'Social Tag' },
		],
		subject: {
			subjectId: 400,
			text: '컴퓨터과학',
		},
		year: 2020,
	},
	{
		id: 12343,
		title: '커뮤니티 기반의 질의 응답서비스(cQA)에서 질문-응답 쌍의 구조적 특징을 이용한 언어 모델 기반의 주제 분류 기법',
		authors: ['배경만', '고영중', '김종훈'],
		concepts: [
			{ conceptId: 101, text: '이미지 어노테이션' },
			{ conceptId: 22, text: '이미지 태깅' },
			{ conceptId: 73, text: '소셜 태그' },
			{ conceptId: 114, text: '태그 개선' },
			{ conceptId: 18, text: 'Image Annotation' },
			{ conceptId: 182, text: 'Image Tagging' },
			{ conceptId: 132, text: 'Social Tag' },
		],
		subject: {
			subjectId: 569,
			text: '전자과학',
		},
		year: 2018,
	},
	{
		id: 12344,
		title: 'Tag Refinement를 이용한 이미지 어노테이션',
		authors: ['차재성', '조선영', '이영정', '김성도', '변해란'],
		concepts: [
			{ conceptId: 101, text: '이미지 어노테이션' },
			{ conceptId: 22, text: '이미지 태깅' },
			{ conceptId: 73, text: '소셜 태그' },
			{ conceptId: 114, text: '태그 개선' },
			{ conceptId: 18, text: 'Image Annotation' },
			{ conceptId: 182, text: 'Image Tagging' },
			{ conceptId: 132, text: 'Social Tag' },
		],
		subject: {
			subjectId: 569,
			text: '전자과학',
		},
		year: 2016,
	},
	{
		id: 12345,
		title: '워드그래프와 전역 및 지역 언어모델을 사용한 한국어문서 자동요약',
		authors: ['배경만', '고영중', '김종훈'],
		concepts: [
			{ conceptId: 1, text: '자연어 처리' },
			{ conceptId: 2, text: '문서요약' },
			{ conceptId: 7, text: '추상요약' },
			{ conceptId: 11, text: '언어모델' },
			{ conceptId: 15, text: '워드그래프' },
		],
		subject: {
			subjectId: 400,
			text: '컴퓨터과학',
		},
		year: 2015,
	},
];

/************************************ function ************************************/

export const getAutoComplete = async () => {
	//const res = await request("GET", "URL", "DATA");
	return autoCompleteData;
};

export const getPaperInfo = (id) => {
	// const res = request('GET', `url?id=${id}`);
	// if (res.result) return res.result;

	return paperInfoTemp;
};

export const getPaperRecommend = (id) => {
	// const res = request('GET', `url?id=${id}`);
	// if (res.result) return res.result;

	return paperRecommendTemp;
};

export const getPaperSearchList = async () => {
	//const res = await request("GET", "URL", "DATA");
	return paperSearchResultTemp;
};

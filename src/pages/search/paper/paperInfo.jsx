import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UseLocationQuery } from 'src/utils/useLocation';
import { getPaperInfo } from 'src/API/search';

/************************************* jsx *************************************/

const PaperInfo = () => {
	const [loading, setLoading] = useState(true);
	const search = UseLocationQuery();
	const [info, setInfo] = useState({});

	useEffect(() => {
		if (search.paperId) {
			setInfo(getPaperInfo(search.paperId));
			setLoading(false);
		}
	}, [search]);

	return (
		<>
			{!loading && (
				<PaperInfoLayout className="column">
					<h1 className="f-24">논문 정보</h1>
					<PaperInfoList>
						<Title className="f-18 mt-16 mb-16">{info.title}</Title>
						<li>
							<ListTitle>저자</ListTitle>
							{info.authors.map((author, idx) => {
								return idx + 1 < info.authors.length ? author + ', ' : author;
							})}
						</li>
						<li>
							<ListTitle>개념어</ListTitle>
							{info.keywords.map((keyword, idx) => {
								return idx + 1 < info.keywords.length ? keyword + ', ' : keyword;
							})}
						</li>
						<li>
							<ListTitle>주제어</ListTitle>
							{info.keyword.number} [{info.keyword.subject}]
						</li>
						<li>
							<ListTitle>발행기관</ListTitle>
							{info.issuer}
						</li>
						<li>
							<ListTitle>학술지명</ListTitle>
							{info.journal}
						</li>
						<li>
							<ListTitle>권호사항</ListTitle>
							{info.recommendations}
						</li>
						<li>
							<ListTitle>발행연도</ListTitle>
							{info.year}
						</li>
						<li>
							<ListTitle>작성언어</ListTitle>
							{info.language}
						</li>
						<li>
							<ListTitle>등재정보</ListTitle>
							{info.listing}
						</li>
						<li>
							<ListTitle>자료형태</ListTitle>
							{info.form}
						</li>
						<li>
							<ListTitle>수록면</ListTitle>
							{info.page}
						</li>
						<li>
							<ListTitle>KCI 피인용횟수</ListTitle>
							{info.citations}
						</li>
						<li>
							<ListTitle>제공처</ListTitle>
							{info.source}
						</li>
						<li>
							<ListTitle>소장기관</ListTitle>
							{info.holdingInstitution}
						</li>
					</PaperInfoList>
				</PaperInfoLayout>
			)}
		</>
	);
};

export default PaperInfo;

/******************************** styled-components ********************************/

const PaperInfoLayout = styled.ul`
	max-width: 35vw;
	padding-right: 2vw;
	padding: 1rem;
	li {
		font-size: 0.85rem;
		display: flex;
		list-style: none;
		margin: 0.5rem;
		line-height: 1.5;
	}
`;

const PaperInfoList = styled.div`
	padding: 0.2rem 1.5rem;
`;

const Title = styled.div`
	color: #3381bd;
	line-height: 1.5;
`;

const ListTitle = styled.div`
	color: #7f7f7f;
	min-width: 150px;
`;

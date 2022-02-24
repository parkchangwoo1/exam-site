import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UseLocationQuery } from 'src/utils/useLocation';
import { getPaperRecommend } from 'src/API/search';
import Dropdown from 'src/components/dropdown';

const Recommend = () => {
	const [loading, setLoading] = useState(true);
	const search = UseLocationQuery();
	const [recommendData, setRecommendData] = useState([]);

	const recommandOption = [
		{ value: '중요도 순', default: true },
		{ value: '최신순', default: false },
	];

	useEffect(() => {
		if (search.paperId) {
			setRecommendData(getPaperRecommend(search.paperId));
			setLoading(false);
		}
	}, [search]);

	return (
		<>
			{!loading && (
				<RecommendLayout className="column">
					<div className="justify-between">
						<h1 className="f-24">관련 논문 추천</h1> <Dropdown options={recommandOption} font={14} />
					</div>
					{recommendData?.map((recommend) => {
						return (
							<RecommendList key={recommend.id}>
								<Title className="f-20 mt-16 mb-16">{recommend.title}</Title>

								<li>
									<ListTitle>저자</ListTitle>
									{recommend.authors.map((author, idx) => {
										return idx + 1 < recommend.authors.length ? author + ', ' : author;
									})}
								</li>
								<li>
									<ListTitle>개념어</ListTitle>
									{recommend.keywords.map((keyword, idx) => {
										return idx + 1 < recommend.keywords.length ? keyword + ', ' : keyword;
									})}
								</li>
								<li>
									<ListTitle>주제어</ListTitle>
									{recommend.keyword.number} [{recommend.keyword.subject}]
								</li>
							</RecommendList>
						);
					})}
				</RecommendLayout>
			)}
		</>
	);
};

export default Recommend;

/******************************** styled-components ********************************/

const RecommendLayout = styled.ul`
	border-top: 1px solid #e9f2f9;
	width: 100%;
	padding: 2rem 1rem;
	li {
		font-size: 0.85rem;
		display: flex;
		list-style: none;
		margin: 0.5rem;
		line-height: 1.5;
	}
`;

const Title = styled.div`
	color: #3381bd;
	line-height: 1.5;
	cursor: pointer;
	&:hover {
		text-decoration: 1px underline;
		text-underline-position: under;
	}
`;

const RecommendList = styled.ul`
	padding: 0.3rem 1.5rem;
`;

const ListTitle = styled.div`
	color: #7f7f7f;
	min-width: 150px;
`;

import React from 'react';
import styled from 'styled-components';

import SearchHeader from 'src/components/header/searchHeader';
import PaperInfo from './paperInfo';
import Trend from './trend';
import Recommend from './recommend';

/************************************* jsx *************************************/

const Paper = () => {
	return (
		<>
			<SearchHeader font={24} />
			<SearchDetail className="column">
				<div className="flex">
					<PaperInfo />
					<Trend />
				</div>
				<Recommend />
			</SearchDetail>
		</>
	);
};

export default Paper;

/******************************** styled-components ********************************/

const SearchDetail = styled.div`
	width: 70vw;
	padding: 1rem;
	margin: 0.5rem auto;
	border-left: 1px solid #d5e1e6;
	border-right: 1px solid #d5e1e6;
`;

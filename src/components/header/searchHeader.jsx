import React from 'react';
import styled from 'styled-components';

import { SearchBoxComp } from 'src/components/search';
import { UseLocationQuery } from 'src/utils/useLocation';

const SearchHeader = () => {
	const search = UseLocationQuery();

	return (
		<SearchHeaderLayout>
			<SearchBoxComp font={16} height={50} text={search.q} />
		</SearchHeaderLayout>
	);
};

export default SearchHeader;

const SearchHeaderLayout = styled.div`
	height: 110px;
	display: flex;
	padding: 30px 15vw;
	box-shadow: 0 8px 8px -2px rgb(238, 238, 238);
`;

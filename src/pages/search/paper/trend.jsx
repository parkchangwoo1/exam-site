import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UseLocationQuery } from 'src/utils/useLocation';
import { getPaperInfo } from 'src/API/search';

/************************************* jsx *************************************/

const Trend = () => {
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
				<TrendLayout className="column">
					<h1 className="f-24">트렌드 분석</h1>
				</TrendLayout>
			)}
		</>
	);
};

export default Trend;

/******************************** styled-components ********************************/

const TrendLayout = styled.ul`
	max-width: 40vw;
	padding-left: 2vw;
	padding: 1rem;
`;

import React from 'react';
import styled from 'styled-components';
import { TrendChart } from 'src/components/chart/trendChart';

export const HeatmapChartLayer = ({ data, width }) => {
	return (
		<ChartPaper width={width}>
			<ChartHeader>
				<ChartTitleBox>
					<ChartTitle>전기공학, 통신 분야</ChartTitle>
				</ChartTitleBox>
				<ChartFilterBox>
					<ChartFilterSubBox>
						<ChartFilterTitle>기간 </ChartFilterTitle>
						<ChartFilter>
							<option>과거 5분기</option>
						</ChartFilter>
					</ChartFilterSubBox>
				</ChartFilterBox>
			</ChartHeader>
			<ChartBox>{data.length > 0 ? <TrendChart chartData={data} /> : <></>}</ChartBox>
		</ChartPaper>
	);
};

const ChartPaper = styled.div`
	width: ${(props) => (props.width ? `${props.width}%` : '100%')};
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
	margin: 10px 0px;
`;

const ChartHeader = styled.div`
	padding: 22px 30px 16px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ChartTitleBox = styled.div`
	width: 70%;
`;

const ChartTitle = styled.p`
	font-size: var(--font-size-16);
	/* margin: 10px; */
	font-weight: bold;
`;

const ChartFilterBox = styled.div`
	width: 40%;
`;

const ChartFilterSubBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

const ChartFilterTitle = styled.div`
	width: 20%;
	font-size: 0.75rem;
`;

const ChartFilter = styled.select`
	width: 70%;
	border-radius: 5px;
	border: 1px solid #9fb8c6;
	height: 20px;
	:focus {
		outline: none;
	}
`;

const ChartBox = styled.div`
	height: 80%;
	font-size: var(--font-size-12);
`;

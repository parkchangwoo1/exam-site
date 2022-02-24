import React, { useState, useEffect } from 'react';
import SearchHedaer from 'src/components/header/searchHeader';
import styled from 'styled-components';
import { FilterButtonLayer } from './filterButtonLayer/filterButtonLayer';
import { ChartLayer } from './chartLayer/chartLayer';
import { RecommandPaper } from './recommandPaper/recommandPaper';

import { getChartData } from 'src/API/chart';
import { getAdjacentSubjectLabels, getRecommandPaperData, getSubLabels } from 'src/API/subject';

const SubjectFilter = () => {
	const [chartData, setChartData] = useState([]);
	const [recommandPaper, setRecommandPaper] = useState([]);
	const [adjacentLabel, setAdjacentLabel] = useState([]);
	const [subLabel, setSubLabel] = useState([]);

	const fetchChartData = async () => {
		setChartData(await getChartData());
	};

	const fetchAdjacentLabelData = async () => {
		setAdjacentLabel(await getAdjacentSubjectLabels());
	};

	const fetchSubLabelData = async () => {
		setSubLabel(await getSubLabels());
	};

	const fetchRecommandData = async () => {
		setRecommandPaper(await getRecommandPaperData());
	};

	useEffect(() => {
		fetchChartData();
		fetchAdjacentLabelData();
		fetchRecommandData();
		fetchSubLabelData();
	}, []);

	return (
		<div>
			<SearchHedaer font={24} />
			<Frame>
				<ContentsUpperBox>
					<ContentsFilter>
						<FilterLayerBox>
							<Title>주제어 필터</Title>
							<Select>
								<option>??</option>
							</Select>
						</FilterLayerBox>
						<FilterLayerBox>
							<FilterButtonLayer title={'인접 주제'} data={adjacentLabel} />
						</FilterLayerBox>
						<FilterLayerBox>
							<FilterButtonLayer title={'하위 주제'} data={subLabel} />
						</FilterLayerBox>
					</ContentsFilter>
					<ContentsChart>
						<ChartLayer data={chartData} />
					</ContentsChart>
				</ContentsUpperBox>
				<Divider />
				<ContentsLowerBox>
					<LowerBoxHeader>
						<Title>주제 관련 논문 추천</Title>
						<FilterSelect>
							<option>중요도 순</option>
						</FilterSelect>
					</LowerBoxHeader>
					<RecommandPaper paperData={recommandPaper} />
				</ContentsLowerBox>
			</Frame>
		</div>
	);
};
export default SubjectFilter;

const Frame = styled.div`
	min-height: calc(100vh - 140px);
	width: 80vw;
	border: 1px solid #d5e1e6;
`;

const ContentsUpperBox = styled.div`
	padding: 20px 10px;
	min-height: 70%;
	display: flex;
	justify-content: space-between;
`;

const ContentsFilter = styled.div`
	padding: 30px 20px;
	display: flex;
	width: 40%;
	flex-direction: column;
`;

const FilterLayerBox = styled.div`
	margin-bottom: 20px;
`;

const Title = styled.p`
	font-size: 1.3rem;
	margin: 10px 0;
`;

const Select = styled.select`
	width: 80%;
	border-radius: 5px;
	border: 1px solid #9fb8c6;
	height: 40px;
	:focus {
		outline: none;
	}
`;

const ContentsChart = styled.div`
	display: flex;
	width: 60%;
	flex-direction: column;
`;

const ContentsLowerBox = styled.div`
	min-height: 30%;
`;

const LowerBoxHeader = styled.div`
	padding: 20px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const FilterSelect = styled.select`
	border-radius: 5px;
	border: 1px solid #9fb8c6;
	height: 40px;
	:focus {
		outline: none;
	}
`;

const Divider = styled.hr`
	border-width: 1px 0px 0px 0px;
	border-style: solid;
	height: 1px;
	width: 98%;
	border-color: #e9f2f9;
	margin: 0 auto;
`;

import React from 'react';
import styled from 'styled-components';
import { PaperForm } from './paperForm';

export const RecommandPaper = ({ paperData, onClick }) => {
	return (
		<>
			{paperData?.map((paper) => (
				<PaperBox key={paper.paperId}>
					<PaperForm
						title={paper.title}
						authorList={paper.author}
						conceptList={paper.conceptList}
						subjectNum={paper.subjectNum}
						subjectName={paper.subjectName}
					/>
					<ButtonPos>
						<AddButton onClick={onClick}>+</AddButton>
					</ButtonPos>
				</PaperBox>
			))}
		</>
	);
};

const PaperBox = styled.div`
	display: flex;
	padding: 0 40px;
	justify-content: space-between;
	align-items: center;
`;

const ButtonPos = styled.div`
	width: 20%;
	text-align: center;
`;

const AddButton = styled.button`
	font-size: 2rem;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: white;
	border: 1px solid black;
	cursor: pointer;
`;

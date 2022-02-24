import React from 'react';
import styled from 'styled-components';

export const PaperForm = ({ title, authorList, conceptList, subjectNum, subjectName }) => {
	return (
		<PaperInfoForm>
			<PaperTitle>{title}</PaperTitle>
			<PaperSubInfoBox>
				<PaperSubInfoTitle> 저자 </PaperSubInfoTitle>
				<PaperTextListBox>
					{authorList?.map((author, idx) => (
						<PaperSubInfoText key={idx}>
							{author}
							{idx < authorList.length - 1 ? ',' : ''}{' '}
						</PaperSubInfoText>
					))}
				</PaperTextListBox>
			</PaperSubInfoBox>
			<PaperSubInfoBox>
				<PaperSubInfoTitle> 개념어 </PaperSubInfoTitle>
				<PaperTextListBox>
					{conceptList?.map((concept, idx) => (
						<PaperSubInfoText>
							{concept}
							{idx < conceptList.length - 1 ? ',' : ''}{' '}
						</PaperSubInfoText>
					))}
				</PaperTextListBox>
			</PaperSubInfoBox>
			<PaperSubInfoBox>
				<PaperSubInfoTitle> 주제어 </PaperSubInfoTitle>
				<PaperTextListBox>
					<PaperSubInfoText>
						[{subjectNum}: {subjectName}]
					</PaperSubInfoText>
				</PaperTextListBox>
			</PaperSubInfoBox>
		</PaperInfoForm>
	);
};

const PaperInfoForm = styled.div`
	width: 80%;
	margin-bottom: 20px;
`;
const PaperTitle = styled.p`
	color: #55a3d7;
	font-weight: bold;
	line-height: 1.5;
`;

const PaperSubInfoBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const PaperTextListBox = styled.div`
	width: 80%;
`;

const PaperSubInfoTitle = styled.span`
	margin: 5px 0;
	color: #cccccc;
	font-size: 0.875rem;
	width: 10%;
`;

const PaperSubInfoText = styled.span`
	font-size: 0.875rem;
`;

import React from 'react';
import styled from 'styled-components';
import { RouteButton, LabelButton } from 'src/components/button/subjectButton';

export const FilterButtonLayer = ({ title, data, type, onClick }) => {
	return (
		<>
			<Title>{title}</Title>
			{type === 'label' ? (
				<SubjectButtonBox>
					{data?.map((label) => (
						<RouteButton onClick={() => onClick(label.id)} key={label.id} text={label.text} />
					))}
				</SubjectButtonBox>
			) : (
				<>
					<SubjectButtonBox>
						{data?.map((label) => (
							<LabelButton onClick={() => onClick(label.id)} key={label.id} text={label.text} />
						))}
					</SubjectButtonBox>
				</>
			)}
		</>
	);
};

const Title = styled.p`
	font-size: var(--font-size-12);
	font-weight: 700;
	margin: 12px 0;
`;

const SubjectButtonBox = styled.div`
	font-size: var(--font-size-12);
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

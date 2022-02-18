import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Zoom } from 'src/assets/zoom.svg';
import { Layout } from 'src/components/layout';
import {
	SearchTimer,
	AutoCompleteClick,
	SearchBoxLayout,
	SearchBox,
	AutoComplete,
	AutoCompleteTitle,
	AutoCompleteInfo,
} from 'src/components/search';

/************************************* jsx *************************************/

const Main = () => {
	const [searchText, setSearchText] = useState('');
	const [autoCompleteData, setAutoCompleteData] = useState([]);

	// input test change
	const textChange = (text) => {
		if (text === '') {
			setSearchText('');
			setAutoCompleteData([]);
		} else {
			setSearchText(text);
			SearchTimer({ text: text, setAutoComplete: setAutoCompleteData });
		}
	};

	// go to search page
	const gotoSearchPage = (searchText) => {
		//페이지 이동 함수 로직
	};

	return (
		<Layout className="center">
			<Box className="column">
				<h1>당신을 위한 맞춤형 학술정보서비스</h1>
				<h2>AI로 더 똑똑해진 서비스를 이용해보세요</h2>
				<SearchBoxLayout className="mt-32 mb-32">
					<SearchBox autoCompleteData={autoCompleteData}>
						<input
							type="text"
							placeholder="무엇을 찾고 싶으신가요?"
							className="f-24 pl-24"
							value={searchText}
							onChange={(e) => textChange(e.target.value)}
							onKeyPress={(e) => {
								if (e.code === 'Enter') gotoSearchPage(searchText);
							}}
						/>
						<button>
							<Zoom width="45" height="45" onClick={() => gotoSearchPage(searchText)} />
						</button>
					</SearchBox>
					{autoCompleteData.length > 0 && (
						<AutoCompleteLayout>
							<AutoComplete>
								{autoCompleteData.map((list) => {
									return (
										<li
											key={list.id}
											className="justify-between"
											onClick={() => AutoCompleteClick({ id: list.id })}
										>
											<AutoCompleteTitle className="title">
												<span>{list.title}</span>
											</AutoCompleteTitle>
											<AutoCompleteInfo>
												{list.author.length > 1 ? `${list.author[0]} 외` : list.author[0]},{' '}
												{list.date.getFullYear()}
											</AutoCompleteInfo>
										</li>
									);
								})}
							</AutoComplete>
						</AutoCompleteLayout>
					)}
				</SearchBoxLayout>
			</Box>
		</Layout>
	);
};

export default Main;

/******************************** styled-components ********************************/

const Box = styled.div`
	padding: 4rem 10rem;
	margin: auto;
	h1 {
		font-size: 2rem;
		font-weight: bold;
	}
	h2 {
		margin: 1rem 0;
		font-size: 1.2rem;
		color: #527080;
	}
	background: #e9f2f9;
`;

const AutoCompleteLayout = styled.div`
	width: 800px;
	max-width: 1200px;
`;

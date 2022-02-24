import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyle';
import { Main, SearchList, Paper } from '../pages';
import '../App.css';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/search" element={<SearchList />} />
				<Route path="/search/paper" element={<Paper />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

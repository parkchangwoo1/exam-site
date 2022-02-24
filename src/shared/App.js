import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<<< HEAD:src/shared/App.js
import GlobalStyles from '../styles/GlobalStyle';
import { Main, Search, Paper } from '../pages';
import '../App.css';
========
import GlobalStyles from './styles/GlobalStyle';
import Main from './pages/main';
>>>>>>>> na0i:src/App.js
=======
import GlobalStyles from '../styles/GlobalStyle';
import { Main, SearchList } from '../pages';
import '../App.css';
>>>>>>> na0i

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Main />} />
<<<<<<< HEAD
				<Route path="/search" element={<Search />} />
				<Route path="/search/paper" element={<Paper />} />
=======
				<Route path="/search" element={<SearchList />} />
>>>>>>> na0i
			</Routes>
		</BrowserRouter>
	);
}

export default App;

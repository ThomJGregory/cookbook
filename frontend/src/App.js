import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recipes from './pages/Recipes'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Recipes />}></Route>
						<Route path="/register" element={<Register />}></Route>
						<Route path="/login" element={<Login />}></Route>
					</Routes>
				</div>
			</Router>
		</>
	)
}

export default App

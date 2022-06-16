import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Recipes from './pages/Recipes'
import Header from './components/Header'

function App() {
	return (
		<>
			<Router>
				<div class="container">
					<Header />
					<Routes>
						<Route path="/" element={<Recipes />}></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/register" element={<Register />}></Route>
					</Routes>
				</div>
			</Router>
		</>
	)
}

export default App

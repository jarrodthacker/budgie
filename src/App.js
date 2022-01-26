import "./style.scss";

import Income from "./components/Income";

function App() {
	return (
		<main className="wrapper">
			<h1>Budgie</h1>
			<p>Household budget and finance tracker.</p>
			<section>
				<h2>Income</h2>
				<Income />
			</section>
			<section>
				<h2>Expenses</h2>
			</section>
			<section>
				<h2>Assets</h2>
			</section>
			<section>
				<h2>Debts</h2>
			</section>
		</main>
	);
}

export default App;

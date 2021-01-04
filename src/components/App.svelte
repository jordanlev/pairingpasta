<script>
	import PeopleInput from './PeopleInput.svelte';
	import PairSetList from './PairSetList.svelte';
</script>

<main>
	<h1>Pairing Pasta</h1>

	<p>Randomly assign a list of people to programming pairs, while avoiding repeat pairings from day to day.</p>

	<hr>

	<section>
		<h2>People To Assign</h2>
		<PeopleInput />
	</section>

	<hr class="hr-lite">

	<section>
		<h2>Pairs</h2>
		<PairSetList />
	</section>

	<hr>

	<footer>
		<p class="privacy-notice">Data / Privacy: This app runs entirely in your web browser.<br>The list of people and their pairings are saved to your browser's local storage<br>(so they are not lost when you leave and come back to this page),<br>but absolutely no data of any kind is sent to any server.</p>

		<p>
			&copy; 2021 <a href="https://jordanlev.com/" target="_blank" rel="noopener noreferrer">Jordan Lev</a>
			|
			made with <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a>
			|
			view the <a href="https://github.com/jordanlev/pairingpasta" target="_blank" rel="noopener noreferrer">source code</a>
		</p>
	</footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin: 0 0 1rem 0;
	}

	.privacy-notice {
		font-style: italic;
		font-size: 0.75rem;
	}

	.hr-lite {
		border: 0.5px solid #ccc;
	}
</style>
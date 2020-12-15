<script>
	import { nytvStore } from './store.js';
	import Timezones from './Timezones.svelte';
	import Tv from './Tv.svelte';

	function handleKeydown(event) {
		switch (event.key) {
			case 'ArrowUp':
			case 'ArrowLeft':
				nytvStore.prevChannel();

			case 'ArrowDown':
			case 'ArrowRight':
				nytvStore.nextChannel();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>
	<div class="main-content">
		<aside class="channels">
			<Timezones/>
		</aside>
		<section class="tv">
			<Tv/>
		</section>
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.main-content {
		display: flex;
		flex: 1 0 auto;
		height: 100%;
	}

	.channels {
		flex: 0 0 12em;
		box-sizing: border-box;
		height: 100%;
	}

	.tv {
		flex: 1 0 auto;
	}
</style>
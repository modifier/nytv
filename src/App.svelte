<script>
	import Timezones from './Timezones.svelte';
	import Channels from './Channels.svelte';
	import Tv from './Tv.svelte';
</script>

<main>
	<header class="header-timezones">
		<Timezones/>
	</header>
	<div class="main-content">
		<aside class="channels">
			<Channels/>
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

	.header-timezones {
		flex: 0 0 auto;
	}

	.main-content {
		display: flex;
		flex: 1 0 auto;
	}

	.channels {
		flex: 0 0 10em;
		padding-left: 1em;
		box-sizing: border-box;
	}

	.tv {
		flex: 1 0 auto;
	}
</style>
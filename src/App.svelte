<script>
	import Timezones from './Timezones.svelte';
	import Channels from './Channels.svelte';
	import Tv from './Tv.svelte';
</script>

<main>
	<header class="header-timezones">
		<Timezones/>
	</header>
	<aside class="channels">
		<Channels/>
    </aside>
	<section class="tv">
		<Tv/>
	</section>
</main>

<style>
</style>
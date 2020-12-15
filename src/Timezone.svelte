<script>
    import {onMount} from 'svelte';
    import Channels from './Channels.svelte';

    export let timezone;
    export let offset;

    let timeString = getTime();

    function getTime() {
        const date = new Date();

        return date.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit', timeZone: timezone});
    }

    onMount(() => {
        const interval = setInterval(() => {
            timeString = getTime();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<div class="timezone">
    <div class="timezone__header">
        <h3>UTC{offset}</h3>
        <p>{timeString}</p>
    </div>

    <Channels {offset} />
</div>

<style>
    .timezone {
        font-size: 14px;
        padding: 0 0.3em 1em;
    }

    .timezone__header {
        text-align: center;
        padding: 0.5em;
    }

    h3 {
        font-size: 15px;
        margin: 0;
    }

    p {
        margin: 0;
    }
</style>
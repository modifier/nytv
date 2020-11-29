<script>
    import { onMount } from 'svelte';

    export let timezone;
    export let offset;

    let timeString = getTime();

    const regex = /.+, (\d+:\d+)/;

    function getTime() {
        const date = new Date();

        return date.toLocaleString('ru-RU', { timeZone: timezone }).match(regex)[1];
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
    <h3>UTC{offset}</h3>
    <p>{timeString}</p>
</div>

<style>
    .timezone {
        font-size: 14px;
        flex: 0 0 7em;
        text-align: center;
        cursor: pointer;
        padding: 0.2em;
    }

    .timezone:hover {
        background: #f4f4f4;
        transition: 0.2s background-color;
    }

    h3 {
        font-size: 15px;
        margin: 0;
    }

    p {
        margin: 0;
    }
</style>
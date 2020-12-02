<script>
    import { onMount } from 'svelte';
    import { nytvStore } from './store.js';

    export let timezone;
    export let offset;
    export let isActive;

    let timeString = getTime();

    const regex = /.+, (\d+:\d+)/;

    function getTime() {
        const date = new Date();

        return date.toLocaleString('ru-RU', { timeZone: timezone }).match(regex)[1];
    }

    function selectTimezone() {
        nytvStore.setTimezone(offset);
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

<div class="timezone" on:click={selectTimezone} class:timezoneSelected={$nytvStore.selectedTimezone === offset}>
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

    .timezoneSelected {
        background-color: mintcream;
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
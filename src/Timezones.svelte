<script>
    import { allTimezones } from './channels';
    import Timezone from './Timezone.svelte';

    const timezones = allTimezones;
</script>

<div class="timezones">
{#each timezones as timezone}
    <Timezone timezone={timezone.timezoneName} offset={timezone.offset}/>
{/each}
</div>

<style>
    .timezones {
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 100%;
    }
</style>
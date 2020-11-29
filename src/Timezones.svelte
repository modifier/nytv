<script>
    import channels from './channels';
    import ct from 'countries-and-timezones';
    import Timezone from './Timezone.svelte';

    function getAllTimezones() {
        const timezones = new Map();
        for (let { timezone: timezoneName } of channels) {
            const timezone = ct.getTimezone(timezoneName);
            if ('dstOffsetStr' in timezone) {
                timezones.set(timezone.dstOffsetStr, timezoneName);
            } else {
                timezones.set(timezone.utcOffsetStr, timezoneName);
            }
        }

        const result = [...timezones.entries()].sort(([a, _1], [b, _2]) => (a > b));

        return result;
    }

    const timezones = getAllTimezones();
</script>

<div class="timezones">
{#each timezones as timezone}
    <Timezone timezone={timezone[1]} offset={timezone[0]}/>
{/each}
</div>

<style>
    .timezones {
        display: flex;
    }
</style>
<script>
    import { onDestroy } from 'svelte';
    import { nytvStore } from './store.js';
    import { channelsByTimezoneOffsets } from './channels';
    import Channel from './Channel.svelte';

    let channels;

    const unsubscribe = nytvStore.subscribe(state => {
        channels = channelsByTimezoneOffsets[state.selectedTimezone];
    });

    onDestroy(unsubscribe);
</script>

{#each channels as channel}
    <Channel {channel} />
{/each}
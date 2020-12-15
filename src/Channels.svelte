<script>
    import Channel from './Channel.svelte';
    import { channelsByTimezoneOffsets } from './channelUtils';

    export let offset;

    let channels = channelsByTimezoneOffsets[offset];
</script>

{#each channels as channel}
    <Channel {channel} />
{/each}
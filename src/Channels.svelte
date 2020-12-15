<script>
    import Channel from './Channel.svelte';
    import { channelsByTimezoneOffsets } from './channels';

    export let offset;

    let channels = channelsByTimezoneOffsets[offset];
</script>

{#each channels as channel}
    <Channel {channel} />
{/each}
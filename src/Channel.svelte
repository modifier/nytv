<script>
    export let channel;

    let flagClass;
    $: flagClass = 'channel__lang em em-flag-' + channel.lang;
</script>

<div class="channel">
    <i class={flagClass}></i> <span class="channel__name">{ channel.title }</span>
</div>

<style>
    .channel {
        padding: 0.2em 1em;
        cursor: pointer;
    }

    .channel:hover {
        background: #f4f4f4;
    }

    .channel__lang {
        width: 1.2em;
        height: 1.2em;
        vertical-align: bottom;
    }
</style>
import ct from 'countries-and-timezones';

const channels = [
    {
        timezoneName: 'Europe/Dublin',
        title: 'Дублин',
        lang: 'en',
        url: 'https://www.rte.ie/player/onnow'
    },
    {
        timezoneName: 'Asia/Seoul',
        title: 'Сеул',
        lang: 'en',
        url: 'https://www.youtube.com/watch?v=4gwqZYZ-OSw'
    }
];

function getChannelsByTimezoneOffsets() {
    const channelsByTimezones = {};
    for (let channel of channels) {
        const timezone = ct.getTimezone(channel.timezoneName);
        const offset = 'dstOffsetStr' in timezone ? timezone.dstOffsetStr : timezone.utcOffsetStr;

        channelsByTimezones[offset] = [...channelsByTimezones[offset] || [], channel];
    }

    return channelsByTimezones;
}

export const channelsByTimezoneOffsets = getChannelsByTimezoneOffsets();

function getAllTimezones() {
    return [...Object.entries(channelsByTimezoneOffsets)]
        .sort(([a, _1], [b, _2]) => (a > b))
        .map(([offset, channels]) => ({timezoneName: channels[0].timezoneName, offset}));
}

export const allTimezones = getAllTimezones();

export default channels;
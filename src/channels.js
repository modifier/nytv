import ct from 'countries-and-timezones';

export const channels = [
    {
        timezoneName: 'Europe/Dublin',
        title: 'Дублин',
        lang: 'gb',
        url: 'https://www.rte.ie/player/onnow'
    },
    {
        timezoneName: 'Europe/London',
        title: 'Лондон',
        lang: 'gb',
        url: 'https://www.youtube.com/watch?v=9Auq9mYxFEE'
    },
    {
        timezoneName: 'Asia/Seoul',
        title: 'Сеул',
        lang: 'kr',
        url: 'https://www.youtube.com/watch?v=4gwqZYZ-OSw'
    }
];

function getChannelsByTimezoneOffsets() {
    const channelsByTimezones = {};
    for (let id = 0; id < channels.length; id++) {
        const channel = channels[id];
        const timezone = ct.getTimezone(channel.timezoneName);
        const offset = 'dstOffsetStr' in timezone ? timezone.dstOffsetStr : timezone.utcOffsetStr;

        channelsByTimezones[offset] = [...channelsByTimezones[offset] || [], {...channel, id}];
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
import ct from 'countries-and-timezones';

const channels = [
    {
        timezone: 'Europe/Dublin',
        title: 'Дублин',
        lang: 'en',
        url: 'https://www.rte.ie/player/onnow'
    },
    {
        timezone: 'Asia/Seoul',
        title: 'Сеул',
        lang: 'en',
        url: 'https://www.youtube.com/watch?v=4gwqZYZ-OSw'
    }
];

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

    return [...timezones.entries()]
        .sort(([a, _1], [b, _2]) => (a > b))
        .map(([offset, timezone]) => ({timezone, offset}));
}

export const allTimezones = getAllTimezones();

export default channels;
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
        url: 'https://www.youtube.com/embed/9Auq9mYxFEE'
    },
    {
        timezoneName: 'Asia/Seoul',
        title: 'Сеул',
        lang: 'kr',
        url: 'https://www.youtube.com/embed/4gwqZYZ-OSw'
    },
    {
        timezoneName: 'Pacific/Fiji',
        title: 'Фиджи',
        lang: 'fj',
        url: 'https://www.fijione.tv/live-tv/'
    },
    {
        timezoneName: 'Pacific/Auckland',
        title: 'Окланд',
        lang: 'nz',
        url: 'https://ondemand.parliament.nz'
    },
    {
        timezoneName: 'Pacific/Guam',
        title: 'Гуам',
        lang: 'gu',
        url: 'https://livestream.com/pncnews/newstalk57'
    },
    {
        timezoneName: 'Australia/Sydney',
        title: 'Сидней',
        lang: 'au',
        url: 'https://www.youtube.com/embed/W1ilCy6XrmI'
    },
    {
        timezoneName: 'Asia/Tokyo',
        title: 'Токио',
        lang: 'jp',
        url: 'https://www3.nhk.or.jp/nhkworld/common/player/tv/live/embed/embed.html'
    },
    {
        timezoneName: 'Asia/Taipei',
        title: 'Тайпей',
        lang: 'tw',
        url: 'https://www.youtube.com/embed/XxJKnDLYZz4'
    },
    {
        timezoneName: 'Asia/Shanghai',
        title: 'Пекин',
        lang: 'cn',
        url: 'https://www.cgtn.com/tv'
    },
    {
        timezoneName: 'Asia/Dhaka',
        title: 'Дхака',
        lang: 'bd',
        url: 'https://www.tvoneuk.tv'
    },
    {
        timezoneName: 'Indian/Maldives',
        title: 'Мальдивы',
        lang: 'mv',
        url: 'https://maldivestv.mv'
    },
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
        .map(([offset, channels]) => ({timezoneName: channels[0].timezoneName, offset}))
        .sort((a, b) => (a.offset > b.offset ? 1 : -1));
}

export const allTimezones = getAllTimezones();

export default channels;
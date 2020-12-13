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
    {
        timezoneName: 'Asia/Karachi',
        title: 'Indus News',
        lang: 'pk',
        url: 'https://www.youtube.com/embed/D9KHbHipoJ4'
    },
    {
        timezoneName: 'Asia/Karachi',
        title: 'ARY',
        lang: 'pk',
        url: 'https://live.arydigital.tv'
    },
    {
        timezoneName: 'Asia/Tashkent',
        title: 'Uzreport TV',
        lang: 'uz',
        url: 'https://uzreport.news/live'
    },
    {
        timezoneName: 'Asia/Dubai',
        title: 'Al Arabiya',
        lang: 'ae',
        url: 'https://www.youtube.com/embed/_M7Kcs8el-Q'
    },
    {
        timezoneName: 'Asia/Dubai',
        title: 'Dubai One',
        lang: 'ae',
        url: 'https://www.awaan.ae/live/10/One-Tv'
    },
    {
        timezoneName: 'Europe/Istanbul',
        title: 'TRT World',
        lang: 'tr',
        url: 'https://www.youtube.com/embed/CV5Fooi8YJA'
    },
    {
        timezoneName: 'Europe/Moscow',
        title: 'Russia 1',
        lang: 'ru',
        url: 'https://m.russia.tv'
    },
    {
        timezoneName: 'Europe/Moscow',
        title: 'Belarus 24',
        lang: 'by',
        url: 'https://belarus24.by'
    },
    {
        timezoneName: 'Africa/Nairobi',
        title: 'Universal TV',
        lang: 'so',
        url: 'https://www.universaltvsomali.net/home'
    },
    {
        timezoneName: 'Africa/Nairobi',
        title: 'KTN News',
        lang: 'ke',
        url: 'https://www.youtube.com/embed/zl7Ppm2fJMw'
    },
    {
        timezoneName: 'Europe/Bucharest',
        title: 'TBR',
        lang: 'ro',
        url: 'https://www.tvrplus.ro'
    },
    {
        timezoneName: 'Africa/Johannesburg',
        title: 'CNBC',
        lang: 'za',
        url: 'https://www.youtube.com/embed/CV5Fooi8YJA'
    },
    {
        timezoneName: 'Africa/Johannesburg',
        title: 'Gqama TV',
        lang: 'za',
        url: 'http://www.gqama.tv/live.php'
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
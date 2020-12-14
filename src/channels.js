import ct from 'countries-and-timezones';

export const channels = [
    {
        timezoneName: 'Europe/Dublin',
        title: 'TG4',
        lang: 'ie',
        url: 'https://www.tg4.ie/en/player/watch-live/home/',
        video: 'https://csm-e-tg4ie.tls1.yospace.com/csm/live/195340990.m3u8'
    },
    {
        timezoneName: 'Europe/London',
        title: 'Sky News',
        lang: 'gb',
        url: 'https://www.youtube.com/embed/9Auq9mYxFEE'
    },
    {
        timezoneName: 'Asia/Seoul',
        title: 'KBS',
        lang: 'kr',
        url: 'https://www.youtube.com/embed/4gwqZYZ-OSw'
    },
    {
        timezoneName: 'Pacific/Fiji',
        title: 'Fiji TV',
        lang: 'fj',
        url: 'https://livestream.com/accounts/19514369/events/6947821/player?enableInfoAndActivity=true&defaultDrawer&autoPlay=true&mute=false'
    },
    {
        timezoneName: 'Pacific/Auckland',
        title: 'Parliament',
        lang: 'nz',
        url: 'https://ondemand.parliament.nz'
    },
    {
        timezoneName: 'Pacific/Guam',
        title: 'Гуам',
        lang: 'gu',
        url: 'https://livestream.com/accounts/10612724/events/8102121/player?enableInfoAndActivity=true&defaultDrawer=&autoPlay=true'
    },
    {
        timezoneName: 'Australia/Sydney',
        title: 'ABC News',
        lang: 'au',
        url: 'https://www.youtube.com/embed/W1ilCy6XrmI'
    },
    {
        timezoneName: 'Asia/Tokyo',
        title: 'NHK World',
        lang: 'jp',
        url: 'https://www3.nhk.or.jp/nhkworld/common/player/tv/live/embed/embed.html'
    },
    {
        timezoneName: 'Asia/Taipei',
        title: 'FTVN',
        lang: 'tw',
        url: 'https://www.youtube.com/embed/XxJKnDLYZz4'
    },
    {
        timezoneName: 'Asia/Shanghai',
        title: 'CGTN',
        lang: 'cn',
        url: 'https://www.cgtn.com/tv',
        video: 'https://news.cgtn.com/resource/live/english/cgtn-news.m3u8'
    },
    {
        timezoneName: 'Asia/Dhaka',
        title: 'TV One',
        lang: 'bd',
        url: 'https://www.tvoneuk.tv'
    },
    {
        timezoneName: 'Indian/Maldives',
        title: 'Maldives TV',
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
    {
        timezoneName: 'Africa/Cairo',
        title: 'Alghad TV',
        lang: 'eg',
        url: 'https://www.youtube.com/embed/s_lfbFjs_Yw'
    },
    {
        timezoneName: 'Europe/Stockholm',
        title: 'Expressen TV',
        lang: 'se',
        url: 'https://www.squidtv.net/europe/sweden/sweden-013.html'
    },
    {
        timezoneName: 'Atlantic/Reykjavik',
        title: 'RUV',
        lang: 'is',
        url: 'https://www.ruv.is/ruv'
    },
    {
        timezoneName: 'Atlantic/Cape_Verde',
        title: 'RTP Africa',
        lang: 'cv',
        url: 'https://www.rtp.pt/play/direto/rtpafrica'
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

const timezoneReg = /([-+]\d+):(\d+)/;

function getAllTimezones() {
    return [...Object.entries(channelsByTimezoneOffsets)]
        .map(([offset, channels]) => ({timezoneName: channels[0].timezoneName, offset}))
        .sort((a, b) => {
            const [_a, signedValueA] = a.offset.match(timezoneReg);
            const [_b, signedValueB] = b.offset.match(timezoneReg);

            return (parseInt(signedValueA, 10) > parseInt(signedValueB, 10) ? 1 : -1);
        });
}

export const allTimezones = getAllTimezones();

export default channels;
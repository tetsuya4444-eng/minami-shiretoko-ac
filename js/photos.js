// 南知床山岳会 - 写真データ（manifest.yaml の JS版）
// 写真を追加するときは、images/photos/ にファイルを置き、ここに1行追加するだけでOK。

window.SSAC_PHOTOS = {
  photographer: "K.Yama",
  creditText: "Photo by K.Yama",

  // ヒーローのスライドショーで使う写真（画面映え重視で8枚を選定）
  heroSlides: [
    { slug: "shibetsu-dake", name: "標津岳" },
    { slug: "musa-dake", name: "武佐岳" },
    { slug: "rausu-dake-1", name: "羅臼岳" },
    { slug: "shari-dake-ikushina", name: "斜里岳（以久科地区から）" },
    { slug: "mashu-from-risuke", name: "リスケ山から望む摩周岳と摩周湖" },
    { slug: "meakan-akanfuji", name: "雌阿寒岳・阿寒富士" },
    { slug: "mokoto-iou", name: "藻琴山・硫黄山" },
    { slug: "nishibetsu-mashu", name: "西別岳・摩周岳" }
  ],

  // 「私たちが歩く山々」ギャラリー用（重要な山を上に、その他を続けて）
  // featured: true は大きく表示、false は通常サイズ
  gallery: [
    { slug: "shibetsu-dake",          name: "標津岳",                     elevation: "1,061m", featured: true,
      caption: "本会の原点となる山。毎年6月に整備を実施。" },
    { slug: "musa-dake",              name: "武佐岳",                     elevation: "1,005m", featured: true,
      caption: "中標津町を代表する山。山頂から知床連山と太平洋を一望。" },
    { slug: "unabetsu-dake",          name: "海別岳",                     elevation: "1,419m", featured: false,
      caption: "知床半島の付け根に立つ堂々とした山容。" },
    { slug: "rausu-dake-1",           name: "羅臼岳",                     elevation: "1,661m", featured: false,
      caption: "知床連山の主峰。" },
    { slug: "rausu-dake-2",           name: "羅臼岳（別アングル）",       elevation: "1,661m", featured: false,
      caption: null },
    { slug: "shari-dake-ikushina",    name: "斜里岳",                     elevation: "1,547m", featured: false,
      caption: "以久科地区から。裾野の広がりが美しい。" },
    { slug: "shari-dake-mashu1ten",   name: "斜里岳",                     elevation: "1,547m", featured: false,
      caption: "摩周第1展望台から。" },
    { slug: "mashu-dake",             name: "摩周岳",                     elevation: "857m",   featured: false,
      caption: null },
    { slug: "mashu-from-risuke",      name: "摩周岳と摩周湖",             elevation: null,     featured: false,
      caption: "リスケ山から。摩周湖を眼下に。" },
    { slug: "nishibetsu-mashu",       name: "西別岳・摩周岳",             elevation: null,     featured: false,
      caption: null },
    { slug: "oakan-dake",             name: "雄阿寒岳",                   elevation: "1,370m", featured: false,
      caption: null },
    { slug: "meakan-akanfuji",        name: "雌阿寒岳・阿寒富士",         elevation: null,     featured: false,
      caption: null },
    { slug: "meakan-oakan-mashu1ten", name: "雌阿寒岳・雄阿寒岳",         elevation: null,     featured: false,
      caption: "摩周第一展望台から。" },
    { slug: "mokoto-iou",             name: "藻琴山・硫黄山",             elevation: null,     featured: false,
      caption: null },
    { slug: "moan-yama",              name: "モアン山",                   elevation: null,     featured: false,
      caption: null },
    { slug: "nishitake-yama",         name: "西竹山",                     elevation: null,     featured: false,
      caption: "2026年3月の冬山企画山行で訪れた山。" },
    { slug: "fuppushi-dake",          name: "フップシ岳",                 elevation: null,     featured: false,
      caption: null },
    { slug: "samakkenupuri",          name: "サマッケヌプリ",             elevation: null,     featured: false,
      caption: null },
    { slug: "sawanchisap-boshiyama",  name: "サワンチサップ（帽子山）",   elevation: null,     featured: false,
      caption: null },
    { slug: "makuwanchisap-kabutoyama", name: "マクワンチサップ（兜山）", elevation: null,     featured: false,
      caption: null },
    { slug: "rubesu-dake",            name: "瑠辺斯岳",                   elevation: null,     featured: false,
      caption: null },
    { slug: "birao-yama",             name: "美羅尾山",                   elevation: null,     featured: false,
      caption: null },
    { slug: "eirei-zan",              name: "英嶺山",                     elevation: null,     featured: false,
      caption: null },
    { slug: "hekirei-zan",            name: "辺計礼山",                   elevation: null,     featured: false,
      caption: null }
  ]
};

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

  // 「私たちが歩く山々」ギャラリー用
  gallery: [
    { slug: "shibetsu-dake", name: "標津岳", elevation: "1,061m", featured: true,
      caption: "本会の原点となる山。毎年6月に整備を実施。" },
    { slug: "musa-dake",     name: "武佐岳", elevation: "1,005m", featured: true,
      caption: "中標津町を代表する山。山頂から知床連山と太平洋を一望。" }
  ]
};

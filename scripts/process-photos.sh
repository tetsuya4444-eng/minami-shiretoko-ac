#!/usr/bin/env bash
# K.Yama さん提供写真を取り込み、Web用に最適化する。
# 入力: /Users/oguratetsuya/Claude/入力フォルダ/Photo by K.Yama
# 出力: minami-shiretoko-web/images/photos/{slug}.jpg (1920px max, JPEG quality 80)
# 原本: minami-shiretoko-web/images/_originals/{slug}.JPG (gitignore)
set -euo pipefail

SRC="/Users/oguratetsuya/Claude/入力フォルダ/Photo_by_K.Yama"
PROJ_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DST_WEB="$PROJ_ROOT/images/photos"
DST_ORIG="$PROJ_ROOT/images/_originals"

mkdir -p "$DST_WEB" "$DST_ORIG"

# slug マップ：原本ファイル名 → Web用slug
declare -a MAP=(
  "サマッケヌプリ.JPG|samakkenupuri"
  "サワンチサップ：帽子山.JPG|sawanchisap-boshiyama"
  "フップシ岳.JPG|fuppushi-dake"
  "マクワンチサップ：兜山.JPG|makuwanchisap-kabutoyama"
  "モアン山.jpg|moan-yama"
  "リスケ山からの摩周岳と摩周湖.JPG|mashu-from-risuke"
  "摩周岳.JPG|mashu-dake"
  "斜里岳（以久科地区から）.JPG|shari-dake-ikushina"
  "斜里岳（摩周第1展望台から）.JPG|shari-dake-mashu1ten"
  "標津岳.JPG|shibetsu-dake"
  "武佐岳.JPG|musa-dake"
  "海別岳.JPG|unabetsu-dake"
  "瑠辺斯岳.JPG|rubesu-dake"
  "羅臼岳 (2).JPG|rausu-dake-2"
  "羅臼岳(1).JPG|rausu-dake-1"
  "美羅尾山.JPG|birao-yama"
  "英嶺山.JPG|eirei-zan"
  "藻琴山・硫黄山.JPG|mokoto-iou"
  "西別岳・摩周岳.jpg|nishibetsu-mashu"
  "西竹山.JPG|nishitake-yama"
  "辺計礼山.JPG|hekirei-zan"
  "雄阿寒岳.jpg|oakan-dake"
  "雌阿寒岳・阿寒富士.JPG|meakan-akanfuji"
  "雌阿寒岳・雄阿寒岳（摩周第一展望台から）.JPG|meakan-oakan-mashu1ten"
)

for entry in "${MAP[@]}"; do
  IFS='|' read -r src_name slug <<< "$entry"
  src_path="$SRC/$src_name"
  if [[ ! -f "$src_path" ]]; then
    echo "[skip] not found: $src_name"
    continue
  fi
  # 原本コピー
  cp "$src_path" "$DST_ORIG/$slug.JPG"
  # Web用：1920px max + JPEG q80
  sips -Z 1920 -s format jpeg -s formatOptions 80 \
       "$src_path" --out "$DST_WEB/$slug.jpg" >/dev/null
  size=$(stat -f%z "$DST_WEB/$slug.jpg")
  printf "[ok] %-45s -> %s.jpg (%d KB)\n" "$src_name" "$slug" "$((size/1024))"
done

echo ""
echo "=== summary ==="
echo "web photos: $(ls "$DST_WEB" | wc -l | tr -d ' ') files, $(du -sh "$DST_WEB" | cut -f1)"
echo "originals : $(ls "$DST_ORIG" | wc -l | tr -d ' ') files, $(du -sh "$DST_ORIG" | cut -f1)"

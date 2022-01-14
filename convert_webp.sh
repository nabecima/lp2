#!/bin/bash
# ./src/imagesからjpeg jpg pngを取得
images=`find ./src/images -type f -name '*.jpg' -or -name '*.jpeg' -or -name '*.png'`

# ループ
for image in $images;
do
  # 拡張子のみ取得
  extension=${image##*.}

  # 拡張子によって条件分岐し、圧縮コマンドを実行
  case $extension in
    "png" ) pngquant -s1 --ext .png $image -f;;
    "jpg" | "jpeg" ) jpegoptim --strip-all -m70 $image;;
  esac

  # 拡張子を含むファイル名を取得
  filename_with_extension=`basename $image`

  # 拡張子を取り除いたファイル名だけを取得
  filename=${filename_with_extension%.*}

  # webpに変換
  cwebp $image -o "./src/images/"$filename".webp"
done
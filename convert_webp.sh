#!/bin/bash
images=`find ./src/images -type f -name '*.jpg' -or -name '*.jpeg' -or -name '*.png'`
for image in $images;
do
  tmp=`basename $image`
  file_name=${tmp%.*}
  cwebp $image -o "./src/images/"$file_name".webp"
done
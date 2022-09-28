#!/bin/sh
papersize=Letter

rm -f *.pdf *.svg
for RR in 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23; do
starmap -D 15 -R $RR -F 180 -M 5 +c +e -b -g -d +t -m -G 1024x1024 -s screen -o $RR.svg
starmap -D 15 -R $RR -F 180 -M 5 +c +e +b -g -d +t -m -G 1024x1024 -s screen -o $RR+b.svg
starmap -D 15 -R $RR -F 180 -M 5 +c +e -b +g -d +t -m -G 1024x1024 -s screen -o $RR+g.svg
starmap -D 15 -R $RR -F 180 -M 5 +c +e +b +g -d +t -m -G 1024x1024 -s screen -o $RR+bg.svg
sed -i 's/fill:rgb(0%,0%,0%);fill-opacity:1/fill:rgb(0%,0%,0%);fill-opacity:0/g' $RR.svg $RR+b.svg $RR+g.svg $RR+bg.svg
starmap -D 15 -R $RR -F 180 -M 5 +c +e -b -g -d +t -m -P 400x300 -s print -o $RR.pdf
starmap -D 15 -R $RR -F 180 -M 5 +c +e +b -g -d +t -m -P 400x300 -s print -o $RR+b.pdf
starmap -D 15 -R $RR -F 180 -M 5 +c +e -b +g -d +t -m -P 400x300 -s print -o $RR+g.pdf
starmap -D 15 -R $RR -F 180 -M 5 +c +e +b +g -d +t -m -P 400x300 -s print -o $RR+bg.pdf
gssettings="-dQUIET -dSAFER -dNOPAUSE -dBATCH -dPrinted=false -dCompatibilityLevel=1.7 -dPDFSETTINGS=/ebook"
tmpfile=$(mktemp $RR.XXXXXX.pdf)
gs $gssettings -dDEVICEWIDTHPOINTS=1080 -dDEVICEHEIGHTPOINTS=864 -dFIXEDMEDIA -dPDFFitPage -sDEVICE=pdfwrite -sOutputFile="$tmpfile" "$RR.pdf"
gs $gssettings -sPAPERSIZE=$(echo "$papersize" | tr '[:upper:]' '[:lower:]')  -dPDFFitPage -sDEVICE=pdfwrite -sOutputFile="$RR.pdf" "$tmpfile"
rm "$tmpfile"
done

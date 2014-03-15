#!/bin/bash
#Check Number of args
if [ "$#" -ne 1 ]; then
    echo "Usage: screens.sh base_url"
    exit 1
fi


#Create urls.txt if it doesn't already exist

if [ ! -f urls.txt ]; then
	touch urls.txt
fi

#Loop through urls.txt and give it to phantomJS. If no text exists in urls.txt then it will just do the base url
for var in `tr '\n' ' ' < urls.txt`
do
	echo "Creating screenshot for hash $1$var"	
	phantomjs screenshots.js $1 "$var" &
done
wait

echo "Converting files to pdf"
convert screens/*.png images/screens.pdf
#Basic Screen Shot Generator

This simple screenshot generator script will parse a text file and then use PhantomJS to generator a screenshot for it

##Requirements
1. PhantomJS (and all related requirements for that)
2. ImageMagick (for automatic PDF conversion)

##Directions

1. Create a text file called urls.txt which will contain a list of urls seperated by new lines
2. Run `sh screens.sh base_url`
3. Screenshots will be generated in the images directory along with a pdf file that puts them all into one file.

Please note that the text in urls.txt should contain anything that needs to come after the base path


##Cookies
To add cookies copy the file config/cookies.json to the root of the project. One example has already been put in. Simply edit the example and add new objects of the same form to the array as needed.

###Todo
- Change script so that it accepts flags instead of just sequenced arguments
- Allow view port size to be changed in the arguments

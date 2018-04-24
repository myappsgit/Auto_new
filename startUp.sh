#!/bin/bash
if [ -f "$setUp.txt"];then
    del "$setUp.txt"
fi
echo setUp.txt
echo TAG_NAME>>setUp.txt
echo %~1>>setUp.txt
echo %~2>>setUp.txt
echo %~3>>setUp.txt
echo %~4>>setUp.txt
echo %~5>>setUp.txt
mvn test -Dcucumber.options="--tags @Sanity1 --tags "~@donotrun"";

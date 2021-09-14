/**
 * 
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input 0

07:05:45PM
Sample Output 0

19:05:45

 */

//First Solution

function timeConversion(s) {
    // Write your code here
    if(s.slice(-2) === "PM"){
        if(parseInt(s.slice(0,2)) < 12){
            return (12 + parseInt(s.slice(0,2))).toString() + s.slice(2).replace("PM", "")
        }
        else{
             return s.replace("PM", "")
        }
    }
       return parseInt(s.slice(0,2)) === 12 ?
             "0"+(12 - parseInt(s.slice(0,2))).toString() + s.slice(2).replace("AM", "")
            : s.replace("AM","")
}


//Second Neet solution

let AMPM = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");
    
    if (AMPM === "AM" && timeArr[0] === "12") {
        // catching edge-case of 12AM
        timeArr[0] = "00";
    } else if (AMPM === "PM") {
        // everything with PM can just be mod'd and added with 12 - the max will be 23
        timeArr[0] = (timeArr[0] % 12) + 12
    }
    
    return timeArr.join(":");



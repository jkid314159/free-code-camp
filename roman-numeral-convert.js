uthor: Alex Cholakis (@jkid314159)
**  File Name: roman_numeral_converter
**  Comment:  Exercise completed for Free Code Camp
**    Input must be in the range 1 - 4999
*/

function convertToRoman(numIn) {
	/*Variable declarations*/
	var num      = numIn;
	var arrOut   = [];
	var digitOut = 0;
	var exponent = -1;
	var baseTen  = -1;
	var placeVal = 0;
	var divisor  = 0;
	var keyVal   = 0;
    var letters = [
    	[    4-9,   ["IV", "IX"] ],
    	[   40-90,  ["XL", "XC"] ],
    	[  400-900, ["CD", "CM"] ],
    	[ 1000, "M" ],
    	[  500, "D" ],
    	[  100, "C" ],
    	[   50, "L" ],
    	[   10, "X" ],
    	[    5, "V" ],
    	[    1, "I" ]
    ];
    
    /**Checks number for multiple of nine,four**/
    function getDigit(num) {
    	for (exp = 2; exp >= 0; exp--) {
    		//base Ten number: 1, 10, 100, etc
    		var setBaseTen = Math.pow(10, exp);
    		//divide by multiple of ten
    		var digitIn = Math.floor(num / setBaseTen);
    		//found nine
    		if ( digitIn == 9) {
    		  exponent = exp;
    		  baseTen = setBaseTen;
    		  return digitIn;
    		} else if ( digitIn == 4 ) {
    			exponent = exp;
    			baseTen = setBaseTen;
    			return digitIn;
    		}

    	}//for-end
    	
    	//No multiple of 9 set flags to false
    	exponent = -1;
    	baseTen = -1;
    	return false;

    }//getDigit-end
    
    /**Push roman numeral onto array**/
    function setLetter(placeValIn, div_exp, keyVal) {
    	var setIndex = div_exp;
    	
    	switch(placeValIn) {
    		case 4:
    			arrOut.push(letters[setIndex][1][0]);
    		    //subtract the multiple of nine from number
    		    num = num - ( 4 * baseTen);
    		    break;
    		case 9://multiple of 9
    			arrOut.push(letters[setIndex][1][1]);
    		    //subtract the multiple of nine from number
    		    num = num - ( 9 * baseTen);
    		    break;
    		default:
    		    for (var j = 1; j <= placeVal; j++) {
        		    arrOut.push(keyVal);
        		}
 
    	}//switch-end
    }//setLetter-end
    	
    /**Find single digit value of place value**/
    function getPlaceValue( num, divisor ) {
    	placeVal =  Math.floor( num / divisor );
    	return placeVal;
    	
    }//placeValue-end
    
 
    
    /**Begin function **/
    //test input for restrictions
    if ( num > 4999 || num < 1 ) {
    	console.log("Error: Input must be in the range of 1 to 4999!");
    } else {
    	for ( index = 3; index < letters.length; index++ ) {
    	    //denominator of fraction division
    	    divisor = letters[index][0];
    	
    	    keyVal  = letters[index][1];
    	
    	    //check for multiple of 9
    	    digitOut = getDigit(num);
    	
    	    if ( digitOut == 4 ) {
    		    //has multiple of 4 so set place value
    		    placeVal = 4;
    		    //set Roman Numerals into array
    		    setLetter(placeVal, exponent, keyVal);
    	    } else if ( digitOut == 9 ) {
    		    //has multiple of 9 so set place value
    		    placeVal = 9;
    		    //set Roman Numerals into array
    		    setLetter(placeVal, exponent, keyVal);
    	    } else {
    		    //return digit for place value
    		    placeVal = getPlaceValue( num, divisor );
    		    //set Roman Numerals into array
    		    if (placeVal !== 0) {
    			    setLetter(placeVal, divisor, keyVal);
             }//if-else-end
    	    }
 
        num  = num % divisor;

        }//for-end
   
   var romanOut = arrOut.join("");
   console.log(romanOut);
   return(romanOut);
    }//if-else-end
    
}//convertToRoman-end

convertToRoman(400);

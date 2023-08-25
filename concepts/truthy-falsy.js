/* Truthy 
1. true
2. any number(+ve or -ve)
3. string including - '0', 'false'
4. object - including empty {} 
5. array - including empty [] 
*/
/* Falsy 
1. false
2. 0
3. empty string ('')
4. undefined
5. null
*/

const x = 0;
(x) ? console.log('value is truthy') : console.log('value is falsy')

// validation for falsy value
if (!x) console.log('check: falsy')
// validation for truthy value
if (!!x) console.log('check: truthy')
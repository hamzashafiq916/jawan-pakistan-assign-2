//////////////// Q1: Solve the below code of expressions using short circuit?//////

//I.
 let exp = "faraz" || (true + false) + 5 && " " || "true";
//   output
//         "faraz" || 1 + 5 && " " || "true"
//         "faraz" || 6 && " " || "true"
//         "faraz" || " " || "true"
//         "faraz" || " " 
//         "faraz"
console.log(exp);
// II.
 let b = 3
 let exp1 = (1 + 2) + ++b || 5 && 0 ;   // for b = 3;
//   output
//          3 + 4 || 5 && 0 ; 
//            7 || 0 ;
//             7
console.log(exp1);

// III.
 let  a = 5;
 let exp2 = 32 && true - ++a && " " || "true"; //for a = 5;
//   output
//          32 && 1 - 6 && " " || "true"
//          32 && -5 && " " || "true"
//          -5 && " " || "true"
//          " " || "true"
//          " "
console.log(exp2);
// IV.
 let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
//   output
//          20 && undefined || "faraz" + 5;
//           undefined || faraz5;
//           faraz5;
console.log(exp3);
// V.
 let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";
//   output
//          32abc || 1 || + 5 || "true";
//                32abc
console.log(exp4);
// VI.
 let exp5 = false || (true + true) + 15 && "" || 50;
//   output
//          0 || 17 && "" || 50;
//           0 || "" || 50
//           50
console.log(exp5);
// VII.
 let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
//   output
//          6 || 8 + "abc" || "true";
//            6 || 8abc || "true";
//               6
console.log(exp6);
// VIII.
 let exp7 = "faraz" || false + 10 || "true";
//   output
//               faraz
console.log(exp7);
// IX.
 let exp8 = 12 + (false + false) + true && null || "faraz";
//   output
//          13 && null || "faraz";
//             null || "faraz";
//               faraz
console.log(exp8);
// X.
let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
// output
//             3
console.log(exp9);

// XI.
 let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
// output
//             6
console.log(exp10)
// XII.
 let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
 //   output
 //       "" ||  - 13
 //          -13
 console.log(exp11);


 ///////////////////////////// question 2 ////////////////////////////


//  Q2: Create a mobile brand and model filtering app with filter mobile brand and then second
//  dropdown have same brand model in second dropdown and a single search button when click
//  the selected brand and model have shown in html body




var x='abdd'
var y='dbac'

// var x2=x.split("")
// var y2=y.split("")
// console.log(x2);
// console.log(y2);
// x2.find(function(el)
// {
//     y2.find(function(el2)
//     {
//         if(el2==el)
//         {
//             console.log(true)
//         }
//     })
// })

// for(var i=0;i<x.length;i++)
// {
//     for(var j=0;j<y.length;j++)
//     {
//         if(y[j]==x[i])
//         console.log(true)
//     }
// }

var a = "abcd";
var b = "dbab";
// let lena = a.length;
// let lenb = b.length;
// function checkAlok(a,b)
// {
//   if (lena == lenb)
//   {
//     for (i =0; i < a.length; i++)
//     {
//         for ( j = 0; j < a.length; j++)
//         {
//             if (a[i] == b[j]){
//                 return true;
//             }
//         }
//         return false;
//     }
//  }
// }
// console.log(checkAlok(a,b));

function fun(a,b)
{
    let sorteda=a.split("").sort().join("");
    let sortedb=b.split("").sort().join("");
    return sorteda===sortedb;
}
console.log(fun(a,b))
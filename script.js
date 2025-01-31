// sonlar = [2, 4, 9, 10, 45, 67, 8, 90]

// juft_sonlar = []


// for son in sonlar:
// if son % 2 == 0:
//     juft_sonlar.append(son)

// for (;;) {
//     console.log("Bu cheksiz sikl!");
// }

let array = [2, 4, 9, 10, 45, 67, 8, 90];
let juft = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        juft.push(array[i]);
    }
}
console.log(array, `Bu barcha sonlar`)  
console.log(juft,`BUlar esa juft sonlar`);

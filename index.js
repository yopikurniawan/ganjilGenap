function ganjilGenap(plat) {
    if (plat === undefined) {
        return 'invalid data'
    } else if (plat === '') {
        return 'plat tidak ditemukan'
    }

    //split berdasarkan titik koma
    let arr = []
    let temp = ''
    for (let i=0; i<=plat.length; i++) {
        if (plat[i] != ';' && plat[i] != undefined) {
            temp = temp + plat[i]
        } else {
            arr.push(temp)
            temp = ''
        }
    }
    let jumlahGanjil = 0
    let jumlahGenap = 0
    //parse ke Number dan cek ganjil atau genap
    for (let j=0; j<arr.length; j++) {
        if (Number(arr[j])%2==0) {
            jumlahGenap++
        } else {
            jumlahGanjil++
        }
    }

    if (jumlahGenap === 0) {
        return `plat ganjil sebanyak ${jumlahGanjil} dan plat genap tidak ditemukan`
    } else if (jumlahGanjil === 0) {
        return `plat genap sebanyak ${jumlahGenap} dan plat ganjil tidak ditemukan`
    } else if (jumlahGanjil != 0 && jumlahGenap != 0){
        return `plat genap sebanyak ${jumlahGenap} dan plat ganjil sebanyak ${jumlahGanjil}`
    }
  }
  
  console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
  console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
  console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
  console.log(ganjilGenap('')) //plat tidak ditemukan
  console.log(ganjilGenap()) //invalid data





  
  
  
//   function mySplit(str, splitter) {
//     let arr = []
//     let temp = ''
//     for (let i=0; i<=str.length; i++) {
//         if (str[i] != splitter && str[i] != undefined) {
//             temp = temp + str[i]
//         } else {
//             arr.push(temp)
//             temp = ''
//         }
//     }
//     return arr
//   }

//   console.log(mySplit('2341342986413091276','1'))  
  
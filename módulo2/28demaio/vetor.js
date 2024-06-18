let num = [27, 10, 3, 0, 20, 5, 6, 3]
let par = []
let impar = []


num.push(18)


for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        par.push(num[i])
        
      
        
    }       
    else if (i % 2 != 0){
        impar.push(num[i])

    }
    
   
}
console.log(impar)




const navbarLi= document.querySelectorAll('.navbar li')
console.log(navbarLi)

for(let i of navbarLi){
    i.addEventListener('click',()=>{
        for(let j of navbarLi){
            j.classList.remove('active')
        }
        
        i.classList.add('active')
    })
}

// cities

// const imgLeft= document.querySelectorAll('.left-item .img-left')
// console.log(imgLeft)


// for(let i of imgLeft){
//     i.addEventListener('click',(e)=>{

//         let family= e.target.parentElement
//         console.log(family)


//         family.classList.toggle('active')

//         let content= e.target.nextElementSibling
//         console.log(content)

//         if(i.parentElement.classList.contains('active')){
//             content.style.display='block'
//         }
//         else{
//             content.style.display='none'
//         }
//     })
// }


const city= document.querySelectorAll('.cities .left-item')
console.log(city)

for(let i of city){
    i.onclick= (e)=>{

        // omadi khodeh in box ha ro gerefti va class active ro hazfeh kardi 
        for(let j of city){
            j.classList.remove('active')
        }

        // be hame on box ha class active kardi
        i.classList.add('active')

        // omadi bache ha ro gerefti
        let childreen= i.children
        console.log(childreen)

        // childreen[0] axe ha ro gereftam
        let imgLeft = childreen[0]
        console.log(imgLeft)

        //  childreen[1] matan ro gereftam
        let content= childreen[1]
        console.log(content)

        // baray in shart nadadam chon niza nabood va be moshkel khordam 
        // pas to hamoon css omdam kar ro tamom kardam va ba js shart dg nazashtam


        // omadam ye timmer gozashtam ta khidesh on class ro hazfeh bokoneh
        setTimeout(()=>{
            i.classList.remove('active')
        },3333)
    }
}


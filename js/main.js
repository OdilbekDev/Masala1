let elList = document.querySelector('.list')

const arr = ['apple', 'pear', 'quince', 'kiwi']

// for(let i = 0; i< arr.length; i++){
//     let new_li = document.createElement('li')
//     new_li.textContent = arr[i]
//     new_li.classList.add('list__item')
//     elList.appendChild(new_li)
// }
// let elListItem = document.querySelectorAll('.list__item')

// for(let i = 0; i < elListItem.length; i++){
//     elListItem[i].addEventListener('click', function(event){
//         elListItem.forEach((e, i)=>{
//             e.style.color = 'black'
//         })
//     })
//     elListItem[i].addEventListener('click', function(event){
//         event.target.style.color = 'yellow'
//     })
// }

for(let i = 0; i< arr.length; i++){
    let new_li = document.createElement('li')
    let img = document.createElement('img')
    new_li.appendChild(img)
    elList.appendChild(new_li)
    new_li.classList.add('list__item')
    img.classList.add('list__item-img')
    img.style.width = '150px'
    img.setAttribute('src', 'https://assets.asaxiy.uz/product/main_image/desktop//609b7a820386d.jpeg.webp')
}
let elListItemImg = document.querySelectorAll('.list__item-img')
for(let i = 0; i < elListItemImg.length; i++){
    elListItemImg[i].addEventListener('click', function(event){
        elListItemImg.forEach((e, i)=>{
            console.log(e);
            e.style.width = '150px'
            e.setAttribute('src', 'https://assets.asaxiy.uz/product/main_image/desktop//609b7a820386d.jpeg.webp')
        })
    })
    elListItemImg[i].addEventListener('click', function(event){
        event.target.setAttribute('src', 'https://assets.asaxiy.uz/product/items/desktop/efa0470f9b715bfe9430998146be9bb420200722162837186854T14ggYgWm.jpg.webp')
        event.target.style.width = '150px'
    })
}
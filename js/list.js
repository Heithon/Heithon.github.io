// NexT.nav={};

// NexT.motion.creator = function(){

    // 添加链接，{href:,logo:,name:,infor:}
// 友链------------------------------------
// let friendlink_list = [
//     {
//         href:"https://mashiro.pub/",
//         logo:"/images/icons/shina.png",
//         name:"LoliMashiro",
//         infor:"呐，你想变成什么颜色？"
//     },
//     {
//         href:"https://mashiro.pub/",
//         logo:"/images/icons/shina.png",
//         name:"LoliMashiro",
//         infor:"呐，你想变成什么颜色？"
//     },
// ]
// // 大佬博客-------------------------------------
// let blogs_list = [
//     {
//         href:"https://mashiro.pub/",
//         logo:"/images/icons/shina.png",
//         name:"LoliMashiro",
//         infor:"呐，你想变成什么颜色？"
//     },
//     {
//         href:"https://mashiro.pub/",
//         logo:"/images/icons/shina.png",
//         name:"LoliMashiro",
//         infor:"呐，你想变成什么颜色？"
//     },
// ]

// // 实用网站---------------------------------
// let webs_list = [
//     {
//         href:"https://mashiro.pub/",
//         logo:"/images/icons/shina.png",
//         name:"LoliMashiro",
//         infor:"呐，你想变成什么颜色？"
//     },
//     {
//         href:"https://mashiro.pub/",
//         logo:"/images/icons/shina.png",
//         name:"LoliMashiro",
//         infor:"呐，你想变成什么颜色？"
//     },
// ]
// // 获取网站元素-------------------------------------
//     let friendlink = document.querySelector("#friendlink"); 
//     let blogs = document.querySelector("#blogs"); 
//     let webs = document.querySelector("#webs"); 

//     // 友链构造
// friendlink_list.forEach(boxes=>{
//     if(boxes){
//         let {href,logo,name,infor} = boxes;
//         let a= document.createElement("a");
//         a.setAttribute('href',href);
//         a.setAttribute('target','_blank');
//         a.classList.add('link');
//         a.innerHTML=`
//             <div class="box">
//             <div class="img" style="background-image: url(${logo});"></div>
//             <div class="words">
//                 <div class="name">${name}</div>
//                 <div class="infor">${infor}</div>
//             </div>
//             </div>
//         `
//         friendlink.childNodes[3].appendChild(a);
//     }
// })

// // 大佬博客构造
// blogs_list.forEach(boxes=>{
//     if(boxes){
//         let {href,logo,name,infor} = boxes;
//         let a= document.createElement("a");
//         a.setAttribute('href',href);
//         a.setAttribute('target','_blank');
//         a.classList.add('link');
//         a.innerHTML=`
//             <div class="box">
//             <div class="img" style="background-image: url(${logo});"></div>
//             <div class="words">
//                 <div class="name">${name}</div>
//                 <div class="infor">${infor}</div>
//             </div>
//             </div>
//         `
//         blogs.childNodes[3].appendChild(a);
//     }
// })
// // 实用网站构造
// webs_list.forEach(boxes=>{
//     if(boxes){
//         let {href,logo,name,infor} = boxes;
//         let a= document.createElement("a");
//         a.setAttribute('href',href);
//         a.setAttribute('target','_blank');
//         a.classList.add('link');
//         a.innerHTML=`
//             <div class="box">
//             <div class="img" style="background-image: url(${logo});"></div>
//             <div class="words">
//                 <div class="name">${name}</div>
//                 <div class="infor">${infor}</div>
//             </div>
//             </div>
//         `
//         webs.childNodes[3].appendChild(a);
//     }
// })
// }

// hexo.extend.filter.register('theme_inject', function(injects) {
//     // ...
//   });
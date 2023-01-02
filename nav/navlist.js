
// 添加链接，{href:,logo:,name:,infor:}
// 友链------------------------------------
let friendlink_list = [
    {
        href:"https://mashiro.pub/",
        logo:"/images/icons/shina.png",
        name:"LoliMashiro",
        infor:"呐，你想变成什么颜色？"
    },
  ]
  // 大佬博客-------------------------------------
  let blogs_list = [
    {
        href:"https://www.liaoxuefeng.com/",
        logo:"/images/icons/liaoxuefeng.png",
        name:"廖雪峰的blog",
        infor:"java|python|前端|区块链|SQL"
    },
    {
        href:"http://mindhacks.cn/",
        logo:"/images/icons/lwp.png",
        name:"刘未鹏的blog",
        infor:"《暗时间》的作者，有许多学习方法和思考"
    },
    {
        href:"https://www.ruanyifeng.com/blog/",
        logo:"/images/ruanyifeng.png",
        name:"阮一峰的网络日志",
        infor:"阮一峰的个人博客，每周分享科技内容"
    },
    {
        href:"https://www.foreverblog.cn/",
        logo:"/images/icons/snzy.png",
        name:"十年之约",
        infor:"博客组织，博客十年不关闭，之后有机会申请下"
    },
    {
        href:"https://blogwe.com/",
        logo:"/images/icons/blogwe.png",
        name:"BlogWe",
        infor:"博客组织，致敬还在写博客的我们"
    },
    {
        href:"https://wangyurui.com/",
        logo:"/images/icons/taiyin.png",
        name:"太隐",
        infor:"棱镜通讯，一个人的思想发育史就是他的阅读史"
    },
  ]
  
  // 实用网站---------------------------------
  let webs_list = [
    {
        href:"https://csblog.cc/",
        logo:"/images/icons/csblog.png",
        name:"一站式秃头孵化基地",
        infor:"聚合了许多高质量技术博客"
    },
    {
        href:"https://web.qianguyihao.com/",
        logo:"/images/icons/qiangu.png",
        name:"千古前端",
        infor:"一个不错的前端三件套教程，适合速查"
    },
  ]
// 获取网站元素-------------------------------------
    let friendlink = document.querySelector("#friendlink"); 
    let blogs = document.querySelector("#blogs"); 
    let webs = document.querySelector("#webs"); 

    // 友链构造
friendlink_list.forEach(boxes=>{
    if(boxes){
        let {href,logo,name,infor} = boxes;
        let a= document.createElement("a");
        a.setAttribute('href',href);
        a.setAttribute('target','_blank');
        a.classList.add('link');
        a.innerHTML=`
            <div class="box">
            <div class="img" style="background-image: url(${logo});"></div>
            <div class="words">
                <div class="name">${name}</div>
                <div class="infor">${infor}</div>
            </div>
            </div>
        `
        friendlink.childNodes[3].appendChild(a);
    }
})

// 大佬博客构造
blogs_list.forEach(boxes=>{
    if(boxes){
        let {href,logo,name,infor} = boxes;
        let a= document.createElement("a");
        a.setAttribute('href',href);
        a.setAttribute('target','_blank');
        a.classList.add('link');
        a.innerHTML=`
            <div class="box">
            <div class="img" style="background-image: url(${logo});"></div>
            <div class="words">
                <div class="name">${name}</div>
                <div class="infor">${infor}</div>
            </div>
            </div>
        `
        blogs.childNodes[3].appendChild(a);
    }
})
// 实用网站构造
webs_list.forEach(boxes=>{
    if(boxes){
        let {href,logo,name,infor} = boxes;
        let a= document.createElement("a");
        a.setAttribute('href',href);
        a.setAttribute('target','_blank');
        a.classList.add('link');
        a.innerHTML=`
            <div class="box">
            <div class="img" style="background-image: url(${logo});"></div>
            <div class="words">
                <div class="name">${name}</div>
                <div class="infor">${infor}</div>
            </div>
            </div>
        `
        webs.childNodes[3].appendChild(a);
    }
})

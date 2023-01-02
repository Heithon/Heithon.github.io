/* global NexT, CONFIG, Pjax */



const pjax = new Pjax({
  selectors: [
    'head title',
    'script[type="application/json"]',
    '.main-inner',
    '.post-toc-wrap',
    '.languages',
    '.pjax',
  ],
  analytics: false,
  cacheBust: false,
  scrollTo : !CONFIG.bookmark.enable
});

//读取表格数据-----------------------------------------
let Data = {};
$.ajax({
  url: "/js/chartsData.json",//同文件夹下的json文件路径
  type: "GET",//请求方式为get
  dataType: "json", //返回数据格式为json
  success: function (data) {//请求成功完成后要执行的方法 
      
      console.log("ddddddddddd: ")
      console.log(JSON.parse(JSON.stringify(data)))
      Data = data;
  }

})

// 加载表格函数--------------------------------
let tagFun = function(dataLength = 10){

  let tagsChart = echarts.init(document.getElementById('tags-chart'));
    let tagsOption = {
        title: {
            text: `Top ${Data.dataLength} Tags`,
            top: -5,
            x: 'center'
        },
        tooltip: {
            formatter: "{b} : {c}"
        },
        xAxis: {
            type: 'category',
            data: JSON.parse(Data.tagNameArrJson)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'bar',
                color: ['#222222'],
                barWidth : 18,
                data: JSON.parse(Data.tagCountArrJson),
                markPoint: {
                    symbolSize: 45,
                    data: [{
                        type: 'max',
                        itemStyle: {color: ['#FF1111']},
                        name: 'MAX'
                    }, {
                        type: 'min',
                        itemStyle: {color: ['#DCACAC']},
                        name: 'MIN'
                    }],
                },
                markLine: {
                    itemStyle: {color: ['#000000']},
                    data: [
                        {type: 'average', name: 'AVG'}
                    ]
                }
            }
        ]
    };
    tagsChart.setOption(tagsOption);
}

let categoryFun = function(){
  let categoriesChart = echarts.init(document.getElementById('categories-chart'));
    let categoriesOption = {
        title: {
            text: '',
            top: 0,
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                // name: 'Category:',
                name: '# Category articles',
                type: 'pie',
                radius: '75%',
                color: ['#BBBBBB', '#3E1717', '#999999', '#7D2D2D', '#666666', '#BB4444', '#333333', '#CD7676', '#111111'],
                data: JSON.parse(Data.categoryArrJson),
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    categoriesChart.setOption(categoriesOption);

}

// 导航页--------------------------------------
let navlistFun = function(){
  
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
      logo:"/images/icons/ruanyifeng.png",
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

}
let listFun =function(){
  let count = 0; 
  let timer = setInterval(()=>{
    count++;
    nav = document.querySelector(".navigation");
    console.log("oooooooooooooooooooo");
    console.log(nav);
    if(count === 50) clearInterval(timer);
    if(nav){
      navlistFun();
      clearInterval(timer);
    }
  },500);
} 


// pjax执行------------------------------------
document.addEventListener('pjax:success', () => {
    // window.location.pathname == '/tags/'||window.location.pathname == '/categories/'

 if(window.location.pathname == '/'){
    $.ajax({
        url: "js/chartsData.json",//同文件夹下的json文件路径
        type: "GET",//请求方式为get
        dataType: "json", //返回数据格式为json
        timeout: 1000*2, //请求超时
        success: function (data) {//请求成功完成后要执行的方法 
            
            console.log("ddddddddddd: ")
            console.log(data)
            Data = data;
        }
      
      })
    
 }
  
  console.log("pjax开始执行")

  pjax.executeScripts(document.querySelectorAll('script[data-pjax]'));
  NexT.boot.refresh();

  // Define Motion Sequence & Bootstrap Motion.
  if (CONFIG.motion.enable) {
    NexT.motion.integrator
      .init()
      .add(NexT.motion.middleWares.subMenu)
      .add(NexT.motion.middleWares.postList)
      // Add sidebar-post-related transition.
      .add(NexT.motion.middleWares.sidebar)
      .bootstrap();
  }
  if (CONFIG.sidebar.display !== 'remove') {
    const hasTOC = document.querySelector('.post-toc');
    document.querySelector('.sidebar-inner').classList.toggle('sidebar-nav-active', hasTOC);
    NexT.utils.activateSidebarPanel(hasTOC ? 0 : 1);
    NexT.utils.updateSidebarPosition();
  }
  console.log(NexT);


      if(window.location.pathname == '/tags/')   {tagFun();}
      if(window.location.pathname == '/categories/')   categoryFun();
      if(window.location.pathname == '/nav/')   listFun();

  
});



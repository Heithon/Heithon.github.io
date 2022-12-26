/* global NexT, CONFIG, Pjax */



const pjax = new Pjax({
  // elements: "a",
  selectors: [
    'head title',
    'script[type="application/json"]',
    '.main-inner',
    '.post-toc-wrap',
    '.languages',
    '.pjax',
    // '.comments',
  ],
  analytics: false,
  cacheBust: false,
  scrollTo : !CONFIG.bookmark.enable
});


let Data = {};

// //读取表格数据---------------------
// let url = "/js/chartsData.json"
// // 申明一个XMLHttpRequest
// let request = new XMLHttpRequest();
// // 设置请求方法与路径
// request.open("get", url);
// // 不发送数据到服务器
// request.send(null);
// //XHR对象获取到返回信息后执行
// request.onload = function () {
//     // 解析获取到的数据
//     var data = request.responseText;
//     Data = data;
// console.log("ddddddddddd: ")
// console.log(data)
// }


// $.getJSON("js/chartsData.json", function (data) {
//   console.log("dataaaa: ")
//   console.log(JSON.parse(JSON.stringify(data)));
//   Data = JSON.parse(JSON.stringify(data))
// });


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
// 加载表格函数---------------------------------

// 加载评论函数---------------------------------
// let valine = function(){
//   if(!CONFIG.page.isHome){
//     new Valine({
//       el: '#vcomments',
//       severURLs: 'https://nqlocvfm.api.lncldglobal.com',
//       //element: "#veditor",
//       appId: 'nQlOcVfmRAxcrMLd2drA4QUj-MdYXbMMI',
//       appKey: 'bwM4xEJ5qPfEA7kduuC0nd4g',
//       avatar: 'retro',
//       path: window.location.pathname,
//     })

//   }
// }

let cdraw = function(){
    var count = 0;
    var count2 = 0;
    var dom_timer = setInterval(function () {
    if (++count > 50) clearInterval(dom_timer);
    if (document.querySelector('#veditor')) {
      var cdraw = new CaveDraw({
        element: "#veditor",
        readOnlyMode: false, // valine 不提交form，而是过滤评论框数据后发送，所以评论框不能readonly。
        afterUpdateEditor: ()=>{ // 手动触发valine对评论框数据的过滤
          // document.querySelector('#veditor').focus();
          document.querySelector('#veditor').blur();
        },
        controls: ['brush', 'eraser', 'bucket', 'clear', 'undo', 'redo', 'save']
      });
      document.querySelector('.cdraw .cdraw-toolbar .cdraw-open').style.padding = "0px";
			document.querySelector('.cdraw .cdraw-toolbar .cdraw-open').style.backgroundColor = "#555555";
      clearInterval(dom_timer);
    }
  }, 200);
    var dom_timer_2 = setInterval(function () {
    if (++count2 > 50) clearInterval(dom_timer_2);
    if (document.querySelector('.vcontent p')) {
    document.querySelector('.vcontent p').style.color = "#bbb";
      clearInterval(dom_timer_2);
    }
  }, 200);
}
// 加载评论函数---------------------------------

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
  
  // (locals)=> {
  //   const $ = cheerio.load(locals)
  //   const post = $('#posts-chart')
  //   const tag = $('#tags-chart')
  //   const category = $('#categories-chart')
  //   const calendar = $('#posts-calendar')
  //   const radar = $('#categories-radar')
  //   let htmlEncode = true
  
  //   if (post.length > 0 || tag.length > 0 || category.length > 0 || calendar.length > 0 || radar.length > 0) {
  //     $('head').after('<style type="text/css">#posts-chart,#posts-calendar,#categories-chart,#categories-radar,#tags-chart{width: 100%;height: 300px;margin: 0.5rem auto;padding: 0.5rem;overflow-x: auto;}</style><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js"></script>')
  //     if (post.length > 0 && $('#postsChart').length === 0) {
  //       if (post.attr('data-encode') === 'true') htmlEncode = true
  //       post.after(postsChart())
  //     }
  //     if (calendar.length > 0 && $('#postsCalendar').length === 0) {
  //       if (calendar.attr('data-encode') === 'true') htmlEncode = true
  //       calendar.after(postsCalendar())
  //     }
  //     if (tag.length > 0 && $('#tagsChart').length === 0) {
  //       if (tag.attr('data-encode') === 'true') htmlEncode = true
  //       tag.after(tagsChart(tag.attr('data-length')))
  //     }
  //     if (category.length > 0 && $('#categoriesChart').length === 0) {
  //       if (category.attr('data-encode') === 'true') htmlEncode = true
  //       category.after(categoriesChart())
  //     }
  //     if (radar.length > 0 && $('#categoriesRadar').length === 0) {
  //       if (radar.attr('data-encode') === 'true') htmlEncode = true
  //       radar.after(categoriesRadar())
  //     }
  //     if (htmlEncode) {
  //       return $.root().html().replace(/&amp;#/g, '&#')
  //     } else {
  //       return $.root().html()
  //     }
  //   } else {
  //     return locals
  //   }
  // }
  console.log("pjax开始执行")

  pjax.executeScripts(document.querySelectorAll('script[data-pjax]'));
  NexT.boot.refresh();
  // var newContent = document.querySelector("#tagsChart");
  // pjax.refresh(newContent);
  // console.log("ttttttttt:"+newContent);


  // Define Motion Sequence & Bootstrap Motion.
  if (CONFIG.motion.enable) {
    console.log("motion.enable开始")
    NexT.motion.integrator
      .init()
      .add(NexT.motion.middleWares.subMenu)
      .add(NexT.motion.middleWares.postList)
      // Add sidebar-post-related transition.
      .add(NexT.motion.middleWares.sidebar)
      .bootstrap();
  }
  if (CONFIG.sidebar.display !== 'remove') {
    console.log("display=remove开始")
    const hasTOC = document.querySelector('.post-toc');
    document.querySelector('.sidebar-inner').classList.toggle('sidebar-nav-active', hasTOC);
    NexT.utils.activateSidebarPanel(hasTOC ? 0 : 1);
    NexT.utils.updateSidebarPosition();
  }

  // if (post.length > 0 || tag.length > 0 || category.length > 0 || calendar.length > 0 || radar.length > 0) {
    // $('head').after('<style type="text/css">#posts-chart,#posts-calendar,#categories-chart,#categories-radar,#tags-chart{width: 100%;height: 300px;margin: 0.5rem auto;padding: 0.5rem;overflow-x: auto;}</style><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts.min.js"></script>')
    // if (post.length > 0 && $('#postsChart').length === 0) {
    //   if (post.attr('data-encode') === 'true') htmlEncode = true
    //   post.after(postsChart())
    // }
    // if (calendar.length > 0 && $('#postsCalendar').length === 0) {
    //   if (calendar.attr('data-encode') === 'true') htmlEncode = true
    //   calendar.after(postsCalendar())
    // }
    // if (tag.length > 0 && $('#tagsChart').length === 0) {
        // console.log("tag长度："+tag.length+"表的长度："+$('#tagsChart').length);
      // if (tag.attr('data-encode') === 'true') htmlEncode = true
      // console.log(typeof(window.location.pathname));
      if(window.location.pathname == '/tags/')   {tagFun();}
      if(window.location.pathname == '/categories/')   categoryFun();
      if(!CONFIG.page.isHome) {valine();cdraw();}
      

    //   document.dispatchEvent()
    // }
    // if (category.length > 0 && $('#categoriesChart').length === 0) {
    //   if (category.attr('data-encode') === 'true') htmlEncode = true
    //   category.after(categoriesChart())
    // }
    // if (radar.length > 0 && $('#categoriesRadar').length === 0) {
    //   if (radar.attr('data-encode') === 'true') htmlEncode = true
    //   radar.after(categoriesRadar())
    // }
  
  // }

  
});



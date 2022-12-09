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
  ],
  analytics: true,
  cacheBust: false,
  scrollTo : !CONFIG.bookmark.enable
});

// var newContent = document.querySelector(".charts");
// pjax.refresh(newContent);

document.addEventListener('pjax:success', () => {

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
  var newContent = document.querySelector("#tagsChart");
  pjax.refresh(newContent);
  console.log("ttttttttt:"+newContent);


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

  
});

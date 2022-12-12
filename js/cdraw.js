// cdraw.js
 if(!(window.location.pathname == '/')) {
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


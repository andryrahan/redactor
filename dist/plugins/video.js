!function(e){e.Redactor.prototype.video=function(){return{reUrlYoutube:/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,reUrlVimeo:/https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,getTemplate:function(){return String()+'<section id="redactor-modal-video-insert"><label>'+this.lang.get("video_html_code")+'</label><textarea id="redactor-insert-video-area" style="height: 160px;"></textarea></section>'},init:function(){var e=this.button.addAfter("image","video",this.lang.get("video"));this.button.addCallback(e,this.video.show)},show:function(){this.modal.addTemplate("video",this.video.getTemplate()),this.modal.load("video",this.lang.get("video"),700),this.modal.createCancelButton();var t=this.modal.createActionButton(this.lang.get("insert"));t.on("click",this.video.insert),this.selection.save(),this.modal.show(),e("#redactor-insert-video-area").focus()},insert:function(){var t=e("#redactor-insert-video-area").val();if(!t.match(/<iframe|<video/gi)){t=this.clean.stripTags(t);
// parse if it is link on youtube & vimeo
var i='<iframe style="width: 500px; height: 281px;" src="',o='" frameborder="0" allowfullscreen></iframe>';t.match(this.video.reUrlYoutube)?t=t.replace(this.video.reUrlYoutube,i+"//www.youtube.com/embed/$1"+o):t.match(this.video.reUrlVimeo)&&(t=t.replace(this.video.reUrlVimeo,i+"//player.vimeo.com/video/$2"+o))}this.selection.restore(),this.modal.close();var r=this.selection.getBlock()||this.selection.getCurrent();r?e(r).after(t):this.insert.html(t),this.code.sync()}}}}(jQuery);
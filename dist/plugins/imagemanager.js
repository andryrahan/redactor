!function(a){a.Redactor.prototype.imagemanager=function(){return{init:function(){this.opts.imageManagerJson&&this.modal.addCallback("image",this.imagemanager.load)},load:function(){var t=this.modal.getModal();this.modal.createTabber(t),this.modal.addTab(1,"Upload","active"),this.modal.addTab(2,"Choose"),a("#redactor-modal-image-droparea").addClass("redactor-tab redactor-tab1");var e=a('<div id="redactor-image-manager-box" style="overflow: auto; height: 300px;" class="redactor-tab redactor-tab2">').hide();t.append(e),a.ajax({dataType:"json",cache:!1,url:this.opts.imageManagerJson,success:a.proxy(function(t){a.each(t,a.proxy(function(t,e){
// title
var r="";"undefined"!=typeof e.title&&(r=e.title);var i=a('<img src="'+e.thumb+'" rel="'+e.image+'" title="'+r+'" style="width: 100px; height: 75px; cursor: pointer;" />');a("#redactor-image-manager-box").append(i),a(i).click(a.proxy(this.imagemanager.insert,this))},this))},this)})},insert:function(t){this.image.insert('<img src="'+a(t.target).attr("rel")+'" alt="'+a(t.target).attr("title")+'">')}}}}(jQuery);
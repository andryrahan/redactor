!function(t){t.Redactor.prototype.clips=function(){return{init:function(){var i=[["Lorem ipsum...","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],["Red label",'<span class="label-red">Label</span>']];this.clips.template=t('<ul id="redactor-modal-list">');for(var e=0;e<i.length;e++){var l=t("<li>"),s=t('<a href="#" class="redactor-clip-link">').text(i[e][0]),a=t('<div class="redactor-clip">').hide().html(i[e][1]);l.append(s),l.append(a),this.clips.template.append(l)}this.modal.addTemplate("clips","<section>"+this.utils.getOuterHtml(this.clips.template)+"</section>");var o=this.button.add("clips","Clips");this.button.addCallback(o,this.clips.show)},show:function(){this.modal.load("clips","Insert Clips",400),this.modal.createCancelButton(),t("#redactor-modal-list").find(".redactor-clip-link").each(t.proxy(this.clips.load,this)),this.selection.save(),this.modal.show()},load:function(i,e){t(e).on("click",t.proxy(function(i){i.preventDefault(),this.clips.insert(t(e).next().html())},this))},insert:function(t){this.selection.restore(),this.insert.html(t),this.modal.close(),this.observe.load()}}}}(jQuery);
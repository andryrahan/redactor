!function(t){t.Redactor.prototype.counter=function(){return{init:function(){this.opts.counterCallback&&this.$editor.on("keyup.redactor-limiter",t.proxy(function(e){var r=0,c=0,i=0,n=this.code.get(),o=n.replace(/<\/(.*?)>/gi," ");if(o=o.replace(/<(.*?)>/gi,""),o=o.replace(/\t/gi,""),o=o.replace(/\n/gi," "),o=o.replace(/\r/gi," "),o=t.trim(o),""!==o){var a=o.split(/\s+/),l=o.match(/\s/g);a&&(r=a.length),l&&(i=l.length),c=o.length}this.core.setCallback("counter",{words:r,characters:c,spaces:i})},this))}}}}(jQuery);
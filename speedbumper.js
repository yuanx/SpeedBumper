(function($){
	$.fn.speedBumper=function(overlayOption){					
		var html = new EJS({url: 'template.ejs'}).render({});
		var div = document.createElement("div");
		div.id = "overlaypage";
		div.className="overlayModal";
		div.innerHTML = html;
		document.body.appendChild(div);
		return this.each(function(){
			var that = this;
			this.rel="#overlaypage";
			$(this).overlay(overlayOption);	
			
			$(this).click(function(e){
				$('button[name="confirm"]').unbind('click');
				var url = this.href;
				var target = this.target;
				$('button[name="confirm"]').click(function(){
					if($(this).val()==="yes"){
						window.open(url,target);
					}
					$(that).overlay().close();
				});
			});						
		});
	}	
})(jQuery);
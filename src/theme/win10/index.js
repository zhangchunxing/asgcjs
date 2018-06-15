/*!
 * file : asgc-ui.win10.js
 * github : https://github.com/aoshiguchen
 * author : 傲世孤尘/aoshiguchen
 * version : v0.0.1
 */
Asgc.UI.win10 = (function(){

	var component;

	function init(){


		component = Asgc.UI.win10.component.component;
		var Class = Asgc.Class;

		//Msg提示信息
		Class.define('com.asgc.ui.win10.Msg',function(options){

			this.contentText = options.text || '';

			//Override
			this.create = function(){
				this.super.create();
				var content = document.createElement('div');
				var hint = document.createElement('div');

				hint.innerHTML = this.contentText;

				if(this.hintIcon){
					content.appendChild(this.hintIcon);
				}

				content.appendChild(hint);
				this.ele.appendChild(content);
				logger.info(logInfo + 'msg id:' + this.id,' create finished.');
			}

			//Override
			this.render = function(){
				var ele = this.ele;
				var hintIcon = this.hintIcon;

				if(hintIcon){
					hintIcon.style.setProperty('float','left');
				}

				ele.style.setProperty('max-width',options.maxWidth);
				ele.style.setProperty('left',options.left);
				ele.style.setProperty('top',options.top);

				ele.classList.add('asgc-msg');
				logger.info(logInfo + 'msg id:' + this.id,' render finished.');
			};

			//Override
			this.update = function(){
				
			};
	 
		},'com.asgc.ui.win10.Window');

		//Alert提示信息
		Class.define('com.asgc.ui.win10.Alert',function(options){

			this.contentText = options.content || '';
			//Override
			this.create = function(){
				this.super.create();
				
				var ele = this.ele;
				var content = document.createElement('div');
				var hint = document.createElement('div');
				var bottom = document.createElement('div');
				var btnOk = document.createElement('div');

				if(this.hintIcon){
					content.appendChild(this.hintIcon);
				}

				hint.innerHTML = this.contentText;	
				btnOk.innerHTML = '确定';

				content.appendChild(hint);
				ele.appendChild(content);
				bottom.appendChild(btnOk);
				ele.appendChild(bottom);

				this.content = content;
				this.bottom = bottom;
				this.btnOk = btnOk;
				logger.info(logInfo + 'alert id:' + this.id,' create finished.');
			};

			//Override
			this.render = function(){
				this.super.render();

				var ele = this.ele;
				var content = this.content;
				var bottom = this.bottom;
				var btnOk = this.btnOk;
				var hintIcon = this.hintIcon;

				if(hintIcon){
					hintIcon.style.setProperty('float','left');
					hintIcon.style.setProperty('margin-right','10px');
				}

				ele.classList.add('asgc-alert');

				content.style.setProperty('margin','10px auto 10px 10px');
				content.style.setProperty('font-size','14px');
				content.style.setProperty('color','#039');
				content.style.setProperty('height','47%');
				content.style.setProperty('user-select','none');

				bottom.style.setProperty('border-radius','0px 0px 5px 5px');
				bottom.style.setProperty('height','26%');
				bottom.style.setProperty('background-color','#f0f0f0');

				btnOk.classList.add('asgc-button');
				btnOk.style.setProperty('float','right');
				btnOk.style.setProperty('margin','5px 10px 0px 0px');

				logger.info(logInfo + 'alert id:' + this.id,' render finished.');
			};

			this.bindEvent = function(){
				this.super.bindEvent();

				var ctx = this;

				this.btnOk.onclick = function(){
					ctx.close({
						btn: 'ok'
					});
				};

				if(this.closeMenu){
					this.closeMenu.onclick = function(){
						ctx.close({
							btn: 'close'
						});
					};
				}
				
				logger.info(logInfo + 'alert id:' + this.id,' bindEvent finished.');
			};

			this.close = function(res){
				this.unLoad();
				this.onClose(res);
				logger.info(logInfo + 'alert id:' + this.id,' close finished.');
			};


			

		},'com.asgc.ui.win10.Window');

		//Confirm提示信息
		Class.define('com.asgc.ui.win10.Confirm',function(options){

			this.onOk = options.onOk || function(){};
			this.onCancel = options.onCancel || function(){};
			this.contentText = options.content || '';

			//Override
			this.create = function(){
				this.super.create();
				
				var ele = this.ele;
				var content = document.createElement('div');
				var hint = document.createElement('div');
				var bottom = document.createElement('div');
				var btnOk = document.createElement('div');
				var btnCancel = document.createElement('div');


				if(this.hintIcon){
					content.appendChild(this.hintIcon);
				}

				hint.innerHTML = this.contentText;
				btnOk.innerHTML = '确定';
				btnCancel.innerHTML = '取消';

				content.appendChild(hint);
				ele.appendChild(content);
				bottom.appendChild(btnCancel);
				bottom.appendChild(btnOk);
				ele.appendChild(bottom);

				this.content = content;
				this.bottom = bottom;
				this.btnOk = btnOk;
				this.btnCancel = btnCancel;
				logger.info(logInfo + 'confirm id:' + this.id,' create finished.');
			};

			//Override
			this.render = function(){
				this.super.render();

				var ele = this.ele;
				var content = this.content;
				var bottom = this.bottom;
				var btnOk = this.btnOk;
				var btnCancel = this.btnCancel;

				var hintIcon = this.hintIcon;

				if(hintIcon){
					hintIcon.style.setProperty('float','left');
					hintIcon.style.setProperty('margin-right','10px');
				}

				ele.classList.add('asgc-confirm');

				content.style.setProperty('margin','10px auto 10px 10px');
				content.style.setProperty('font-size','14px');
				content.style.setProperty('color','#039');
				content.style.setProperty('height','47%');
				content.style.setProperty('user-select','none');

				bottom.style.setProperty('border-radius','0px 0px 5px 5px');
				bottom.style.setProperty('height','26%');
				bottom.style.setProperty('background-color','#f0f0f0');

				btnOk.classList.add('asgc-button');
				btnOk.style.setProperty('float','right');
				btnOk.style.setProperty('margin','5px 10px 0px 0px');

				btnCancel.classList.add('asgc-button');
				btnCancel.style.setProperty('float','right');
				btnCancel.style.setProperty('margin','5px 10px 0px 0px');

				logger.info(logInfo + 'confirm id:' + this.id,' render finished.');
			};

			this.bindEvent = function(){
				this.super.bindEvent();

				var ctx = this;

				this.btnOk.onclick = function(){
					var res = {
						btn: 'ok'
					};

					ctx.close(res);
					ctx.onOk(res);
					logger.info(logInfo + 'confirm id:' + this.id,' close finished.');
				};

				this.btnCancel.onclick = function(){
					var res = {
						btn: 'cancel'
					};

					ctx.close(res);
					ctx.onCancel(res);
					logger.info(logInfo + 'confirm id:' + this.id,' close finished.');
				};

				if(this.closeMenu){
					this.closeMenu.onclick = function(){
						ctx.close({
							btn: 'close'
						});
					};
				}

				logger.info(logInfo + 'confirm id:' + this.id,' bindEvent finished.');
			};

			this.close = function(res){
				this.unLoad();
				this.onClose(res);
				logger.info(logInfo + 'confirm id:' + this.id,' close finished.');
			};
			

		},'com.asgc.ui.win10.Window');

		//Prompt提示信息
		Class.define('com.asgc.ui.win10.Prompt',function(options){

			this.onOk = options.onOk || function(){};
			this.onCancel = options.onCancel || function(){};
			this.hintText = options.hint || '';
			this.defaultValue = options.defaultValue || '';

			//Override
			this.create = function(){
				this.super.create();
				
				var ele = this.ele;
				var hint = document.createElement('div');
				var textarea = document.createElement('textarea');
				var bottom = document.createElement('div');
				var btnOk = document.createElement('div');
				var btnCancel = document.createElement('div');

				hint.innerHTML = this.hintText;
				textarea.innerHTML = this.defaultValue;
				btnOk.innerHTML = '确定';
				btnCancel.innerHTML = '取消';

				ele.appendChild(hint);
				ele.appendChild(textarea);
				bottom.appendChild(btnCancel);
				bottom.appendChild(btnOk);
				ele.appendChild(bottom);

				this.hint = hint;
				this.textarea = textarea;
				this.bottom = bottom;
				this.btnOk = btnOk;
				this.btnCancel = btnCancel;
				logger.info(logInfo + 'prompt id:' + this.id,' create finished.');
			};

			//Override
			this.render = function(){
				this.super.render();

				var ele = this.ele;
				var hint = this.hint;
				var textarea = this.textarea;
				var bottom = this.bottom;
				var btnOk = this.btnOk;
				var btnCancel = this.btnCancel;

				ele.classList.add('asgc-prompt');

				hint.style.setProperty('margin','10px auto 10px 10px');
				hint.style.setProperty('font-size','14px');
				hint.style.setProperty('color','#039');
				hint.style.setProperty('height','20%');
				hint.style.setProperty('user-select','none');

				textarea.style.setProperty('display','block');
				textarea.style.setProperty('border','1px solid #dfdfdf');
				textarea.style.setProperty('width','90%');
				textarea.style.setProperty('resize','none');
				textarea.style.setProperty('height','28%');
				textarea.style.setProperty('margin','8px');
				textarea.style.setProperty('font-size','15px');
				textarea.style.setProperty('color','#000');

				bottom.style.setProperty('border-radius','0px 0px 5px 5px');
				bottom.style.setProperty('height','22%');
				bottom.style.setProperty('background-color','#f0f0f0');

				btnOk.classList.add('asgc-button');
				btnOk.style.setProperty('float','right');
				btnOk.style.setProperty('margin','5px 10px 0px 0px');

				btnCancel.classList.add('asgc-button');
				btnCancel.style.setProperty('float','right');
				btnCancel.style.setProperty('margin','5px 10px 0px 0px');

				logger.info(logInfo + 'prompt id:' + this.id,' render finished.');
			};

			this.bindEvent = function(){
				this.super.bindEvent();

				var ctx = this;

				this.btnOk.onclick = function(){
					var res = {
						btn: 'ok',
						value: ctx.textarea.value
					};

					ctx.close(res);
					ctx.onOk(res);
					logger.info(logInfo + 'prompt id:' + this.id,' close finished.');
				};

				this.btnCancel.onclick = function(){
					var res = {
						btn: 'cancel'
					};

					ctx.close(res);
					ctx.onCancel(res);
					logger.info(logInfo + 'prompt id:' + this.id,' close finished.');
				};

				if(this.closeMenu){
					this.closeMenu.onclick = function(){
						ctx.close({
							btn: 'close'
						});
					};
				}

				logger.info(logInfo + 'prompt id:' + this.id,' bindEvent finished.');
			};

			this.close = function(res){
				this.unLoad();
				this.onClose(res);
				logger.info(logInfo + 'prompt id:' + this.id,' close finished.');
			};
			

		},'com.asgc.ui.win10.Window');

	}
	

	
	var Button = Asgc.Class.get('com.asgc.ui.win10.Button');
	var UIConsts = Asgc.Consts.UI;
	var logInfo = 'theme win10 ';

	var UI = {
		dependents: [
			'index.css',
			'config.js',
			'drag.js',
			'component.js'
		],
		init: function(){
			logger.info(logInfo + 'init...');
			this.component.init();
			init();
			logger.info(logInfo + 'init finished.');
		},
		getInstance: function(_class,options){
			var _Class = Asgc.Class.get('com.asgc.ui.win10.' + _class);
			var obj = _Class.new(options);
			return obj;
		},
		getComponentById: function(id){
			return component[id];
		},
		unLoad: function(id){
			logger.info(logInfo + 'unLoad id:' + id);
			if(component[id]) component[id].unLoad();
		},
		hide: function(id){
			logger.info(logInfo + 'hide id:' + id);
			if(component[id]) component[id].hide();
		},
		show: function(id){
			logger.info(logInfo + 'show id:' + id);
			if(component[id]) component[id].show();
		},
		msg: function(options){
			logger.info(logInfo + 'msg ',JSON.stringify(options));
			var msg = this.getInstance('Msg',options);
			msg.show();

			setTimeout(function(){
				msg.unLoad();
			},options.aliveTime);
		},
		alert: function(options){
			logger.info(logInfo + 'alert ',JSON.stringify(options));

			var alert = this.getInstance('Alert',options);
			
			alert.show();

		},
		confirm: function(options){
			logger.info(logInfo + 'confirm ',JSON.stringify(options));

			var confirm = this.getInstance('Confirm',options);
			
			confirm.show();
		},
		prompt: function(options){
			logger.info(logInfo + 'prompt ',JSON.stringify(options));

			var prompt = this.getInstance('Prompt',options);
			
			prompt.show();
		}
	};



	return UI;
})();



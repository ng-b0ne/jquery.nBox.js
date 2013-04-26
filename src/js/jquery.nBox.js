(function($){
    var pluginName = "nBox";
    var dialog = {};
    function createDialog(){
        dialog.element = $('<div id="nBox" />');
        dialog.overlay = $('<div id="nBox-overlay" />');
        dialog.content = $('<div id="nBox-content" />');
        dialog.title = $('<div class="nBox-window-title" />');
        dialog.close = $('<div class="nBox-window-close"><span class="nbox-close-btn"></span></div>');
        var dialogHeader = $('<div id="nBox-header" />')
            .append(dialog.title).append(dialog.close);

        dialog.element.append(dialogHeader).append(dialog.content);
        $("body").append(dialog.overlay).append(dialog.element);
    };

    function NBox (element, opts) {
        var self = this;
        this.defaultConfig = {
            width:400,
            height:400,
            fadeAnimeTime:150,
            title:'MyBox',
            targetId:null,
        };
        this.config = {};
        this.target = null;
        this.targetDialog = null;
        this.targetClose = null;

        this.init = function(element, opts){
            var self = this;
            this.config = $.extend(this.defaultConfig, opts);

            if ($('#nBox').length === 0) {
                createDialog();
            }

            this.target = $('#'+this.config.targetId);
            this.target.hide();
            element.click(function(){
                self.show();
            });

            // close by ESC key
            $(document).on("keydown", function(e){
                if((e.which && e.which == 27) || (e.keyCode && e.keyCode == 27)){
                    self.hide();
                }
            });
            // close when click [X] button
            $(document).on("click", "#nBox-overlay, #nBox .nBox-window-close", function(){
                self.hide();
            });
        }
        this.show = function(){
            var self = this,
                config = this.config,
                dialogHeight, dialogWidth;

            dialog.title.text(config.title);
            dialog.content.css({width:config.width, height:config.height});
            dialog.content.append(self.target);
            self.target.show();

            dialogHeight = dialog.element.height();
            dialogWidth = dialog.element.width();

            dialog.element.css({
                'margin-top':-(dialogHeight / 2),
                'margin-left':-(dialogWidth / 2)});
            dialog.overlay.fadeIn(config.fadeAnimeTime);
            dialog.element.fadeIn(config.fadeAnimeTime);

        }
        this.hide = function(){
            var self = this,
                config = this.config;
            
            dialog.element.fadeOut(config.fadeAnimeTime);
            dialog.overlay.fadeOut(config.fadeAnimeTime);
    
            this.target.hide();
        }
    }

    $.nBox = {
        init:function(object, options){
            return object.each(function(){
                if ($(this).data(pluginName)) return;

                var opts = $.extend(true, {}, options), obj;
                obj = new NBox();
                obj.init($(this), opts);
                $.data(this, pluginName, obj);

            });
        },
        hide:function(object){
            return object.each(function(){
                var self = $(this).data(pluginName);
                if (!self) return;

                self.hide();
            });
        },
        show:function(object){
            return object.each(function(){
                var self = $(this).data(pluginName);
                if (!self) return;

                self.show();
            });
        }
    }

    $.fn.nBox = function(method){
       if (typeof $.nBox[method] !== "undefined") {
            arguments = Array.prototype.concat.call([arguments[0]], [this], Array.prototype.slice.call(arguments, 1));
            return $.nBox[method].apply($.nBox, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            Array.prototype.unshift.call(arguments, this);
            return $.nBox.init.apply($.nBox, arguments);
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.nBox' );
        }

        return this;
    };
})(jQuery);

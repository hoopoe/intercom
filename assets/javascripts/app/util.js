define([
    
], function() {
	var initialize = function() {
		console.log("test util");
	}
	var logMeIn = function() {
		if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        window.location = window.location.origin + '/login?back_url=' + window.location.origin + '/tercomin';
	}

	var getHash = function() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };

	var currentView;
	var showView = function(view) {
        window.v = view;
        if (this.currentView) {
        	// app.topMenuView.deactivate(view.name);
            $("li.menu-item").removeClass("active");       
            this.currentView.close();
        }
        this.currentView = view;
        this.currentView.render();
        $(".content").html(this.currentView.el);
        $("li[value='" + view.name + "']").addClass("active");
        // app.topMenuView.activate(view.name);       
    }

    showError = function(html) {
        if (this.currentView) {
            this.currentView.close();
        }
        $(".content").html(html);
    };

    var resample = (function(canvas) {
        // based on http://webreflection.blogspot.de/2010/12/100-client-side-image-resizing.html (C) WebReflection Mit Style License
        function Resample(img, width, height, onresample) {
            var load = typeof img == "string",
                i = load || img;

            // if string, a new Image is needed
            if (load) {
                i = new Image;
                i.onload = onload;
                i.onerror = onerror;
            }

            i._onresample = onresample;
            i._width = width;
            i._height = height;
            if (load) {
                i.src = img;
            } else {
                onload.call(img);
            }
        }

        function onerror() {
            throw ("not found: " + this.src);
        }

        function onload() {
            var img = this,
                width = img._width,
                height = img._height,
                onresample = img._onresample;
            // if width and height are both specified
            // the resample uses these pixels
            // if width is specified but not the height
            // the resample respects proportions
            // accordingly with orginal size
            // same is if there is a height, but no width
            var minValue = Math.min(img.height, img.width);
            width == null && (width = round(img.width * height / img.height));
            height == null && (height = round(img.height * width / img.width));

            delete img._onresample;
            delete img._width;
            delete img._height;

            // when we reassign a canvas size
            // this clears automatically
            // the size should be exactly the same
            // of the final image
            // so that toDataURL ctx method
            // will return the whole canvas as png
            // without empty spaces or lines
            canvas.width = width;
            canvas.height = height;
            // drawImage has different overloads
            // in this case we need the following one ...
            context.drawImage(
                // original image
                img,
                // starting x point
                0,
                // starting y point
                0,
                // image width
                minValue,
                // image height
                minValue,
                // destination x point
                0,
                // destination y point
                0,
                // destination width
                width,
                // destination height
                height
            );
            // retrieve the canvas content as
            // base64 encoded PNG image
            // and pass the result to the callback
            onresample(canvas.toDataURL("image/png"));
        }

        var context = canvas.getContext("2d"),
            // local scope shortcut
            round = Math.round;

        return Resample;

    }(this.document.createElement("canvas")));

	return {
	    initialize: initialize,
	    logMeIn: logMeIn,
	    showView: showView,
	    getHash: getHash,
        showError: showError,
        resample: resample
	};
});
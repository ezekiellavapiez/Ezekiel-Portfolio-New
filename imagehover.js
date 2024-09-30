var cursor = $(".cursor"),
                follower = $(".cursor-follower");

            var posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 20,
                            top: posY - 20
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });
                }
            });

            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $(".portfolio-item img").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".portfolio-item img").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            ///////
            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $(".portfolio-item2 img").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".portfolio-item2 img").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            ////////
            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $(".portfolio-item3 img").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".portfolio-item3 img").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            //////////////
            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $("#slide1").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $("#slide1").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
             //////////////
             $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $("#slide2").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $("#slide2").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
             //////////////
             $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $("#slide3").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $("#slide3").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
             //////////////
             $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $("#slide4").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $("#slide4").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
             //////////////
             $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $("#slide5").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $("#slide5").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
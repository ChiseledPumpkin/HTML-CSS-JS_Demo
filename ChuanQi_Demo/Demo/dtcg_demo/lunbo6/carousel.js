;
(function($, window, document, undefined) {
    var Carousel = function(elem, options) {
        this.defaults = { curDisplay: 0, autoPlay: false, interval: 3000 };
        this.opts = $.extend({}, this.defaults, options);

        var self = this;
        this.$carousel = elem;
        this.$aImg = this.$carousel.find('li');
        this.imgLen = this.$aImg.length;
        this.curDisplay = this.opts.curDisplay;
        this.autoPlay = this.opts.autoPlay;
        this.viewWidth = $(window).width() / 2;
        this.b_switch = true;
        this.iNow = this.opts.curDisplay;
        this.timer = null;
        this.interval = this.opts.interval;
    };

    Carousel.prototype = {
        play: function() {
            if (this.autoPlay) {
                if (this.iNow === this.imgLen - 1) {
                    this.iNow = 0;
                } else {
                    this.iNow++;
                }

                this.movingNext(this.iNow);
            }
        },

        movingPrev: function(index) {
            this.curDisplay = index;

            this.initalCarousel();
        },

        movingNext: function(index) {
            this.curDisplay = index;
            this.initalCarousel();
        },

        initalCarousel: function() {
            var self = this;
            var half_imgLen = Math.floor(this.imgLen / 2);
            var leftNum, rightNum;

            for (var i = 0; i < half_imgLen; i++) {
                leftNum = this.curDisplay - i - 1;
                this.$aImg.eq(leftNum).attr('style', "opacity:" + 0.4 * (2 - i) + ";-webkit-transform:translateX(" + (-420 * (i + 1)) + "px) translateZ(" + (-500 - i * 190) + "px) rotateY(42deg);-moz-transform:translateX(" + (-420 * (i + 1)) + "px) translateZ(" + (-500 - i * 190) + "px) rotateY(42deg);-ms-transform:translateX(" + (-420 * (i + 1)) + "px) translateZ(" + (-500 - i * 190) + "px) rotateY(42deg);-o-transform:translateX(" + (-420 * (i + 1)) + "px) translateZ(" + (-500 - i * 190) + "px) rotateY(42deg);transform:translateX(" + (-420 * (i + 1)) + "px) translateZ(" + (-500 - i * 190) + "px) rotateY(42deg)");



                rightNum = this.curDisplay + i + 1;
                if (rightNum > this.imgLen - 1) rightNum -= this.imgLen;
                this.$aImg.eq(rightNum).attr('style', "opacity:" + 0.4 * (2 - i) + ";-webkit-transform: translateX(" + (420 * (i + 1)) + "px) translateZ(" + (-500 - i * 190) + "px) rotateY(-42deg);-ms-transform: translateX(" + (420 * (i + 1)) + "px) translateZ(" + (-500 - i * 190) + "px) rotateY(-42deg);-moz-transform: translateX(" + (420 * (i + 1)) + "px) translateZ(" + (-500 - i * 190) + "px) rotateY(-42deg);-o-transform: translateX(" + (420 * (i + 1)) + "px) translateZ(" + (-500 - i * 190) + "px) rotateY(-42deg);transform: translateX(" + (420 * (i + 1)) + "px) translateZ(" + (-500 - i * 190) + "px) rotateY(-42deg)");

                this.$aImg.removeClass('on');
            }

            this.$aImg.eq(this.curDisplay).css({
                transform: 'translateZ(0px)',
                opacity: 1,
                zIndex: 50
            }).addClass('on');

            this.$carousel.on('webkitTransitionEnd', function() {
                self.b_switch = true;
            });
        },

        inital: function() {
            var self = this;

            this.initalCarousel();
            this.$aImg.on('click', function(ev) {
                if (self.b_switch && !$(this).hasClass('on')) {
                    self.iNow = $(this).index();
                    self.b_switch = false;

                    var direction = self.viewWidth < ev.clientX ? 'next' : 'prev';
                    var index = $(this).index();

                    if (direction === 'next') {
                        self.movingNext(index);
                    } else {
                        self.movingPrev(index);
                    }
                }
            }).hover(function() {
                clearInterval(self.timer);
            }, function() {
                self.timer = setInterval(function() {
                    self.play();
                }, self.interval);
            });

            this.timer = setInterval(function() {
                self.play();
            }, this.interval);

            this.$carousel.on('selectstart', function() {
                return false;
            });

            $(".btn_next").on('click', function(event) {
                self.iNow < self.imgLen - 1 ? self.iNow++ : self.iNow = 0;
                self.movingNext(self.iNow);
                clearInterval(self.timer);
                self.timer = setInterval(function() {
                    self.play();
                }, self.interval);
            });
            $(".btn_prve").on('click', function(event) {
                self.iNow > 0 ? self.iNow-- : self.iNow = self.imgLen - 1;
                self.movingNext(self.iNow);
                clearInterval(self.timer);
                self.timer = setInterval(function() {
                    self.play();
                }, self.interval);
            });
        },

        constructor: Carousel
    };

    $.fn.carousel = function(options) {
        var carousel = new Carousel(this, options);

        return carousel.inital();
    };

})(jQuery, window, document, undefined);
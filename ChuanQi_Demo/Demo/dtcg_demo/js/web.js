jQuery(".slide1").slide({ mainCell: ".slide1images .uls", autoPlay: true, vis: 1, effect: "fade" });
jQuery(".slide2").slide({ mainCell: ".slide2images .uls", titCell: ".slide2hd .uls li", autoPlay: true, vis: 1, effect: "fade" });

jQuery(".slide3").slide({ mainCell: ".slide3images .uls", autoPlay: true, vis: 1, effect: "fade" });
jQuery(".slide4").slide({ mainCell: ".slide4images .uls", autoPlay: true, vis: 1, effect: "fade" });
jQuery(".slide5").slide({ mainCell: ".slide5images .uls", autoPlay: true, vis: 1, effect: "fade" });



var myVid = document.getElementById("Music");

//

function ToggleMusic() {
    if (myVid.paused) {
        $("#MusicToggleButton").html('点击暂停音乐');
        myVid.play();
        alert('并没有什么音乐');
    } else {
        $("#MusicToggleButton").html('点击播放音乐');
        myVid.pause();
        alert('并没有什么音乐');
    }
}
/*---- All ----*/
//頁面固定
gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false
    });
})

/*---- Meber Info ----*/

//翻開翻回照片
TweenLite.set(".cardWrapper", { perspective: 800 });
TweenLite.set(".card", { transformStyle: "preserve-3d" });
TweenLite.set(".back", { rotationY: 180 });
TweenLite.set([".back", ".front"], { backfaceVisibility: "hidden" });

var t3 = new TimelineLite({
    scrollTrigger: {
        trigger: ".cardWrapper",
        start: "0px center",
        end: "275px center",
        //markers: true,
        toggleActions: "restart reverse restart reverse"//pause超過之後會暫停 reverse返回
        //1.start在scroller-start上面時觸發
        //2.end在scroller-end上面時觸發
        //3.end在scroller-end下面時觸發
        //4.start在scroller-start下面時觸發
    }
});

t3.to(".hyojin", 1, { rotationY: 180 })
    .to(".etion", 1, { rotationY: 180 }, "-=0.85")
    .to(".jus ", 1, { rotationY: 180 }, "-=0.8")
    .to(".wyatt", 1, { rotationY: 180 }, "-=0.75")
    .to(".mk", 1, { rotationY: 180 }, "-=0.7")
    .to(".yuto", 1, { rotationY: 180 }, "-=0.65")

var meberInfo = document.getElementById("meberInfo");
var xxx = document.getElementById("xxx");
var headname = document.getElementById("headname");
var infoText = document.getElementById("infoText");
var ONFInfo = document.getElementById("ONFInfo");
//
var hh = document.getElementById("hh");
var ee = document.getElementById("ee");
var jj = document.getElementById("jj");
var ww = document.getElementById("ww");
var mm = document.getElementById("mm");
var uu = document.getElementById("uu");

//叉叉的部分(成員介紹彈出彈回)
var t2 = gsap.timeline({//時間軸(可安排動畫順序)
    scrollTrigger: {
        paused: true,
        trigger: "#xxx",
        start: "-270px center",
        end: "5px center",
        //markers: true,
        toggleActions: "none reverse none none "//pause超過之後會暫停 reverse返回
        //1.start在scroller-start上面時觸發
        //2.end在scroller-end上面時觸發
        //3.end在scroller-end下面時觸發
        //4.start在scroller-start下面時觸發
    }
});

t2.fromTo("#meberInfo", {
    opacity: "0",
    scale: "0",
},
    {
        scale: "1",
        ease: Linear,
        opacity: "0.9",
        duration: "2",
    });

hyojin.onclick = function () {
    ONFInfo.style.opacity = "0";
    //
    hh.style.boxShadow = "10px 10px 10px #fb5a9e";
    ee.style.boxShadow = "none";
    jj.style.boxShadow = "none";
    ww.style.boxShadow = "none";
    mm.style.boxShadow = "none";
    uu.style.boxShadow = "none";
    //
    headname.textContent = "Hyojin";
    infoText.innerHTML =
        "▸ 本名：金曉珍(김효진)<br/>" +
        "▸ 出生日：1994.04.22<br/>" +
        "▸ 隊內擔當：ON隊隊長、主唱<br/>" +
        "---------------------------------<br/>" +
        "TMI：<br/>" +
        "真心的喜歡紅色，所以經常染紅色頭髮。<br/>" +
        "翻Hyojin的舊照幾乎都是紅色頭髮的照片，本人喜歡到曾經說過可以的話希望可以長出紅色頭髮。";

    t2.play();
}
etion.onclick = function () {
    ONFInfo.style.opacity = "0";
    //
    hh.style.boxShadow = "none";
    ee.style.boxShadow = "10px 10px 10px #fb5a9e";
    jj.style.boxShadow = "none";
    ww.style.boxShadow = "none";
    mm.style.boxShadow = "none";
    uu.style.boxShadow = "none";
    //
    headname.textContent = "E-Tion";
    infoText.innerHTML =
        "▸ 本名：李昌潤(이창윤)<br/>" +
        "▸ 出生日：1994.12.24<br/>" +
        "▸ 隊內擔當：領唱<br/>" +
        "---------------------------------<br/>" +
        "TMI：<br/>" +
        "是被選為眼淚最多的成員，很容易被氛圍影響，只要旁邊的人就會跟著一起哭的類型。";
    t2.play();
}
jus.onclick = function () {
    ONFInfo.style.opacity = "0";
    //
    hh.style.boxShadow = "none";
    ee.style.boxShadow = "none";
    jj.style.boxShadow = "10px 10px 10px #fb5a9e";
    ww.style.boxShadow = "none";
    mm.style.boxShadow = "none";
    uu.style.boxShadow = "none";
    //
    headname.innerHTML = "&nbsp;J-us";
    infoText.innerHTML =
        "▸ 本名：李昇俊(이승준)<br/>" +
        "▸ 出生日：1995.01.13<br/>" +
        "▸ 隊內擔當：OFF隊隊長、副唱、領舞<br/>" +
        "---------------------------------<br/>" +
        "TMI：<br/>" +
        "是ONF中調皮的成員之一，經常不小心讓成員們鬧脾氣但又很懂怎麼撫平成員們的脾氣，把成員們玩弄在手中(小朋友…?)<br/>" +
        "但經常玩弄成員的J-US因為英文的發音很特別經常被成員們學和嘲笑(kkk)";
    t2.play();
}
wyatt.onclick = function () {
    ONFInfo.style.opacity = "0";
    //
    hh.style.boxShadow = "none";
    ee.style.boxShadow = "none";
    jj.style.boxShadow = "none";
    ww.style.boxShadow = "10px 10px 10px #fb5a9e";
    mm.style.boxShadow = "none";
    uu.style.boxShadow = "none";
    //
    headname.innerHTML = "&thinsp;&thinsp;Wyatt";
    infoText.innerHTML =
        "▸ 本名：沈宰營(심재영)<br/>" +
        "▸ 出生日：1995.01.23<br/>" +
        "▸ 隊內擔當：主Rapper<br/>" +
        "---------------------------------<br/>" +
        "TMI：<br/>" +
        "因為個性純真經常被Fuse逗著玩。<br/>" +
        "事蹟：「珍珠事件」<br/>" +
        "曾經相信粉絲說去飲料店追加一份沈宰營飲料裡會多一份珍珠的玩笑話，幾天後本人宣稱出自好奇嘗試但讓店員感到困惑。";
    t2.play();
}
mk.onclick = function () {
    ONFInfo.style.opacity = "0";
    //
    hh.style.boxShadow = "none";
    ee.style.boxShadow = "none";
    jj.style.boxShadow = "none";
    ww.style.boxShadow = "none";
    mm.style.boxShadow = "10px 10px 10px #fb5a9e";
    uu.style.boxShadow = "none";
    //
    headname.innerHTML = "&emsp;&thinsp;MK";
    infoText.innerHTML =
        "▸ 本名：朴珉均(박민균)<br/>" +
        "▸ 出生日：1995.11.16<br/>" +
        "▸ 隊內擔當：領唱、副Rapper<br/>" +
        "---------------------------------<br/>" +
        "TMI：<br/>" +
        "是ONF裡面最四次元的成員，無時無刻都活在自己的小世界裡，需要成員們多次呼喚他才會從小世界裡出來。<br/>" +
        "雖然成員們花很多心力在照顧他、碎念他，但對於成員們嘮叨全盤接受，心地非常善良。";
    t2.play();
}
yuto.onclick = function () {
    ONFInfo.style.opacity = "0";
    //
    hh.style.boxShadow = "none";
    ee.style.boxShadow = "none";
    jj.style.boxShadow = "none";
    ww.style.boxShadow = "none";
    mm.style.boxShadow = "none";
    uu.style.boxShadow = "10px 10px 10px #fb5a9e";
    //
    headname.innerHTML = "&emsp;&thinsp;&thinsp;&thinsp;U";
    infoText.innerHTML =
        "▸ 本名：水口裕斗(미즈구치유토)<br/>" +
        "▸ 出生日：1999.03.16<br/>" +
        "▸ 隊內擔當：主舞、副唱、忙內<br/>" +
        "---------------------------------<br/>" +
        "TMI：<br/>" +
        "WM Entertainment第一位非韓國籍藝人。<br/>" +
        "個性調皮、說話時有些毒舌，但很照顧成員哥哥們除了教舞還會幫忙準備早餐、打理宿舍最重要的還有管理共同金錢，是一位能幹的小朋友♡";
    t2.play();
}
xxx.onclick = function () {
    t2.reverse();
    ONFInfo.style.opacity = "0.9";
    //
    hh.style.boxShadow = "none";
    ee.style.boxShadow = "none";
    jj.style.boxShadow = "none";
    ww.style.boxShadow = "none";
    mm.style.boxShadow = "none";
    uu.style.boxShadow = "none";
}


/*---- MV Teaser ----*/
var VideoInfo = document.getElementById("VideoInfo");
var youtubeText = document.getElementById("youtubeText");
var window2 = document.getElementById("window2");
var youtube2 = document.getElementById("youtube2");
//------------------
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");
var nav5 = document.getElementById("nav5");
var nav6 = document.getElementById("nav6");
var nav7 = document.getElementById("nav7");
//------------------
var V1 = document.getElementById("V1");
var V2 = document.getElementById("V2");
var V3 = document.getElementById("V3");
var V4 = document.getElementById("V4");
var V5 = document.getElementById("V5");
var V6 = document.getElementById("V6");
var V7 = document.getElementById("V7");
//------------------
var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var pic4 = document.getElementById("pic4");
var pic5 = document.getElementById("pic5");
var pic6 = document.getElementById("pic6");
var pic7 = document.getElementById("pic7");
//------------------
var videoNow;
var a = 0;
var v;
var vv = 0;

//觸發按鈕換影片
function changeVideo(e) {
    youtube2.style.opacity = "0";
    console.log(e, vv);
    VideoInfo.style.opacity = "0";
    if (a == 1 && v != e) {
        videoNow.pause();
        videoNow.currentTime = 0;
        videoNow.style.opacity = "0";
        a == 0;
    }
    else if (v == e && vv == 0 && a == 1) {
        videoNow.pause();
        if (e == 1) {
            pic1.src = "icon/play.png";
        }
        else if (e == 2) {
            pic2.src = "icon/play.png";
        }
        else if (e == 3) {
            pic3.src = "icon/play.png";
        }
        else if (e == 4) {
            pic4.src = "icon/play.png";
        }
        else if (e == 5) {
            pic5.src = "icon/play.png";
        }
        else if (e == 6) {
            pic6.src = "icon/play.png";
        }
        else if (e == 7) {
            pic7.src = "icon/play.png";

        }
        vv = 1;
    }
    else if (v == e && vv == 1 && a == 1) {
        videoNow.play();
        if (e == 1) {
            pic1.src = "icon/pause.png";
            nav1.style.color = "#fb5a9e";
            window2.href = "https://www.youtube.com/watch?v=RQlMI0n10VY";
        }
        else if (e == 2) {
            pic2.src = "icon/pause.png";
            nav2.style.color = "#fb5a9e";
            window2.href = "https://www.youtube.com/watch?v=ka9zaVL28OY";
        }
        else if (e == 3) {
            pic3.src = "icon/pause.png";
            nav3.style.color = "#fb5a9e";
            window2.href = "https://www.youtube.com/watch?v=oGTJkDWxR_s";
        }
        else if (e == 4) {
            pic4.src = "icon/pause.png";
            nav4.style.color = "#fb5a9e";
            window2.href = "https://www.youtube.com/watch?v=gH14nS5NC0g";
        }
        else if (e == 5) {
            pic5.src = "icon/pause.png";
            nav5.style.color = "#fb5a9e";
            window2.href = "https://www.youtube.com/watch?v=pFSqmE-jy9g";
        }
        else if (e == 6) {
            pic6.src = "icon/pause.png";
            nav6.style.color = "#fb5a9e";
            window2.href = "https://www.youtube.com/watch?v=0pwBFTUJBzQ";
        }
        else if (e == 7) {
            pic7.src = "icon/pause.png";
            nav7.style.color = "#fb5a9e";
            window2.href = "https://www.youtube.com/watch?v=O52PLLfiloc";
        }

        vv = 0;
    }
    //
    if (v != e || a == 0) {
        if (e == 1) {
            videoNow = V1;
            v = 1;
            pic1.src = "icon/pause.png";
            pic2.src = "icon/play.png";
            pic3.src = "icon/play.png";
            pic4.src = "icon/play.png";
            pic5.src = "icon/play.png";
            pic6.src = "icon/play.png";
            pic7.src = "icon/play.png";
            window2.href = "https://www.youtube.com/watch?v=RQlMI0n10VY";
            //
            nav1.style.color = "#fb5a9e";
            nav2.style.color = "#161313";
            nav3.style.color = "#161313";
            nav4.style.color = "#161313";
            nav5.style.color = "#161313";
            nav6.style.color = "#161313";
            nav7.style.color = "#161313";
        }
        else if (e == 2) {
            videoNow = V2;
            v = 2;
            pic2.src = "icon/pause.png";
            pic1.src = "icon/play.png";
            pic3.src = "icon/play.png";
            pic4.src = "icon/play.png";
            pic5.src = "icon/play.png";
            pic6.src = "icon/play.png";
            pic7.src = "icon/play.png";
            //
            nav2.style.color = "#fb5a9e";
            nav1.style.color = "#161313";
            nav3.style.color = "#161313";
            nav4.style.color = "#161313";
            nav5.style.color = "#161313";
            nav6.style.color = "#161313";
            nav7.style.color = "#161313";
            window2.href = "https://www.youtube.com/watch?v=ka9zaVL28OY";
        }
        else if (e == 3) {
            videoNow = V3;
            v = 3;
            pic3.src = "icon/pause.png";
            pic1.src = "icon/play.png";
            pic2.src = "icon/play.png";
            pic4.src = "icon/play.png";
            pic5.src = "icon/play.png";
            pic6.src = "icon/play.png";
            pic7.src = "icon/play.png";
            //
            nav3.style.color = "#fb5a9e";
            nav1.style.color = "#161313";
            nav2.style.color = "#161313";
            nav4.style.color = "#161313";
            nav5.style.color = "#161313";
            nav6.style.color = "#161313";
            nav7.style.color = "#161313";
            window2.href = "https://www.youtube.com/watch?v=oGTJkDWxR_s";
        }
        else if (e == 4) {
            videoNow = V4;
            v = 4;
            pic4.src = "icon/pause.png";
            pic1.src = "icon/play.png";
            pic2.src = "icon/play.png";
            pic3.src = "icon/play.png";
            pic5.src = "icon/play.png";
            pic6.src = "icon/play.png";
            pic7.src = "icon/play.png";
            //
            nav4.style.color = "#fb5a9e";
            nav1.style.color = "#161313";
            nav2.style.color = "#161313";
            nav3.style.color = "#161313";
            nav5.style.color = "#161313";
            nav6.style.color = "#161313";
            nav7.style.color = "#161313";
            window2.href = "https://www.youtube.com/watch?v=gH14nS5NC0g";
        }
        else if (e == 5) {
            videoNow = V5;
            v = 5;
            pic5.src = "icon/pause.png";
            pic1.src = "icon/play.png";
            pic2.src = "icon/play.png";
            pic3.src = "icon/play.png";
            pic4.src = "icon/play.png";
            pic6.src = "icon/play.png";
            pic7.src = "icon/play.png";
            //
            nav5.style.color = "#fb5a9e";
            nav1.style.color = "#161313";
            nav2.style.color = "#161313";
            nav3.style.color = "#161313";
            nav4.style.color = "#161313";
            nav6.style.color = "#161313";
            nav7.style.color = "#161313";
            window2.href = "https://www.youtube.com/watch?v=pFSqmE-jy9g";
        }
        else if (e == 6) {
            videoNow = V6;
            v = 6;
            pic6.src = "icon/pause.png";
            pic1.src = "icon/play.png";
            pic2.src = "icon/play.png";
            pic3.src = "icon/play.png";
            pic4.src = "icon/play.png";
            pic5.src = "icon/play.png";
            pic7.src = "icon/play.png";
            //
            nav6.style.color = "#fb5a9e";
            nav1.style.color = "#161313";
            nav2.style.color = "#161313";
            nav3.style.color = "#161313";
            nav4.style.color = "#161313";
            nav5.style.color = "#161313";
            nav7.style.color = "#161313";
            window2.href = "https://www.youtube.com/watch?v=0pwBFTUJBzQ";
        }
        else if (e == 7) {
            videoNow = V7;
            v = 7;
            pic7.src = "icon/pause.png";
            pic1.src = "icon/play.png";
            pic2.src = "icon/play.png";
            pic3.src = "icon/play.png";
            pic4.src = "icon/play.png";
            pic5.src = "icon/play.png";
            pic6.src = "icon/play.png";
            //
            nav7.style.color = "#fb5a9e";
            nav1.style.color = "#161313";
            nav2.style.color = "#161313";
            nav3.style.color = "#161313";
            nav4.style.color = "#161313";
            nav5.style.color = "#161313";
            nav6.style.color = "#161313";
            window2.href = "https://www.youtube.com/watch?v=O52PLLfiloc";
        }
        a = 1;
        playVideo();
    }
}

//播放影片
function playVideo() {
    videoNow.style.opacity = "1";
    //videoNow.muted = true;
    videoNow.play();
    videoNow.addEventListener("timeupdate", updateProgress);//監測到這個物件(start)產生這個事件(timeupdate)執行這個函式(updateProgress)            
}

//影片結束換回專輯介紹
function updateProgress() {
    if (videoNow.ended) {
        a = 0;
        if (v == 1) {
            VideoInfo.src = "img/Introduce/album_info01.PNG";
        }
        if (v == 2) {
            VideoInfo.src = "img/Introduce/album_info02.PNG";
        }
        if (v == 3) {
            VideoInfo.src = "img/Introduce/album_info03.PNG";
        }
        if (v == 4) {
            VideoInfo.src = "img/Introduce/album_info04.PNG";
        }
        if (v == 5) {
            VideoInfo.src = "img/Introduce/album_info05.PNG";
        }
        if (v == 6) {
            VideoInfo.src = "img/Introduce/album_info06.PNG";
        }
        if (v == 7) {
            VideoInfo.src = "img/Introduce/album_info07.PNG";
        }

        videoNow.style.opacity = "0";
        VideoInfo.style.opacity = "1";
        youtube2.style.opacity = "1";
        //                   
        pic1.src = "icon/play.png";
        pic2.src = "icon/play.png";
        pic3.src = "icon/play.png";
        pic4.src = "icon/play.png";
        pic5.src = "icon/play.png";
        pic6.src = "icon/play.png";
        pic7.src = "icon/play.png";
        //
        nav1.style.color = "#161313";
        nav2.style.color = "#161313";
        nav3.style.color = "#161313";
        nav4.style.color = "#161313";
        nav5.style.color = "#161313";
        nav6.style.color = "#161313";
        nav7.style.color = "#161313";

    }

}
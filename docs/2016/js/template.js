$(document).ready(function () {
    var navbar_html = (function () { /*
            <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
            &#9776;
            </button>
            <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
                <a class="navbar-brand" href="#"><img src="images/teracoder.png"/></a>
                <ul class="nav navbar-nav">
                    <li class="nav-item" id="nav-item1">
                        <a class="nav-link" href="index.html" id="nav-item1-text">ホーム</a>
                    </li>
                    <li class="nav-item" id="nav-item2">
                        <a class="nav-link" href="rule.html" id="nav-item2-text">ルール</a>
                    </li>
                    <li class="nav-item" id="nav-item3">
                        <a class="nav-link" href="prize.html" id="nav-item3-text">賞品</a>
                    </li>
                    <li class="nav-item" id="nav-item4">
                        <a class="nav-link" href="practice.html" id="nav-item4-text">練習</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://tcjudge.kyoto-su.ac.jp">会場</a>
                    </li>
                </ul>
            </div>
    */}).toString().split("*")[1];
    $("#navbar").append(navbar_html);

    var filename = window.location.href.match(".+/(.+?)([\?#;].*)?$")[1];
    console.log(filename);
    if (filename == "index.html") {
        $('#nav-item1').addClass("active");
        $('#nav-item1-text').append(' <span class="sr-only">(current)</span>');
    }
    else if (filename == "rule.html") {
        $('#nav-item2').addClass("active");
        $('#nav-item2-text').append(' <span class="sr-only">(current)</span>');
    }
    else if (filename == "prize.html") {
        $('#nav-item3').addClass("active");
        $('#nav-item3-text').append(' <span class="sr-only">(current)</span>');
    }
    else if (filename == "practice.html") {
        $('#nav-item4').addClass("active");
        $('#nav-item4-text').append(' <span class="sr-only">(current)</span>');
    }

    function getDaysLeft() {
        var currentDay = new Date().getTime();
        var targetDay = new Date(2016, 11, 19).getTime();  

        var diffMsec = targetDay - currentDay;
        var diffDays = diffMsec / (1000 * 60 * 60 * 24);
        var daysLeft = Math.ceil(diffDays);

        return daysLeft;
    }
    
    var days = getDaysLeft();
    $("#count-down-days").text(days);


    var footer_html = (function (){/*
        <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6"><img src="images/teracoder.png"> |　<a href="http://info.cse.kyoto-su.ac.jp">京都産業大学コンピュータ理工学部</a>　|　<a href="http://info.cse.kyoto-su.ac.jp/?page_id=6">寺子屋</a>　|</div>
            <div class="col-xs-6 col-sm-6 col-md-6 text-right">© 2016 寺子屋 TeraCoder運営スタッフ. All rights reserved.</div>   
        </div>
    */}).toString().split("*")[1];
    $("#footer").append(footer_html);
});
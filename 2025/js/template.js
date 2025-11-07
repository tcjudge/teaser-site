$(document).ready(function () {
    var navbar_html = (function () { /*
        <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="index.html"><img src="images/teracoder-logo-dark.svg"/></a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav navbar-nav">
                        <li class="nav-item" id="nav-item1">
                            <a class="nav-link" href="index.html" id="nav-item1-text">ホーム</a>
                        </li>
                        <li class="nav-item" id="nav-item2">
                            <a class="nav-link" href="rule.html" id="nav-item2-text">ルール</a>
                        </li>
                        <li class="nav-item" id="nav-item3">
                            <a class="nav-link" href="prize.html" id="nav-item3-text">表彰</a>
                        </li>
                        <li class="nav-item" id="nav-item4">
                            <a class="nav-link" href="practice.html" id="nav-item4-text">練習</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://tcjudge.kyoto-su.ac.jp">会場</a>
                        </li>
                    </ul>
                </div>
        </nav>
    */}).toString().split("*")[1];
    $("#navbar").append(navbar_html);

    var filename = window.location.href.match(".+/(.+?)([\?#;].*)?$")[1];
    console.log(filename);
    if (filename === "index.html") {
        $('#nav-item1 a').addClass("active");
    } else if (filename === "rule.html") {
        $('#nav-item2 a').addClass("active");
    } else if (filename === "prize.html") {
        $('#nav-item3 a').addClass("active");
    } else if (filename === "practice.html") {
        $('#nav-item4 a').addClass("active");
    }

    function getDaysLeft(y, m, d) {
        var currentDay = new Date().getTime();
        var targetDay = new Date(2025, 12-1, 27).getTime();

        var diffMsec = targetDay - currentDay;
        var diffDays = diffMsec / (1000 * 60 * 60 * 24);
        var daysLeft = Math.ceil(diffDays);

        if (daysLeft < 0) daysLeft = 0;

        return daysLeft;
    }

    var days = getDaysLeft();
    $("#count-down-days").text(days);


    var footer_html = (function (){/*
        <img src="images/address.png" style="width:100%;"/>
    */}).toString().split("*")[1];
    $("#footer").append(footer_html);
});

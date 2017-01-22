(function (window) {
    var lastUrl = "";

    function openPage() {
        var urls = getUrls();
        if (!urls.length) {
            return;
        }

        var url = urls.shift();
        setUrls(urls);
        if (url == lastUrl) {
            openPage();
        } else {
            window.open(url, "_new");
        }
    }

    function getUrls() {
        var urls = localStorage.getItem("ALL_URLS");
        urls = urls && JSON.parse(urls);

        return urls;
    }

    function setUrls(urls) {
        urls.sort();
        localStorage.setItem("ALL_URLS", JSON.stringify(urls));
    }

    function initUrls(selector) {
        var urls = [];
        selector = selector || "#main-container a";
        $(selector).each(function (i, v) {
            v.href && urls.indexOf(v.href) == -1 && urls.push(v.href);
        });

        setUrls(urls);
    }

    window.ff_openPage = {
        initUrls: initUrls,
        getUrls: getUrls,
        openPage: openPage,
    };
})(window);
;(function(){
    var NewsList = {
        init: function() {
            this.getData();
        },
        getData: function() {
            $.getJSON('/brief-pro/static/newsData.json', function(json, textStatus) {
                var html = '';
                var datalist = json.data;
                for (var i=0; i < datalist.length; i++) {
                    var item = datalist[i];
                    html += '<a href="'+item.contentUrl+'">\
                                <div class="news-item clearfix">\
                                    <div class="news-item-left">\
                                         <img src="'+item.picUrl+'">\
                                    </div>\
                                    <div class="news-item-right">\
                                        <p class="news-title">'+item.title+'</p>\
                                        <p class="news-desc">'+item.describe+'</p>\
                                    </div>\
                                </div>\
                            </a>';
                };
                $('.news-list').html(html);

            });
            
        }
      }

      NewsList.init();
  })()
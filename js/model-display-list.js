$(function(){
        function getUrlParam(name, url) {
            url = url || window.location.search;
            const reg = new RegExp(`(^|\\?|&)${name}=([^&]*)(\\s|&|$)`, 'i');
            if (reg.test(url)) return unescape(RegExp.$2.replace(/\+/g, ' '));
            return ''
      };
      var type = getUrlParam('type');

      var PicList = {
        init: function() {
            this.getData();
        },
        getData: function() {
            var type = getUrlParam('type');
            $.getJSON('./static/data.json', function(json, textStatus) {
                // console.log(json, json.imgData[type])
                var datalist = json.imgData[type];
                var dataType = json.picTypes[type];
                var html = '';
                for (var i=0; i < datalist.length; i++) {
                    var picIndex = i + 1;
                    if(picIndex < 10) {
                        picIndex = '0' + picIndex;
                    } 
                    html += '<div class="img-box">\
                                <img src="'+datalist[i].url+'">\
                            </div>\
                            <p class="pic-title">'+picIndex+'</p>'
                };
                $('.tit').text('模特展示【'+dataType+'】');
                $('.img-list').html(html);

            });
            
        }
      }

      PicList.init();
})
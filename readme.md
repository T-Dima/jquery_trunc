пишем плагин trunc

создаем функцию и обьявляем название trunc. передаем туда настройки
 var config - это обьект с начальными настройками
  
  if (settings) {
             $.extend(config, settings);
         }
         тянем настройки конфига.
         
         $(document).off("click", '.linkMore'); 
        Метод .off() удаляет обработчики событий,
         назначенные методом .on(). Специфические
          обработчики событий могут быть удалены после
           указания: названий событий, пространств имён,
            селектор, названий обработчиков. 
            
            $(document).on({click: function () {
            
                        var $this = $(this);
                        if ($this.hasClass('minimiz')) {
                            $this.removeClass('minimiz');
                            $this.html(config.moreText);
                        } else {
                            $this.addClass('minimiz');
                            $this.html(config.minimizText);
                        }
                        $this.parent().prev().toggle('');
                        $this.prev().toggle('');
                        return false;
                    }
                    }, '.linkMore');
                    Если вы указали название события "click", то все события данного типа будут устранены.
                    
                      return this.each(function () {
                                var $this = $(this);
                                if($this.hasClass("shorten")) return;
                    
                                $this.addClass("shorten");
                                var content = $this.html();
                                if (content.length > config.showChars) {
                                    var findChars = content.substr(0, config.showChars);
                                    var findCharsLength = content.substr(config.showChars, content.length - config.showChars);
                                    var html = findChars + '<span class="moreellipses">' + config.ellipsesText + ' </span><span class="moreInfo"><span>' + findCharsLength + '</span> <a href="#" class="linkMore">' + config.moreText + '</a></span>';
                                    $this.html(html);
                                    $(".moreInfo span").hide();
                                }
                            });
                            добавляем класс shorten 
                            ищем указанное колличество символов, и показываем остальной текст, по умолчинию текст скрыт
                            
                            
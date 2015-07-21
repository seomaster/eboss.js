(function() {
  this.SelectVariationHelper = (function() {
    function SelectVariationHelper() {}

    SelectVariationHelper.updatePrice = function(element, price) {
      if (price !== null) {
        return $(element).text(price);
      }
    };

    SelectVariationHelper.currentURL = function() {
      return document.URL;
    };

    SelectVariationHelper.addParameterToURL = function(param, value) {
      var qstring, url, val;
      url = this.currentURL();
      val = new RegExp('(\\?|\\&)' + param + '=.*?(?=(&|$))');
      qstring = /\?.+$/;
      if (val.test(url)) {
        url = url.replace(val, '$1' + param + '=' + value);
      } else if (qstring.test(url)) {
        url = url + '&' + param + '=' + value;
      } else {
        url = url + '?' + param + '=' + value;
      }
      return window.history.replaceState(url, "Title", url);
    };

    SelectVariationHelper.getURLParameters = function() {
      var hash, i, len, p, param, params, queryString;
      queryString = window.location.search.substr(window.location.search.indexOf("?") + 1);
      params = queryString.split("&");
      hash = {};
      for (i = 0, len = params.length; i < len; i++) {
        param = params[i];
        p = param.split('=');
        hash[p[0]] = p[1];
      }
      return hash;
    };

    SelectVariationHelper.enableAllOptionButtons = function() {
      var li, radio_buttons;
      radio_buttons = $("input[data-role='variation']:not([disabled=true])");
      radio_buttons.attr('disabled', false);
      li = radio_buttons.parent().parent();
      return li.removeClass('unavailable').removeAttr('title');
    };

    SelectVariationHelper.disableVariationButton = function(button) {
      var li;
      $(button).attr('disabled', true).prop('checked', false);
      li = $(button).parent().parent();
      return $(li).removeClass('active').addClass('unavailable').attr('title', 'Indisponível');
    };

    SelectVariationHelper.updateImageCarousel = function(variations) {
      var huges, i, image, images, len, thumbs, variation;
      if (variations.length === 1) {
        variation = variations[0];
        images = variation.variation_images;
        $('div#image-big').hide().empty();
        $('div#thumb-nav').hide().empty();
        huges = [];
        thumbs = [];
        for (i = 0, len = images.length; i < len; i++) {
          image = images[i];
          huges.push($('div#huge-placeholder').find("div[data-huge='variation_" + image + "']").clone());
          thumbs.push($('div#thumb-placeholder').find("div[data-thumb='variation_" + image + "']").clone());
        }
        $("div#image-big").append(huges);
        $("div#thumb-nav").append(thumbs);
        $('.slide-full').data('owlCarousel').reinit();
        return $('.slide-thumb').data('owlCarousel').reinit();
      }
    };

    return SelectVariationHelper;

  })();

}).call(this);

(function() {
  this.SelectVariationController = (function() {
    function SelectVariationController() {}

    SelectVariationController.prototype.updateSalesPrice = function(variations) {
      if (variations.length === 1) {
        return SelectVariationHelper.updatePrice("div[data-role='sales-price']", variations[0].sale_price_formatted);
      }
    };

    SelectVariationController.prototype.updateRegularPrice = function(variations) {
      if (variations.length === 1) {
        return SelectVariationHelper.updatePrice("div[data-role='regular-price']", variations[0].regular_price_formatted);
      }
    };

    SelectVariationController.prototype.updateHistoryState = function(element) {
      return SelectVariationHelper.addParameterToURL($(element).attr('name'), $(element).val());
    };

    SelectVariationController.prototype.selectOptionsOnLoad = function() {
      var parameters;
      parameters = SelectVariationHelper.getURLParameters();
      return $("input[data-role='variation']").each(function(index, element) {
        var name, value;
        name = $(element).attr('name');
        value = $(element).attr('value');
        if (name in parameters && parameters[name] === value) {
          $(element).attr('checked', true);
          return $(element).click();
        }
      });
    };

    SelectVariationController.prototype.updateImageCarousel = function(variations) {
      return SelectVariationHelper.updateImageCarousel(variations);
    };

    SelectVariationController.prototype.toogleVariationButtons = function(buttonClicked, variations) {
      var button, i, len, op, opt, results, variation;
      button = $(buttonClicked);
      SelectVariationHelper.enableAllOptionButtons();
      results = [];
      for (i = 0, len = variations.length; i < len; i++) {
        variation = variations[i];
        if (variation.qty_in_stock === 0) {
          if (variation.options_values.length === 1) {
            op = variation.options_values[0];
            results.push(SelectVariationHelper.disableVariationButton($("input[type='radio'][value='" + op + "']")));
          } else {
            results.push((function() {
              var j, len1, ref, results1;
              ref = variation.options_values;
              results1 = [];
              for (j = 0, len1 = ref.length; j < len1; j++) {
                opt = ref[j];
                if (opt !== $(button).attr('value')) {
                  results1.push(SelectVariationHelper.disableVariationButton($("input[type='radio'][value='" + opt + "']")));
                } else {
                  results1.push(void 0);
                }
              }
              return results1;
            })());
          }
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    return SelectVariationController;

  })();

}).call(this);

(function() {
  this.SelectVariationHandler = (function() {
    function SelectVariationHandler() {
      this.onClickVariation();
      this.onDocumentReady();
    }

    SelectVariationHandler.prototype.onClickVariation = function() {
      return $("input[data-role='variation']").on('click keyup', function(event) {
        var action, data, form, request;
        event.stopPropagation();
        form = $(this).closest('form');
        action = ($(form).attr('action')) + ".json";
        data = $(form).serialize();
        request = {
          url: action,
          data: data,
          method: 'get',
          dataType: 'JSON',
          success: function(response) {
            this.controller = new SelectVariationController();
            this.controller.updateSalesPrice(response);
            this.controller.updateRegularPrice(response);
            this.controller.updateImageCarousel(response);
            this.controller.toogleVariationButtons(event.target, response);
            return this.controller.updateHistoryState($(this));
          }
        };
        return $.ajax(request);
      });
    };

    SelectVariationHandler.prototype.onDocumentReady = function() {
      return $(window).bind('load', (function(_this) {
        return function() {
          _this.controller = new SelectVariationController();
          return _this.controller.selectOptionsOnLoad();
        };
      })(this));
    };

    return SelectVariationHandler;

  })();

}).call(this);

(function() {
  this.Eboss = (function() {
    function Eboss() {
      new SelectVariationHandler();
    }

    return Eboss;

  })();

}).call(this);

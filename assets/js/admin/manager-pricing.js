webpackJsonp([4],{

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

var $ = window.jQuery;
var awebooking = window.TheAweBooking;

$(function () {
  'use strict';

  var $dialog = awebooking.Popup.setup('#awebooking-set-price-popup');

  var showComments = function showComments(calendar) {
    var nights = calendar.getNights();

    var text = '';
    var toNight = calendar.endDay;

    if (nights === 1) {
      text = 'One night: ' + toNight.format(calendar.format);
    } else {
      text = '<b>' + nights + '</b> nights' + ' nights, from <b>' + calendar.startDay.format(calendar.format) + '</b> to <b>' + toNight.format(calendar.format) + '</b>';
    }

    return text;
  };

  var onApplyCalendar = function onApplyCalendar() {
    var calendar = this;

    calendar.room_type = this.$el.closest('.abkngcal-container').find('h2').text();
    // calendar.unit_name = this.$el.find('.abkngcal__month-heading').text();
    calendar.unit_name = '';
    calendar.data_id = this.$el.closest('[data-unit]').data('unit');
    calendar.comments = showComments(calendar);

    var formTemplate = wp.template('pricing-calendar-form');
    $dialog.find('.awebooking-dialog-contents').html(formTemplate(calendar));

    calendar.keepRange = true;
    $dialog.dialog('open');
  };

  var createCalendar = function createCalendar(el) {
    var calendar = new PricingCalendar(el);

    calendar.on('apply', onApplyCalendar);

    $dialog.on('dialogclose', function () {
      calendar.keepRange = false;
    });
  };

  $('.abkngcal--pricing-calendar .abkngcal__table').each(function (index, el) {
    if ($(el).hasClass('abkngcal__table--scheduler')) {
      $(el).find('tbody > tr').each(function (i, subel) {
        createCalendar(subel);
      });
    } else {
      createCalendar(el);
    }
  });

  new awebooking.RangeDatepicker('input[name="datepicker-start"]', 'input[name="datepicker-end"]').init();

  new awebooking.ToggleCheckboxes('table.pricing_management');
});

/***/ })

},[27]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzcmMvYWRtaW4vbWFuYWdlci1wcmljaW5nLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJhd2Vib29raW5nIiwiVGhlQXdlQm9va2luZyIsIiRkaWFsb2ciLCJQb3B1cCIsInNldHVwIiwic2hvd0NvbW1lbnRzIiwiY2FsZW5kYXIiLCJuaWdodHMiLCJnZXROaWdodHMiLCJ0ZXh0IiwidG9OaWdodCIsImVuZERheSIsImZvcm1hdCIsInN0YXJ0RGF5Iiwib25BcHBseUNhbGVuZGFyIiwicm9vbV90eXBlIiwiJGVsIiwiY2xvc2VzdCIsImZpbmQiLCJ1bml0X25hbWUiLCJkYXRhX2lkIiwiZGF0YSIsImNvbW1lbnRzIiwiZm9ybVRlbXBsYXRlIiwid3AiLCJ0ZW1wbGF0ZSIsImh0bWwiLCJrZWVwUmFuZ2UiLCJkaWFsb2ciLCJjcmVhdGVDYWxlbmRhciIsImVsIiwiUHJpY2luZ0NhbGVuZGFyIiwib24iLCJlYWNoIiwiaW5kZXgiLCJoYXNDbGFzcyIsImkiLCJzdWJlbCIsIlJhbmdlRGF0ZXBpY2tlciIsImluaXQiLCJUb2dnbGVDaGVja2JveGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSUMsT0FBT0MsTUFBakI7QUFDQSxJQUFNQyxhQUFhRixPQUFPRyxhQUExQjs7QUFFQUosRUFBRSxZQUFXO0FBQ1g7O0FBRUEsTUFBTUssVUFBVUYsV0FBV0csS0FBWCxDQUFpQkMsS0FBakIsQ0FBdUIsNkJBQXZCLENBQWhCOztBQUVBLE1BQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFTQyxRQUFULEVBQW1CO0FBQ3RDLFFBQUlDLFNBQVNELFNBQVNFLFNBQVQsRUFBYjs7QUFFQSxRQUFJQyxPQUFPLEVBQVg7QUFDQSxRQUFJQyxVQUFVSixTQUFTSyxNQUF2Qjs7QUFFQSxRQUFJSixXQUFXLENBQWYsRUFBa0I7QUFDaEJFLGFBQU8sZ0JBQWdCQyxRQUFRRSxNQUFSLENBQWVOLFNBQVNNLE1BQXhCLENBQXZCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xILGFBQU8sUUFBTUYsTUFBTixtQkFBNEIsbUJBQTVCLEdBQWtERCxTQUFTTyxRQUFULENBQWtCRCxNQUFsQixDQUF5Qk4sU0FBU00sTUFBbEMsQ0FBbEQsR0FBOEYsYUFBOUYsR0FBOEdGLFFBQVFFLE1BQVIsQ0FBZU4sU0FBU00sTUFBeEIsQ0FBOUcsR0FBZ0osTUFBdko7QUFDRDs7QUFFRCxXQUFPSCxJQUFQO0FBQ0QsR0FiRDs7QUFlQSxNQUFNSyxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQVc7QUFDakMsUUFBSVIsV0FBVyxJQUFmOztBQUVBQSxhQUFTUyxTQUFULEdBQXFCLEtBQUtDLEdBQUwsQ0FBU0MsT0FBVCxDQUFpQixxQkFBakIsRUFBd0NDLElBQXhDLENBQTZDLElBQTdDLEVBQW1EVCxJQUFuRCxFQUFyQjtBQUNBO0FBQ0FILGFBQVNhLFNBQVQsR0FBcUIsRUFBckI7QUFDQWIsYUFBU2MsT0FBVCxHQUFxQixLQUFLSixHQUFMLENBQVNDLE9BQVQsQ0FBaUIsYUFBakIsRUFBZ0NJLElBQWhDLENBQXFDLE1BQXJDLENBQXJCO0FBQ0FmLGFBQVNnQixRQUFULEdBQXFCakIsYUFBYUMsUUFBYixDQUFyQjs7QUFFQSxRQUFNaUIsZUFBZUMsR0FBR0MsUUFBSCxDQUFZLHVCQUFaLENBQXJCO0FBQ0F2QixZQUFRZ0IsSUFBUixDQUFhLDZCQUFiLEVBQTRDUSxJQUE1QyxDQUFpREgsYUFBYWpCLFFBQWIsQ0FBakQ7O0FBRUFBLGFBQVNxQixTQUFULEdBQXFCLElBQXJCO0FBQ0F6QixZQUFRMEIsTUFBUixDQUFlLE1BQWY7QUFDRCxHQWREOztBQWdCQSxNQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVNDLEVBQVQsRUFBYTtBQUNsQyxRQUFJeEIsV0FBVyxJQUFJeUIsZUFBSixDQUFvQkQsRUFBcEIsQ0FBZjs7QUFFQXhCLGFBQVMwQixFQUFULENBQVksT0FBWixFQUFxQmxCLGVBQXJCOztBQUVBWixZQUFROEIsRUFBUixDQUFXLGFBQVgsRUFBMEIsWUFBVztBQUNuQzFCLGVBQVNxQixTQUFULEdBQXFCLEtBQXJCO0FBQ0QsS0FGRDtBQUdELEdBUkQ7O0FBVUE5QixJQUFFLDhDQUFGLEVBQWtEb0MsSUFBbEQsQ0FBdUQsVUFBU0MsS0FBVCxFQUFnQkosRUFBaEIsRUFBb0I7QUFDekUsUUFBSWpDLEVBQUVpQyxFQUFGLEVBQU1LLFFBQU4sQ0FBZSw0QkFBZixDQUFKLEVBQWtEO0FBQ2hEdEMsUUFBRWlDLEVBQUYsRUFBTVosSUFBTixDQUFXLFlBQVgsRUFBeUJlLElBQXpCLENBQThCLFVBQVNHLENBQVQsRUFBWUMsS0FBWixFQUFtQjtBQUMvQ1IsdUJBQWVRLEtBQWY7QUFDRCxPQUZEO0FBR0QsS0FKRCxNQUlPO0FBQ0xSLHFCQUFlQyxFQUFmO0FBQ0Q7QUFDRixHQVJEOztBQVVDLE1BQUk5QixXQUFXc0MsZUFBZixDQUNDLGdDQURELEVBQ29DLDhCQURwQyxDQUFELENBRUdDLElBRkg7O0FBSUMsTUFBSXZDLFdBQVd3QyxnQkFBZixDQUNDLDBCQURELENBQUQ7QUFHRCxDQS9ERCxFIiwiZmlsZSI6IlxcanNcXGFkbWluXFxtYW5hZ2VyLXByaWNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCAkID0gd2luZG93LmpRdWVyeTtcclxuY29uc3QgYXdlYm9va2luZyA9IHdpbmRvdy5UaGVBd2VCb29raW5nO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGNvbnN0ICRkaWFsb2cgPSBhd2Vib29raW5nLlBvcHVwLnNldHVwKCcjYXdlYm9va2luZy1zZXQtcHJpY2UtcG9wdXAnKTtcclxuXHJcbiAgY29uc3Qgc2hvd0NvbW1lbnRzID0gZnVuY3Rpb24oY2FsZW5kYXIpIHtcclxuICAgIHZhciBuaWdodHMgPSBjYWxlbmRhci5nZXROaWdodHMoKTtcclxuXHJcbiAgICB2YXIgdGV4dCA9ICcnO1xyXG4gICAgdmFyIHRvTmlnaHQgPSBjYWxlbmRhci5lbmREYXk7XHJcblxyXG4gICAgaWYgKG5pZ2h0cyA9PT0gMSkge1xyXG4gICAgICB0ZXh0ID0gJ09uZSBuaWdodDogJyArIHRvTmlnaHQuZm9ybWF0KGNhbGVuZGFyLmZvcm1hdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZXh0ID0gYDxiPiR7bmlnaHRzfTwvYj4gbmlnaHRzYCArICcgbmlnaHRzLCBmcm9tIDxiPicgKyBjYWxlbmRhci5zdGFydERheS5mb3JtYXQoY2FsZW5kYXIuZm9ybWF0KSArICc8L2I+IHRvIDxiPicgKyB0b05pZ2h0LmZvcm1hdChjYWxlbmRhci5mb3JtYXQpICsgJzwvYj4nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQXBwbHlDYWxlbmRhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGNhbGVuZGFyID0gdGhpcztcclxuXHJcbiAgICBjYWxlbmRhci5yb29tX3R5cGUgPSB0aGlzLiRlbC5jbG9zZXN0KCcuYWJrbmdjYWwtY29udGFpbmVyJykuZmluZCgnaDInKS50ZXh0KCk7XHJcbiAgICAvLyBjYWxlbmRhci51bml0X25hbWUgPSB0aGlzLiRlbC5maW5kKCcuYWJrbmdjYWxfX21vbnRoLWhlYWRpbmcnKS50ZXh0KCk7XHJcbiAgICBjYWxlbmRhci51bml0X25hbWUgPSAnJztcclxuICAgIGNhbGVuZGFyLmRhdGFfaWQgICA9IHRoaXMuJGVsLmNsb3Nlc3QoJ1tkYXRhLXVuaXRdJykuZGF0YSgndW5pdCcpO1xyXG4gICAgY2FsZW5kYXIuY29tbWVudHMgID0gc2hvd0NvbW1lbnRzKGNhbGVuZGFyKTtcclxuXHJcbiAgICBjb25zdCBmb3JtVGVtcGxhdGUgPSB3cC50ZW1wbGF0ZSgncHJpY2luZy1jYWxlbmRhci1mb3JtJyk7XHJcbiAgICAkZGlhbG9nLmZpbmQoJy5hd2Vib29raW5nLWRpYWxvZy1jb250ZW50cycpLmh0bWwoZm9ybVRlbXBsYXRlKGNhbGVuZGFyKSk7XHJcblxyXG4gICAgY2FsZW5kYXIua2VlcFJhbmdlID0gdHJ1ZTtcclxuICAgICRkaWFsb2cuZGlhbG9nKCdvcGVuJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlQ2FsZW5kYXIgPSBmdW5jdGlvbihlbCkge1xyXG4gICAgbGV0IGNhbGVuZGFyID0gbmV3IFByaWNpbmdDYWxlbmRhcihlbCk7XHJcblxyXG4gICAgY2FsZW5kYXIub24oJ2FwcGx5Jywgb25BcHBseUNhbGVuZGFyKTtcclxuXHJcbiAgICAkZGlhbG9nLm9uKCdkaWFsb2djbG9zZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjYWxlbmRhci5rZWVwUmFuZ2UgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJCgnLmFia25nY2FsLS1wcmljaW5nLWNhbGVuZGFyIC5hYmtuZ2NhbF9fdGFibGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xyXG4gICAgaWYgKCQoZWwpLmhhc0NsYXNzKCdhYmtuZ2NhbF9fdGFibGUtLXNjaGVkdWxlcicpKSB7XHJcbiAgICAgICQoZWwpLmZpbmQoJ3Rib2R5ID4gdHInKS5lYWNoKGZ1bmN0aW9uKGksIHN1YmVsKSB7XHJcbiAgICAgICAgY3JlYXRlQ2FsZW5kYXIoc3ViZWwpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNyZWF0ZUNhbGVuZGFyKGVsKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgKG5ldyBhd2Vib29raW5nLlJhbmdlRGF0ZXBpY2tlcihcclxuICAgICdpbnB1dFtuYW1lPVwiZGF0ZXBpY2tlci1zdGFydFwiXScsICAnaW5wdXRbbmFtZT1cImRhdGVwaWNrZXItZW5kXCJdJ1xyXG4gICkpLmluaXQoKTtcclxuXHJcbiAgKG5ldyBhd2Vib29raW5nLlRvZ2dsZUNoZWNrYm94ZXMoXHJcbiAgICAndGFibGUucHJpY2luZ19tYW5hZ2VtZW50J1xyXG4gICkpO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzc3JjL2FkbWluL21hbmFnZXItcHJpY2luZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
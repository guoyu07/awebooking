webpackJsonp([6],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

eval("var $ = window.jQuery;\nvar awebooking = window.TheAweBooking;\n\n$(function () {\n\n  $('#awebooking-booking-notes').on('click', '.delete_note', function (e) {\n    e.preventDefault();\n\n    var el = $(this);\n    var note = $(this).closest('li.note');\n\n    wp.ajax.post('delete_awebooking_note', {\n      note_id: $(note).attr('rel'),\n      booking_id: $('#post_ID').val()\n    }).done(function (response) {\n      $(note).remove();\n    });\n  });\n\n  $('#awebooking-booking-notes').on('click', 'button.add_note', function (e) {\n    e.preventDefault();\n\n    var noteContents = $('textarea#add_booking_note').val();\n    if (!noteContents) {\n      return;\n    }\n\n    wp.ajax.post('add_awebooking_note', {\n      booking_id: $('#post_ID').val(),\n      note: $('textarea#add_booking_note').val(),\n      note_type: $('select#booking_note_type').val()\n    }).done(function (data) {\n      $('ul.booking_notes').prepend(data.new_note);\n      $('#add_booking_note').val('');\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzcmMvYWRtaW4vZWRpdC1ib29raW5nLmpzP2U1YjMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImpRdWVyeSIsImF3ZWJvb2tpbmciLCJUaGVBd2VCb29raW5nIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJlbCIsIm5vdGUiLCJjbG9zZXN0Iiwid3AiLCJhamF4IiwicG9zdCIsIm5vdGVfaWQiLCJhdHRyIiwiYm9va2luZ19pZCIsInZhbCIsImRvbmUiLCJyZXNwb25zZSIsInJlbW92ZSIsIm5vdGVDb250ZW50cyIsIm5vdGVfdHlwZSIsImRhdGEiLCJwcmVwZW5kIiwibmV3X25vdGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLElBQUlDLE9BQU9DLE1BQWpCO0FBQ0EsSUFBTUMsYUFBYUYsT0FBT0csYUFBMUI7O0FBRUFKLEVBQUUsWUFBVzs7QUFFWEEsSUFBRSwyQkFBRixFQUErQkssRUFBL0IsQ0FBa0MsT0FBbEMsRUFBMkMsY0FBM0MsRUFBMkQsVUFBU0MsQ0FBVCxFQUFZO0FBQ3JFQSxNQUFFQyxjQUFGOztBQUVBLFFBQU1DLEtBQUtSLEVBQUUsSUFBRixDQUFYO0FBQ0EsUUFBTVMsT0FBT1QsRUFBRSxJQUFGLEVBQVFVLE9BQVIsQ0FBZ0IsU0FBaEIsQ0FBYjs7QUFFQUMsT0FBR0MsSUFBSCxDQUFRQyxJQUFSLENBQWEsd0JBQWIsRUFBdUM7QUFDckNDLGVBQVNkLEVBQUVTLElBQUYsRUFBUU0sSUFBUixDQUFhLEtBQWIsQ0FENEI7QUFFckNDLGtCQUFZaEIsRUFBRSxVQUFGLEVBQWNpQixHQUFkO0FBRnlCLEtBQXZDLEVBSUNDLElBSkQsQ0FJTSxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZCbkIsUUFBRVMsSUFBRixFQUFRVyxNQUFSO0FBQ0QsS0FORDtBQU9ELEdBYkQ7O0FBZUFwQixJQUFFLDJCQUFGLEVBQStCSyxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxpQkFBM0MsRUFBOEQsVUFBVUMsQ0FBVixFQUFhO0FBQ3pFQSxNQUFFQyxjQUFGOztBQUVBLFFBQU1jLGVBQWVyQixFQUFFLDJCQUFGLEVBQStCaUIsR0FBL0IsRUFBckI7QUFDQSxRQUFJLENBQUVJLFlBQU4sRUFBcUI7QUFDbkI7QUFDRDs7QUFFRFYsT0FBR0MsSUFBSCxDQUFRQyxJQUFSLENBQWEscUJBQWIsRUFBb0M7QUFDbENHLGtCQUFZaEIsRUFBRSxVQUFGLEVBQWNpQixHQUFkLEVBRHNCO0FBRWxDUixZQUFZVCxFQUFFLDJCQUFGLEVBQStCaUIsR0FBL0IsRUFGc0I7QUFHbENLLGlCQUFZdEIsRUFBRSwwQkFBRixFQUE4QmlCLEdBQTlCO0FBSHNCLEtBQXBDLEVBS0NDLElBTEQsQ0FLTSxVQUFTSyxJQUFULEVBQWU7QUFDbkJ2QixRQUFFLGtCQUFGLEVBQXNCd0IsT0FBdEIsQ0FBOEJELEtBQUtFLFFBQW5DO0FBQ0F6QixRQUFFLG1CQUFGLEVBQXVCaUIsR0FBdkIsQ0FBMkIsRUFBM0I7QUFDRCxLQVJEO0FBU0QsR0FqQkQ7QUFtQkQsQ0FwQ0QiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCAkID0gd2luZG93LmpRdWVyeTtcbmNvbnN0IGF3ZWJvb2tpbmcgPSB3aW5kb3cuVGhlQXdlQm9va2luZztcblxuJChmdW5jdGlvbigpIHtcblxuICAkKCcjYXdlYm9va2luZy1ib29raW5nLW5vdGVzJykub24oJ2NsaWNrJywgJy5kZWxldGVfbm90ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbCA9ICQodGhpcyk7XG4gICAgY29uc3Qgbm90ZSA9ICQodGhpcykuY2xvc2VzdCgnbGkubm90ZScpO1xuXG4gICAgd3AuYWpheC5wb3N0KCdkZWxldGVfYXdlYm9va2luZ19ub3RlJywge1xuICAgICAgbm90ZV9pZDogJChub3RlKS5hdHRyKCdyZWwnKSxcbiAgICAgIGJvb2tpbmdfaWQ6ICQoJyNwb3N0X0lEJykudmFsKClcbiAgICB9KVxuICAgIC5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAkKG5vdGUpLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICAkKCcjYXdlYm9va2luZy1ib29raW5nLW5vdGVzJykub24oJ2NsaWNrJywgJ2J1dHRvbi5hZGRfbm90ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3Qgbm90ZUNvbnRlbnRzID0gJCgndGV4dGFyZWEjYWRkX2Jvb2tpbmdfbm90ZScpLnZhbCgpO1xuICAgIGlmICghIG5vdGVDb250ZW50cyApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3cC5hamF4LnBvc3QoJ2FkZF9hd2Vib29raW5nX25vdGUnLCB7XG4gICAgICBib29raW5nX2lkOiAkKCcjcG9zdF9JRCcpLnZhbCgpLFxuICAgICAgbm90ZTogICAgICAgJCgndGV4dGFyZWEjYWRkX2Jvb2tpbmdfbm90ZScpLnZhbCgpLFxuICAgICAgbm90ZV90eXBlOiAgJCgnc2VsZWN0I2Jvb2tpbmdfbm90ZV90eXBlJykudmFsKCksXG4gICAgfSlcbiAgICAuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAkKCd1bC5ib29raW5nX25vdGVzJykucHJlcGVuZChkYXRhLm5ld19ub3RlKTtcbiAgICAgICQoJyNhZGRfYm9va2luZ19ub3RlJykudmFsKCcnKTtcbiAgICB9KVxuICB9KTtcblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanNzcmMvYWRtaW4vZWRpdC1ib29raW5nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ })

},[19]);
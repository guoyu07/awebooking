webpackJsonp([4],{4:function(a,t,n){a.exports=n("cKKL")},cKKL:function(a,t){var n=window.jQuery,e=window.TheAweBooking;n(function(){var a=e.Popup.setup("#awebooking-set-availability-popup"),t=function(){this.room_name=this.$el.closest("tr").find("span").text(),this.data_id=this.$el.closest("[data-unit]").data("unit"),this.comments=function(a){var t=a.getNights(),n=a.endDay;return 1===t?"One night: "+n.format(a.format):"<b>"+t+"</b> nights nights, from <b>"+a.startDay.format(a.format)+"</b> to <b>"+n.format(a.format)+"</b>"}(this);var t=wp.template("availability-calendar-form");a.find(".awebooking-dialog-contents").html(t(this)),this.keepRange=!0,a.dialog("open")};n(".abkngcal--availability-calendar tbody > tr",document).each(function(e,i){var o=new window.AweBookingYearlyCalendar(i);n(i).data("availability-calendar",o),o.on("apply",t),a.on("dialogclose",function(){o.keepRange=!1})}),new e.RangeDatepicker('input[name="datepicker-start"]','input[name="datepicker-end"]').init(),new e.ToggleCheckboxes(".abkngcal--availability-calendar > table")})}},[4]);
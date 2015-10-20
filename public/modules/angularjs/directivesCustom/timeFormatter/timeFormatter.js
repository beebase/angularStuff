angular.module('app')
  .controller('TimeFormatterCtrl', function() {
    //var vm = this;
  })
  .directive('bbTime', function($interval, dateFilter) {
    return {
      link: function(scope, elem, attrs) {
        var format, timeoutId;

        //GET FORMAT FROM ELEM CONTENT, SET TIME TEXT
        function updateTime(fmt) {
          console.log('updateTime');
          elem.text(dateFilter(new Date(), fmt));
        }

        // IF FORMAT CHANGES, push to updateTime()
        scope.$watch(attrs.bbTime, function(changedValue) {
          format = changedValue;
          updateTime(format);
        });

        // START
        // save process in var timeoutId. Needed when stopping process;
        timeoutId = $interval(function() {
          updateTime(format);
        }, 1000);

        // DESTROY
        // when 'destroy' is emitted by angularJS,
        // cancel interval process to avoid mem leaks
        elem.on('$destroy', function() {
          $interval.cancel(timeoutId);
        });
      }
    }
  });
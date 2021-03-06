var ProLog = require('../lib/prolog').ProLog;

// Instantiate logger. Setting output to a function overrides the default
// "output" method. In this example, all logging messages are sent to
// stdout via console.log.
var log = new ProLog({
  output: function(data) {
    console.log(log.format(data));
  },
});

// If the "output" option is set to false, the logger will not output. In
// that case, an event handler can be manually bound using the
// "log.event.onAny" method, like so:

// var log = new ProLog({output: false});
// log.event.onAny(function(data) {
//   console.log(log.format(data));
// });


// You can log a single string.
log.log('This is a test log message.');
log.info('This is a test info message.');
log.debug('This is a test debug message.');
log.warn('This is a test warn message.');
log.error(new Error('This is a test error message.').stack);

// Or anything you'd send to console.log, really.
log.log('Testing log %s: %d, %j.', 'A', 1, {a: 1});
log.log([['This', 'array', 'will', 'be'], ['logged', 'over'], ['multiple', 'lines.']]);
log.info('Testing info %s: %d, %j.', 'A', 2, {b: 2});
log.debug('Testing debug %s: %d, %j.', 'A', 3, {c: 3});
log.warn('Testing warn %s: %d, %j.', 'A', 4, {d: 4});
log.error('Testing error %s: %d, %j.', 'A', 5, {e: 5});

// You can group messages as well.
log.group();
log.log('This log message should be indented once.');
log.group();
log.info('This info message should be indented twice.');
log.debug('This debug message should be indented twice.');
log.groupEnd();
log.warn('This warn message should be indented once.');
log.groupEnd();
log.error('This error message should not be indented.');

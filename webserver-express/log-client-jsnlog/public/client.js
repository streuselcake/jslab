// jshint esversion: 6

// appender for logging to console
var cla = JL.createConsoleAppender("ConsoleAppenderClient");

// appender for logging to server via ajax
var ala = JL.createAjaxAppender("AjaxAppenderClient");

// fake ajax appender for testing without server
// var ala = JL.createConsoleAppender("AjaxAppender");

// ajax logging should batch-send logging messages, it should not send everything, but critical messages only
// here very simple approach: buffer and dump messages
// clever strategies here: http://nodejs.jsnlog.com/Documentation/JSNLogJs/AjaxAppender/SetOptions
// default endpoint for ajax logging (option "url"):
// "url": /jsnlog.logger
ala.setOptions({ "bufferSize": 100, "level": 1000 });

// console logging can log more during debugging, and without collecting logging messages first
cla.setOptions( { "batchSize": 1, "batchTimeout": 1000 });


JL("ClientConsole").setOptions({"appenders": [cla]});
JL("ClientAjax").setOptions({"appenders": [ala, cla]});


// severities: TRACE, DEBUG, INFO, WARN, ERROR or FATAL.
// log to messages to console only

JL("ClientConsole").trace("log debug message: " + JL.getTraceLevel()); // 1000
JL("ClientConsole").debug("log debug message: " + JL.getDebugLevel()); // 2000
JL("ClientConsole").info("log info message: "   + JL.getInfoLevel());  // 3000
JL("ClientConsole").warn("log warn message: "   + JL.getWarnLevel());  // 4000
JL("ClientConsole").error("log error message: " + JL.getErrorLevel()); // 5000
JL("ClientConsole").fatal("log fatal message: " + JL.getFatalLevel()); // 6000



// the ajax logger logs to console and Server.
// Note that the ala appender will buffer 100 messages before transmitting it to the server
for(let i=0; i<1000; ){
  JL("ClientAjax").trace(i++ + " log debug message: " + JL.getTraceLevel()); // 1000
  JL("ClientAjax").debug(i++ + " log debug message: " + JL.getDebugLevel()); // 2000
  JL("ClientAjax").info(i++ + " log info message: "   + JL.getInfoLevel());  // 3000
  JL("ClientAjax").warn(i++ + " log warn message: "   + JL.getWarnLevel());  // 4000
  JL("ClientAjax").error(i++ + " log error message: " + JL.getErrorLevel()); // 5000
  JL("ClientAjax").fatal(i++ + " log fatal message: " + JL.getFatalLevel()); // 6000
}

// the logger luckily has a flush function we might want to trigger
// when we know we should send the collected messages
ala.sendBatch();


// log objects
/*
JL("ClientAjax").info("next log message is an object...");
JL("ClientAjax").info({
  "color": "blue",
  "size": 3,
  "type": "ClientConsole",
  "nested_object": {
    "nested" : "yes",
    "level" : 2,
    "things" : ["car", "bike", "house", "food"]
  }
});

ala.sendBatch();
*/


// can set options to loggers too
// ClientConsoleLevel5000 demonstrates filtering for severity >=5000 to be logged and appends to cla
/*
JL("ClientConsoleLevel5000").setOptions({"appenders": [cla]});
JL("ClientConsoleLevel5000").setOptions({"level": 5000});

JL("ClientConsoleLevel5000").trace("log debug message: " + JL.getTraceLevel()); // 1000
JL("ClientConsoleLevel5000").debug("log debug message: " + JL.getDebugLevel()); // 2000
JL("ClientConsoleLevel5000").info("log info message: "   + JL.getInfoLevel());  // 3000
JL("ClientConsoleLevel5000").warn("log warn message: "   + JL.getWarnLevel());  // 4000
JL("ClientConsoleLevel5000").error("log error message: " + JL.getErrorLevel()); // 5000
JL("ClientConsoleLevel5000").fatal("log fatal message: " + JL.getFatalLevel()); // 6000
*/


// Logging expected errors
/*
try{
  throw new Error("sorry for throwing this up, it's a test only!");
} catch(error){
  JL("ClientAjax").fatal("log caught error", error);
}
cla.sendBatch();
ala.sendBatch();
*/

// Note that logging unexpected errors is set in the jsnlog library automatically...
// ... jsnlog sets handler for the window.onerror and window.onunhandledrejection events
// http://js.jsnlog.com/Documentation/HowTo/JavascriptErrorHandling



// JSNlog also has a root logger JL().xxx
// http://nodejs.jsnlog.com/Documentation/JSNLogJs/JL/SetOptions#defaultAjaxUrl
// it has a default ajax appender sending to: /jsnlog.logger
// therefore, the client script must come from a server in order to function correctly (SOP blocking otherwise)
// can also set to use command line instead of ajax
// The root's log level is not set to 1000. However, we can change it's level too...
/*
JL().setOptions({"appenders": [cla]});

JL().trace("log debug message: " + JL.getTraceLevel()); // 1000
JL().debug("log debug message: " + JL.getDebugLevel()); // 2000
JL().info("log info message: "   + JL.getInfoLevel());  // 3000
JL().warn("log warn message: "   + JL.getWarnLevel());  // 4000
JL().error("log error message: " + JL.getErrorLevel()); // 5000
JL().fatal("log fatal message: " + JL.getFatalLevel()); // 6000
*/

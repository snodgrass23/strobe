/**
 * strobe
 * @author Jim Snodgrass jim@skookum.com
 * pulled mostly from old version of express that had flash built in
 */



exports.flash = function (req, res, next) {

  var flashFormatters = {
    s: function(val){
      return String(val);
    }
  };

  req.flash = function(type, msg){
    if (this.session === undefined) throw Error('req.flash() requires sessions');
    var msgs = this.session.flash = this.session.flash || {};
    if (type && msg) {
      var i = 2, 
          args = arguments, 
          formatters = this.app.flashFormatters || {};
      formatters.prototype = flashFormatters;
      // msg = utils.miniMarkdown(msg);
      msg = msg.replace(/%([a-zA-Z])/g, function(_, format){
        var formatter = formatters[format];
        if (formatter) return formatter(utils.escape(args[i++]));
      });
      return (msgs[type] = msgs[type] || []).push(msg);
    } else if (type) {
      var arr = msgs[type];
      delete msgs[type];
      return arr || [];
    } else {
      this.session.flash = {};
      return msgs;
    }
  };
  
  next();

};

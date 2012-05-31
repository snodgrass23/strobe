
# Strobe

  adds simple flash messaging into expressjs app
  
# Installation

  `npm install strobe`
  
# Quick Start

  add to express app middleware:
  
  `app.use(require('strobe').flash);`

  add to base12 locals

  `res.locals.messages = require('express-messages')(req, res);`

  add output to jade template

  `!= messages()`


# Example uses
  
  `req.flash("error", "this is my error message")`

  `req.flash("info", "this is my info message")`


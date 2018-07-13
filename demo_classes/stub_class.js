"use strict"

const Percentage = require('./percentage')
class StubClass {
   calculateHike(ratings, current_ctc){
       var percentage = Percentage.hikePercentage(ratings)
       var new_ctc = current_ctc +((current_ctc / 100) * percentage)
       return new_ctc;
   }
  
  }

  module.exports = StubClass;
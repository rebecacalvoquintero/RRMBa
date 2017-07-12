var logicObj = {

  resultsObj: {},

  makeTflUrl: function(line) {
    /// code!
  },

  makeGiphyUrl: function() {
    /// code!
  },

  apiCall: function(url, cb) {
    ////code
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        cb(data);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  },

  tflCb: function(tflData) {
    /// sets object status property
    var lineStatus = tflData[0].lineStatuses[0].statusSeverityDescription;
    this.resultsObj.status = lineStatus;
    /// calls makeGiphyRequest
    this.makeGiphyRequest();
  },

  giphyCb: function(giphyData) {
    /// set object giphy url property
    var randomNum = Math.floor(Math.random()*30);
    var gifSrc = giphyData.data[randomNum].images.fixed_height.url;
    this.resultsObj.url = gifSrc;
    /// call dom render
    render(this.resultsObj);
  },

  makeTflRequest: function(line) {
    // sets resultsObject.line = line
    //calls makeTflUrl
    // calls apiCall with url and tflCb
  },

  makeGiphyRequest: function() {
    //get line status from resultsObj
    //calls makegiphyUrl
    //apiCall(url, giphyCb)
  }

}
module.exports = logicObj;

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

exports.xhrExample = function (opts) {
  var xhr = new XMLHttpRequest();
  xhr.open(opts.method, opts.url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      opts.onSuccess(response);
    }
  };
  xhr.send();
};

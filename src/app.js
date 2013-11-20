requirejs.config({
  paths: {
    'bean': '../lib/bean/bean',
    'bonzo': '../lib/bonzo/bonzo',
    'utils/ajax': '../lib/qwery/qwery',
    'reqwest': '../lib/reqwest/reqwest',
    'component': '../component'
  },
  urlArgs: "bust=" +  (new Date()).getTime()
});

requirejs(['comments'], function(comments) {});

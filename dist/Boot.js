require.config({baseUrl:"blib",paths:{jquery:"jquery/dist/jquery","js-logger":"js-logger/src/logger.min","JSON.minify":"../lib/JSON.minify-javascript/minify.json.min"},shim:{"JSON.minify":{exports:"JSON"}},enforceDefine:!0,urlArgs:"ts="+(new Date).getTime()}),require(["jquery","js-logger","JSON.minify"],function(e,r,i){"use strict";var n="0.2";r.useDefaults(),r.setLevel(r.INFO),e.ajax({url:"config.json",dataType:"json",dataFilter:function(e,r){return i.minify(e)},success:function(e,i){e.snmd_devel?(r.setLevel(r.DEBUG),require.config({paths:{"snmd-core":"snmd-core/js"}})):require.config({paths:{"snmd-core":"snmd-core/dist"},urlArgs:"snmd="+n}),require(["snmd-core/Main"],function(r){new r(e)})},error:function(r,i,n){var s="Failed to config file due to "+i+": "+n;console.error(s),e("body").text(s).css({"font-size":"larger","font-weight":"bold",color:"red"})}})});
//# sourceMappingURL=dist/Boot.map
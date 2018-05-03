'use strict';

var _showdown = require('./showdown.js');

var _showdown2 = _interopRequireDefault(_showdown);

var _html2json = require('./html2json.js');

var _html2json2 = _interopRequireDefault(_html2json);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * author: Di (微信小程序开发工程师)
                                                                                                                                                                                                                   * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
                                                                                                                                                                                                                   *               垂直微信小程序开发交流社区
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * github地址: https://github.com/icindy/wxParse
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * for: 微信小程序富文本解析
                                                                                                                                                                                                                   * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                                                                                                                                   */

/**
 * utils函数引入
 **/


/**
 * 配置及公有属性
 **/
var realWindowWidth = 0;
var realWindowHeight = 0;
wx.getSystemInfo({
  success: function success(res) {
    realWindowWidth = res.windowWidth;
    realWindowHeight = res.windowHeight;
  }
});
/**
 * 主函数入口区
 **/
function wxParse() {
  var bindName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'wxParseData';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '<div class="color:red;">数据不能为空</div>';
  var target = arguments[3];
  var imagePadding = arguments[4];

  var that = target;
  var transData = {}; //存放转化后的数据
  if (type == 'html') {
    transData = _html2json2.default.html2json(data, bindName);
    // console.log(JSON.stringify(transData, ' ', ' '));
  } else if (type == 'md' || type == 'markdown') {
    var converter = new _showdown2.default.Converter();
    var html = converter.makeHtml(data);
    transData = _html2json2.default.html2json(html, bindName);
    // console.log(JSON.stringify(transData, ' ', ' '));
  }
  transData.view = {};
  transData.view.imagePadding = 0;
  if (typeof imagePadding != 'undefined') {
    transData.view.imagePadding = imagePadding;
  }
  var bindData = {};
  bindData[bindName] = transData;
  that.setData(bindData);
  that.wxParseImgLoad = wxParseImgLoad;
  that.wxParseImgTap = wxParseImgTap;
}
// 图片点击事件
function wxParseImgTap(e) {
  var that = this;
  var nowImgUrl = e.target.dataset.src;
  var tagFrom = e.target.dataset.from;
  if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
    });
  }
}

/**
 * 图片视觉宽高计算函数区
 **/
function wxParseImgLoad(e) {
  var that = this;
  var tagFrom = e.target.dataset.from;
  var idx = e.target.dataset.idx;
  if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
    calMoreImageInfo(e, idx, that, tagFrom);
  }
}
// 假循环获取计算图片视觉最佳宽高
function calMoreImageInfo(e, idx, that, bindName) {
  var _that$setData;

  var temData = that.data[bindName];
  if (!temData || temData.images.length == 0) {
    return;
  }
  var temImages = temData.images;
  //因为无法获取view宽度 需要自定义padding进行计算，稍后处理
  var recal = wxAutoImageCal(e.detail.width, e.detail.height, that, bindName);
  // temImages[idx].width = recal.imageWidth;
  // temImages[idx].height = recal.imageheight;
  // temData.images = temImages;
  // var bindData = {};
  // bindData[bindName] = temData;
  // that.setData(bindData);
  var index = temImages[idx].index;
  var key = '' + bindName;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = index.split('.')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      key += '.nodes[' + i + ']';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var keyW = key + '.width';
  var keyH = key + '.height';
  that.setData((_that$setData = {}, _defineProperty(_that$setData, keyW, recal.imageWidth), _defineProperty(_that$setData, keyH, recal.imageheight), _that$setData));
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight, that, bindName) {
  //获取图片的原始长宽
  var windowWidth = 0,
      windowHeight = 0;
  var autoWidth = 0,
      autoHeight = 0;
  var results = {};
  var padding = that.data[bindName].view.imagePadding;
  windowWidth = realWindowWidth - 2 * padding;
  windowHeight = realWindowHeight;
  //判断按照那种方式进行缩放
  // console.log("windowWidth" + windowWidth);
  if (originalWidth > windowWidth) {
    //在图片width大于手机屏幕width时候
    autoWidth = windowWidth;
    // console.log("autoWidth" + autoWidth);
    autoHeight = autoWidth * originalHeight / originalWidth;
    // console.log("autoHeight" + autoHeight);
    results.imageWidth = autoWidth;
    results.imageheight = autoHeight;
  } else {
    //否则展示原来的数据
    results.imageWidth = originalWidth;
    results.imageheight = originalHeight;
  }
  return results;
}

function wxParseTemArray(temArrayName, bindNameReg, total, that) {
  var array = [];
  var temData = that.data;
  var obj = null;
  for (var i = 0; i < total; i++) {
    var simArr = temData[bindNameReg + i].nodes;
    array.push(simArr);
  }

  temArrayName = temArrayName || 'wxParseTemArray';
  obj = JSON.parse('{"' + temArrayName + '":""}');
  obj[temArrayName] = array;
  that.setData(obj);
}

/**
 * 配置emojis
 *
 */

function emojisInit() {
  var reg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var baseSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/wxParse/emojis/";
  var emojis = arguments[2];

  _html2json2.default.emojisInit(reg, baseSrc, emojis);
}

module.exports = {
  wxParse: wxParse,
  wxParseTemArray: wxParseTemArray,
  emojisInit: emojisInit
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UGFyc2UuanMiXSwibmFtZXMiOlsicmVhbFdpbmRvd1dpZHRoIiwicmVhbFdpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInd4UGFyc2UiLCJiaW5kTmFtZSIsInR5cGUiLCJkYXRhIiwidGFyZ2V0IiwiaW1hZ2VQYWRkaW5nIiwidGhhdCIsInRyYW5zRGF0YSIsImh0bWwyanNvbiIsImNvbnZlcnRlciIsIkNvbnZlcnRlciIsImh0bWwiLCJtYWtlSHRtbCIsInZpZXciLCJiaW5kRGF0YSIsInNldERhdGEiLCJ3eFBhcnNlSW1nTG9hZCIsInd4UGFyc2VJbWdUYXAiLCJlIiwibm93SW1nVXJsIiwiZGF0YXNldCIsInNyYyIsInRhZ0Zyb20iLCJmcm9tIiwibGVuZ3RoIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJpbWFnZVVybHMiLCJpZHgiLCJjYWxNb3JlSW1hZ2VJbmZvIiwidGVtRGF0YSIsImltYWdlcyIsInRlbUltYWdlcyIsInJlY2FsIiwid3hBdXRvSW1hZ2VDYWwiLCJkZXRhaWwiLCJ3aWR0aCIsImhlaWdodCIsImluZGV4Iiwia2V5Iiwic3BsaXQiLCJpIiwia2V5VyIsImtleUgiLCJpbWFnZVdpZHRoIiwiaW1hZ2VoZWlnaHQiLCJvcmlnaW5hbFdpZHRoIiwib3JpZ2luYWxIZWlnaHQiLCJhdXRvV2lkdGgiLCJhdXRvSGVpZ2h0IiwicmVzdWx0cyIsInBhZGRpbmciLCJ3eFBhcnNlVGVtQXJyYXkiLCJ0ZW1BcnJheU5hbWUiLCJiaW5kTmFtZVJlZyIsInRvdGFsIiwiYXJyYXkiLCJvYmoiLCJzaW1BcnIiLCJub2RlcyIsInB1c2giLCJKU09OIiwicGFyc2UiLCJlbW9qaXNJbml0IiwicmVnIiwiYmFzZVNyYyIsImVtb2ppcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBY0E7Ozs7QUFDQTs7Ozs7O2tOQWZB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QUEsTUFBUEMsTUFBTzs7QUFDMUQsc0JBQVdILFVBQVgsQ0FBc0JDLEdBQXRCLEVBQTBCQyxPQUExQixFQUFrQ0MsTUFBbEM7QUFDRjs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmckUsV0FBU0EsT0FETTtBQUVmcUQsbUJBQWdCQSxlQUZEO0FBR2ZXLGNBQVdBO0FBSEksQ0FBakIiLCJmaWxlIjoid3hQYXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogYXV0aG9yOiBEaSAo5b6u5L+h5bCP56iL5bqP5byA5Y+R5bel56iL5biIKVxuICogb3JnYW5pemF0aW9uOiBXZUFwcERldijlvq7kv6HlsI/nqIvluo/lvIDlj5HorrrlnZspKGh0dHA6Ly93ZWFwcGRldi5jb20pXG4gKiAgICAgICAgICAgICAgIOWeguebtOW+ruS/oeWwj+eoi+W6j+W8gOWPkeS6pOa1geekvuWMulxuICpcbiAqIGdpdGh1YuWcsOWdgDogaHR0cHM6Ly9naXRodWIuY29tL2ljaW5keS93eFBhcnNlXG4gKlxuICogZm9yOiDlvq7kv6HlsI/nqIvluo/lr4zmlofmnKzop6PmnpBcbiAqIGRldGFpbCA6IGh0dHA6Ly93ZWFwcGRldi5jb20vdC93eHBhcnNlLWFscGhhMC0xLWh0bWwtbWFya2Rvd24vMTg0XG4gKi9cblxuLyoqXG4gKiB1dGlsc+WHveaVsOW8leWFpVxuICoqL1xuaW1wb3J0IHNob3dkb3duIGZyb20gJy4vc2hvd2Rvd24uanMnO1xuaW1wb3J0IEh0bWxUb0pzb24gZnJvbSAnLi9odG1sMmpzb24uanMnO1xuLyoqXG4gKiDphY3nva7lj4rlhazmnInlsZ7mgKdcbiAqKi9cbnZhciByZWFsV2luZG93V2lkdGggPSAwO1xudmFyIHJlYWxXaW5kb3dIZWlnaHQgPSAwO1xud3guZ2V0U3lzdGVtSW5mbyh7XG4gIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICByZWFsV2luZG93V2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICByZWFsV2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICB9XG59KVxuLyoqXG4gKiDkuLvlh73mlbDlhaXlj6PljLpcbiAqKi9cbmZ1bmN0aW9uIHd4UGFyc2UoYmluZE5hbWUgPSAnd3hQYXJzZURhdGEnLCB0eXBlPSdodG1sJywgZGF0YT0nPGRpdiBjbGFzcz1cImNvbG9yOnJlZDtcIj7mlbDmja7kuI3og73kuLrnqbo8L2Rpdj4nLCB0YXJnZXQsaW1hZ2VQYWRkaW5nKSB7XG4gIHZhciB0aGF0ID0gdGFyZ2V0O1xuICB2YXIgdHJhbnNEYXRhID0ge307Ly/lrZjmlL7ovazljJblkI7nmoTmlbDmja5cbiAgaWYgKHR5cGUgPT0gJ2h0bWwnKSB7XG4gICAgdHJhbnNEYXRhID0gSHRtbFRvSnNvbi5odG1sMmpzb24oZGF0YSwgYmluZE5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRyYW5zRGF0YSwgJyAnLCAnICcpKTtcbiAgfSBlbHNlIGlmICh0eXBlID09ICdtZCcgfHwgdHlwZSA9PSAnbWFya2Rvd24nKSB7XG4gICAgdmFyIGNvbnZlcnRlciA9IG5ldyBzaG93ZG93bi5Db252ZXJ0ZXIoKTtcbiAgICB2YXIgaHRtbCA9IGNvbnZlcnRlci5tYWtlSHRtbChkYXRhKTtcbiAgICB0cmFuc0RhdGEgPSBIdG1sVG9Kc29uLmh0bWwyanNvbihodG1sLCBiaW5kTmFtZSk7XG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodHJhbnNEYXRhLCAnICcsICcgJykpO1xuICB9XG4gIHRyYW5zRGF0YS52aWV3ID0ge307XG4gIHRyYW5zRGF0YS52aWV3LmltYWdlUGFkZGluZyA9IDA7XG4gIGlmKHR5cGVvZihpbWFnZVBhZGRpbmcpICE9ICd1bmRlZmluZWQnKXtcbiAgICB0cmFuc0RhdGEudmlldy5pbWFnZVBhZGRpbmcgPSBpbWFnZVBhZGRpbmdcbiAgfVxuICB2YXIgYmluZERhdGEgPSB7fTtcbiAgYmluZERhdGFbYmluZE5hbWVdID0gdHJhbnNEYXRhO1xuICB0aGF0LnNldERhdGEoYmluZERhdGEpXG4gIHRoYXQud3hQYXJzZUltZ0xvYWQgPSB3eFBhcnNlSW1nTG9hZDtcbiAgdGhhdC53eFBhcnNlSW1nVGFwID0gd3hQYXJzZUltZ1RhcDtcbn1cbi8vIOWbvueJh+eCueWHu+S6i+S7tlxuZnVuY3Rpb24gd3hQYXJzZUltZ1RhcChlKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIG5vd0ltZ1VybCA9IGUudGFyZ2V0LmRhdGFzZXQuc3JjO1xuICB2YXIgdGFnRnJvbSA9IGUudGFyZ2V0LmRhdGFzZXQuZnJvbTtcbiAgaWYgKHR5cGVvZiAodGFnRnJvbSkgIT0gJ3VuZGVmaW5lZCcgJiYgdGFnRnJvbS5sZW5ndGggPiAwKSB7XG4gICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgIGN1cnJlbnQ6IG5vd0ltZ1VybCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgdXJsczogdGhhdC5kYXRhW3RhZ0Zyb21dLmltYWdlVXJscyAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIOWbvueJh+inhuinieWuvemrmOiuoeeul+WHveaVsOWMulxuICoqL1xuZnVuY3Rpb24gd3hQYXJzZUltZ0xvYWQoZSkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciB0YWdGcm9tID0gZS50YXJnZXQuZGF0YXNldC5mcm9tO1xuICB2YXIgaWR4ID0gZS50YXJnZXQuZGF0YXNldC5pZHg7XG4gIGlmICh0eXBlb2YgKHRhZ0Zyb20pICE9ICd1bmRlZmluZWQnICYmIHRhZ0Zyb20ubGVuZ3RoID4gMCkge1xuICAgIGNhbE1vcmVJbWFnZUluZm8oZSwgaWR4LCB0aGF0LCB0YWdGcm9tKVxuICB9XG59XG4vLyDlgYflvqrnjq/ojrflj5borqHnrpflm77niYfop4bop4nmnIDkvbPlrr3pq5hcbmZ1bmN0aW9uIGNhbE1vcmVJbWFnZUluZm8oZSwgaWR4LCB0aGF0LCBiaW5kTmFtZSkge1xuICB2YXIgdGVtRGF0YSA9IHRoYXQuZGF0YVtiaW5kTmFtZV07XG4gIGlmICghdGVtRGF0YSB8fCB0ZW1EYXRhLmltYWdlcy5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgdGVtSW1hZ2VzID0gdGVtRGF0YS5pbWFnZXM7XG4gIC8v5Zug5Li65peg5rOV6I635Y+Wdmlld+WuveW6piDpnIDopoHoh6rlrprkuYlwYWRkaW5n6L+b6KGM6K6h566X77yM56iN5ZCO5aSE55CGXG4gIHZhciByZWNhbCA9IHd4QXV0b0ltYWdlQ2FsKGUuZGV0YWlsLndpZHRoLCBlLmRldGFpbC5oZWlnaHQsdGhhdCxiaW5kTmFtZSk7XG4gIC8vIHRlbUltYWdlc1tpZHhdLndpZHRoID0gcmVjYWwuaW1hZ2VXaWR0aDtcbiAgLy8gdGVtSW1hZ2VzW2lkeF0uaGVpZ2h0ID0gcmVjYWwuaW1hZ2VoZWlnaHQ7XG4gIC8vIHRlbURhdGEuaW1hZ2VzID0gdGVtSW1hZ2VzO1xuICAvLyB2YXIgYmluZERhdGEgPSB7fTtcbiAgLy8gYmluZERhdGFbYmluZE5hbWVdID0gdGVtRGF0YTtcbiAgLy8gdGhhdC5zZXREYXRhKGJpbmREYXRhKTtcbiAgdmFyIGluZGV4ID0gdGVtSW1hZ2VzW2lkeF0uaW5kZXhcbiAgdmFyIGtleSA9IGAke2JpbmROYW1lfWBcbiAgZm9yICh2YXIgaSBvZiBpbmRleC5zcGxpdCgnLicpKSBrZXkrPWAubm9kZXNbJHtpfV1gXG4gIHZhciBrZXlXID0ga2V5ICsgJy53aWR0aCdcbiAgdmFyIGtleUggPSBrZXkgKyAnLmhlaWdodCdcbiAgdGhhdC5zZXREYXRhKHtcbiAgICBba2V5V106IHJlY2FsLmltYWdlV2lkdGgsXG4gICAgW2tleUhdOiByZWNhbC5pbWFnZWhlaWdodCxcbiAgfSlcbn1cblxuLy8g6K6h566X6KeG6KeJ5LyY5YWI55qE5Zu+54mH5a696auYXG5mdW5jdGlvbiB3eEF1dG9JbWFnZUNhbChvcmlnaW5hbFdpZHRoLCBvcmlnaW5hbEhlaWdodCx0aGF0LGJpbmROYW1lKSB7XG4gIC8v6I635Y+W5Zu+54mH55qE5Y6f5aeL6ZW/5a69XG4gIHZhciB3aW5kb3dXaWR0aCA9IDAsIHdpbmRvd0hlaWdodCA9IDA7XG4gIHZhciBhdXRvV2lkdGggPSAwLCBhdXRvSGVpZ2h0ID0gMDtcbiAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgdmFyIHBhZGRpbmcgPSB0aGF0LmRhdGFbYmluZE5hbWVdLnZpZXcuaW1hZ2VQYWRkaW5nO1xuICB3aW5kb3dXaWR0aCA9IHJlYWxXaW5kb3dXaWR0aC0yKnBhZGRpbmc7XG4gIHdpbmRvd0hlaWdodCA9IHJlYWxXaW5kb3dIZWlnaHQ7XG4gIC8v5Yik5pat5oyJ54Wn6YKj56eN5pa55byP6L+b6KGM57yp5pS+XG4gIC8vIGNvbnNvbGUubG9nKFwid2luZG93V2lkdGhcIiArIHdpbmRvd1dpZHRoKTtcbiAgaWYgKG9yaWdpbmFsV2lkdGggPiB3aW5kb3dXaWR0aCkgey8v5Zyo5Zu+54mHd2lkdGjlpKfkuo7miYvmnLrlsY/luZV3aWR0aOaXtuWAmVxuICAgIGF1dG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiYXV0b1dpZHRoXCIgKyBhdXRvV2lkdGgpO1xuICAgIGF1dG9IZWlnaHQgPSAoYXV0b1dpZHRoICogb3JpZ2luYWxIZWlnaHQpIC8gb3JpZ2luYWxXaWR0aDtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF1dG9IZWlnaHRcIiArIGF1dG9IZWlnaHQpO1xuICAgIHJlc3VsdHMuaW1hZ2VXaWR0aCA9IGF1dG9XaWR0aDtcbiAgICByZXN1bHRzLmltYWdlaGVpZ2h0ID0gYXV0b0hlaWdodDtcbiAgfSBlbHNlIHsvL+WQpuWImeWxleekuuWOn+adpeeahOaVsOaNrlxuICAgIHJlc3VsdHMuaW1hZ2VXaWR0aCA9IG9yaWdpbmFsV2lkdGg7XG4gICAgcmVzdWx0cy5pbWFnZWhlaWdodCA9IG9yaWdpbmFsSGVpZ2h0O1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiB3eFBhcnNlVGVtQXJyYXkodGVtQXJyYXlOYW1lLGJpbmROYW1lUmVnLHRvdGFsLHRoYXQpe1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgdmFyIHRlbURhdGEgPSB0aGF0LmRhdGE7XG4gIHZhciBvYmogPSBudWxsO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgdG90YWw7IGkrKyl7XG4gICAgdmFyIHNpbUFyciA9IHRlbURhdGFbYmluZE5hbWVSZWcraV0ubm9kZXM7XG4gICAgYXJyYXkucHVzaChzaW1BcnIpO1xuICB9XG5cbiAgdGVtQXJyYXlOYW1lID0gdGVtQXJyYXlOYW1lIHx8ICd3eFBhcnNlVGVtQXJyYXknO1xuICBvYmogPSBKU09OLnBhcnNlKCd7XCInKyB0ZW1BcnJheU5hbWUgKydcIjpcIlwifScpO1xuICBvYmpbdGVtQXJyYXlOYW1lXSA9IGFycmF5O1xuICB0aGF0LnNldERhdGEob2JqKTtcbn1cblxuLyoqXG4gKiDphY3nva5lbW9qaXNcbiAqXG4gKi9cblxuZnVuY3Rpb24gZW1vamlzSW5pdChyZWc9JycsYmFzZVNyYz1cIi93eFBhcnNlL2Vtb2ppcy9cIixlbW9qaXMpe1xuICAgSHRtbFRvSnNvbi5lbW9qaXNJbml0KHJlZyxiYXNlU3JjLGVtb2ppcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB3eFBhcnNlOiB3eFBhcnNlLFxuICB3eFBhcnNlVGVtQXJyYXk6d3hQYXJzZVRlbUFycmF5LFxuICBlbW9qaXNJbml0OmVtb2ppc0luaXRcbn1cblxuXG4iXX0=
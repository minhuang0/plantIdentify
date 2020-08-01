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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UGFyc2UuanMiXSwibmFtZXMiOlsicmVhbFdpbmRvd1dpZHRoIiwicmVhbFdpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInd4UGFyc2UiLCJiaW5kTmFtZSIsInR5cGUiLCJkYXRhIiwidGFyZ2V0IiwiaW1hZ2VQYWRkaW5nIiwidGhhdCIsInRyYW5zRGF0YSIsIkh0bWxUb0pzb24iLCJodG1sMmpzb24iLCJjb252ZXJ0ZXIiLCJzaG93ZG93biIsIkNvbnZlcnRlciIsImh0bWwiLCJtYWtlSHRtbCIsInZpZXciLCJiaW5kRGF0YSIsInNldERhdGEiLCJ3eFBhcnNlSW1nTG9hZCIsInd4UGFyc2VJbWdUYXAiLCJlIiwibm93SW1nVXJsIiwiZGF0YXNldCIsInNyYyIsInRhZ0Zyb20iLCJmcm9tIiwibGVuZ3RoIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJpbWFnZVVybHMiLCJpZHgiLCJjYWxNb3JlSW1hZ2VJbmZvIiwidGVtRGF0YSIsImltYWdlcyIsInRlbUltYWdlcyIsInJlY2FsIiwid3hBdXRvSW1hZ2VDYWwiLCJkZXRhaWwiLCJ3aWR0aCIsImhlaWdodCIsImluZGV4Iiwia2V5Iiwic3BsaXQiLCJpIiwia2V5VyIsImtleUgiLCJpbWFnZVdpZHRoIiwiaW1hZ2VoZWlnaHQiLCJvcmlnaW5hbFdpZHRoIiwib3JpZ2luYWxIZWlnaHQiLCJhdXRvV2lkdGgiLCJhdXRvSGVpZ2h0IiwicmVzdWx0cyIsInBhZGRpbmciLCJ3eFBhcnNlVGVtQXJyYXkiLCJ0ZW1BcnJheU5hbWUiLCJiaW5kTmFtZVJlZyIsInRvdGFsIiwiYXJyYXkiLCJvYmoiLCJzaW1BcnIiLCJub2RlcyIsInB1c2giLCJKU09OIiwicGFyc2UiLCJlbW9qaXNJbml0IiwicmVnIiwiYmFzZVNyYyIsImVtb2ppcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBY0E7Ozs7QUFDQTs7Ozs7O2tOQWZBOzs7Ozs7Ozs7OztBQVdBOzs7OztBQUtBOzs7QUFHQSxJQUFJQSxrQkFBa0IsQ0FBdEI7QUFDQSxJQUFJQyxtQkFBbUIsQ0FBdkI7QUFDQUMsR0FBR0MsYUFBSCxDQUFpQjtBQUNmQyxXQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEJMLHNCQUFrQkssSUFBSUMsV0FBdEI7QUFDQUwsdUJBQW1CSSxJQUFJRSxZQUF2QjtBQUNEO0FBSmMsQ0FBakI7QUFNQTs7O0FBR0EsU0FBU0MsT0FBVCxHQUEwSDtBQUFBLE1BQXpHQyxRQUF5Ryx1RUFBOUYsYUFBOEY7QUFBQSxNQUEvRUMsSUFBK0UsdUVBQTFFLE1BQTBFO0FBQUEsTUFBbEVDLElBQWtFLHVFQUE3RCxzQ0FBNkQ7QUFBQSxNQUFyQkMsTUFBcUI7QUFBQSxNQUFkQyxZQUFjOztBQUN4SCxNQUFJQyxPQUFPRixNQUFYO0FBQ0EsTUFBSUcsWUFBWSxFQUFoQixDQUZ3SCxDQUVyRztBQUNuQixNQUFJTCxRQUFRLE1BQVosRUFBb0I7QUFDbEJLLGdCQUFZQyxvQkFBV0MsU0FBWCxDQUFxQk4sSUFBckIsRUFBMkJGLFFBQTNCLENBQVo7QUFDQTtBQUNELEdBSEQsTUFHTyxJQUFJQyxRQUFRLElBQVIsSUFBZ0JBLFFBQVEsVUFBNUIsRUFBd0M7QUFDN0MsUUFBSVEsWUFBWSxJQUFJQyxtQkFBU0MsU0FBYixFQUFoQjtBQUNBLFFBQUlDLE9BQU9ILFVBQVVJLFFBQVYsQ0FBbUJYLElBQW5CLENBQVg7QUFDQUksZ0JBQVlDLG9CQUFXQyxTQUFYLENBQXFCSSxJQUFyQixFQUEyQlosUUFBM0IsQ0FBWjtBQUNBO0FBQ0Q7QUFDRE0sWUFBVVEsSUFBVixHQUFpQixFQUFqQjtBQUNBUixZQUFVUSxJQUFWLENBQWVWLFlBQWYsR0FBOEIsQ0FBOUI7QUFDQSxNQUFHLE9BQU9BLFlBQVAsSUFBd0IsV0FBM0IsRUFBdUM7QUFDckNFLGNBQVVRLElBQVYsQ0FBZVYsWUFBZixHQUE4QkEsWUFBOUI7QUFDRDtBQUNELE1BQUlXLFdBQVcsRUFBZjtBQUNBQSxXQUFTZixRQUFULElBQXFCTSxTQUFyQjtBQUNBRCxPQUFLVyxPQUFMLENBQWFELFFBQWI7QUFDQVYsT0FBS1ksY0FBTCxHQUFzQkEsY0FBdEI7QUFDQVosT0FBS2EsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDtBQUNEO0FBQ0EsU0FBU0EsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEIsTUFBSWQsT0FBTyxJQUFYO0FBQ0EsTUFBSWUsWUFBWUQsRUFBRWhCLE1BQUYsQ0FBU2tCLE9BQVQsQ0FBaUJDLEdBQWpDO0FBQ0EsTUFBSUMsVUFBVUosRUFBRWhCLE1BQUYsQ0FBU2tCLE9BQVQsQ0FBaUJHLElBQS9CO0FBQ0EsTUFBSSxPQUFRRCxPQUFSLElBQW9CLFdBQXBCLElBQW1DQSxRQUFRRSxNQUFSLEdBQWlCLENBQXhELEVBQTJEO0FBQ3pEaEMsT0FBR2lDLFlBQUgsQ0FBZ0I7QUFDZEMsZUFBU1AsU0FESyxFQUNNO0FBQ3BCUSxZQUFNdkIsS0FBS0gsSUFBTCxDQUFVcUIsT0FBVixFQUFtQk0sU0FGWCxDQUVxQjtBQUZyQixLQUFoQjtBQUlEO0FBQ0Y7O0FBRUQ7OztBQUdBLFNBQVNaLGNBQVQsQ0FBd0JFLENBQXhCLEVBQTJCO0FBQ3pCLE1BQUlkLE9BQU8sSUFBWDtBQUNBLE1BQUlrQixVQUFVSixFQUFFaEIsTUFBRixDQUFTa0IsT0FBVCxDQUFpQkcsSUFBL0I7QUFDQSxNQUFJTSxNQUFNWCxFQUFFaEIsTUFBRixDQUFTa0IsT0FBVCxDQUFpQlMsR0FBM0I7QUFDQSxNQUFJLE9BQVFQLE9BQVIsSUFBb0IsV0FBcEIsSUFBbUNBLFFBQVFFLE1BQVIsR0FBaUIsQ0FBeEQsRUFBMkQ7QUFDekRNLHFCQUFpQlosQ0FBakIsRUFBb0JXLEdBQXBCLEVBQXlCekIsSUFBekIsRUFBK0JrQixPQUEvQjtBQUNEO0FBQ0Y7QUFDRDtBQUNBLFNBQVNRLGdCQUFULENBQTBCWixDQUExQixFQUE2QlcsR0FBN0IsRUFBa0N6QixJQUFsQyxFQUF3Q0wsUUFBeEMsRUFBa0Q7QUFBQTs7QUFDaEQsTUFBSWdDLFVBQVUzQixLQUFLSCxJQUFMLENBQVVGLFFBQVYsQ0FBZDtBQUNBLE1BQUksQ0FBQ2dDLE9BQUQsSUFBWUEsUUFBUUMsTUFBUixDQUFlUixNQUFmLElBQXlCLENBQXpDLEVBQTRDO0FBQzFDO0FBQ0Q7QUFDRCxNQUFJUyxZQUFZRixRQUFRQyxNQUF4QjtBQUNBO0FBQ0EsTUFBSUUsUUFBUUMsZUFBZWpCLEVBQUVrQixNQUFGLENBQVNDLEtBQXhCLEVBQStCbkIsRUFBRWtCLE1BQUYsQ0FBU0UsTUFBeEMsRUFBK0NsQyxJQUEvQyxFQUFvREwsUUFBcEQsQ0FBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUl3QyxRQUFRTixVQUFVSixHQUFWLEVBQWVVLEtBQTNCO0FBQ0EsTUFBSUMsV0FBU3pDLFFBQWI7QUFmZ0Q7QUFBQTtBQUFBOztBQUFBO0FBZ0JoRCx5QkFBY3dDLE1BQU1FLEtBQU4sQ0FBWSxHQUFaLENBQWQ7QUFBQSxVQUFTQyxDQUFUO0FBQWdDRix5QkFBZUUsQ0FBZjtBQUFoQztBQWhCZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQmhELE1BQUlDLE9BQU9ILE1BQU0sUUFBakI7QUFDQSxNQUFJSSxPQUFPSixNQUFNLFNBQWpCO0FBQ0FwQyxPQUFLVyxPQUFMLHFEQUNHNEIsSUFESCxFQUNVVCxNQUFNVyxVQURoQixrQ0FFR0QsSUFGSCxFQUVVVixNQUFNWSxXQUZoQjtBQUlEOztBQUVEO0FBQ0EsU0FBU1gsY0FBVCxDQUF3QlksYUFBeEIsRUFBdUNDLGNBQXZDLEVBQXNENUMsSUFBdEQsRUFBMkRMLFFBQTNELEVBQXFFO0FBQ25FO0FBQ0EsTUFBSUgsY0FBYyxDQUFsQjtBQUFBLE1BQXFCQyxlQUFlLENBQXBDO0FBQ0EsTUFBSW9ELFlBQVksQ0FBaEI7QUFBQSxNQUFtQkMsYUFBYSxDQUFoQztBQUNBLE1BQUlDLFVBQVUsRUFBZDtBQUNBLE1BQUlDLFVBQVVoRCxLQUFLSCxJQUFMLENBQVVGLFFBQVYsRUFBb0JjLElBQXBCLENBQXlCVixZQUF2QztBQUNBUCxnQkFBY04sa0JBQWdCLElBQUU4RCxPQUFoQztBQUNBdkQsaUJBQWVOLGdCQUFmO0FBQ0E7QUFDQTtBQUNBLE1BQUl3RCxnQkFBZ0JuRCxXQUFwQixFQUFpQztBQUFDO0FBQ2hDcUQsZ0JBQVlyRCxXQUFaO0FBQ0E7QUFDQXNELGlCQUFjRCxZQUFZRCxjQUFiLEdBQStCRCxhQUE1QztBQUNBO0FBQ0FJLFlBQVFOLFVBQVIsR0FBcUJJLFNBQXJCO0FBQ0FFLFlBQVFMLFdBQVIsR0FBc0JJLFVBQXRCO0FBQ0QsR0FQRCxNQU9PO0FBQUM7QUFDTkMsWUFBUU4sVUFBUixHQUFxQkUsYUFBckI7QUFDQUksWUFBUUwsV0FBUixHQUFzQkUsY0FBdEI7QUFDRDtBQUNELFNBQU9HLE9BQVA7QUFDRDs7QUFFRCxTQUFTRSxlQUFULENBQXlCQyxZQUF6QixFQUFzQ0MsV0FBdEMsRUFBa0RDLEtBQWxELEVBQXdEcEQsSUFBeEQsRUFBNkQ7QUFDM0QsTUFBSXFELFFBQVEsRUFBWjtBQUNBLE1BQUkxQixVQUFVM0IsS0FBS0gsSUFBbkI7QUFDQSxNQUFJeUQsTUFBTSxJQUFWO0FBQ0EsT0FBSSxJQUFJaEIsSUFBSSxDQUFaLEVBQWVBLElBQUljLEtBQW5CLEVBQTBCZCxHQUExQixFQUE4QjtBQUM1QixRQUFJaUIsU0FBUzVCLFFBQVF3QixjQUFZYixDQUFwQixFQUF1QmtCLEtBQXBDO0FBQ0FILFVBQU1JLElBQU4sQ0FBV0YsTUFBWDtBQUNEOztBQUVETCxpQkFBZUEsZ0JBQWdCLGlCQUEvQjtBQUNBSSxRQUFNSSxLQUFLQyxLQUFMLENBQVcsT0FBTVQsWUFBTixHQUFvQixPQUEvQixDQUFOO0FBQ0FJLE1BQUlKLFlBQUosSUFBb0JHLEtBQXBCO0FBQ0FyRCxPQUFLVyxPQUFMLENBQWEyQyxHQUFiO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0EsU0FBU00sVUFBVCxHQUE2RDtBQUFBLE1BQXpDQyxHQUF5Qyx1RUFBckMsRUFBcUM7QUFBQSxNQUFsQ0MsT0FBa0MsdUVBQTFCLGtCQUEwQjtBQUFBLE1BQVBDLE1BQU87O0FBQzFEN0Qsc0JBQVcwRCxVQUFYLENBQXNCQyxHQUF0QixFQUEwQkMsT0FBMUIsRUFBa0NDLE1BQWxDO0FBQ0Y7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnZFLFdBQVNBLE9BRE07QUFFZnVELG1CQUFnQkEsZUFGRDtBQUdmVyxjQUFXQTtBQUhJLENBQWpCIiwiZmlsZSI6Ind4UGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGF1dGhvcjogRGkgKOW+ruS/oeWwj+eoi+W6j+W8gOWPkeW3peeoi+W4iClcbiAqIG9yZ2FuaXphdGlvbjogV2VBcHBEZXYo5b6u5L+h5bCP56iL5bqP5byA5Y+R6K665Z2bKShodHRwOi8vd2VhcHBkZXYuY29tKVxuICogICAgICAgICAgICAgICDlnoLnm7Tlvq7kv6HlsI/nqIvluo/lvIDlj5HkuqTmtYHnpL7ljLpcbiAqXG4gKiBnaXRodWLlnLDlnYA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pY2luZHkvd3hQYXJzZVxuICpcbiAqIGZvcjog5b6u5L+h5bCP56iL5bqP5a+M5paH5pys6Kej5p6QXG4gKiBkZXRhaWwgOiBodHRwOi8vd2VhcHBkZXYuY29tL3Qvd3hwYXJzZS1hbHBoYTAtMS1odG1sLW1hcmtkb3duLzE4NFxuICovXG5cbi8qKlxuICogdXRpbHPlh73mlbDlvJXlhaVcbiAqKi9cbmltcG9ydCBzaG93ZG93biBmcm9tICcuL3Nob3dkb3duLmpzJztcbmltcG9ydCBIdG1sVG9Kc29uIGZyb20gJy4vaHRtbDJqc29uLmpzJztcbi8qKlxuICog6YWN572u5Y+K5YWs5pyJ5bGe5oCnXG4gKiovXG52YXIgcmVhbFdpbmRvd1dpZHRoID0gMDtcbnZhciByZWFsV2luZG93SGVpZ2h0ID0gMDtcbnd4LmdldFN5c3RlbUluZm8oe1xuICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgcmVhbFdpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgcmVhbFdpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgfVxufSlcbi8qKlxuICog5Li75Ye95pWw5YWl5Y+j5Yy6XG4gKiovXG5mdW5jdGlvbiB3eFBhcnNlKGJpbmROYW1lID0gJ3d4UGFyc2VEYXRhJywgdHlwZT0naHRtbCcsIGRhdGE9JzxkaXYgY2xhc3M9XCJjb2xvcjpyZWQ7XCI+5pWw5o2u5LiN6IO95Li656m6PC9kaXY+JywgdGFyZ2V0LGltYWdlUGFkZGluZykge1xuICB2YXIgdGhhdCA9IHRhcmdldDtcbiAgdmFyIHRyYW5zRGF0YSA9IHt9Oy8v5a2Y5pS+6L2s5YyW5ZCO55qE5pWw5o2uXG4gIGlmICh0eXBlID09ICdodG1sJykge1xuICAgIHRyYW5zRGF0YSA9IEh0bWxUb0pzb24uaHRtbDJqc29uKGRhdGEsIGJpbmROYW1lKTtcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0cmFuc0RhdGEsICcgJywgJyAnKSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PSAnbWQnIHx8IHR5cGUgPT0gJ21hcmtkb3duJykge1xuICAgIHZhciBjb252ZXJ0ZXIgPSBuZXcgc2hvd2Rvd24uQ29udmVydGVyKCk7XG4gICAgdmFyIGh0bWwgPSBjb252ZXJ0ZXIubWFrZUh0bWwoZGF0YSk7XG4gICAgdHJhbnNEYXRhID0gSHRtbFRvSnNvbi5odG1sMmpzb24oaHRtbCwgYmluZE5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRyYW5zRGF0YSwgJyAnLCAnICcpKTtcbiAgfVxuICB0cmFuc0RhdGEudmlldyA9IHt9O1xuICB0cmFuc0RhdGEudmlldy5pbWFnZVBhZGRpbmcgPSAwO1xuICBpZih0eXBlb2YoaW1hZ2VQYWRkaW5nKSAhPSAndW5kZWZpbmVkJyl7XG4gICAgdHJhbnNEYXRhLnZpZXcuaW1hZ2VQYWRkaW5nID0gaW1hZ2VQYWRkaW5nXG4gIH1cbiAgdmFyIGJpbmREYXRhID0ge307XG4gIGJpbmREYXRhW2JpbmROYW1lXSA9IHRyYW5zRGF0YTtcbiAgdGhhdC5zZXREYXRhKGJpbmREYXRhKVxuICB0aGF0Lnd4UGFyc2VJbWdMb2FkID0gd3hQYXJzZUltZ0xvYWQ7XG4gIHRoYXQud3hQYXJzZUltZ1RhcCA9IHd4UGFyc2VJbWdUYXA7XG59XG4vLyDlm77niYfngrnlh7vkuovku7ZcbmZ1bmN0aW9uIHd4UGFyc2VJbWdUYXAoZSkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBub3dJbWdVcmwgPSBlLnRhcmdldC5kYXRhc2V0LnNyYztcbiAgdmFyIHRhZ0Zyb20gPSBlLnRhcmdldC5kYXRhc2V0LmZyb207XG4gIGlmICh0eXBlb2YgKHRhZ0Zyb20pICE9ICd1bmRlZmluZWQnICYmIHRhZ0Zyb20ubGVuZ3RoID4gMCkge1xuICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICBjdXJyZW50OiBub3dJbWdVcmwsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICAgIHVybHM6IHRoYXQuZGF0YVt0YWdGcm9tXS5pbWFnZVVybHMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiDlm77niYfop4bop4nlrr3pq5jorqHnrpflh73mlbDljLpcbiAqKi9cbmZ1bmN0aW9uIHd4UGFyc2VJbWdMb2FkKGUpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgdGFnRnJvbSA9IGUudGFyZ2V0LmRhdGFzZXQuZnJvbTtcbiAgdmFyIGlkeCA9IGUudGFyZ2V0LmRhdGFzZXQuaWR4O1xuICBpZiAodHlwZW9mICh0YWdGcm9tKSAhPSAndW5kZWZpbmVkJyAmJiB0YWdGcm9tLmxlbmd0aCA+IDApIHtcbiAgICBjYWxNb3JlSW1hZ2VJbmZvKGUsIGlkeCwgdGhhdCwgdGFnRnJvbSlcbiAgfVxufVxuLy8g5YGH5b6q546v6I635Y+W6K6h566X5Zu+54mH6KeG6KeJ5pyA5L2z5a696auYXG5mdW5jdGlvbiBjYWxNb3JlSW1hZ2VJbmZvKGUsIGlkeCwgdGhhdCwgYmluZE5hbWUpIHtcbiAgdmFyIHRlbURhdGEgPSB0aGF0LmRhdGFbYmluZE5hbWVdO1xuICBpZiAoIXRlbURhdGEgfHwgdGVtRGF0YS5pbWFnZXMubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHRlbUltYWdlcyA9IHRlbURhdGEuaW1hZ2VzO1xuICAvL+WboOS4uuaXoOazleiOt+WPlnZpZXflrr3luqYg6ZyA6KaB6Ieq5a6a5LmJcGFkZGluZ+i/m+ihjOiuoeeul++8jOeojeWQjuWkhOeQhlxuICB2YXIgcmVjYWwgPSB3eEF1dG9JbWFnZUNhbChlLmRldGFpbC53aWR0aCwgZS5kZXRhaWwuaGVpZ2h0LHRoYXQsYmluZE5hbWUpO1xuICAvLyB0ZW1JbWFnZXNbaWR4XS53aWR0aCA9IHJlY2FsLmltYWdlV2lkdGg7XG4gIC8vIHRlbUltYWdlc1tpZHhdLmhlaWdodCA9IHJlY2FsLmltYWdlaGVpZ2h0O1xuICAvLyB0ZW1EYXRhLmltYWdlcyA9IHRlbUltYWdlcztcbiAgLy8gdmFyIGJpbmREYXRhID0ge307XG4gIC8vIGJpbmREYXRhW2JpbmROYW1lXSA9IHRlbURhdGE7XG4gIC8vIHRoYXQuc2V0RGF0YShiaW5kRGF0YSk7XG4gIHZhciBpbmRleCA9IHRlbUltYWdlc1tpZHhdLmluZGV4XG4gIHZhciBrZXkgPSBgJHtiaW5kTmFtZX1gXG4gIGZvciAodmFyIGkgb2YgaW5kZXguc3BsaXQoJy4nKSkga2V5Kz1gLm5vZGVzWyR7aX1dYFxuICB2YXIga2V5VyA9IGtleSArICcud2lkdGgnXG4gIHZhciBrZXlIID0ga2V5ICsgJy5oZWlnaHQnXG4gIHRoYXQuc2V0RGF0YSh7XG4gICAgW2tleVddOiByZWNhbC5pbWFnZVdpZHRoLFxuICAgIFtrZXlIXTogcmVjYWwuaW1hZ2VoZWlnaHQsXG4gIH0pXG59XG5cbi8vIOiuoeeul+inhuinieS8mOWFiOeahOWbvueJh+WuvemrmFxuZnVuY3Rpb24gd3hBdXRvSW1hZ2VDYWwob3JpZ2luYWxXaWR0aCwgb3JpZ2luYWxIZWlnaHQsdGhhdCxiaW5kTmFtZSkge1xuICAvL+iOt+WPluWbvueJh+eahOWOn+Wni+mVv+WuvVxuICB2YXIgd2luZG93V2lkdGggPSAwLCB3aW5kb3dIZWlnaHQgPSAwO1xuICB2YXIgYXV0b1dpZHRoID0gMCwgYXV0b0hlaWdodCA9IDA7XG4gIHZhciByZXN1bHRzID0ge307XG4gIHZhciBwYWRkaW5nID0gdGhhdC5kYXRhW2JpbmROYW1lXS52aWV3LmltYWdlUGFkZGluZztcbiAgd2luZG93V2lkdGggPSByZWFsV2luZG93V2lkdGgtMipwYWRkaW5nO1xuICB3aW5kb3dIZWlnaHQgPSByZWFsV2luZG93SGVpZ2h0O1xuICAvL+WIpOaWreaMieeFp+mCo+enjeaWueW8j+i/m+ihjOe8qeaUvlxuICAvLyBjb25zb2xlLmxvZyhcIndpbmRvd1dpZHRoXCIgKyB3aW5kb3dXaWR0aCk7XG4gIGlmIChvcmlnaW5hbFdpZHRoID4gd2luZG93V2lkdGgpIHsvL+WcqOWbvueJh3dpZHRo5aSn5LqO5omL5py65bGP5bmVd2lkdGjml7blgJlcbiAgICBhdXRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF1dG9XaWR0aFwiICsgYXV0b1dpZHRoKTtcbiAgICBhdXRvSGVpZ2h0ID0gKGF1dG9XaWR0aCAqIG9yaWdpbmFsSGVpZ2h0KSAvIG9yaWdpbmFsV2lkdGg7XG4gICAgLy8gY29uc29sZS5sb2coXCJhdXRvSGVpZ2h0XCIgKyBhdXRvSGVpZ2h0KTtcbiAgICByZXN1bHRzLmltYWdlV2lkdGggPSBhdXRvV2lkdGg7XG4gICAgcmVzdWx0cy5pbWFnZWhlaWdodCA9IGF1dG9IZWlnaHQ7XG4gIH0gZWxzZSB7Ly/lkKbliJnlsZXnpLrljp/mnaXnmoTmlbDmja5cbiAgICByZXN1bHRzLmltYWdlV2lkdGggPSBvcmlnaW5hbFdpZHRoO1xuICAgIHJlc3VsdHMuaW1hZ2VoZWlnaHQgPSBvcmlnaW5hbEhlaWdodDtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gd3hQYXJzZVRlbUFycmF5KHRlbUFycmF5TmFtZSxiaW5kTmFtZVJlZyx0b3RhbCx0aGF0KXtcbiAgdmFyIGFycmF5ID0gW107XG4gIHZhciB0ZW1EYXRhID0gdGhhdC5kYXRhO1xuICB2YXIgb2JqID0gbnVsbDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IHRvdGFsOyBpKyspe1xuICAgIHZhciBzaW1BcnIgPSB0ZW1EYXRhW2JpbmROYW1lUmVnK2ldLm5vZGVzO1xuICAgIGFycmF5LnB1c2goc2ltQXJyKTtcbiAgfVxuXG4gIHRlbUFycmF5TmFtZSA9IHRlbUFycmF5TmFtZSB8fCAnd3hQYXJzZVRlbUFycmF5JztcbiAgb2JqID0gSlNPTi5wYXJzZSgne1wiJysgdGVtQXJyYXlOYW1lICsnXCI6XCJcIn0nKTtcbiAgb2JqW3RlbUFycmF5TmFtZV0gPSBhcnJheTtcbiAgdGhhdC5zZXREYXRhKG9iaik7XG59XG5cbi8qKlxuICog6YWN572uZW1vamlzXG4gKlxuICovXG5cbmZ1bmN0aW9uIGVtb2ppc0luaXQocmVnPScnLGJhc2VTcmM9XCIvd3hQYXJzZS9lbW9qaXMvXCIsZW1vamlzKXtcbiAgIEh0bWxUb0pzb24uZW1vamlzSW5pdChyZWcsYmFzZVNyYyxlbW9qaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgd3hQYXJzZTogd3hQYXJzZSxcbiAgd3hQYXJzZVRlbUFycmF5Ond4UGFyc2VUZW1BcnJheSxcbiAgZW1vamlzSW5pdDplbW9qaXNJbml0XG59XG5cblxuIl19
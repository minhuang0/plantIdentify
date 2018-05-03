'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postFetch = exports.getFetch = exports.chooseImage = exports.uploadFile = exports.fetch = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config/index.js');

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = '';
var fetch = exports.fetch = function fetch(url, options) {
    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!options.noAjax) {
        query.type = 'ajax';
    }
    var fullUrl = _utils2.default.fullUrl(_config.HOST, url, query);
    return new Promise(function (resolve, reject) {
        return _wepy2.default.request({
            url: fullUrl,
            header: Object.assign({
                Cookie: cookie
            }, options.header || {}),
            data: options.data,
            method: options.method,
            success: function success(res) {
                if (res.header['Set-Cookie']) {
                    cookie = res.header['Set-Cookie'];
                }
                return res.statusCode === 200 ? resolve(res.data) : reject(res);
            },
            fail: reject
        });
    });
};

var uploadFile = exports.uploadFile = function uploadFile(url, filePath) {
    var fullUrl = _utils2.default.fullUrl(_config.HOST, url);
    return new Promise(function (resolve, reject) {
        _wepy2.default.uploadFile({
            url: fullUrl,
            filePath: filePath,
            name: 'file',
            header: {
                Cookie: cookie
            },
            success: function success(res) {
                return res.statusCode === 200 ? resolve(res.data) : reject(res);
            },

            fail: reject
        });
    });
};

var chooseImage = exports.chooseImage = function chooseImage(options) {
    return new Promise(function (resolve, reject) {
        _wepy2.default.chooseImage(Object.assign({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: resolve,
            fail: reject
        }, options));
    });
};

var getFetch = exports.getFetch = function getFetch(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var query = arguments[2];

    options.method = 'GET';
    return fetch(url, options, query);
};

var postFetch = exports.postFetch = function postFetch(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var query = arguments[2];

    options.method = 'POST';
    return fetch(url, options, query);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbImNvb2tpZSIsImZldGNoIiwidXJsIiwib3B0aW9ucyIsInF1ZXJ5Iiwibm9BamF4IiwidHlwZSIsImZ1bGxVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJoZWFkZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJDb29raWUiLCJkYXRhIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInN0YXR1c0NvZGUiLCJmYWlsIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwiZ2V0RmV0Y2giLCJwb3N0RmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTLEVBQWI7QUFDTyxJQUFNQyx3QkFBUSxTQUFSQSxLQUFRLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUE4QjtBQUFBLFFBQWZDLEtBQWUsdUVBQVAsRUFBTzs7QUFDL0MsUUFBSSxDQUFDRCxRQUFRRSxNQUFiLEVBQXFCO0FBQ2pCRCxjQUFNRSxJQUFOLEdBQWEsTUFBYjtBQUNIO0FBQ0QsUUFBTUMsVUFBVSxnQkFBTUEsT0FBTixlQUFvQkwsR0FBcEIsRUFBeUJFLEtBQXpCLENBQWhCO0FBQ0EsV0FBTyxJQUFJSSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLGVBQU8sZUFBS0MsT0FBTCxDQUFhO0FBQ2hCVCxpQkFBS0ssT0FEVztBQUVoQkssb0JBQVFDLE9BQU9DLE1BQVAsQ0FBYztBQUNsQkMsd0JBQVFmO0FBRFUsYUFBZCxFQUVMRyxRQUFRUyxNQUFSLElBQWtCLEVBRmIsQ0FGUTtBQUtoQkksa0JBQU1iLFFBQVFhLElBTEU7QUFNaEJDLG9CQUFRZCxRQUFRYyxNQU5BO0FBT2hCQyxxQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2Qsb0JBQUlBLElBQUlQLE1BQUosQ0FBVyxZQUFYLENBQUosRUFBOEI7QUFDMUJaLDZCQUFTbUIsSUFBSVAsTUFBSixDQUFXLFlBQVgsQ0FBVDtBQUNIO0FBQ0QsdUJBQU9PLElBQUlDLFVBQUosS0FBbUIsR0FBbkIsR0FBeUJYLFFBQVFVLElBQUlILElBQVosQ0FBekIsR0FBNkNOLE9BQU9TLEdBQVAsQ0FBcEQ7QUFDSCxhQVplO0FBYWhCRSxrQkFBTVg7QUFiVSxTQUFiLENBQVA7QUFlSCxLQWhCTSxDQUFQO0FBaUJILENBdEJNOztBQXdCQSxJQUFNWSxrQ0FBYSxTQUFiQSxVQUFhLENBQUNwQixHQUFELEVBQU1xQixRQUFOLEVBQW1CO0FBQ3pDLFFBQU1oQixVQUFVLGdCQUFNQSxPQUFOLGVBQW9CTCxHQUFwQixDQUFoQjtBQUNBLFdBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBS1ksVUFBTCxDQUFnQjtBQUNacEIsaUJBQUtLLE9BRE87QUFFWmdCLDhCQUZZO0FBR1pDLGtCQUFNLE1BSE07QUFJWlosb0JBQVE7QUFDSkcsd0JBQVFmO0FBREosYUFKSTtBQU9aa0IsbUJBUFksbUJBT0hDLEdBUEcsRUFPRTtBQUNWLHVCQUFPQSxJQUFJQyxVQUFKLEtBQW1CLEdBQW5CLEdBQXlCWCxRQUFRVSxJQUFJSCxJQUFaLENBQXpCLEdBQTZDTixPQUFPUyxHQUFQLENBQXBEO0FBQ0gsYUFUVzs7QUFVWkUsa0JBQU1YO0FBVk0sU0FBaEI7QUFZSCxLQWJNLENBQVA7QUFjSCxDQWhCTTs7QUFrQkEsSUFBTWUsb0NBQWMsU0FBZEEsV0FBYyxDQUFDdEIsT0FBRCxFQUFhO0FBQ3BDLFdBQU8sSUFBSUssT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBS2UsV0FBTCxDQUFpQlosT0FBT0MsTUFBUCxDQUFjO0FBQzNCWSxzQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRGlCLEVBQ1c7QUFDdENDLHdCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FGZSxFQUVNO0FBQ2pDVCxxQkFBU1QsT0FIa0I7QUFJM0JZLGtCQUFNWDtBQUpxQixTQUFkLEVBS2RQLE9BTGMsQ0FBakI7QUFNSCxLQVBNLENBQVA7QUFRSCxDQVRNOztBQVdBLElBQU15Qiw4QkFBVyxTQUFYQSxRQUFXLENBQUMxQixHQUFELEVBQThCO0FBQUEsUUFBeEJDLE9BQXdCLHVFQUFkLEVBQWM7QUFBQSxRQUFWQyxLQUFVOztBQUNsREQsWUFBUWMsTUFBUixHQUFpQixLQUFqQjtBQUNBLFdBQU9oQixNQUFNQyxHQUFOLEVBQVdDLE9BQVgsRUFBb0JDLEtBQXBCLENBQVA7QUFDSCxDQUhNOztBQUtBLElBQU15QixnQ0FBWSxTQUFaQSxTQUFZLENBQUMzQixHQUFELEVBQThCO0FBQUEsUUFBeEJDLE9BQXdCLHVFQUFkLEVBQWM7QUFBQSxRQUFWQyxLQUFVOztBQUNuREQsWUFBUWMsTUFBUixHQUFpQixNQUFqQjtBQUNBLFdBQU9oQixNQUFNQyxHQUFOLEVBQVdDLE9BQVgsRUFBb0JDLEtBQXBCLENBQVA7QUFDSCxDQUhNIiwiZmlsZSI6ImZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7IEhPU1QgfSBmcm9tICdAL21vZHVsZXMvY29uZmlnJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnXG5cbmxldCBjb29raWUgPSAnJ1xuZXhwb3J0IGNvbnN0IGZldGNoID0gKHVybCwgb3B0aW9ucywgcXVlcnkgPSB7fSkgPT4ge1xuICAgIGlmICghb3B0aW9ucy5ub0FqYXgpIHtcbiAgICAgICAgcXVlcnkudHlwZSA9ICdhamF4J1xuICAgIH1cbiAgICBjb25zdCBmdWxsVXJsID0gdXRpbHMuZnVsbFVybChIT1NULCB1cmwsIHF1ZXJ5KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBmdWxsVXJsLFxuICAgICAgICAgICAgaGVhZGVyOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICBDb29raWU6IGNvb2tpZVxuICAgICAgICAgICAgfSwgb3B0aW9ucy5oZWFkZXIgfHwge30pLFxuICAgICAgICAgICAgZGF0YTogb3B0aW9ucy5kYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmhlYWRlclsnU2V0LUNvb2tpZSddKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZSA9IHJlcy5oZWFkZXJbJ1NldC1Db29raWUnXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1c0NvZGUgPT09IDIwMCA/IHJlc29sdmUocmVzLmRhdGEpIDogcmVqZWN0KHJlcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZSA9ICh1cmwsIGZpbGVQYXRoKSA9PiB7XG4gICAgY29uc3QgZnVsbFVybCA9IHV0aWxzLmZ1bGxVcmwoSE9TVCwgdXJsKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHdlcHkudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICB1cmw6IGZ1bGxVcmwsXG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgIENvb2tpZTogY29va2llXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXNDb2RlID09PSAyMDAgPyByZXNvbHZlKHJlcy5kYXRhKSA6IHJlamVjdChyZXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNob29zZUltYWdlID0gKG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LmNob29zZUltYWdlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICB9LCBvcHRpb25zKSlcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RmV0Y2ggPSAodXJsLCBvcHRpb25zID0ge30sIHF1ZXJ5KSA9PiB7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJ1xuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMsIHF1ZXJ5KVxufVxuXG5leHBvcnQgY29uc3QgcG9zdEZldGNoID0gKHVybCwgb3B0aW9ucyA9IHt9LCBxdWVyeSkgPT4ge1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucywgcXVlcnkpXG59XG4iXX0=
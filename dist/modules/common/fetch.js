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
    var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    console.log(filePath, formData);
    var fullUrl = _utils2.default.fullUrl(_config.HOST, url);
    return new Promise(function (resolve, reject) {
        _wepy2.default.uploadFile({
            url: fullUrl,
            filePath: filePath,
            name: 'file',
            formData: formData,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbImNvb2tpZSIsImZldGNoIiwidXJsIiwib3B0aW9ucyIsInF1ZXJ5Iiwibm9BamF4IiwidHlwZSIsImZ1bGxVcmwiLCJ1dGlscyIsIkhPU1QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndlcHkiLCJyZXF1ZXN0IiwiaGVhZGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiQ29va2llIiwiZGF0YSIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzdGF0dXNDb2RlIiwiZmFpbCIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsImZvcm1EYXRhIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjaG9vc2VJbWFnZSIsInNpemVUeXBlIiwic291cmNlVHlwZSIsImdldEZldGNoIiwicG9zdEZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsU0FBUyxFQUFiO0FBQ08sSUFBTUMsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBOEI7QUFBQSxRQUFmQyxLQUFlLHVFQUFQLEVBQU87O0FBQy9DLFFBQUksQ0FBQ0QsUUFBUUUsTUFBYixFQUFxQjtBQUNqQkQsY0FBTUUsSUFBTixHQUFhLE1BQWI7QUFDSDtBQUNELFFBQU1DLFVBQVVDLGdCQUFNRCxPQUFOLENBQWNFLFlBQWQsRUFBb0JQLEdBQXBCLEVBQXlCRSxLQUF6QixDQUFoQjtBQUNBLFdBQU8sSUFBSU0sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxlQUFPQyxlQUFLQyxPQUFMLENBQWE7QUFDaEJaLGlCQUFLSyxPQURXO0FBRWhCUSxvQkFBUUMsT0FBT0MsTUFBUCxDQUFjO0FBQ2xCQyx3QkFBUWxCO0FBRFUsYUFBZCxFQUVMRyxRQUFRWSxNQUFSLElBQWtCLEVBRmIsQ0FGUTtBQUtoQkksa0JBQU1oQixRQUFRZ0IsSUFMRTtBQU1oQkMsb0JBQVFqQixRQUFRaUIsTUFOQTtBQU9oQkMscUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNkLG9CQUFJQSxJQUFJUCxNQUFKLENBQVcsWUFBWCxDQUFKLEVBQThCO0FBQzFCZiw2QkFBU3NCLElBQUlQLE1BQUosQ0FBVyxZQUFYLENBQVQ7QUFDSDtBQUNELHVCQUFPTyxJQUFJQyxVQUFKLEtBQW1CLEdBQW5CLEdBQXlCWixRQUFRVyxJQUFJSCxJQUFaLENBQXpCLEdBQTZDUCxPQUFPVSxHQUFQLENBQXBEO0FBQ0gsYUFaZTtBQWFoQkUsa0JBQU1aO0FBYlUsU0FBYixDQUFQO0FBZUgsS0FoQk0sQ0FBUDtBQWlCSCxDQXRCTTs7QUF3QkEsSUFBTWEsa0NBQWEsU0FBYkEsVUFBYSxDQUFDdkIsR0FBRCxFQUFNd0IsUUFBTixFQUFrQztBQUFBLFFBQWxCQyxRQUFrQix1RUFBUCxFQUFPOztBQUN4REMsWUFBUUMsR0FBUixDQUFZSCxRQUFaLEVBQXNCQyxRQUF0QjtBQUNBLFFBQU1wQixVQUFVQyxnQkFBTUQsT0FBTixDQUFjRSxZQUFkLEVBQW9CUCxHQUFwQixDQUFoQjtBQUNBLFdBQU8sSUFBSVEsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsdUJBQUtZLFVBQUwsQ0FBZ0I7QUFDWnZCLGlCQUFLSyxPQURPO0FBRVptQiw4QkFGWTtBQUdaSSxrQkFBTSxNQUhNO0FBSVpILDhCQUpZO0FBS1paLG9CQUFRO0FBQ0pHLHdCQUFRbEI7QUFESixhQUxJO0FBUVpxQixtQkFSWSxtQkFRSEMsR0FSRyxFQVFFO0FBQ1YsdUJBQU9BLElBQUlDLFVBQUosS0FBbUIsR0FBbkIsR0FBeUJaLFFBQVFXLElBQUlILElBQVosQ0FBekIsR0FBNkNQLE9BQU9VLEdBQVAsQ0FBcEQ7QUFDSCxhQVZXOztBQVdaRSxrQkFBTVo7QUFYTSxTQUFoQjtBQWFILEtBZE0sQ0FBUDtBQWVILENBbEJNOztBQW9CQSxJQUFNbUIsb0NBQWMsU0FBZEEsV0FBYyxDQUFDNUIsT0FBRCxFQUFhO0FBQ3BDLFdBQU8sSUFBSU8sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsdUJBQUtrQixXQUFMLENBQWlCZixPQUFPQyxNQUFQLENBQWM7QUFDM0JlLHNCQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FEaUIsRUFDVztBQUN0Q0Msd0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUZlLEVBRU07QUFDakNaLHFCQUFTVixPQUhrQjtBQUkzQmEsa0JBQU1aO0FBSnFCLFNBQWQsRUFLZFQsT0FMYyxDQUFqQjtBQU1ILEtBUE0sQ0FBUDtBQVFILENBVE07O0FBV0EsSUFBTStCLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ2hDLEdBQUQsRUFBOEI7QUFBQSxRQUF4QkMsT0FBd0IsdUVBQWQsRUFBYztBQUFBLFFBQVZDLEtBQVU7O0FBQ2xERCxZQUFRaUIsTUFBUixHQUFpQixLQUFqQjtBQUNBLFdBQU9uQixNQUFNQyxHQUFOLEVBQVdDLE9BQVgsRUFBb0JDLEtBQXBCLENBQVA7QUFDSCxDQUhNOztBQUtBLElBQU0rQixnQ0FBWSxTQUFaQSxTQUFZLENBQUNqQyxHQUFELEVBQThCO0FBQUEsUUFBeEJDLE9BQXdCLHVFQUFkLEVBQWM7QUFBQSxRQUFWQyxLQUFVOztBQUNuREQsWUFBUWlCLE1BQVIsR0FBaUIsTUFBakI7QUFDQSxXQUFPbkIsTUFBTUMsR0FBTixFQUFXQyxPQUFYLEVBQW9CQyxLQUFwQixDQUFQO0FBQ0gsQ0FITSIsImZpbGUiOiJmZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBIT1NUIH0gZnJvbSAnQC9tb2R1bGVzL2NvbmZpZydcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJ1xuXG5sZXQgY29va2llID0gJydcbmV4cG9ydCBjb25zdCBmZXRjaCA9ICh1cmwsIG9wdGlvbnMsIHF1ZXJ5ID0ge30pID0+IHtcbiAgICBpZiAoIW9wdGlvbnMubm9BamF4KSB7XG4gICAgICAgIHF1ZXJ5LnR5cGUgPSAnYWpheCdcbiAgICB9XG4gICAgY29uc3QgZnVsbFVybCA9IHV0aWxzLmZ1bGxVcmwoSE9TVCwgdXJsLCBxdWVyeSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogZnVsbFVybCxcbiAgICAgICAgICAgIGhlYWRlcjogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgQ29va2llOiBjb29raWVcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuaGVhZGVyIHx8IHt9KSxcbiAgICAgICAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXJbJ1NldC1Db29raWUnXSkge1xuICAgICAgICAgICAgICAgICAgICBjb29raWUgPSByZXMuaGVhZGVyWydTZXQtQ29va2llJ11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXNDb2RlID09PSAyMDAgPyByZXNvbHZlKHJlcy5kYXRhKSA6IHJlamVjdChyZXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwbG9hZEZpbGUgPSAodXJsLCBmaWxlUGF0aCwgZm9ybURhdGEgPSB7fSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZpbGVQYXRoLCBmb3JtRGF0YSlcbiAgICBjb25zdCBmdWxsVXJsID0gdXRpbHMuZnVsbFVybChIT1NULCB1cmwpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgIHVybDogZnVsbFVybCxcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICBDb29raWU6IGNvb2tpZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzQ29kZSA9PT0gMjAwID8gcmVzb2x2ZShyZXMuZGF0YSkgOiByZWplY3QocmVzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjaG9vc2VJbWFnZSA9IChvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgd2VweS5jaG9vc2VJbWFnZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgICAgfSwgb3B0aW9ucykpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZldGNoID0gKHVybCwgb3B0aW9ucyA9IHt9LCBxdWVyeSkgPT4ge1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCdcbiAgICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zLCBxdWVyeSlcbn1cblxuZXhwb3J0IGNvbnN0IHBvc3RGZXRjaCA9ICh1cmwsIG9wdGlvbnMgPSB7fSwgcXVlcnkpID0+IHtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJ1xuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMsIHF1ZXJ5KVxufVxuIl19
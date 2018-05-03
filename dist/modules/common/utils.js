'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dateFns = require('./../../npm/date-fns/index.js');

exports.paddingImg = function (images) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    if (images.length === 0) {
        return [];
    }
    var maxLen = images.length % len === 0 ? parseInt(images.length / len) : parseInt(images.length / len) + 1;
    var imgs = [];
    images.forEach(function (img, index) {
        var idx = parseInt(index / 3);
        if (!Array.isArray(imgs[idx])) {
            imgs[idx] = [];
        }
        imgs[idx].push(img);
    });
    if (len - imgs[maxLen - 1].length > 0) {
        imgs[maxLen - 1] = imgs[maxLen - 1].concat(Array.from(new Array(len - imgs[maxLen - 1].length), function () {
            return '';
        }));
    }
    return imgs;
};

function stringifyPrimitive(v) {
    switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
        case 'string':
            return v;
        case 'boolean':
            return v ? 'true' : 'false';
        case 'number':
            return isFinite(v) ? v : '';
        default:
            return '';
    }
}

function querystring() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$sequence = options.sequence,
        sequence = _options$sequence === undefined ? [] : _options$sequence;

    var defaultSeparator = '&';
    var stringifiedKeyMap = {};

    var reducer = function reducer(str, key) {
        var separator = str ? '&' : '';
        if (!stringifiedKeyMap[key]) {
            stringifiedKeyMap[key] = true;
            if (typeof obj[key] !== 'undefined') {
                return '' + str + separator + encodeURIComponent(stringifyPrimitive(key)) + '=' + encodeURIComponent(stringifyPrimitive(obj[key]));
            }
        }
        return str;
    };

    var sequencePart = sequence.reduce(reducer, '');
    var noneSequencePart = Object.keys(obj).reduce(reducer, '');
    return '' + sequencePart + (sequencePart && noneSequencePart ? defaultSeparator : '') + noneSequencePart;
}

exports.fullUrl = function (API_HOST, url) {
    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var qs = querystring(query);
    var retUrl = '';
    if (/\/\//.test(url) || /^https?:\/\//.test(url)) {
        retUrl = url;
    } else {
        retUrl = '' + API_HOST + url;
    }

    if (qs) {
        return retUrl + '?' + qs;
    }
    return retUrl;
};

exports.timeTransform = function (time) {
    var now = new Date();
    var diffYears = (0, _dateFns.differenceInYears)(now, time);
    var diffMonths = (0, _dateFns.differenceInMonths)(now, time);
    var diffWeeks = (0, _dateFns.differenceInWeeks)(now, time);
    var diffDays = (0, _dateFns.differenceInDays)(now, time);
    var diffHours = (0, _dateFns.differenceInHours)(now, time);
    var diffMins = (0, _dateFns.differenceInMinutes)(now, time);
    var diffSeconds = (0, _dateFns.differenceInSeconds)(now, time);
    return diffYears ? diffYears + '\u5E74\u524D' : diffMonths ? diffMonths + '\u6708\u524D' : diffWeeks ? diffWeeks + '\u5468\u524D' : diffDays ? diffDays + '\u5929\u524D' : diffHours ? diffHours + '\u5C0F\u65F6\u524D' : diffMins ? diffMins + '\u5206\u949F\u524D' : diffSeconds > 10 ? diffSeconds + '\u79D2\u524D' : '刚刚';
};

exports.maxLength = function (str) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;

    return str.length > length ? str.slice(0, length - 1) + '...' : str;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJwYWRkaW5nSW1nIiwiaW1hZ2VzIiwibGVuIiwibGVuZ3RoIiwibWF4TGVuIiwicGFyc2VJbnQiLCJpbWdzIiwiZm9yRWFjaCIsImltZyIsImluZGV4IiwiaWR4IiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCIsImNvbmNhdCIsImZyb20iLCJzdHJpbmdpZnlQcmltaXRpdmUiLCJ2IiwiaXNGaW5pdGUiLCJxdWVyeXN0cmluZyIsIm9iaiIsIm9wdGlvbnMiLCJzZXF1ZW5jZSIsImRlZmF1bHRTZXBhcmF0b3IiLCJzdHJpbmdpZmllZEtleU1hcCIsInJlZHVjZXIiLCJzdHIiLCJrZXkiLCJzZXBhcmF0b3IiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXF1ZW5jZVBhcnQiLCJyZWR1Y2UiLCJub25lU2VxdWVuY2VQYXJ0IiwiT2JqZWN0Iiwia2V5cyIsImZ1bGxVcmwiLCJBUElfSE9TVCIsInVybCIsInF1ZXJ5IiwicXMiLCJyZXRVcmwiLCJ0ZXN0IiwidGltZVRyYW5zZm9ybSIsInRpbWUiLCJub3ciLCJEYXRlIiwiZGlmZlllYXJzIiwiZGlmZk1vbnRocyIsImRpZmZXZWVrcyIsImRpZmZEYXlzIiwiZGlmZkhvdXJzIiwiZGlmZk1pbnMiLCJkaWZmU2Vjb25kcyIsIm1heExlbmd0aCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUFBLFFBQVFDLFVBQVIsR0FBcUIsVUFBQ0MsTUFBRCxFQUFxQjtBQUFBLFFBQVpDLEdBQVksdUVBQU4sQ0FBTTs7QUFDdEMsUUFBSUQsT0FBT0UsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQixlQUFPLEVBQVA7QUFDSDtBQUNELFFBQUlDLFNBQVNILE9BQU9FLE1BQVAsR0FBZ0JELEdBQWhCLEtBQXdCLENBQXhCLEdBQTRCRyxTQUFTSixPQUFPRSxNQUFQLEdBQWdCRCxHQUF6QixDQUE1QixHQUE0REcsU0FBU0osT0FBT0UsTUFBUCxHQUFnQkQsR0FB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Q0FBdEIsQ0FBekIsV0FBeUR1QixHQUFoRTtBQUNILENBRkQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaWZmZXJlbmNlSW5TZWNvbmRzLCBkaWZmZXJlbmNlSW5NaW51dGVzLCBkaWZmZXJlbmNlSW5Ib3VycywgZGlmZmVyZW5jZUluRGF5cywgZGlmZmVyZW5jZUluV2Vla3MsIGRpZmZlcmVuY2VJbk1vbnRocywgZGlmZmVyZW5jZUluWWVhcnMgfSBmcm9tICdkYXRlLWZucydcblxuZXhwb3J0cy5wYWRkaW5nSW1nID0gKGltYWdlcywgbGVuID0gMykgPT4ge1xuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBsZXQgbWF4TGVuID0gaW1hZ2VzLmxlbmd0aCAlIGxlbiA9PT0gMCA/IHBhcnNlSW50KGltYWdlcy5sZW5ndGggLyBsZW4pIDogcGFyc2VJbnQoaW1hZ2VzLmxlbmd0aCAvIGxlbikgKyAxXG4gICAgbGV0IGltZ3MgPSBbXVxuICAgIGltYWdlcy5mb3JFYWNoKChpbWcsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBpZHggPSBwYXJzZUludChpbmRleCAvIDMpXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpbWdzW2lkeF0pKSB7XG4gICAgICAgICAgICBpbWdzW2lkeF0gPSBbXVxuICAgICAgICB9XG4gICAgICAgIGltZ3NbaWR4XS5wdXNoKGltZylcbiAgICB9KVxuICAgIGlmIChsZW4gLSBpbWdzW21heExlbiAtIDFdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaW1nc1ttYXhMZW4gLSAxXSA9IGltZ3NbbWF4TGVuIC0gMV0uY29uY2F0KEFycmF5LmZyb20obmV3IEFycmF5KGxlbiAtIGltZ3NbbWF4TGVuIC0gMV0ubGVuZ3RoKSwgKCkgPT4gJycpKVxuICAgIH1cbiAgICByZXR1cm4gaW1nc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlQcmltaXRpdmUgKHYpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICByZXR1cm4gdlxuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nIChvYmogPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBzZXF1ZW5jZSA9IFtdIH0gPSBvcHRpb25zXG4gICAgY29uc3QgZGVmYXVsdFNlcGFyYXRvciA9ICcmJ1xuICAgIGNvbnN0IHN0cmluZ2lmaWVkS2V5TWFwID0ge31cblxuICAgIGNvbnN0IHJlZHVjZXIgPSAoc3RyLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gc3RyID8gJyYnIDogJydcbiAgICAgICAgaWYgKCFzdHJpbmdpZmllZEtleU1hcFtrZXldKSB7XG4gICAgICAgICAgICBzdHJpbmdpZmllZEtleU1hcFtrZXldID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7c3RyfSR7c2VwYXJhdG9yfSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrZXkpKX09JHtlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrZXldKSl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJcbiAgICB9XG5cbiAgICBjb25zdCBzZXF1ZW5jZVBhcnQgPSBzZXF1ZW5jZS5yZWR1Y2UocmVkdWNlciwgJycpXG4gICAgY29uc3Qgbm9uZVNlcXVlbmNlUGFydCA9IE9iamVjdC5rZXlzKG9iaikucmVkdWNlKHJlZHVjZXIsICcnKVxuICAgIHJldHVybiBgJHtzZXF1ZW5jZVBhcnR9JHtzZXF1ZW5jZVBhcnQgJiYgbm9uZVNlcXVlbmNlUGFydCA/IGRlZmF1bHRTZXBhcmF0b3IgOiAnJ30ke25vbmVTZXF1ZW5jZVBhcnR9YFxufVxuXG5leHBvcnRzLmZ1bGxVcmwgPSAoQVBJX0hPU1QsIHVybCwgcXVlcnkgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHFzID0gcXVlcnlzdHJpbmcocXVlcnkpXG4gICAgbGV0IHJldFVybCA9ICcnXG4gICAgaWYgKC9cXC9cXC8vLnRlc3QodXJsKSB8fCAvXmh0dHBzPzpcXC9cXC8vLnRlc3QodXJsKSkge1xuICAgICAgICByZXRVcmwgPSB1cmxcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXRVcmwgPSBgJHtBUElfSE9TVH0ke3VybH1gXG4gICAgfVxuXG4gICAgaWYgKHFzKSB7XG4gICAgICAgIHJldHVybiBgJHtyZXRVcmx9PyR7cXN9YFxuICAgIH1cbiAgICByZXR1cm4gcmV0VXJsXG59XG5cbmV4cG9ydHMudGltZVRyYW5zZm9ybSA9ICh0aW1lKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGRpZmZZZWFycyA9IGRpZmZlcmVuY2VJblllYXJzKG5vdywgdGltZSlcbiAgICBjb25zdCBkaWZmTW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKG5vdywgdGltZSlcbiAgICBjb25zdCBkaWZmV2Vla3MgPSBkaWZmZXJlbmNlSW5XZWVrcyhub3csIHRpbWUpXG4gICAgY29uc3QgZGlmZkRheXMgPSBkaWZmZXJlbmNlSW5EYXlzKG5vdywgdGltZSlcbiAgICBjb25zdCBkaWZmSG91cnMgPSBkaWZmZXJlbmNlSW5Ib3Vycyhub3csIHRpbWUpXG4gICAgY29uc3QgZGlmZk1pbnMgPSBkaWZmZXJlbmNlSW5NaW51dGVzKG5vdywgdGltZSlcbiAgICBjb25zdCBkaWZmU2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMobm93LCB0aW1lKVxuICAgIHJldHVybiBkaWZmWWVhcnMgPyBgJHtkaWZmWWVhcnN95bm05YmNYCA6IGRpZmZNb250aHMgPyBgJHtkaWZmTW9udGhzfeaciOWJjWAgOiBkaWZmV2Vla3MgPyBgJHtkaWZmV2Vla3N95ZGo5YmNYCA6IGRpZmZEYXlzID8gYCR7ZGlmZkRheXN95aSp5YmNYCA6IGRpZmZIb3VycyA/IGAke2RpZmZIb3Vyc33lsI/ml7bliY1gIDogZGlmZk1pbnMgPyBgJHtkaWZmTWluc33liIbpkp/liY1gIDogZGlmZlNlY29uZHMgPiAxMCA/IGAke2RpZmZTZWNvbmRzfeenkuWJjWAgOiAn5Yia5YiaJ1xufVxuXG5leHBvcnRzLm1heExlbmd0aCA9IChzdHIsIGxlbmd0aCA9IDI1KSA9PiB7XG4gICAgcmV0dXJuIHN0ci5sZW5ndGggPiBsZW5ndGggPyBgJHtzdHIuc2xpY2UoMCwgbGVuZ3RoIC0gMSl9Li4uYCA6IHN0clxufVxuIl19
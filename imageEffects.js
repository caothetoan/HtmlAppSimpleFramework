var ImageEffects = (function () {
    function ImageEffects() {
    }
    ImageEffects.blur = function (input, output, radius) {
        if (radius < 1) {
            output.copy(input);
            return;
        }
        var weights = ImageEffects.getWeights(radius);
        var idx;
        for (var i = 0; i < input.height; i++) {
            for (var j = 0; j < input.width; j++) {
                idx = (i * input.width + j) * 4;
                output.array[idx] = ImageEffects.blurPixelH(j, i, input, weights, radius, 0);
                output.array[idx + 1] = ImageEffects.blurPixelH(j, i, input, weights, radius, 1);
                output.array[idx + 2] = ImageEffects.blurPixelH(j, i, input, weights, radius, 2);
                output.array[idx + 3] = input.array[idx + 3];
            }
        }
        for (var i = 0; i < input.height; i++) {
            for (var j = 0; j < input.width; j++) {
                idx = (i * input.width + j) * 4;
                output.array[idx] = ImageEffects.blurPixelV(j, i, output, weights, radius, 0);
                output.array[idx + 1] = ImageEffects.blurPixelV(j, i, output, weights, radius, 1);
                output.array[idx + 2] = ImageEffects.blurPixelV(j, i, output, weights, radius, 2);
            }
        }
    };
    ImageEffects.blurPixelH = function (x, y, simage, weights, radius, offset) {
        var s = x - radius;
        if (s < 0)
            s = 0;
        var e = x + radius;
        if (e > simage.width)
            e = simage.width;
        var sum = 0;
        var wsum = 0;
        for (var w = 0, i = s; i < e; i++, w++) {
            var idx = simage.get_index(i, y) + offset;
            sum += simage.array[idx] * weights[w];
            wsum += weights[w];
        }
        return sum / wsum;
    };
    ImageEffects.blurPixelV = function (x, y, simage, weights, radius, offset) {
        var s = y - radius;
        if (s < 0)
            s = 0;
        var e = y + radius;
        if (e > simage.height)
            e = simage.height;
        var sum = 0;
        var wsum = 0;
        for (var w = 0, i = s; i < e; i++, w++) {
            var idx = simage.get_index(x, i) + offset;
            sum += simage.array[idx] * weights[w];
            wsum += weights[w];
        }
        return sum / wsum;
    };
    ImageEffects.getWeights = function (radius) {
        //var f = x =>  (radius - x) / radius; 
        var sigma = radius / 3;
        var gauss = function (x) { return (1 / Math.sqrt(2 * Math.PI * sigma * sigma)) * Math.exp(-x * x / (2 * sigma * sigma)); };
        var w = new Array(radius * 2);
        for (var i = radius, x = 0; i < radius * 2; i++, x++) {
            w[i] = gauss(x);
        }
        for (var i = radius - 1, j = radius; i >= 0; i--, j++) {
            w[i] = w[j];
        }
        return w;
    };
    return ImageEffects;
})();

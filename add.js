function addSum() {
    
    var args = [].slice.call(arguments);

    
    var adder = function () {
        var adder = function() {
            [].push.apply(args, [].slice.call(arguments));
            return adder;
        };

        _adder.toString = function () {
            return args.reduce(function (a, b) {
                return a + b;
            });
        }

        return adder;
    }
    return adder.apply(null, [].slice.call(arguments));
}

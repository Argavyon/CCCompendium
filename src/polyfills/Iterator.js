// Polyfill Iterable if also necessary
if (typeof Iterator === 'undefined') {
    var Iterator = { prototype: Object.getPrototypeOf(Object.getPrototypeOf([].keys())) };
}

// Polyfill Iterator's methods, except 'drop' and 'take'
if (!('every' in Iterator.prototype)) {
    Iterator.prototype.every = function(predicate) {
        let next;
        for (let idx = 0; !(next = this.next()).done; idx++) {
            if (!predicate(next.value, idx)) return false;
        }
        if (typeof next.value !== 'undefined') {
            if (!predicate(next.value, idx)) return false;
        }
        return true;
    };
}
if (!('filter' in Iterator.prototype)) {
    Iterator.prototype.filter = function*(predicate) {
        let next;
        for (let idx = 0; !(next = this.next()).done; idx++) {
            if (predicate(next.value, idx)) yield next.value;
        }
        if (typeof next.value !== 'undefined') {
            if (predicate(next.value, idx)) return next.value;
        }
        return undefined;
    };
}
if (!('find' in Iterator.prototype)) {
    Iterator.prototype.find = function(predicate) {
        let next;
        for (let idx = 0; !(next = this.next()).done; idx++) {
            if (predicate(next.value, idx)) return next.value;
        }
        if (typeof next.value !== 'undefined') {
            if (predicate(next.value, idx)) return next.value;
        }
        return undefined;
    };
}
if (!('flatMap' in Iterator.prototype)) {
    Iterator.prototype.flatMap = function*(callback) {
        let next;
        for (let idx = 0; !(next = this.next()).done; idx++) {
            yield* callback(next.value, idx);
        }
        if (typeof next.value !== 'undefined') {
            yield* callback(next.value, idx);
        }
        return undefined;
    };
}
if (!('forEach' in Iterator.prototype)) {
    Iterator.prototype.forEach = function(callback) {
        let next;
        for (let idx = 0; !(next = this.next()).done; idx++) {
            callback(next.value, idx);
        }
        if (typeof next.value !== 'undefined') {
            callback(next.value, idx);
        }
    };
}
if (!('map' in Iterator.prototype)) {
    Iterator.prototype.map = function*(callback) {
        let next;
        for (let idx = 0; !(next = this.next()).done; idx++) {
            yield callback(next.value, idx);
        }
        if (typeof next.value !== 'undefined') {
            return callback(next.value, idx);
        }
    };
}
if (!('reduce' in Iterator.prototype)) {
    Iterator.prototype.reduce = function(callback, initialValue) {
        let accumulator, next;
        if (arguments.length < 2) {
            next = this.next();
            if (typeof next.value === 'undefined') throw TypeError;
            accumulator = next.value;
        } else {
            accumulator = initialValue;
        }

        for (let idx = 0; !(next = this.next()).done; idx++) {
            accumulator = callback(accumulator, next.value, idx);
        }
        if (typeof next.value !== 'undefined') {
            accumulator = callback(accumulator, next.value, idx);
        }
        return accumulator;
    };
}
if (!('some' in Iterator.prototype)) {
    Iterator.prototype.some = function(predicate) {
        let next;
        for (let idx = 0; !(next = this.next()).done; idx++) {
            if (predicate(next.value, idx)) return true;
        }
        if (typeof next.value !== 'undefined') {
            if (predicate(next.value, idx)) return true;
        }
        return false;
    };
}
if (!('toArray' in Iterator.prototype)) {
    Iterator.prototype.toArray = function() { return Array.from(this); };
}

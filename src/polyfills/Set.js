// Polyfill Set's 'union' and 'intersection' methods
if (!('union' in Set.prototype)) {
    Set.prototype.union = function(other) {
        return new Set([...this, ...other]);
    };
}
if (!('intersection' in Set.prototype)) {
    Set.prototype.intersection = function(other) {
        return new Set([...this].filter( (e) => other.has(e) ));
    };
}

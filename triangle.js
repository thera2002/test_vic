/**
 * A triangle. See {@tutorial getting-started} for an overview
 * @param {number} w the triangle's width
 * @param {number} h the triangle's height
 */
class Triangle {
    constructor(w, h) {
        this._width = w;
        this._height = h;
    }
    /**
     * The triangle's width
     * @return {number} width
     */
    get width() {
        return this._width;
    }
    /**
     * Set new value for width
     * @param {number} w the new width
     */
    set width(w) {
        this._width = w;
    }
    /**
     * The triangle's height
     * @return {number} height
     */
    get height() {
        return this._height;
    }
    /**
     * Set new value for height
     * @param {number} h the new height
     */
    set height(h) {
        this._height = h;
    }
    /**
     * The triangle's area
     * @example <caption>Example usage of function area().</caption>
     * // returns w*h*0.5
     * t.area();
     * @return {number} area
     */
    area() {
        return this._width * this._height * 0.5;
    }

    /**
     * The lib version
     * @return {number} version
     */
    version() {
        return "1.0.2";
    }
}
export default Triangle;

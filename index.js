/**
 * type
 * type plugin for element 
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

module.exports = function (element) {
  
  /**
   * type
   * Element type.
   * 
   * @return {String} element type
   * @api private
   */
  
  element.prototype.type = function () {
    var el = this.el;
    var name = el.nodeName.toLowerCase();
    if ('input' == name && 'checkbox' == el.getAttribute('type')) {
      return 'checkbox';
    }
    return name.toLowerCase();
  }

  return element;
};

/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `PageController.page1()`
   */
  page1: function (req, res) {
    return res.view('test');
  },


  /**
   * `PageController.page2()`
   */
  page2: function (req, res) {
    return res.view('test2');
  },


  /**
   * `PageController.page3()`
   */
  page3: function (req, res) {
    return res.json({
      todo: 'page3() is not implemented yet!'
    });
  },


  /**
   * `PageController.page4()`
   */
  page4: function (req, res) {
    return res.json({
      todo: 'page4() is not implemented yet!'
    });
  },


  /**
   * `PageController.page5()`
   */
  page5: function (req, res) {
    return res.json({
      todo: 'page5() is not implemented yet!'
    });
  }
};


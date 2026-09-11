const sendEmailHandler = require('../../../api/send-email');

module.exports = async function handler(req, res) {
  return sendEmailHandler(req, res);
};

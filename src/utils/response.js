const success = (res, data = null, message = 'OK', code = 200) => {
  return res.status(code).json({
    success: true,
    message,
    data,
  });
};

const error = (res, message = 'Error', code = 400) => {
  return res.status(code).json({
    success: false,
    message,
  });
};

module.exports = { success, error };
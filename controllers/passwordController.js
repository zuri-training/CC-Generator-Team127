const passwordchange = (req, res) => {
  res.status(200).render('passwordchanged');
};
const newpassword = (req, res) => {
  res.status(200).render('newpassword');
};
const resetpassword = (req, res) => {
  res.status(200).render('resetpassword');
};
const emailsent = (req, res) => {
  res.status(200).render('emailsent');
};

module.exports = {
  passwordchange,
  newpassword,
  resetpassword,
  emailsent,
};

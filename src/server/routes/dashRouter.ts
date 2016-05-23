import * as express from 'express';
// import * as memberController from '../controllers/memberController';

var router: express.Router = express.Router();

// =========
// Home Page
// =========

router.get('/', function (req, res) {
  res.render('index');
});

// ===========
// Member
// ===========

 router.get('/members',  memberController.getAll);
 router.get('/member/', function (req, res) {
   memberController.get(req, res);
 });
// router.get('/member/create/', function (req, res) {
//   memberController.save(req, res);
// });
// router.put('/member', function (req, res) {
//   memberController.update(req, res);
// });


export {router};

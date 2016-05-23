import * as Member from '../model/member';
import * as _ from 'lodash';
import * as meetupService from '../services/meetupService';
  
module.exports.getAll = function (req, res) {
  meetupService.getAllMembers(function (members) {
    //res.status(200);
    res.send(members);
  });
};

module.exports.get = function (req, res) {
  var
    id = req.query.memberId;

  meetupService.getMemberById(id, function (member: Member) {
    res.jsonp(member);

  });
};

module.exports.update = function(req, res) {
  meetupService.getMemberById(req.body.id, function(member: Member) {
    var newMember = req.body;
    _.forEach(newMember, function(val, key) {
      console.log('101 key ' + key + ' val ' + val);
      member[key] = val;
    });
    meetupService.persistMembers();
    res.send(member);
  });
};




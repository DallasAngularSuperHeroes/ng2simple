import * as fs from 'fs';
import * as http from 'http';

var meetupSigId = '',
    meetupSig = '',
    filename = 'data/meetupMembers.json',
    meetupServer = {
        host: 'api.meetup.com',
        path: ''
        //path: '/2/members?sig_id=8970895&order=name&group_urlname=DallasAngularJS&sig=7273be2514c75c224229d3e76754de14c550b96d&offset=0&format=json&page=600&offset=1'
        //path: '/2/members?offset=0&format=json&group_urlname=DallasAngularJS&photo-host=public&page=800&order=name&sig_id=' + meetupSigId +
        //'&sig=' + meetupSig
    },
    MeetupCbFactory = function (cb: any) {
        return function (response) {
            var str = '';

            //another chunk of data has been received, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });

            //the whole response has been received, so we just print it out here
            response.on('end', function () {
                cb(str);
            });
        };
    };

exports.persistMembers = function () {
    fs.writeFileSync(filename, JSON.stringify({results: this.members}));
};

exports.fetchMembers = function (cb) {
    var srv = this;
    var httpCallback = new MeetupCbFactory(function (dataText) {
        if (dataText && dataText.substring(0, 12) !== '{"details":"') {
            fs.writeFileSync(filename, dataText);
        } else {
            dataText = fs.readFileSync(filename);
        }
        srv.members = JSON.parse(dataText).results;
        //members = global.data;
        srv.members = JSON.parse(dataText).results;

        cb(srv.members);
    });

    http.request(meetupServer, httpCallback).end();
};

exports.init = function (cb) {
    var srv = this;
    if (!srv.members) {
        srv.fetchMembers(function () {
            srv.membersById = {};
            srv.members.forEach(function (member) {
                srv.membersById[member.id] = member;
            });
            cb(srv.members);
        });
    } else {
        cb(srv.members);
    }
};

exports.getAllMembers = function (cb) {
    exports.init(cb);
    return this.members;
};

exports.getMemberById = function (id, cb) {
    var srv = this;
    this.init(function () {
        var member = srv.membersById[id];
        cb(member);
    });

};

exports.saveAll = function (members, cb) {
    var json = JSON.stringify(members);
    fs.writeFile(filename, json, cb);
};


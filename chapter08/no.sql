mongo
use nodejs;
db.users.save({ name: 'zero', age: 24, married: false, comment: '안녕 하세요. 간단히 몽고디비 사용 방법에 대해 알아봅시다.', createAt: new Date() });
db.users.save({ name: 'moonti', age: 32, married: false, comment: '안녕 하세요. 문티입니다.', createAt: new Date() });

db.users.find({name: 'zero'}, {_id: 1})
db.comments.save({commenter: ObjectId("5c4d656183171d140912e36a"), comment: '안녕 잘 지내니?', createAt: new Date() });
db.comments.find({});
db.users.find({}, {_id:0, name: 1, married: 1});

db.users.find({ $or: [{age: {$gt: 30}}, {name: 'zero'}]}, {_id: 0, name: 1, married: 1});

db.users.find({}, {_id:0, name: 1, age: 1, married: 1}).sort({ age: -1});
db.users.find({}, {_id:0, name: 1, age: 1, married: 1}).sort({ age: -1}).limit(1).skip(1);
db.users.update({ name: 'zero'}, { $set: {comment: '안녕하세요? 제로초는 이 책을 썼죠'}});
db.users.save({ name: 'test', age: 24, married: false, comment: '안녕 하세요. 간단히 몽고디비 사용 방법에 대해 알아봅시다.', createAt: new Date() });
db.users.update({ name: 'test'}, { warning: '객체가 이 객체로 통째로 바뀝니다. 조심또 조심'});
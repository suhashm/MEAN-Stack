var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    featured: {type:Boolean, required:'{PATH} is required!'},
    published: {type:Date, required:'{PATH} is required!'},
    tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection) {
        if(collection.length === 0) {

            Course.create({title: 'Super Duper Expert C#', featured: true, published: new Date('10/1/2013'), tags: ['C#']});
            Course.create({title: 'Visual Basic for Visual Basic Developers', featured: false, published: new Date('7/12/2013'), tags: ['VB']});
            Course.create({title: 'Pedantic C++', featured: true, published: new Date('1/1/2013'), tags: ['C++']});
            Course.create({title: 'JavaScript for Greater Good', featured: true, published: new Date('10/13/2013'), tags: ['JS']});
            Course.create({title: 'Agile Methodology', featured: true, published: new Date('3/1/2013'), tags: ['Coding']});
            Course.create({title: 'A Survival Guide to Code Reviews', featured: true, published: new Date('2/1/2013'), tags: ['Coding']});
            Course.create({title: 'Java Above and Beyond', featured: true, published: new Date('10/7/2013'), tags: ['Misc']});
            Course.create({title: 'Future of Robotics', featured: false, published: new Date('8/1/2013'), tags: ['Robotics']});
            Course.create({title: 'Phonegap Application Development', featured: false, published: new Date('11/1/2013'), tags: ['Misc']});
            Course.create({title: "Android Essentials", featured: true, published: new Date('10/13/2013'), tags: ['Coding']});
            Course.create({title: 'Algorithmic Thinking', featured: false, published: new Date('10/1/2013'), tags: ['Coding']});
            Course.create({title: 'Advanced Machine Learning with MatLab', featured: true, published: new Date('2/15/2013'), tags: ['AI', 'ML']});
            Course.create({title: 'Fun with Artificial Intelligence', featured: true, published: new Date('7/1/2013'), tags: ['AI']});
        }
    })
}

exports.createDefaultCourses = createDefaultCourses;
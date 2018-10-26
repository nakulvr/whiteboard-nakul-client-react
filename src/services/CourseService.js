// let courses = fetch("../courses.json")
//     .then(response => response.json());
let courses = require('../courses.json');

export default class CourseService {
    createCourse = course =>
        courses.push(course);
    findAllCourses = () =>
        courses;
    findCourseById = courseId =>
        courses.filter(
            course => course.id === courseId
        );

    deleteCourse = courseId =>
        courses = courses.filter(
            course => course.id !== courseId
        );
    deleteModule = moduleToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            );
            return course;
            }
        )
    };

    deleteLesson = lessonToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.map(module => {
                module.lessons = module.lessons.filter(
                  lesson => lesson !== lessonToDelete
                );
                return module;
            });
            return course;
        })
    };

    updateTopicTitle = (selectedTopic, newTopicTitle) => {
        courses = courses.map(course => {
            course.modules = course.modules.map(module => {
                module.lessons = module.lessons.map(lesson => {
                    lesson.topics = lesson.topics.map(topic => {
                       if(topic === selectedTopic) {
                            if(newTopicTitle === '') {
                                topic.title = "New topic"
                            }
                            else {
                                topic.title = newTopicTitle
                            }
                       }
                       return topic;
                    });
                    return lesson;
                });
                return module;
            });
            return course;
        })
    };

    addTopic = (parentLesson, topicToAdd) => {
        courses = courses.map(course => {
            course.modules = course.modules.map(module => {
                module.lessons = module.lessons.map(lesson => {
                    if(lesson === parentLesson) {
                        if(topicToAdd === '') {
                            lesson.topics.push({
                                id : (new Date()).getTime() + '',
                                title: "New Topic",
                                widgets: []
                            });
                        }
                        else {
                            lesson.topics.push({
                                id : (new Date()).getTime() + '',
                                title: topicToAdd,
                                widgets: []
                            });
                        }
                        return lesson;
                    }
                    else {
                        return lesson;
                    }
                });
                return module;
            });
            return course;
        })
    };

    deleteTopic = topicToDelete => {
      courses = courses.map(course => {
          course.modules = course.modules.map(module => {
              module.lessons = module.lessons.map(lesson => {
              lesson.topics = lesson.topics.filter(
                  topic => topic !== topicToDelete
              );
                  return lesson;
              });
                return module;
          });
          return course;
      })
    };

    updateLessonTitle = (courseId, moduleId, lessonId, lessonTitle) => {
        for(let i=0; i < courses.length; i++) {
            if(courses[i].id === courseId) {
                for(let j=0; j < courses[i].modules.length; j++) {
                    if(courses[i].modules[j].moduleId === moduleId) {
                        for(let k = 0; k < courses[i].modules[j].lessons.length; k++) {
                            if(courses[i].modules[j].lessons[k].lessonId === lessonId) {
                                if (lessonTitle === '') {
                                    courses[i].modules[j].lessons[k].title = "New lesson"
                                }
                                else {
                                    courses[i].modules[j].lessons[k].title = lessonTitle
                                }
                                return;
                            }
                        }
                    }
                }
            }
        }
    };

    updateModuleTitle = (courseId, moduleId, moduleTitle) => {
        for(let i=0; i < courses.length; i++) {
            if(courses[i].id === courseId) {
                for(let j=0; j < courses[i].modules.length; j++) {
                    if(courses[i].modules[j].moduleId === moduleId) {
                        if(moduleTitle === '') {
                            courses[i].modules[j].title = "New Module"
                        }
                        else {
                            courses[i].modules[j].title = moduleTitle
                        }
                        return;
                    }
                }
            }
        }
    };



    addLesson = (coursesId, moduleId, lessonToAdd) => {
        for(let i = 0; i < courses.length; i++) {
            if(courses[i].id === coursesId) {
                for(let j = 0; j < courses[i].modules.length; j++) {
                    if(courses[i].modules[j].moduleId === moduleId) {
                        if(lessonToAdd === '') {
                            courses[i].modules[j].lessons.push({
                                "lessonId": (new Date()).getTime() + '',
                                "title": "New Lesson",
                                "topics": [
                                    {
                                        "id": (new Date()).getTime() + '',
                                        "title": "New Topic",
                                        "widgets": []
                                    }
                                ]
                            })
                        }
                        else {
                            courses[i].modules[j].lessons.push({
                                "lessonId": (new Date()).getTime() + '',
                                "title": lessonToAdd,
                                "topics": [
                                    {
                                        "id": (new Date()).getTime() + '',
                                        "title": "New Topic",
                                        "widgets": []
                                    }
                                ]
                            })
                        }
                        return;
                    }
                }
            }
        }
    };
    addModule = (courseId, moduleToAdd) => {
        for(let i=0; i < courses.length; i++) {
            if(courses[i].id === courseId) {
                if(moduleToAdd === '') {
                    courses[i].modules.push({
                            moduleId: (new Date()).getTime() + '',
                            title: "New Module",
                            lessons: [{
                                "lessonId": (new Date()).getTime() + '',
                                "title": "New Lesson",
                                "topics": [
                                    {
                                        "id": (new Date()).getTime() + '',
                                        "title": "New Topic",
                                        "widgets": []
                                    }
                                ]
                            }]
                        }
                    );
                }
                else {
                    courses[i].modules.push({
                            moduleId: (new Date()).getTime() + '',
                            title: moduleToAdd,
                            lessons: [{
                                "lessonId": (new Date()).getTime() + '',
                                "title": "New Lesson",
                                "topics": [
                                    {
                                        "id": (new Date()).getTime() + '',
                                        "title": "New Topic",
                                        "widgets": []
                                    }
                                ]
                            }]
                        }
                    );
                }
                return;
            }
        }
    };

    findWidgetsForTopic = forTopic => {
        for(let c in courses){
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        // console.log(forTopic);
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            return courses[c].modules[m].lessons[l].topics[t].widgets
                        }
                    }
                }
            }
        }
    };

    deleteWidget = (forTopic, forWidget) => {
        for(let c in courses){
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            // return courses[c].modules[m].lessons[l].topics[t].widgets
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            courses[c].modules[m].lessons[l].topics[t].widgets.splice(widgetIndex, 1)
                        }
                    }
                }
            }
        }
    }
}
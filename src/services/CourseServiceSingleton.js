// let courses = fetch("../courses.json")
//     .then(response => response.json());;
let courses = require('../courses.json');
// let COURSE_API_URL = "http://localhost:8080/api/user/";
// let WIDGET_API_URL = "http://localhost:8080/api/widget/";
let COURSE_API_URL ="https://whiteboard-nakul-server-java.herokuapp.com/api/user/";

export default class CourseServiceSingleton {
    // static createCourse = course =>
    //     courses.push(course);

    static createCourse = (userId, course) =>
        // console.log(userId.toString(), course);
      fetch(COURSE_API_URL + userId.toString() + '/course', {
          body: JSON.stringify(course),
          headers: {'Content-Type': 'application/json'},
          method: 'POST'
      }).then(response => response.json())
    ;

    static findAllCourses = (userId) =>
        fetch(COURSE_API_URL + userId + '/course')
            .then(response => response.json());

    static deleteCourse = (userId, courseId) =>
        fetch(COURSE_API_URL + userId + '/course/' + courseId, {
            method : 'DELETE'
        }).then(response => response.json());

    static addModule = (userId, courseId, module) =>
        fetch(COURSE_API_URL + userId + '/course/' + courseId + '/module', {
            body: JSON.stringify(module),
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            credentials: 'include'
        }).then(response => response.json());

    static addLesson = (userId, courseId, moduleId, lesson) =>
        fetch(COURSE_API_URL + userId + '/course/' + courseId + '/module/' + moduleId + '/lesson', {
            body: JSON.stringify(lesson),
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            credentials: 'include'
        }).then(response => response.json());

    static addTopic = (userId, courseId, moduleId, lessonId, topic) =>
        fetch(COURSE_API_URL + userId + '/course/' + courseId + '/module/'
            + moduleId + '/lesson/' + lessonId + '/topic', {
            body: JSON.stringify(topic),
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            credentials: 'include'
        }).then(response => response.json());

    static deleteModule = (userId, courseId, module) =>
        fetch(COURSE_API_URL + userId + '/course/' + courseId + '/module/' + module.id.toString(), {
            method: 'DELETE',
            credentials: 'include'
        }).then(response => response.json());

    static deleteLesson = (userId, courseId, moduleId, lesson) =>
        fetch(COURSE_API_URL + userId + '/course/' + courseId + '/module/'
            + moduleId + '/lesson/' + lesson.id.toString(), {
            method: 'DELETE',
            credentials: 'include'
        }).then(response => response.json());

    static deleteTopic = (userId, courseId, moduleId, lessonId, topic) =>
        fetch(COURSE_API_URL + userId + '/course/' + courseId + '/module/'
            + moduleId + '/lesson/' + lessonId + '/topic/' + topic.id.toString(), {
            method: 'DELETE',
            credentials: 'include'
        }).then(response => response.json());

    static updateModuleTitle = (userId, courseId, module) =>
        fetch(COURSE_API_URL + userId + '/course/' + courseId + '/module/' + module.id.toString(),{
            body: JSON.stringify(module),
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            credentials: 'include'
        }).then(response => response.json());

    static updateLessonTitle = (userId, courseId, moduleId, lesson) =>
        fetch(COURSE_API_URL + userId + '/course/' + courseId + '/module/'
            + moduleId + '/lesson/' + lesson.id.toString(),{
            body: JSON.stringify(lesson),
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            credentials: 'include'
        }).then(response => response.json());

    static updateTopicTitle = (userId, courseId, moduleId, lessonId, topic) =>
        fetch(COURSE_API_URL + userId + '/course/' + courseId + '/module/'
            + moduleId + '/lesson/' + lessonId + '/topic/' + topic.id.toString(),{
            body: JSON.stringify(topic),
            headers: {'Content-Type': 'application/json'},
            method: 'PUT',
            credentials: 'include'
        }).then(response => response.json());
        // console.log(module);
    // static findAllCourses = () =>
    //     courses;
    // static findCourseById = courseId =>
    //     courses.filter(
    //         course => course.id === courseId
    //     );

    // static deleteCourse = courseId =>
    //     courses = courses.filter(
    //         course => course.id !== courseId
    //     );

    // static deleteModule = moduleToDelete => {
    //     courses = courses.map(course => {
    //             course.modules = course.modules.filter(
    //                 module => module !== moduleToDelete
    //             );
    //             return course;
    //         }
    //     )
    // };

    // static deleteLesson = lessonToDelete => {
    //     courses = courses.map(course => {
    //         course.modules = course.modules.map(module => {
    //             module.lessons = module.lessons.filter(
    //                 lesson => lesson !== lessonToDelete
    //             );
    //             return module;
    //         });
    //         return course;
    //     })
    // };

    // static updateTopicTitle = (selectedTopic, newTopicTitle) => {
    //     courses = courses.map(course => {
    //         course.modules = course.modules.map(module => {
    //             module.lessons = module.lessons.map(lesson => {
    //                 lesson.topics = lesson.topics.map(topic => {
    //                     if(topic === selectedTopic) {
    //                         if(newTopicTitle === '') {
    //                             topic.title = "New topic"
    //                         }
    //                         else {
    //                             topic.title = newTopicTitle
    //                         }
    //                     }
    //                     return topic;
    //                 });
    //                 return lesson;
    //             });
    //             return module;
    //         });
    //         return course;
    //     })
    // };

    // static addTopic = (parentLesson, topicToAdd) => {
    //     courses = courses.map(course => {
    //         course.modules = course.modules.map(module => {
    //             module.lessons = module.lessons.map(lesson => {
    //                 if(lesson === parentLesson) {
    //                     if(topicToAdd === '') {
    //                         lesson.topics.push({
    //                             id : (new Date()).getTime() + '',
    //                             title: "New Topic",
    //                             widgets: []
    //                         });
    //                     }
    //                     else {
    //                         lesson.topics.push({
    //                             id : (new Date()).getTime() + '',
    //                             title: topicToAdd,
    //                             widgets: []
    //                         });
    //                     }
    //                     return lesson;
    //                 }
    //                 else {
    //                     return lesson;
    //                 }
    //             });
    //             return module;
    //         });
    //         return course;
    //     })
    // };

    // static deleteTopic = topicToDelete => {
    //     courses = courses.map(course => {
    //         course.modules = course.modules.map(module => {
    //             module.lessons = module.lessons.map(lesson => {
    //                 lesson.topics = lesson.topics.filter(
    //                     topic => topic !== topicToDelete
    //                 );
    //                 return lesson;
    //             });
    //             return module;
    //         });
    //         return course;
    //     })
    // };

    // static updateLessonTitle = (courseId, moduleId, lessonId, lessonTitle) => {
    //     for(let i=0; i < courses.length; i++) {
    //         if(courses[i].id === courseId) {
    //             for(let j=0; j < courses[i].modules.length; j++) {
    //                 if(courses[i].modules[j].moduleId === moduleId) {
    //                     for(let k = 0; k < courses[i].modules[j].lessons.length; k++) {
    //                         if(courses[i].modules[j].lessons[k].lessonId === lessonId) {
    //                             if (lessonTitle === '') {
    //                                 courses[i].modules[j].lessons[k].title = "New lesson"
    //                             }
    //                             else {
    //                                 courses[i].modules[j].lessons[k].title = lessonTitle
    //                             }
    //                             return;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // };

    // static updateModuleTitle = (courseId, moduleId, moduleTitle) => {
    //     for(let i=0; i < courses.length; i++) {
    //         if(courses[i].id === courseId) {
    //             for(let j=0; j < courses[i].modules.length; j++) {
    //                 if(courses[i].modules[j].moduleId === moduleId) {
    //                     if(moduleTitle === '') {
    //                         courses[i].modules[j].title = "New Module"
    //                     }
    //                     else {
    //                         courses[i].modules[j].title = moduleTitle
    //                     }
    //                     return;
    //                 }
    //             }
    //         }
    //     }
    // };

    // static addLesson = (coursesId, moduleId, lessonToAdd) => {
    //     for(let i = 0; i < courses.length; i++) {
    //         if(courses[i].id === coursesId) {
    //             for(let j = 0; j < courses[i].modules.length; j++) {
    //                 if(courses[i].modules[j].moduleId === moduleId) {
    //                     if(lessonToAdd === '') {
    //                         courses[i].modules[j].lessons.push({
    //                             "lessonId": (new Date()).getTime() + '',
    //                             "title": "New Lesson",
    //                             "topics": [
    //                                 {
    //                                     "id": (new Date()).getTime() + '',
    //                                     "title": "New Topic",
    //                                     "widgets": []
    //                                 }
    //                             ]
    //                         })
    //                     }
    //                     else {
    //                         courses[i].modules[j].lessons.push({
    //                             "lessonId": (new Date()).getTime() + '',
    //                             "title": lessonToAdd,
    //                             "topics": [
    //                                 {
    //                                     "id": (new Date()).getTime() + '',
    //                                     "title": "New Topic",
    //                                     "widgets": []
    //                                 }
    //                             ]
    //                         })
    //                     }
    //                     return;
    //                 }
    //             }
    //         }
    //     }
    // };
    // static addModule = (courseId, moduleToAdd) => {
    //     for(let i=0; i < courses.length; i++) {
    //         if(courses[i].id === courseId) {
    //             if(moduleToAdd === '') {
    //                 courses[i].modules.push({
    //                         moduleId: (new Date()).getTime() + '',
    //                         title: "New Module",
    //                         lessons: [{
    //                             "lessonId": (new Date()).getTime() + '',
    //                             "title": "New Lesson",
    //                             "topics": [
    //                                 {
    //                                     "id": (new Date()).getTime() + '',
    //                                     "title": "New Topic",
    //                                     "widgets": []
    //                                 }
    //                             ]
    //                         }]
    //                     }
    //                 );
    //             }
    //             else {
    //                 courses[i].modules.push({
    //                         moduleId: (new Date()).getTime() + '',
    //                         title: moduleToAdd,
    //                         lessons: [{
    //                             "lessonId": (new Date()).getTime() + '',
    //                             "title": "New Lesson",
    //                             "topics": [
    //                                 {
    //                                     "id": (new Date()).getTime() + '',
    //                                     "title": "New Topic",
    //                                     "widgets": []
    //                                 }
    //                             ]
    //                         }]
    //                     }
    //                 );
    //             }
    //             return;
    //         }
    //     }
    // };

    static findWidgetsForTopic = forTopic => {
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
    static findAllWidgets = () => {
        let allWidgets = [];
        for(let c in courses){
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        for(let w in courses[c].modules[m].lessons[l].topics[t].widgets) {
                            allWidgets.push(courses[c].modules[m].lessons[l].topics[t].widgets[w])
                        }
                    }
                }
            }
        }
        return allWidgets;
    };
    static findWidget = widget => {
        for(let c in courses){
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        for(let w in courses[c].modules[m].lessons[l].topics[t].widgets) {
                            if (courses[c].modules[m].lessons[l].topics[t].widgets[w] === widget)
                                return courses[c].modules[m].lessons[l].topics[t].widgets[w];
                        }
                    }
                }
            }
        }
    };
    // static deleteWidget = (forTopic, forWidget) => {
    //     fetch(WIDGET_API_URL + forWidget, {
    //         method : 'DELETE'
    //     }).then(response => response.json());
    // };
    static deleteWidget = (forTopic, forWidget) => {
        for(let c in courses){
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            // return courses[c].modules[m].lessons[l].topics[t].widgets
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id);
                            courses[c].modules[m].lessons[l].topics[t].widgets.splice(widgetIndex, 1)
                        }
                    }
                }
            }
        }
    };

    static moveWidgetUp = (forTopic, forWidget) => {
        for(let c in courses){
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            // return courses[c].modules[m].lessons[l].topics[t].widgets
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id);
                            let temp = courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex]
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] = courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex - 1]
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex - 1] = temp;
                            return;
                            // courses[c].modules[m].lessons[l].topics[t].widgets.splice(widgetIndex, 1)
                        }
                    }
                }
            }
        }
    };

    static moveWidgetDown = (forTopic, forWidget) => {
        for(let c in courses){
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            // return courses[c].modules[m].lessons[l].topics[t].widgets
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id);
                            let temp = courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex];
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] = courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex + 1];
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex + 1] = temp;
                            return;
                            // courses[c].modules[m].lessons[l].topics[t].widgets.splice(widgetIndex, 1)
                        }
                    }
                }
            }
        }
    };

    static updateWidget = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id);
                            // console.log(courses[c].modules[m].lessons[l].topics[t]);
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] = forWidget;
                            // console.log(courses[c].modules[m].lessons[l].topics[t])
                        }
                    }
                }
            }
        }
    };

    static addWidget = (forTopic) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            courses[c].modules[m].lessons[l].topics[t].widgets.unshift({
                                "id": (new Date()).getTime() + '',
                                "title": "NEW WIDGET TITLE",
                                "type": "HEADING",
                                "size": "4",
                                "text": "NEW WIDGET"
                            });
                            // console.log(courses[c].modules[m].lessons[l].topics[t].widgets);
                        }
                    }
                }
            }
        }
    }
}
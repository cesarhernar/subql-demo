let db = {
  'user': [
    {
      tasklists: [
        {
          title: 'In-Progress',
          tasks: [
            {
              title: 'Client data needs type checking',
              content: 'Type checking needs to be performed on the information recieved on the server side',
              comments: [
                {author: 'Martin', content: 'This might be tricky see issue #51'},
                {author: 'Dean', content: 'Add me as a pier reviewer on this one'}
              ]
            },
            {
              title: 'JobQueue tasks should repopulate queue',
              content: 'Sometimes, JobQueue don\'t get placed back on the queue',
              comments: [
                {author: 'Martin', content: 'The reload flag should be in the Job class not the watchdog class'},
                {author: 'Cesar', content: 'We might need to rework how the callback works for Tasks'}
              ]
            }
          ]
        },
        {
          title: 'Completed',
          tasks: [
            {
              title: 'ListType operations should be placed on Job Queue',
              content: 'Operations should be parced and sent to the right processor',
              comments: [
                {author: 'Martin', content: 'The implementation for Job Queue is almost complete'}
              ]
            }
          ]
        }
      ]
    },
  ]
}

console.log(db);
function getUser(id){
  return db.user[id];
}

function addTask(id, tasklistid, title, content){
  db.user[id].tasklists[tasklistid].tasks.push({title, content, comments:[]});
  return db.user[id];
}

function removeTask(id, tasklistid, taskid){
  db.user[id].tasklists[tasklistid].tasks.splice(taskid, 1);
  return db.user[id];
}

function printDB(){
  console.log(JSON.stringify(db, null, 2));
}

module.exports = {
  db,
  addTask,
  removeTask,
  printDB
}
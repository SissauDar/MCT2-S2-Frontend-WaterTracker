const dataAccess = (function() {


  const local = (function() {
    const getprogressByDate = function(date) {
      console.log('getprogressByDate');
      return [
        ['09:00', 100],
        ['12:00', 150],
        ['14:00', 200]
      ]
    };
    return {
      getprogressByDate: getprogressByDate
    };
  })();


  const api = function() {
    console.log('api');
    // Moet dezelfde functies hebben als local.
  };


  return {
    local: local,
    api: api
  };

})();


// const localKey = 'TO-DONE';
//  const localName = 'TO-DONE-NAME';
//
//  const exist = (key) => { //true false
//    return localStorage.hasOwnProperty(key)
//  };
//
//  const update = (id, callbackDone, callbackUnDone) => {
//    const updatedTodos = getAllItems().map(todo => {
//      if (todo.id === +id) {
//        todo.status = 1 - todo.status;
//        if (todo.status === 1) callbackDone();
//        else callbackUnDone();
//        return todo;
//      }
//      return todo;
//    });
//    localStorage.setItem(localKey, JSON.stringify(updatedTodos))
//  };
//
//  const hasItem = (key) => {
//    return getAllItems().includes(key);
//  };
//
//  const addItem = (key) => {
//    if (!exist(localKey)) {
//      localStorage.setItem(localKey, JSON.stringify([]));
//    }
//    let todos = getAllItems(); // Array
//    const id = todos.length;
//    console.log(key);
//    todos.push({ ...key,
//      id: id
//    });
//    // Nieuw item toevoegen
//    localStorage.setItem(localKey, JSON.stringify(todos));
//    return id;
//  };
var app = new Vue({
    el: '#app',
    data: { 
    message: 'Hello'
    }
})

app.message = 'I have changed the data!';


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
})

var app3 = new Vue ({
    el: '#app-3',
    data: {
        seen: true
    }
})

app3.seen = true

var app4 = new Vue ({
    el: '#app-4',
    data:{
        todos: [
            {text: 'Надпись из списка 1'},
            {text: 'Надпись 2'},
            {text: 'Надпись 3'}
        ]
    }
})

//app4.todos.push({text: добавить через консоль})//

var app5 = new Vue ({
    el: '#app-5',
    data:{
        message: 'Привет, пользователь'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})


var app6 = new Vue ({
    el: '#app-6',
    data:{
        message: 'Сообщение'
    }
})



// //

Vue.component('todo-item', {
    // Компонент todo-item теперь принимает
    // "prop", то есть входной параметр.
    // Имя входного параметра todo.
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Первый пункт'},
            {id: 1, text: 'Второй пункт'},
            {id: 2, text: 'Третий пункт'}
        ]
    }
})


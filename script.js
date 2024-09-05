const { createApp } = Vue;

createApp({
    data() {
        return {
            newLi: '',

            tasks: [
                {
                    text: 'Code Consistenly',
                    done: 'true'
                },
                {
                    text: 'Stay Hydrated',
                    done: 'true'
                },
                {
                    text: 'Sleep Enough',
                    done: 'false'
                },
                {
                    text: 'Be Grateful',
                    done: 'true'
                },
                {
                    text: 'Work Out',
                    done: 'false'
                }
            ],

        }

    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1)
        },
        addTask(content) {
            if (content.trim() !== '') {
                this.tasks.push({ text: content, done: 'false' })
                this.NewLi = ''
            }
        }
    }
}).mount('#app')
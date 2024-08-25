import { createServer, Model } from 'miragejs';

export default function mackServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    
    models: {
      course: Model,
    },

    seeds(server) {
      server.create('course', {
        id: "1",
        title: 'React',
        description:
          'React is a JavaScript library for building user interfaces',
        duration: '2 hours',
      })
      server.create('course', {
        id: "2",
        title: 'javascript',
        description:
          'JavaScript is a programming language that conforms to the ECMAScript specification',
        duration: '2 hours',
      });
    },
    routes() {
        this.namespace = 'api';
        this.get('/courses', (schema) => {
            return schema.courses.all();
        });
    }
  });
}

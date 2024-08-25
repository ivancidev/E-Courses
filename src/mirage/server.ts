import { createServer, Model } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
};

export default function mackServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      course: Model as ModelDefinition<Course>,
    },

    seeds(server) {
      server.create('course', {
        id: '1',
        title: 'React',
        description:
          'React is a JavaScript library for building user interfaces',
        duration: '2 hours',
      });
      server.create('course', {
        id: '2',
        title: 'javascript',
        description:
          'JavaScript is a programming language that conforms to the ECMAScript specification',
        duration: '2 hours',
      });
    },
    routes() {
      this.namespace = 'api';
      this.get('/courses', (schema: any) => {
        return schema.courses.all();
      });
    },
  });
}

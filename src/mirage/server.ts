import { createServer, Model } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import { coursesData } from '../data/courses';
import { Course } from '../interfaces/course';

export default function mackServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      course: Model as ModelDefinition<Course>,
    },

    seeds(server) {
      coursesData.forEach((course) => {
        server.create('course', course);
      });
    },
    routes() {
      this.namespace = 'api';
      this.get('/courses', (schema: any) => {
        return schema.courses.all();
      });
      this.get('/courses/:id', (schema: any, request: any) => {
        const id = request.params.id;
        return schema.courses.find(id);
      });
    },
  });
}

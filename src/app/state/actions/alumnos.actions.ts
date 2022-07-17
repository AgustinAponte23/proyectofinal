import { createAction, props } from '@ngrx/store';
import { AlumnosService } from 'src/app/componentes/plus/servicios/alumnos.service';

export const agregarAlumno = createAction(
  '[alumno lista] agregar alumno',
  props<{ curso: string }>()
);

export const sacarAlumno = createAction(
  '[alumno lista] sacar alumno',
  props<{ nombre: ReadonlyArray<AlumnosService> }>()
);

/*export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books: ReadonlyArray<Book> }>()
);*/
import { createReducer, on } from '@ngrx/store';
import { AlumnosService } from 'src/app/componentes/plus/servicios/alumnos.service';
import { agregarAlumno, sacarAlumno } from '../actions/alumnos.actions';

export const initialState: ReadonlyArray<AlumnosService> = [];

export const alumnosReducer = createReducer(
  initialState,
  on(agregarAlumno, (oldState, ) => {
   return [...oldState, ...[]];
  })
);
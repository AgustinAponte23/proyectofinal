import { ActionReducerMap } from '@ngrx/store';
import { AlumnosService } from '../componentes/plus/servicios/alumnos.service';
import { alumnosReducer } from './reducers/alumnos.reducer';

export interface AppState {
  alumnos: ReadonlyArray<AlumnosService>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    alumnos: alumnosReducer
}
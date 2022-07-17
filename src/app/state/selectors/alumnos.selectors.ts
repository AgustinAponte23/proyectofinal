import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AlumnosService } from 'src/app/componentes/plus/servicios/alumnos.service';

export const selectAlumnos = createFeatureSelector<ReadonlyArray<AlumnosService>>('alumnos');

/*export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);*/
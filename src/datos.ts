export interface Competencia {
  id: number;
  nombre: string;
  orden: number;
}

export const evaluado = {
  nombre: 'Andrés Mora',
  ciclo: 'Evaluación de desempeño 2026',
};

export const competencias: Competencia[] = [
  { id: 1, nombre: 'Orientación a resultados', orden: 1 },
  { id: 2, nombre: 'Calidad del trabajo', orden: 2 },
  { id: 3, nombre: 'Responsabilidad', orden: 3 },
  { id: 4, nombre: 'Trabajo en equipo', orden: 4 },
  { id: 5, nombre: 'Comunicación', orden: 5 },
  { id: 6, nombre: 'Orientación al cliente', orden: 6 },
  { id: 7, nombre: 'Adaptabilidad al cambio', orden: 7 },
  { id: 8, nombre: 'Iniciativa', orden: 8 },
];
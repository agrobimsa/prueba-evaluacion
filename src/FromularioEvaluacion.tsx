import { competencias, evaluado } from './datos';

export default function FormularioEvaluacion() {
  return (
    <div>
      <h1>{evaluado.ciclo}</h1>
      <p>Evaluado: {evaluado.nombre}</p>
      <p>Competencias a evaluar: {competencias.length}</p>
      {/* Completa aquí el formulario */}
    </div>
  );
}
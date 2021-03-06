<div class="col-md-3 position-relative">
    <label for="val_subjetivo" class="form-label">Subjetivo</label>
    <input type="textarea" class="form-control" id="val_subjetivo" name="subjetivo" value="{{ isset($cmedica->subjetivo)?$cmedica->subjetivo:'' }}" required>
    <div class="invalid-tooltip">
        Por favor intoduzca Subjetivo.
    </div>
</div>
<div class="col-md-3 position-relative">
    <label for="val_objetivo" class="form-label">Objetivo</label>
    <textarea class="form-control" id="val_objetivo" name="objetivo" rows="10" cols="40">{{ isset($cmedica->objetivo)?$cmedica->objetivo:'' }}</textarea>
    <div class="invalid-tooltip">
        Por favor intoduzca Objetivo.
    </div>
</div>
<div class="col-md-3 position-relative">
    <label for="val_analisis" class="form-label">Análisis</label>
    <input type="textarea" class="form-control" id="val_analisis" name="analisis" value="{{ isset($cmedica->analisis)?$cmedica->analisis:'' }}" required>
    <div class="invalid-tooltip">
        Por favor intoduzca Análisis.
    </div>
</div>
<div class="col-md-3 position-relative">
    <label for="val_paccion" class="form-label">Plan de Acción</label>
    <input type="textarea" class="form-control" id="val_paccion" name="paccion" value="{{ isset($cmedica->paccion)?$cmedica->paccion:'' }}" required>
    <div class="invalid-tooltip">
        Por favor intoduzca Plan de Acción.
    </div>
</div>

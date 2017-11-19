@extends('base.layout')

@section('title', 'Index')

@section('pages')
	<div id="simulacion"></div>
	<div id="prueba"></div>

	<div>
		<p>Recomendaciones</p>
		<p>Tiempo en segundos</p>
	</div>

	<form id="formTime">		
		<p>Por favor ingrese el tiempo</p>
		<input type="text" id="tiempo" value="60">
		<button type="submit">Aceptar</button>
	</form>
	<br><br>
@endsection

@section('javascript')
    <script src="{{ asset('js/main.js') }}"></script>
@endsection

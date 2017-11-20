@extends('base.layout')

@section('title', 'Index')

@section('pages')
	<div>
		<p>Recomendaciones</p>
		<p>Tiempo en segundos</p>
	</div>

	<div id="titulo"></div>
	<div id="simulacion"></div>

	<div id="titulo2"></div>
	<div id="prueba"></div>

	<div>
		<p id="num"></p>
		<p id="est"></p>
		<p id="his"></p>
		<p id="resultado"></p>
	</div>

	<form id="formTime">		
		<div>
			<p>Por favor ingrese el tiempo</p>
			<input type="text" id="tiempo" value="60">
			<p id="error"></p>
		</div>
		<div>
			<p>Por favor ingrese el nivel de significancia</p>
			<select id="significancia">
				<option value="0.01">0,010</option>
				<option value="0.05">0,050</option>
				<option value="0.10">0,100</option>
			</select>
		</div>
		<button id="button" type="submit">Aceptar</button>
	</form>
	<br><br>
@endsection

@section('javascript')
    <script src="{{ asset('js/main.js') }}"></script>
@endsection

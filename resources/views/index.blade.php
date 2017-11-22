@extends('base.layout')

@section('title', 'Index')

@section('pages')

	<header class="bg-header text-white">
      <div class="container text-center">
        <h1>Simulación de Peajes</h1>
      </div>
    </header>

	<div class="container">

		<div class="col-md-12 col-sm-12 col-lg-12">

			<b><div id="titulo5"></div></b>
			<div id="condicion"></div>
			<div id="condicion2"></div>

			<center><b><div id="titulo3"></div></b></center>
			<div id="inicial"></div>

			<center><b><div id="titulo"></div></b></center>
			<div id="simulacion"></div>

			<center><b><div id="titulo2"></div></b></center>
			<div id="prueba"></div>
		</div>

		<div class="col-md-12 col-sm-12 col-lg-12" style="font-size: 15px;">
			<b><p id="num"></p>

			<center><b><div id="titulo4"></div></b></center>

			<p id="est"></p>
			<p id="his"></p>
			<p id="resultado" style="color: #154fa5; font-size: 17px;"></p></b>
		</div>
		<br /><br />
		<form id="formTime" class="formp">		
			<div>
				<div class="col-md-12 col-sm-12 col-lg-12">
					<br />
					<p><b>Por favor ingrese el tiempo en segundos</b></p>
				</div>
				<div class="col-md-5 col-sm-5 col-lg-5">
					<input class="form-control"	type="text" id="tiempo" value="60">
					<p id="error"></p>
				</div>
			</div>
			<div>
				<div class="col-md-12 col-sm-12 col-lg-12">
					<p><b>Por favor ingrese el nivel de significancia</b></p>
				</div>
				<div class="col-md-5 col-sm-5 col-lg-5">
					<select id="significancia" class="form-control">
						<option value="0.01">0,010</option>
						<option value="0.05">0,050</option>
						<option value="0.10">0,100</option>
					</select>
				</div>
				<div class="col-md-5 col-sm-5 col-lg-5">
					<button id="button" class="btn btn-primary" type="submit">Aceptar</button>
				</div>
			</div>
			
		</form>
		
	</div>

	<br /><br />
@endsection

@section('javascript')
    <script src="{{ asset('js/main.js') }}"></script>
@endsection

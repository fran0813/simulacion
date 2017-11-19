<!DOCTYPE html>

<html lang="{{ app()->getLocale() }}">

	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">

		<title>@yield('title')</title>

		<!-- Bootstrap -->
		<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.min.css') }}" >
		{{-- Css --}}
    	<link rel="stylesheet" href="{{ asset('css/style.css') }}">
	</head>

	<body>

		@yield('pages')

		<!-- jQuery -->
	    <script src="{{ asset('jquery/jquery.min.js') }}"></script>
	    <!-- Bootstrap Core JavaScript -->
	    <script src="{{ asset('bootstrap/js/bootstrap.min.js') }}"></script>

	    @yield('javascript')	
	</body>

</html>
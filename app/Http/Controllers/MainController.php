<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Response;

class mainController extends Controller
{
    /**
    * Show the application dashboard.
   	*
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return view('index');
    }

    public function simulacion()
    {
    	$numMax = 3;    	
    	$rapFila = "";
    	$gral1Fila = "";
    	$gral2Fila = "";
    	$rapServ = "";
    	$gral1Serv = "";
    	$gral2Serv = "";

    	$tiempo0 = 0;

    	$fila = array();
    	$serv = array();

    	for ($i=0; $i < $numMax; $i++) { 
    		$numAleFila = (mt_rand(0, 4));
    		array_push($fila, $numAleFila);
    	};

    	for ($i=0; $i < $numMax; $i++) { 
    		$numAleServ = (mt_rand(0, 1));
    		array_push($serv, $numAleServ);
    	};

    	

        return Response::json(array('rapFila' => $fila[0],
									'gral1Fila' => $fila[1],
									'gral2Fila' => $fila[2],
									'rapServ' => $serv[0],
									'gral1Serv' => $serv[0],
									'gral2Serv' => $serv[0],
									'html' => $html ));
    }

    
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Operadora;

class OperadoraController extends Controller
{
	public function __construct()
    {
    	$this->middleware('cors');        
    }
    
	public function index(){
		$operadoras = Operadora::all();
		return response()->json($operadoras);		
	}
}

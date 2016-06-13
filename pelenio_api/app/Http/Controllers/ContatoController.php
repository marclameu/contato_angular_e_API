<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Contato;
use Illuminate\Support\Facades\Input;

class ContatoController extends Controller
{
	
    public function __construct()
    {
    	$this->middleware('cors');        
    }


    public function index()
    {
    	$contatos = Contato::all();        
    	return response()->json($contatos->toArray());
    }

    public function store(Request $request)
    {
    	Contato::create($request->all());
    	return response()->json(["Mensagem"=>"Criada com sucesso!"]);
    }

    public function show($id)
    {    	
        $contato = Contato::find($id);
        if(is_null($contato))
            return response()->json(["Mensagem" => "Registro não encontrado!"], 404);
        return response()->json($contato); 
    }

    public function update(Request $request)
    {        
    	$contato = new Contato();
        $contato->fill($request->all());
        $contato->save();
        return response()->json(["mensagem" => "Atualizada com sucesso!"]);         
    }

    public function destroy(Request $request)
    {
    	try {
    			$ids = $request->all();
    			Contato::destroy($ids);
    			 return response()->json(["mensagem" => "Registro(s) excluído(s) com sucesso!"], 200);
    	} catch (Exception $e) {
    			return response()->json(["mensagem" => "Nao foi possivel excluir o(s) registro(s)!"]);  	
    	}
    }  
}

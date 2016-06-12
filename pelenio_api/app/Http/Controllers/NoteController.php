<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Routing\Route;
use App\Note;

class NoteController extends Controller
{
    public function __construct(Route $route)
    {
    	//$this->middleware('cors');        
        $this->find($route);
    }

    public function find(Route $route)
    {
        $this->note = Note::find($route->getParameter('notes'));
    }

    public function index()
    {
    	$notes = Note::all();
    	return response()->json($notes->toArray());
    }

    public function store(Request $request)
    {
    	Note::create($request->all());
    	return response()->json(["Mensagem"=>"Criada com sucesso!"]);
    }

    public function show($id)
    {
        $this->note = Note::find($id);
        return response()->json($this->note); 
    }

    public function update(Request $request)
    {        
        $this->note->fill($request->all());
        $this->note->save();
        return response()->json(["mensagem" => "Atualizada com sucesso!"]);         
    }

    public function destroy($id)
    {
        Note::where('id',$id)->delete();
        return response()->json(["mensagem" => "Nota excluída com sucesso!"]);         
    }    
}

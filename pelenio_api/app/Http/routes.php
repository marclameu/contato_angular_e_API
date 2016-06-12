<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::get('/', function () {
    return view('welcome');
});

/*
Route::group(['middleware' => ['api']], function () {
    Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    Route::post('authenticate', 'AuthenticateController@authenticate');
});*/


Route::group(['middleware' => ['api','cors'],'prefix' => 'api'], function () {	
	//Route::resource('contato', 'ContatoController');
    Route::get('operadora', 'OperadoraController@index'); 	
    Route::post('register', 'AuthenticateController@register');
    Route::post('login', 'AuthenticateController@login');
    Route::group(['middleware' => 'jwt-auth'], function () {
    	Route::get('get_user_details', 'AuthenticateController@get_user_details');
    });
});


Route::group(['middleware' => ['web']], function () {  
	Route::resource('notes', 'NoteController');     
    Route::get('contato', 'ContatoController@index'); 
    Route::get('contato/{id}', 'ContatoController@show'); 
    Route::post('contato', 'ContatoController@store');
    Route::post('contato/delete', 'ContatoController@destroy'); 
});



//Route::resource('notes', 'NoteController');
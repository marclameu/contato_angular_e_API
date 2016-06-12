<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuthServiceProvider;
use Illuminate\Support\Facades\Input;

class AuthenticateController extends Controller
{   

    /*
    public function __construct()
    {
        $this->middleware('cors');                
    } 
    */

   public function register(Request $request)
    {        
        $input = $request->all();
        //dd($input);
        $input['password'] = \Hash::make($input['password']);
        User::create($input);
        return response()->json(['result'=>true]);
    }
    
    public function login(Request $request)
    {
        $input = $request->all();        
        dd($input);
        if (!$token = JWTAuth::attempt($input)) {
            return response()->json(['result' => 'wrong email or password.']);
        }
            return response()->json(['result' => $token]);
    }
    
    public function get_user_details(Request $request)
    {
        $input = $request->all();
        $user = JWTAuth::toUser($input['token']);
        return response()->json(['result' => $user]);
    }
}

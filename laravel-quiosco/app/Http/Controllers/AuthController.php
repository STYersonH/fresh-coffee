<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegistroRequest $request) // asi ira a RegistroRequest a buscar las reglas de validacion
    {
        // validar el registro
        $data = $request->validate(); // se comunica con el metodo rules()
    }

    public function login(Request $request)
    {
    }

    public function logout(Request $request)
    {
    }
}

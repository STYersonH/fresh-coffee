<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegistroRequest $request) // asi ira a RegistroRequest a buscar las reglas de validacion
    {
        // validar el registro : para manejar los errores
        $data = $request->validated(); // se comunica con el metodo rules()

        // crear usuario
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        // Retornar una respuesta
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user,
        ];
    }

    public function login(Request $request)
    {
    }

    public function logout(Request $request)
    {
    }
}

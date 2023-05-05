<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistroRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        // revisar el password
        if (!Auth::attempt($data)) {
            return response([
                // al declararlo de esta forma se devolvera como parte del objeto de errores para password
                'errors' => ['password' => ['El email o el password son incorrectos']],
                // 'errors' => ['El email o el password son incorrectos'],
            ], 422); // 422 por que el status por defecto es 200(correcto) y 422(es para errores)
        }

        // autenticar al usuario
        $user = Auth::user(); // retornara informacion del usuario

        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user,
        ];
    }

    public function logout(Request $request)
    {
    }
}

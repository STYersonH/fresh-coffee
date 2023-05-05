<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ProductoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// -- las rutas en middleware requeriran que el usuario este autenticado para acceder a esa info
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// -- Rutas que no requieren que el ususario se autentique

Route::get('/categorias', [CategoriaController::class, 'index']);

// para trabajar con API's Laravel tiene metodos como
// --------------------------------------------------
// ya no necesito especificar index, ya es automatico
Route::apiResource('/categorias', CategoriaController::class); // podemos eliminar los nombres de los controladores
Route::apiResource('/productos', ProductoController::class);

// Autenticacion
Route::post('/registro', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

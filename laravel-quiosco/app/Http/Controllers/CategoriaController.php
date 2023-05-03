<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriaCollection;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function index()
    {
        // dd('Desde API/categoriaController');

        // devolvera un JSON con todas las categorias de la tabla Categorias
        // return response()->json(['categorias' => Categoria::all()]); // -- forma 1

        return new CategoriaCollection(Categoria::all());
    }
}

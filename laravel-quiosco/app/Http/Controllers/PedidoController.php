<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use App\Models\PedidoProducto;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // -- almacenar una orden
        $pedido = new Pedido();
        $pedido->user_id = Auth::user()->id;
        $pedido->total = $request->total; // obtenemos el total del frontend
        $pedido->save();    // almacenar en la BD

        // -- Obteer el ID del producto
        $id = $pedido->id;

        // -- Obtener los productos
        $productos = $request->productos;

        // -- Formatear un arreglo con los Id's y cantidades
        $pedido_producto = [];

        foreach ($productos as $producto) {
            $pedido_producto[] = [
                'pedido_id' => $id,
                'producto_id' => $producto['id'],
                'cantidad' => $producto['cantidad'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
        }

        // -- Almacenar en la BD
        PedidoProducto::insert($pedido_producto); // me permite insertar un arreglo

        return [
            'message' => 'Pedido realizado correctamente, estara listo en unos minutos',
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(Pedido $pedido)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pedido $pedido)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pedido $pedido)
    {
    }
}

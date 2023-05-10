<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // al llamarse a esta funcion se devolvera la coleccion de productos asociados a ese pedido
    public function productos()
    {
        // el segundo parametro se refiere a la tabla pivote de donde se tomara la clase Producto
        return $this->belongsToMany(Producto::class, 'pedido_productos')->withPivot('cantidad');
        // withPivot permite agregar una columna de esa tabla
    }
}

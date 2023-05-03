<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

// tenemos el control total sobre que retornare en mis respuestas de tipo JSON
class CategoriaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            // 'nombre_id' => $this->id.'-'.$this->nombre,
            'icono' => $this->icono,
        ];
    }
}

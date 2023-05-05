<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // false
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'email', 'exists:users,email'], // ver en users si ese email existe
            'password' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'El email es obligatorio',
            'email.email' => 'El email no es valido',
            'email.exists' => 'Esa cuenta no existe',
            'password' => 'El password es obligatorio',
        ];
    }
}

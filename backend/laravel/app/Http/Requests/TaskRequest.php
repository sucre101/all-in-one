<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'user_id' => ['required', 'integer'],
            'title' => ['required'],
            'description' => ['string'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

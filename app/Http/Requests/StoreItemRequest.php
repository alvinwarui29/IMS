<?php

namespace App\Http\Requests;

use App\Models\Item;
use Illuminate\Foundation\Http\FormRequest;

class StoreItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" =>["required"],
            "description"=> ["required"],
            "image_path"=>["nullable"],
            "quantity"=>["required"],
            "cost_price"=>["required"],
            "selling_price"=>["required"],
            "category_id"=>["nullable"]
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=>$this->id,
            "name"=> $this->name,
            "description"=> $this->description,
            "image_path"=>$this->image_path ? Storage::url($this->image_path): '',
            "quantity"=> $this->quantity,
            "cost_price"=> $this->cost_price,
            "selling_price"=> $this->selling_price,
            "createdBy"=>new UserResource($this->createdBy)
//? Storage::url($this->image_path): ''
        ];
    }
}

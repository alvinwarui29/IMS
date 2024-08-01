<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{

    use HasFactory;
    protected $fillable = ['name','description','image_path','quantity','cost_price','selling_price','created_by','updated_by'];
}

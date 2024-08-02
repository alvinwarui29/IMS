<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
        $total_items = Item::query()->count();
        $total_quantity = Item::query()->sum('quantity');
        // dd($total_items);
        return inertia('Dashboard', [
            'totalItems' => $total_items,
            'totalQuantity' => $total_quantity,
        ]);
    }
}

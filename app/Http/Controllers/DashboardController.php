<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
        $total_items = Item::query()->count();
        $total_quantity = Item::query()->sum('quantity');
        $cost = Item::query()->sum('cost_price');
        $selling = Item::query()->sum('selling_price');
        $total_profit = $selling - $cost;
        // dd($total_items);
        return inertia('Dashboard', [
            'totalItems' => $total_items,
            'totalQuantity' => $total_quantity,
            'totalProfit' => $total_profit,
        ]);
    }
}

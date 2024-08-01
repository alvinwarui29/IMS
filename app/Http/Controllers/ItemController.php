<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Http\Resources\ItemResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Item::query();

        $sortField = request("sort_field","created_at");
        $sortDirection = request("sort_direction","desc");

        if(request("name")){
            $query->where("name","like","%".request("name")."%");
        }

        $items = $query->orderBy($sortField,$sortDirection)->paginate(10);
        return inertia("Item/Index",[
           "items" => ItemResource::collection($items),
           "queryParams"=> request()->query() ?:null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia ("Item/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {
        $data = $request->validated();
        $image= $data['image_path']?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if($image){
            $data['image_path']= $image->store('project/'.Str::random(),'public');
        }
        Item::create($data);

        return to_route("item.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        return inertia ('Item/Edit',[
            "item"=> new ItemResource($item)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, Item $item)
    {
        $data =$request->validated();

        $item->update($data);
        return to_route('item.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        $item->delete();
        return to_route('item.index');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function store(Request $request)
    {
        Location::create($request->all());
        return response()->json(['status' => 'ok']);
    }

    public function index()
    {
        return Location::all();
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('locations', 'public');
            $data['image'] = $path;
        }

        Location::create($data);

        return response()->json(['status' => 'ok']);
    }

    public function index()
    {
        return Location::all();
    }
}

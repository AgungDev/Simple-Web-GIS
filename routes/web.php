<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocationController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', fn() => view('map'));

Route::post('/locations', [LocationController::class, 'store']);
Route::get('/locations', [LocationController::class, 'index']);
Route::delete('/locations/{id}', function ($id) {
    \App\Models\Location::find($id)->delete();
    return response()->json(['ok']);
});


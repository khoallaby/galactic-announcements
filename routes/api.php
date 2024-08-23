<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


/*
 * api endpoint for getting all the announcements, from the json file
 */
Route::get('/announcements', function (Request $request) {
    # gets json file from /storage/app/
    $json = Storage::disk('local')->get('announcements.json');
    # parses json -> array
    $array = json_decode($json, true);

    return response()->json($array);
});

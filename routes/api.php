<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
#use Illuminate\Support\Collection;
#use Illuminate\Pagination\LengthAwarePaginator;


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


    # working pagination logic
    /*
    $currentPage = $page ?? request('page', 1);
    $perPage = 10;

    # convert data to Collection to be able to paginate
    $collection = new Collection($array);

    $paginatedData = new LengthAwarePaginator(
        $collection->forPage($currentPage, $perPage),
        $collection->count(),
        $perPage,
        $currentPage,
        ['path' => url('/announcements')]
    );

    return response()->json($paginatedData)->setEncodingOptions(JSON_NUMERIC_CHECK);
    */



    return response()->json($array);
});

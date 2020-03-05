<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => ['auth']], function(){

    Route::get('/cabinet', 'UserController@cabinet')->name('personal_cabinet');

    Route::post('/report/edit', 'ReportController@update')->name('report_update');
    Route::post('/report/create', 'ReportController@store')->name('report_create');
    Route::post('/report/delete', 'ReportController@destroy')->name('report_remove');

});




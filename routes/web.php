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

Route::group(['middleware' => ['locale']], function () {

    Route::get('/lang/{key}', function ($key) {
        session()->put('locale', $key);
        return redirect()->back();
    });

    Auth::routes();

    Route::get('/', 'HomeController@index')->name('home');

    Route::prefix('about')->group(function (){
      Route::get('/aboutus', 'SingleAboutController@index')->name('about');
      Route::get('/topics', 'SingleTopicController@index')->name('topics');
    });

    Route::get('/contacts', 'SingleContactController@index')->name('contacts');
    Route::get('/gallery', 'SingleGalleryController@index')->name('gallery');


    Route::group(['middleware' => ['auth']], function () {
        Route::get('/cabinet', 'UserController@cabinet')->name('personal_cabinet');
        Route::post('/report/edit', 'ReportController@update')->name('report_update');
        Route::post('/report/create', 'ReportController@store')->name('report_create');
        Route::post('/report/delete', 'ReportController@destroy')->name('report_remove');
    });

});


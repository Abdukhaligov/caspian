<?php

Route::group(['middleware' => ['locale']], function () {

  Route::get('/lang/{key}', function ($key) {
    session()->put('locale', $key);
    return redirect()->back();
  });

  Auth::routes();

  Route::get('/', 'PageController@home')->name('home');

  Route::get('/contacts', 'PageController@contacts')->name('contacts');

  Route::prefix('about')->group(function () {
    Route::get('/about-us', 'PageController@aboutUs')->name('about');
    Route::get('/topics', 'PageController@topics')->name('topics');
    Route::get('/committee', 'PageController@committee')->name('committee');
    Route::get('/speakers', 'PageController@speakers')->name('speakers');
    Route::get('/speakers/{id}', 'UserController@index');
    Route::get('/program', 'PageController@program')->name('program');
  });

  Route::prefix('media')->group(function () {
    Route::get('/gallery', 'PageController@gallery')->name('gallery');
    Route::get('/news', 'PageController@news')->name('news');
    Route::get('/abstract-book', 'PageController@abstractBook')->name('abstractBook');
    Route::get('/news/{id}', 'NewsController@index');
  });

  Route::group(['middleware' => ['auth']], function () {
    Route::get('/cabinet', 'PageController@cabinet')->name('cabinet');
    Route::post('/report/edit', 'ReportController@update')->name('report_update');
    Route::post('/report/create', 'ReportController@store')->name('report_create');
    Route::post('/report/delete', 'ReportController@destroy')->name('report_remove');
  });

});


<?php

Route::group(['middleware' => ['locale']], function () {

  Route::get('/lang/{key}', function ($key) {
    session()->put('locale', $key);
    return redirect()->back();
  });

  Auth::routes();

  Route::get('/', 'SingleHomeController@index')->name('home');

  Route::get('/contacts', 'SingleContactController@index')->name('contacts');

  Route::prefix('about')->group(function () {
    Route::get('/about-us', 'SingleAboutController@index')->name('about');
    Route::get('/topics', 'SingleTopicController@index')->name('topics');
    Route::get('/committee', 'SingleCommitteeController@index')->name('committee');
    Route::get('/presenters', 'SinglePresenterController@index')->name('presenters');
  });

  Route::prefix('media')->group(function () {
    Route::get('/gallery', 'SingleGalleryController@index')->name('gallery');
    Route::get('/news', 'SingleNewsController@index')->name('news');
  });

  Route::group(['middleware' => ['auth']], function () {
    Route::get('/cabinet', 'SingleCabinetController@index')->name('cabinet');
    Route::post('/report/edit', 'ReportController@update')->name('report_update');
    Route::post('/report/create', 'ReportController@store')->name('report_create');
    Route::post('/report/delete', 'ReportController@destroy')->name('report_remove');
  });

});


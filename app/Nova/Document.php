<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Http\Requests\NovaRequest;

class Document extends Resource {

  public static $model = 'App\Models\Document';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id',];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        BelongsTo::make('User'),
        BelongsTo::make('Voucher'),
        File::make('File','path')
            ->disk('vouchers')
            ->size('w-1/2'),
    ];
  }

}

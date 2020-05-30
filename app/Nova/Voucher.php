<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;

class Voucher extends Resource {

  public static $model = 'App\Models\Voucher';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        FilemanagerField::make('Template')
            ->folder('vouchers/templates')
            ->hideCreateFolderButton(),

        BelongsTo::make('Event'),


        BelongsTo::make('Membership'),

    ];
  }


}

<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

class Voucher extends Resource {

  public static $model = 'App\Models\Voucher';
  public static $group = 'Resources';
  public static $title = 'name';
  public static $search = ['id'];

  public function filters(Request $request)
  {
    return [
        new Filters\ReportEvent(),
    ];
  }


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Name'),
        FilemanagerField::make('Template')
            ->folder('vouchers/templates')
            ->hideCreateFolderButton(),

        BelongsTo::make('Event')
            ->withMeta([
                'value' => \App\Models\Event::activeEvent()->id,
                'belongsToId' => \App\Models\Event::activeEvent()->id
            ])
            ->rules('required'),

        BelongsTo::make('Membership')
            ->nullable(),

        Boolean::make('Uniq'),
    ];
  }


}

<?php

namespace App\Nova;

use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\ID;


class Speaker extends Resource {

  public static $model = 'App\Models\Speaker';
  public static $group = 'Resources';
  public static $search = ['id'];

  public function title() {
    return \App\User::find($this->user_id)->name;
  }


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        FilemanagerField::make('Photo')
            ->folder('speakers')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->hideDeleteFileButton(),
        BelongsTo::make('User'),

        NovaTinyMCE::make('Description'),
        BelongsToMany::make('Events'),
    ];
  }

}

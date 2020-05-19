<?php

namespace App\Nova;

use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use MyCLabs\Enum\Enum;
use Whitecube\NovaFlexibleContent\Flexible;

class Member extends Resource {

  public static $model = 'App\Models\Member';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),

        FilemanagerField::make('Photo')
            ->folder('members')
            ->displayAsImage()
            ->hideCreateFolderButton()
            ->hideDeleteFileButton(),

        Select::make('Rank')->options([
            '1' => '1',
            '2' => '2',
            '3' => '3',
        ])->sortable(),

        BelongsTo::make('User'),
        NovaTinyMCE::make('Description'),


    ];
  }

}

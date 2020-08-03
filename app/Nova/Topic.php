<?php

namespace App\Nova;

use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;

class Topic extends Resource {

  public static $model = 'App\Models\Topic';
  public static $group = 'Resources';
  public static $title = 'name';
  public static $search = ['id'];

  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('Name')
            ->sortable()
            ->size('w-1/2'),
        Select::make('Parent Topic','parent_id')
            ->options(function (){
                $result = array();
                $topics = \App\Models\Topic::where('parent_id', '=', null)->pluck('name', 'id');
                foreach ($topics as $id => $topic){
                    $result[$id] = $topic;
                    $subtopics = \App\Models\Topic::where('parent_id', '=', $id)->pluck('name', 'id');
                    foreach ($subtopics as $keySub => $topicSub){
                        $result[$keySub] = " - ".$topicSub;
                    }
                }
                return $result;
            })
            ->nullable(true)
            ->size('w-1/2'),

        NovaTinyMCE::make('Description'),

        BelongsTo::make('Category'),

        HasMany::make('Topics', 'children'),
        HasMany::make('Reports'),
    ];
  }

}

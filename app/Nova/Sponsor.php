<?php

namespace App\Nova;

use Ebess\AdvancedNovaMediaLibrary\Fields\Media;
use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Whitecube\NovaFlexibleContent\Flexible;

class Sponsor extends Resource
{
  public static $model = 'App\Models\Sponsor';
  public static $group = 'Resources';
  public static $title = 'id';
  public static $search = ['id'];


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),

        Media::make('Avatar', 'avatars')
            ->size('w-1/4')
            ->rules('required'),


        NovaTinyMCE::make('Description')
            ->options([
                'plugins' => [
                    'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                ],
                'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                'use_lfm' => true
            ])
            ->size('w-3/4'),

        BelongsTo::make('Degree')
            ->sortable()
            ->nullable()
            ->size('w-1/4'),
        Text::make('Name')
            ->sortable()
            ->size('w-1/4')
            ->rules('required'),
        Text::make('Job Title', 'job_title')
            ->sortable()
            ->size('w-1/4'),
        Text::make('Company')
            ->sortable()
            ->hideFromIndex()
            ->size('w-1/4'),



        Flexible::make('Social Networks', 'social_networks')
            ->addLayout('Social Network', 'data', [
                Select::make('Network', 'network')->options([
                    'fa-facebook-f' => 'Facebook',
                    'fa-twitter' => 'Twitter',
                    'fa-behance' => 'Behance',
                    'fa-linkedin-in' => 'LinkedIn',
                    'fa-youtube' => 'YouTube',])
                    ->rules('required')
                    ->size('w-1/2'),
                Text::make('Link', 'link')
                    ->rules('required')
                    ->size('w-1/2'),
            ])
            ->button('Add social network')
            ->hideFromDetail()
            ->collapsed(),
    ];
  }
}

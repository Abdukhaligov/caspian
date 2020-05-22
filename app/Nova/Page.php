<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Textarea;
use BayAreaWebPro\NovaFieldCkEditor\CkEditor;
use BayAreaWebPro\NovaFieldCkEditor\FeaturedMedia;

class Page extends Resource {

  public static $model = \App\Page::class;
  public static $title = 'title';
  public static $group = 'CMS';
  public static $search = ['title', 'content'];
  public static $displayInNavigation = false;


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),
        Text::make('title')
            ->rules('required')
            ->stacked(),
        Text::make('slug')
            ->rules('required')
            ->stacked(),
        CkEditor::make('content')
            ->rules('required')
            ->mediaBrowser()
            ->linkBrowser()
            ->snippets([
                ['name' => 'Cool Snippet', 'html' => '<h1>Snippet1</h1>'],
                ['name' => 'Cool Snippet', 'html' => '<h1>Snippet2</h1>'],
                ['name' => 'Cool Snippet', 'html' => '<h1>Snippet3</h1>'],
                ['name' => 'Cool Snippet', 'html' => '<h1>Snippet4</h1>'],
            ])
            ->hideFromIndex()
            ->stacked(),
        CkEditor::make('excerpt')
            ->rules('required')
            //->mediaBrowser()
            //->linkBrowser()
            ->hideFromIndex()
            ->stacked(),
        FeaturedMedia::make('Image', 'media_id')
            ->rules('nullable')
            ->stacked(),

        Text::make('Meta Title'),
        Textarea::make('Meta Description'),
        Select::make('Meta Robots')
            ->rules('required')
            ->displayUsingLabels()
            ->options([
                'index,follow' => 'Index, Follow',
                'index,nofollow' => 'Index, NoFollow',
                'noindex,follow' => 'NoIndex, Follow',
                'noindex,nofollow' => 'NoIndex, NoFollow',
            ]),
    ];
  }


}

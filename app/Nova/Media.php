<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use BayAreaWebPro\NovaFieldCkEditor\MediaUpload;

class Media extends Resource {

  public static $model = \App\Media::class;
  public static $title = 'Media';
  public static $group = 'CMS';
  public static $search = ['file'];
  public static $displayInNavigation = false;


  public function fields(Request $request) {
    return [
        ID::make()->sortable(),

        MediaUpload::make('File', 'media')
            ->rules('required', 'mimes:jpg,jpeg,png,gif', 'max:5000')
            ->help('5MB Max FileSize.')
            ->maxWidth(800),

        Text::make('File')
            ->displayUsing(fn($file) => Str::limit($file, 75))
            ->exceptOnForms()
            ->sortable(),

        Text::make('Hash')
            ->onlyOnDetail()
            ->sortable(),

        Text::make('Mime')
            ->exceptOnForms()
            ->sortable(),

        Text::make('Size')
            ->exceptOnForms()
            ->sortable(),

        Text::make('Width')
            ->exceptOnForms()
            ->sortable(),

        Text::make('Height')
            ->exceptOnForms()
            ->sortable(),
    ];
  }


  public function subtitle() {
    return $this->resource->mime ?? '-';
  }


  public static function singularLabel() {
    return static::$title;
  }

  public static function label() {
    return static::$title;
  }

  public function authorizedToUpdate(Request $request) {
    return false;
  }
}
